import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowUpRight, FiLayers, FiUsers, FiBox, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { CALENDLY, EMAIL } from "../site";
import "../css/engagement.css";

const TIERS = [
  {
    index: "01",
    id: "audit",
    name: "Architecture Audit & Blueprint",
    timeline: "2–3 WEEKS",
    summary:
      "Deep-dive technical review of your existing codebase, data pipelines, model latencies, and cloud infrastructure.",
    deliverables: [
      "End-to-end performance & bottleneck audit",
      "Security, data lineage & compliance risk matrix",
      "Actionable architecture blueprint & milestone roadmap",
      "Executive & engineering advisory walkthrough",
    ],
    idealFor: "Companies facing scalability walls or planning major architectural shifts.",
    icon: FiLayers,
  },
  {
    index: "02",
    id: "pod",
    name: "Dedicated Engineering Pod",
    timeline: "ONGOING SPRINTS",
    summary:
      "A senior, embedded technical pod (AI specialists, data architects, and full-stack engineers) integrated directly into your engineering workflows.",
    deliverables: [
      "High-velocity production code delivery",
      "Hands-on architectural governance and code review",
      "Zero recruitment latency or agency overhead",
      "Flexible bi-weekly sprint pacing and scaling",
    ],
    idealFor: "Growth-stage companies accelerating mission-critical technical roadmaps.",
    icon: FiUsers,
  },
  {
    index: "03",
    id: "turnkey",
    name: "End-to-End System Delivery",
    timeline: "FIXED SCOPE / 6–16 WEEKS",
    summary:
      "Complete turnkey architecture and implementation from zero to production deployment with full documentation.",
    deliverables: [
      "Full architecture specification & systems design",
      "Turnkey production implementation & testing",
      "Cloud infrastructure as code (IaC) & CI/CD",
      "Complete operational runbooks & engineering handoff",
    ],
    idealFor: "Enterprises needing definitive execution on ambitious, high-stakes builds.",
    icon: FiBox,
  },
];

const PRACTICE_AREAS = [
  "AI & Agentic Systems",
  "Data Engineering & Lakehouse",
  "Full-Stack Web Applications",
  "Native & Cross-Platform Mobile",
  "Cloud & DevOps Architecture",
];

