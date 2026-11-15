/**
 * Single source of truth for Hash company details and service offerings.
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

/**
 * 11-Service Catalog across 3 Core Pillars: Automate, Build, Grow.
 */
export const SERVICE_PILLARS = [
  {
    pillarId: "automate",
    pillarNum: "01",
    pillarTitle: "Automate",
    tagline: "Autonomous workflows & intelligent execution",
    services: [
      {
        id: "ai-automation",
        name: "AI automation",
        tag: "Autonomous Workflows",
        summary: "Autonomous multi-agent pipelines and intelligent system automation eliminating manual operational bottlenecks.",
        bullets: [
          "Deterministic agent decision loops",
          "Continuous eval regression test suites",
          "Automated schema validation guards",
          "End-to-end task audit trails",
        ],
      },
      {
        id: "ai-voice-agents",
        name: "AI voice agents",
        tag: "Sub-650ms Conversational AI",
        summary: "Ultra-low latency, full-duplex conversational voice bots with real-time speaker diarization and CRM integration.",
        bullets: [
          "Sub-650ms turn response latency",
          "Full-duplex WebSocket audio streaming",
          "Deepgram & custom LLM voice stacks",
          "Direct telephony & SIP trunk routing",
        ],
      },
      {
        id: "n8n-workflow-engineering",
        name: "n8n & workflow engineering",
        tag: "Event-Driven Integration",
        summary: "Robust, self-hosted n8n enterprise workflows and custom API connectors with automated error recovery.",
        bullets: [
          "Self-hosted high-availability n8n clusters",
          "Multi-system API webhook orchestration",
          "Dead-letter queues & automated retry logic",
          "Git-versioned workflow infrastructure",
        ],
      },
    ],
  },
  {
    pillarId: "build",
    pillarNum: "02",
    pillarTitle: "Build",
    tagline: "High-performance software & cloud platforms",
    services: [
      {
        id: "full-stack-development",
        name: "Full-stack development",
        tag: "Distributed Web Systems",
        summary: "High-concurrency distributed web platforms engineered in React 19, Go, Node.js, and scalable cloud databases.",
        bullets: [
          "Sub-100ms p95 API response times",
          "Type-safe distributed architectures",
          "Multi-tenant RBAC security & SOC2 readiness",
          "Horizontal auto-scaling cloud clusters",
        ],
      },
      {
        id: "mobile-apps",
        name: "Mobile apps",
        tag: "Local-First Client Engines",
        summary: "Field-ready native and cross-platform apps built with local SQLite persistence and conflict-free delta sync.",
        bullets: [
          "Offline-first CRDT synchronization",
          "Native iOS (SwiftUI) & Android (Compose)",
          "Cross-platform Kotlin Multiplatform engines",
          "Sub-second launch and 60fps animations",
        ],
      },
      {
        id: "web-design-development",
        name: "Web design & development",
        tag: "Bespoke Editorial Web",
        summary: "Distinctive, high-craft brand websites engineered with bespoke typography, 60fps canvas shaders, and sub-second TTFB.",
        bullets: [
          "Zero-slop bespoke editorial design",
          "60fps WebGL/Canvas micro-interactions",
          "Static SSR prerendering for instant loads",
          "100/100 Google Lighthouse compliance",
        ],
      },
      {
        id: "cloud-data-devops",
        name: "Cloud, data & DevOps",
        tag: "Infrastructure as Code",
        summary: "Medallion lakehouses, Kubernetes clusters, and automated CI/CD pipelines deployed with Terraform and AWS/GCP.",
        bullets: [
          "Terraform & OpenTofu infrastructure as code",
          "Medallion Bronze/Silver/Gold lakehouses",
          "Zero-downtime blue/green CI/CD pipelines",
          "Continuous OpenTelemetry & Prometheus metrics",
        ],
      },
      {
        id: "game-development",
        name: "Game development",
        tag: "Interactive Engines & 3D",
        summary: "High-performance interactive 2D/3D simulations, WebGL experiences, and gaming mechanics built in Unity & Three.js.",
        bullets: [
          "Optimized Three.js & WebGL shaders",
          "Deterministic multiplayer networking",
          "Physics simulation and state reconciliation",
          "Cross-device frame pacing & asset streaming",
        ],
      },
      {
        id: "pos-systems",
        name: "POS systems",
        tag: "Hardware & Retail Operations",
        summary: "Mission-critical point-of-sale platforms with hardware peripherals, offline billing, and zero transaction drops.",
        bullets: [
          "Offline payment capture & sync",
          "Hardware ESC/POS printer & scanner drivers",
          "Sub-second barcode & SKU inventory lookups",
          "End-to-end PCI-DSS compliant architecture",
        ],
      },
    ],
  },
  {
    pillarId: "grow",
    pillarNum: "03",
    pillarTitle: "Grow",
    tagline: "Technical distribution & performance acquisition",
    services: [
      {
        id: "seo",
        name: "SEO",
        tag: "Technical Search Authority",
        summary: "Deep technical SEO, Schema.org graph markup, sub-second TTFB, and indexation architectures that dominate organic search.",
        bullets: [
          "Zero-JS server-side HTML prerendering",
          "Schema.org semantic JSON-LD structures",
          "Core Web Vitals greenline audit",
          "Data-driven programmatic content pipelines",
        ],
      },
      {
        id: "digital-advertising",
        name: "Digital advertising",
        tag: "Performance Acquisition",
        summary: "Data-driven performance marketing infrastructure with server-side conversion tracking and automated bid algorithms.",
        bullets: [
          "Server-side Meta CAPI & Google enhanced conversions",
          "High-converting bespoke landing page funnels",
          "Real-time CAC/LTV attribution models",
          "Automated creative testing frameworks",
        ],
      },
    ],
  },
];

/**
 * Flat list of all 11 selectable services for Scope Builder & Footer.
 */
export const ALL_SERVICES = [
  "AI automation",
  "AI voice agents",
  "n8n & integrations",
  "Full-stack development",
  "Mobile apps",
  "Web design & development",
  "Cloud, data & DevOps",
  "Game development",
  "POS systems",
  "SEO",
  "Digital advertising",
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

/**
 * Pre-selects a service in the Engagement Scope Builder and scrolls to #inquiry.
 */
export function selectAndScrollToService(serviceName) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("hash:select-service", { detail: serviceName })
    );
  }
  scrollToId("#inquiry");
}
