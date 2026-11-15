import { Resend } from "resend";

/**
 * Hash Technical Scope Inquiry API Endpoint — Vercel Serverless Function
 *
 * Mapped to /api/contact. Accepts structured technical briefs from the
 * Engagement Scope Builder on https://hash.engineering.
 *
 * Server-Side Environment Variables:
 * - RESEND_API_KEY: Secret API key from https://resend.com
 * - CONTACT_FROM_EMAIL: Sender address on verified domain (e.g. "Hash Engineering <contact@hash.engineering>")
 * - CONTACT_TO_EMAIL: Destination inbox for lead routing (e.g. "contact@hash.engineering")
 */

const FROM = process.env.CONTACT_FROM_EMAIL || "Hash Engineering <contact@hash.engineering>";
const TO = process.env.CONTACT_TO_EMAIL || "contact@hash.engineering";

/**
 * Best-effort IP rate limiting. Prevents spam floods while preserving zero latency.
 */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_MAX;
}

/** Strips control characters (header-injection vectors), trims, caps length. */
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = new RegExp("[\u0000-\u001F\u007F]", "g");
const clean = (v, max) =>
  typeof v === "string" ? v.replace(CONTROL_CHARS, " ").trim().slice(0, max) : "";

/** Keeps newlines for message/context bodies while sanitizing control characters. */
// eslint-disable-next-line no-control-regex
const CONTROL_KEEP_NEWLINES = new RegExp("[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]", "g");
const cleanMultiline = (v, max) =>
  typeof v === "string" ? v.replace(CONTROL_KEEP_NEWLINES, " ").trim().slice(0, max) : "";

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });

  if (!process.env.RESEND_API_KEY) {
    console.error("[Hash API] RESEND_API_KEY is not configured on this deployment.");
    return res.status(500).json({
      error: "Email service is not configured yet. Please reach out to contact@hash.engineering directly.",
    });
  }

  const ip =
    req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (rateLimited(ip)) {
    return res.status(429).json({ error: "Too many inquiries submitted. Please wait a minute before retrying." });
  }

  // Parse JSON body defensively
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  if (typeof body !== "object" || body === null) body = {};

  // Honeypot: real users never fill hidden company field. Answer 200 silently to sink bots.
  if (clean(body.company, 100)) {
    const fakeId = `HASH-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    return res.status(200).json({ ok: true, id: fakeId });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 160);
  const tier = clean(body.tier || body.topic, 120) || "Architecture Audit & Blueprint";
  const timeline = clean(body.timeline, 80) || "Next 30 Days";
  const context = cleanMultiline(body.context || body.message, 5000);

  // Parse pillars (practice areas)
  let pillars = [];
  if (Array.isArray(body.pillars)) {
    pillars = body.pillars.map((p) => clean(p, 80)).filter(Boolean);
  } else if (typeof body.pillars === "string") {
    pillars = [clean(body.pillars, 80)];
  }
  if (!pillars.length) {
    pillars = ["AI & Agentic Systems"];
  }

  // Input Validation
  const errors = [];
  if (name.length < 2) errors.push("Valid name (minimum 2 characters)");
  if (!EMAIL_RE.test(email)) errors.push("Valid corporate or work email address");
  if (context.length < 10) errors.push("Architecture context / brief (minimum 10 characters)");

  if (errors.length) {
    return res.status(400).json({
      error: `Please correct the following fields: ${errors.join(", ")}.`,
    });
  }

  const receiptId = `HASH-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const pillarsText = pillars.map((p) => `• ${p}`).join("\n");
  const pillarsHtml = pillars
    .map(
      (p) =>
        `<span style="display:inline-block;padding:3px 8px;margin:2px 4px 2px 0;background:#151A22;border:1px solid rgba(255,255,255,0.12);border-radius:999px;font-family:ui-monospace,monospace;font-size:11px;color:#9DA7B3;">${escapeHtml(p)}</span>`
    )
    .join(" ");

  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `[${receiptId}] Technical Discovery Brief — ${tier} — ${name}`,
      text: [
        `HASH TECHNICAL SCOPE INQUIRY — ${receiptId}`,
        "================================================================",
        `Client Name:     ${name}`,
        `Work Email:      ${email}`,
        `Engagement Tier: ${tier}`,
        `Target Timeline: ${timeline}`,
        "",
        "Selected Practice Areas:",
        pillarsText,
        "",
        "System Architecture Context & Constraints:",
        "----------------------------------------------------------------",
        context,
        "----------------------------------------------------------------",
        `Submitted From: ${ip}`,
        `Timestamp:      ${new Date().toISOString()}`,
        "https://hash.engineering",
      ].join("\n"),
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <title>Hash Inquiry ${receiptId}</title>
        </head>
        <body style="margin:0;padding:24px;background:#08090B;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#F0F2F5;">
          <div style="max-width:600px;margin:0 auto;background:#0E1117;border:1px solid rgba(255,255,255,0.12);border-radius:12px;overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,0.6);">
            
            <!-- Header -->
            <div style="padding:20px 24px;background:#151A22;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;">
              <div>
                <span style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.12em;color:#1E6BFF;font-weight:600;">HASH // TECHNICAL BRIEF</span>
                <h1 style="margin:4px 0 0;font-size:18px;font-weight:600;color:#F0F2F5;letter-spacing:-0.02em;">${escapeHtml(tier)}</h1>
              </div>
              <div style="text-align:right;">
                <span style="display:inline-block;padding:4px 10px;background:rgba(30,107,255,0.15);border:1px solid rgba(30,107,255,0.4);border-radius:6px;font-family:ui-monospace,monospace;font-size:12px;color:#1E6BFF;font-weight:600;">
                  ${receiptId}
                </span>
              </div>
            </div>

            <!-- Parameters Grid -->
            <div style="padding:24px;">
              <table style="width:100%;border-collapse:collapse;font-size:13px;line-height:1.6;margin-bottom:20px;">
                <tr>
                  <td style="width:140px;padding:6px 0;color:#9DA7B3;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.04em;">CLIENT NAME</td>
                  <td style="padding:6px 0;color:#F0F2F5;font-weight:600;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#9DA7B3;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.04em;">WORK EMAIL</td>
                  <td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#1E6BFF;text-decoration:none;">${escapeHtml(email)}</a></td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#9DA7B3;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.04em;">TIMELINE</td>
                  <td style="padding:6px 0;color:#F0F2F5;">${escapeHtml(timeline)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#9DA7B3;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.04em;vertical-align:top;">PRACTICE AREAS</td>
                  <td style="padding:6px 0;">${pillarsHtml}</td>
                </tr>
              </table>

              <!-- Architecture Context Box -->
              <div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);">
                <div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.08em;color:#1E6BFF;margin-bottom:10px;text-transform:uppercase;">
                  SYSTEM ARCHITECTURE CONTEXT &amp; CONSTRAINTS
                </div>
                <div style="background:#08090B;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px;font-family:ui-monospace,monospace;font-size:13px;line-height:1.6;color:#D1D7DF;white-space:pre-wrap;word-break:break-word;">
${escapeHtml(context)}
                </div>
              </div>

              <!-- Footer -->
              <div style="margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);font-size:11px;color:#5E6875;font-family:ui-monospace,monospace;display:flex;justify-content:space-between;">
                <span>Origin: ${ip}</span>
                <span>Hash Systems Consulting</span>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("[Hash API] Resend email dispatch failed:", error);
      return res.status(502).json({
        error: "Email delivery service rejected the transmission. Please contact contact@hash.engineering directly.",
      });
    }

    console.log(`[Hash API] Inquiry ${receiptId} dispatched via Resend (${data?.id})`);
    return res.status(200).json({ ok: true, id: receiptId, resendId: data?.id });
  } catch (err) {
    console.error("[Hash API] Unhandled server error in contact handler:", err);
    return res.status(500).json({
      error: "Internal server error processing technical scope. Please email contact@hash.engineering directly.",
    });
  }
}