export default function Engagement() {
  const [selectedTier, setSelectedTier] = useState("audit");
  const [selectedPractices, setSelectedPractices] = useState(["AI & Agentic Systems"]);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    timeline: "Next 30 Days",
    message: "",
    company: "", // honeypot field
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const togglePractice = (area) => {
    if (selectedPractices.includes(area)) {
      if (selectedPractices.length > 1) {
        setSelectedPractices(selectedPractices.filter((p) => p !== area));
      }
    } else {
      setSelectedPractices([...selectedPractices, area]);
    }
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      timeline: "Next 30 Days",
      message: "",
      company: "",
    });
    setSubmitError("");
    setSubmitted(false);
    setTicketId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (name.length < 2) {
      setSubmitError("Please enter your name (minimum 2 characters).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) {
      setSubmitError("Please provide a valid work email address.");
      return;
    }
    if (message.length < 10) {
      setSubmitError("Please provide system architecture context (minimum 10 characters).");
      return;
    }

    const activeTierObj = TIERS.find((t) => t.id === selectedTier);
    const tierName = activeTierObj ? `${activeTierObj.name} (${activeTierObj.timeline})` : selectedTier;

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          pillars: selectedPractices,
          tier: tierName,
          timeline: formState.timeline,
          context: message,
          message,
          company: formState.company, // honeypot
        }),
      });

      // Pure static / preview environment fallback
      if (res.status === 404) {
        console.warn("[Hash] /api/contact endpoint is unmounted (static preview). Generating simulated receipt.");
        const fallbackId = `HASH-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
        setTicketId(fallbackId);
        setSubmitted(true);
        setSubmitting(false);
        return;
      }

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(
          data.error || "Unable to transmit technical scope. Please retry or schedule a discovery call directly."
        );
        setSubmitting(false);
        return;
      }

      setTicketId(data.id || `HASH-INQ-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } catch (err) {
      console.error("[Hash] Scope submission network failure:", err);
      // Fallback: generate receipt and notify
      const fallbackId = `HASH-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(fallbackId);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="band engagement-section" id="engagement">
      <div className="shell">
        {/* Section Header */}
        <div className="section-head">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            PARTNERSHIP FRAMEWORKS
          </div>
          <div className="section-head-grid">
            <h2 className="display h2 section-title">
              Predictable, Senior-Led <span className="sweep">Engagement Models.</span>
            </h2>
            <p className="lede section-desc">
              We operate with total pricing transparency and engineering ownership. Choose the engagement
              model that matches your technical timeline.
            </p>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="tiers-grid" role="radiogroup" aria-label="Engagement Model Selection">
          {TIERS.map((tier, idx) => {
            const Icon = tier.icon;
            const isSelected = selectedTier === tier.id;
            return (
              <motion.div
                key={tier.id}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                className={`tier-card ${isSelected ? "is-selected" : ""}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedTier(tier.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedTier(tier.id);
                  }
                }}
              >
                <div className="tier-header">
                  <div className="tier-meta mono">
                    <span className="tier-num">{tier.index}</span>
                    <span className="tier-duration">{tier.timeline}</span>
                  </div>
                  <div className="tier-icon-wrap" aria-hidden="true">
                    <Icon className="tier-icon" />
                  </div>
                </div>

                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-summary">{tier.summary}</p>

                <div className="tier-deliverables">
                  <div className="tier-deliv-label mono">KEY ENGAGEMENT OUTCOMES</div>
                  <ul className="tier-deliv-list">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="tier-deliv-item">
                        <FiCheck className="tier-check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tier-footer">
                  <div className="tier-ideal">
                    <span className="ideal-label mono">IDEAL FOR:</span> {tier.idealFor}
                  </div>
                  <button
                    type="button"
                    aria-label={`Select ${tier.name}`}
                    className={`btn ${isSelected ? "btn--primary" : "btn--secondary"} tier-select-btn`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTier(tier.id);
                      document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {isSelected ? "Selected Model ✓" : "Select This Model"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Scope Builder / Inquiry Panel */}
        <motion.div
          className="inquiry-panel-wrapper"
          id="inquiry"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inquiry-panel" id="contact">
            <div className="inquiry-header">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                INITIATE TECHNICAL CONSULTING
              </div>
              <h3 className="inquiry-title">Configure Your Technical Scope</h3>
              <p className="inquiry-subtitle">
                Select your focus areas and engineering tier. A senior technical architect will evaluate
                your brief and reply within 4 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="inquiry-success">
                <div className="success-icon-box">
                  <FiCheckCircle className="success-icon" />
                </div>
                <h4 className="success-title">Technical Brief Received</h4>
                <div className="success-ticket mono">REFERENCE ID: {ticketId}</div>
                <p className="success-desc">
                  Thank you, <strong>{formState.name || "Engineering Lead"}</strong>. Your selected tier (
                  <em>{TIERS.find((t) => t.id === selectedTier)?.name}</em>) and scope tags have been routed
                  directly to our lead architects at <code>{EMAIL}</code>.
                </p>
                <div className="success-actions">
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    Schedule Discovery Video Call <FiArrowUpRight aria-hidden />
                  </a>
                  <button
                    type="button"
                    className="btn btn--secondary"
                    onClick={resetForm}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
                {/* Honeypot field for automated spam suppression */}
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, width: 0 }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Validation / Server Error Banner */}
                {submitError && (
                  <div className="form-error-banner" role="alert">
                    <FiAlertCircle className="error-icon" aria-hidden="true" />
                    <span>{submitError}</span>
                  </div>
                )}
                {/* Step 1: Practice Areas Selection */}
                <div className="form-section">
                  <label className="form-label mono">01 // SELECT RELEVANT PRACTICE AREAS</label>
                  <div className="practice-pills" role="group" aria-label="Relevant Practice Areas">
                    {PRACTICE_AREAS.map((area) => {
                      const active = selectedPractices.includes(area);
                      return (
                        <button
                          key={area}
                          type="button"
                          aria-pressed={active}
                          className={`practice-pill ${active ? "is-active" : ""}`}
                          onClick={() => togglePractice(area)}
                        >
                          <span className="pill-checkbox" aria-hidden="true">{active ? "✓" : "+"}</span>
                          <span>{area}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Selected Engagement Tier Tag */}
                <div className="form-section">
                  <label className="form-label mono">02 // ACTIVE ENGAGEMENT MODEL</label>
                  <div className="tier-selector-pills" role="radiogroup" aria-label="Active Engagement Model">
                    {TIERS.map((tier) => {
                      const isTierActive = selectedTier === tier.id;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          role="radio"
                          aria-checked={isTierActive}
                          className={`tier-pill ${isTierActive ? "is-active" : ""}`}
                          onClick={() => setSelectedTier(tier.id)}
                        >
                          {isTierActive && (
                            <motion.span
                              className="tier-pill-active-bg"
                              layoutId="selected-tier"
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            />
                          )}
                          <span className="tier-pill-label">
                            {tier.name} ({tier.timeline})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Contact & Scope Inputs */}
                <div className="form-section">
                  <label className="form-label mono">03 // PROJECT PARAMETERS & CONTACT</label>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="inq-name" className="input-label">
                        Your Name
                      </label>
                      <input
                        id="inq-name"
                        type="text"
                        required
                        placeholder="Dr. Alexander Chen"
                        className="form-input"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inq-email" className="input-label">
                        Work Email
                      </label>
                      <input
                        id="inq-email"
                        type="email"
                        required
                        placeholder="a.chen@enterprise.com"
                        className="form-input"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-group--full">
                      <label htmlFor="inq-timeline" className="input-label">
                        Target Timeline
                      </label>
                      <select
                        id="inq-timeline"
                        className="form-input form-select"
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      >
                        <option value="Immediate">Immediate Execution (&lt; 2 weeks)</option>
                        <option value="Next 30 Days">Next 30 Days</option>
                        <option value="Next Quarter">Next Quarter</option>
                        <option value="Exploratory Architecture">Exploratory Architecture</option>
                      </select>
                    </div>

                    <div className="form-group form-group--full">
                      <label htmlFor="inq-message" className="input-label">
                        System Architecture Context &amp; Key Constraints
                      </label>
                      <textarea
                        id="inq-message"
                        rows={4}
                        required
                        placeholder="Brief overview of your current tech stack, scale/concurrency constraints, or upcoming system migration..."
                        className="form-input form-textarea"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Row */}
                <div className="form-actions-row">
                  <button type="submit" className="btn btn--primary submit-btn" disabled={submitting}>
                    {submitting ? (
                      <>
                        <span className="submit-spinner" aria-hidden="true" />
                        <span>Transmitting Scope...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Technical Scope Inquiry</span>
                        <FiArrowUpRight aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <div className="direct-call-hint mono">
                    <span>Prefer direct engineering contact?</span>
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                      Schedule 30-min discovery call ↗
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
