/**
 * Single source of truth for Hash company details.
 */

export const SITE_NAME = "Hash";
export const SITE_TAGLINE = "Engineering-Led Technical Consulting";

export const EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL || "contact@hash.engineering";

export const CALENDLY =
  import.meta.env.VITE_CALENDLY_URL ||
  "https://calendly.com/hash-engineering/technical-discovery";

export const SOCIAL = {
  github: "https://github.com/hash-engineering",
  linkedin: "https://www.linkedin.com/company/hash-engineering/",
};

/**
 * Navigation links for the shell.
 */
export const NAV = [
  { label: "Manifesto", href: "#manifesto", kind: "hash" },
  { label: "Blueprint", href: "#blueprint", kind: "hash" },
  { label: "Capabilities", href: "#capabilities", kind: "hash" },
  { label: "Case Studies", href: "#case-studies", kind: "hash" },
  { label: "Engagement", href: "#engagement", kind: "hash" },
  { label: "Inquire", href: "#inquiry", kind: "hash" },
];

/** Opens the visitor's webmail compose window pre-addressed to Hash. */
export function composeUrl(subject = "Technical Consulting Enquiry", body = "") {
  const provider = (import.meta.env.VITE_DEFAULT_WEBMAIL || "gmail").toLowerCase();
  const to = encodeURIComponent(EMAIL);
  const su = encodeURIComponent(subject);
  const bd = encodeURIComponent(body);

  if (provider === "outlook") {
    return `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${su}&body=${bd}`;
  }
  if (provider === "yahoo") {
    return `https://compose.mail.yahoo.com/?to=${to}&subject=${su}&body=${bd}`;
  }
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${bd}&tf=1`;
}

/**
 * Smooth-scrolls to an in-page anchor, honouring reduced-motion.
 */
export function scrollToId(href, tries = 0) {
  const target = document.querySelector(href);

  if (!target) {
    if (tries < 30) setTimeout(() => scrollToId(href, tries + 1), 50);
    return;
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });
}
