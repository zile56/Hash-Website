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
        tag: "SMART WORKFLOWS",
        summary: "The repetitive tasks your team does every day—quoting, data entry, customer follow-ups, and reporting—handled automatically by reliable AI assistants.",
        bullets: [
          "Connects directly to your existing tools",
          "Answers questions from your company documents",
          "Human approval before anything critical is sent",
          "Full activity logs and monthly cost limits",
        ],
      },
      {
        id: "ai-voice-agents",
        name: "AI voice agents",
        tag: "24/7 PHONE & WEB ASSISTANTS",
        summary: "Natural-sounding phone and web voice assistants that answer calls instantly, qualify leads, book appointments, and route urgent callers to your team.",
        bullets: [
          "Instant call pickup with zero hold times",
          "Direct calendar & CRM appointment booking",
          "Smooth transfer to a human when needed",
          "Full call recordings and transcripts",
        ],
      },
      {
        id: "n8n-workflow-engineering",
        name: "n8n & workflow engineering",
        tag: "APP & DATA INTEGRATIONS",
        summary: "Connect your CRM, email, spreadsheets, and internal tools so information moves automatically without manual copy-pasting.",
        bullets: [
          "Custom workflows tailored to your operations",
          "Syncs leads, invoices, and alerts in real time",
          "Automatic error alerts and retry protection",
          "Hosted on your own cloud with zero per-task fees",
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
        tag: "CUSTOM WEB PLATFORMS",
        summary: "Complete web applications, client portals, and internal dashboards built from the ground up to run your business smoothly.",
        bullets: [
          "Fast, responsive web apps and admin panels",
          "Secure user accounts, roles, and payments",
          "Clean, maintainable codebase you fully own",
          "Built to scale as your customers grow",
        ],
      },
      {
        id: "mobile-apps",
        name: "Mobile apps",
        tag: "IOS & ANDROID APPS",
        summary: "Polished, reliable mobile apps for iPhone and Android designed for smooth everyday use—even with spotty internet.",
        bullets: [
          "Native and cross-platform iOS & Android builds",
          "Offline support and instant push notifications",
          "Seamless sync with your website and backend",
          "Full App Store and Google Play launch support",
        ],
      },
      {
        id: "web-design-development",
        name: "Web design & development",
        tag: "HIGH-CONVERTING WEBSITES",
        summary: "Modern, fast-loading websites designed to build instant trust, explain what you do clearly, and turn visitors into customers.",
        bullets: [
          "Custom editorial design tailored to your brand",
          "Mobile-first layouts that look sharp on every screen",
          "Smooth animations and fast page load speeds",
          "Easy content updates and analytics setup",
        ],
      },
      {
        id: "cloud-data-devops",
        name: "Cloud, data & DevOps",
        tag: "CLOUD & DATA INFRASTRUCTURE",
        summary: "Organize scattered business data into clean, reliable dashboards and keep your apps running smoothly with automated cloud deployments.",
        bullets: [
          "Unified reporting dashboards across all your tools",
          "Automated backups and zero-downtime updates",
          "Cloud setup on AWS, GCP, or Vercel",
          "24/7 uptime monitoring and cost optimization",
        ],
      },
      {
        id: "game-development",
        name: "Game development",
        tag: "INTERACTIVE & MOBILE GAMES",
        summary: "Engaging 2D and 3D games for web and mobile—from playable brand experiences to full multiplayer titles.",
        bullets: [
          "Smooth 2D & 3D gameplay for web and mobile",
          "Leaderboards, multiplayer, and reward systems",
          "Custom art direction and responsive controls",
          "Optimized performance across devices",
        ],
      },
      {
        id: "pos-systems",
        name: "POS systems",
        tag: "RETAIL & RESTAURANT CHECKOUT",
        summary: "Custom point-of-sale software for shops, cafes, and multi-branch businesses to manage billing, stock, and daily sales in one place.",
        bullets: [
          "Fast checkout with barcode & receipt printer support",
          "Live inventory tracking across multiple branches",
          "Works offline and syncs when internet returns",
          "Clear daily sales, tax, and staff reports",
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
        tag: "SEARCH ENGINE GROWTH",
        summary: "Help the right customers find your business on Google through faster site speed, clear page structure, and targeted content.",
        bullets: [
          "Full technical audit and speed optimization",
          "Targeted landing pages for high-intent searches",
          "Clean site structure and Google search indexing",
          "Monthly keyword and traffic progress tracking",
        ],
      },
      {
        id: "digital-advertising",
        name: "Digital advertising",
        tag: "PAID CUSTOMER ACQUISITION",
        summary: "Targeted ad campaigns on Google, Meta, and LinkedIn built to bring qualified leads and measurable return on ad spend.",
        bullets: [
          "Campaign setup and audience targeting",
          "High-converting ad copy and landing pages",
          "Accurate conversion and lead tracking",
          "Weekly budget optimization to lower cost per lead",
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
    const target = serviceName.toLowerCase().includes("n8n") ? "n8n & integrations" : serviceName;
    window.dispatchEvent(
      new CustomEvent("hash:select-service", { detail: target })
    );
  }
  scrollToId("#inquiry");
}
