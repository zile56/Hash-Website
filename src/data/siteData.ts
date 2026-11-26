export interface ServiceItem {
  iconName: 'Brain' | 'BarChart3' | 'Globe' | 'Smartphone' | 'Layers' | 'Server' | 'Cloud' | 'Palette' | 'Layout';
  title: string;
  desc: string;
}

export const SERVICES: ServiceItem[] = [
  {
    iconName: 'Brain',
    title: 'AI and Machine Learning',
    desc: 'Custom AI agents, voice assistants, and workflow automation tools trained on your business data to handle repetitive operations.',
  },
  {
    iconName: 'BarChart3',
    title: 'Data and Analytics',
    desc: 'Automated data pipelines, SQL warehouses, and live reporting dashboards that turn raw operational records into clear metrics.',
  },
  {
    iconName: 'Globe',
    title: 'Web Development',
    desc: 'Fast, secure web applications, customer portals, and SaaS platforms built with React, Next.js, and modern cloud infrastructure.',
  },
  {
    iconName: 'Smartphone',
    title: 'Mobile Apps',
    desc: 'Native iOS and Android applications built for smooth performance, offline reliability, and clean App Store deployment.',
  },
  {
    iconName: 'Layers',
    title: 'Flutter Development',
    desc: 'A single shared codebase compiled for both iOS and Android, cutting development time and maintenance costs in half.',
  },
  {
    iconName: 'Server',
    title: 'Full-Stack Engineering',
    desc: 'Backend APIs, relational and vector databases, authentication systems, and internal admin panels engineered to handle real traffic.',
  },
  {
    iconName: 'Cloud',
    title: 'Cloud Services',
    desc: 'Scalable cloud architecture, CI/CD pipelines, Docker deployments, and managed AWS/VPS infrastructure engineered for high uptime and security.',
  },
  {
    iconName: 'Palette',
    title: 'Graphics & UI/UX Design',
    desc: 'Modern UI/UX, clean app & website designs, plus logos, social media posts & posters that make your brand look premium.',
  },
  {
    iconName: 'Layout',
    title: 'Digital Marketing & Brand Strategy',
    desc: 'Meta Ads, brand optimization & growth strategies that turn views into customers and customers into sales.',
  },
];

export const TECH_STACK = [
  'React',
  'Next.js',
  'Flutter',
  'TypeScript',
  'Python',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Figma',
];

export interface ProjectReview {
  quote: string;
  author: string;
  role: string;
  company: string;
  signature: string;
  tilt: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  clientMeta: string;
  desc: string;
  fullDesc: string;
  scope: string[];
  outcomes: string[];
  tags: string[];
  category: 'm' | 'w' | 'a'; // m = Mobile, w = Web, a = AI & Data
  previewType: 'circle-sync' | 'carpool-map' | 'prayer-compass' | 'ai-telemetry' | 'sales-funnel' | 'inventory-matrix' | 'luxury-store' | 'game-hud';
  metricsBadge: string;
  review: ProjectReview;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'circlo',
    title: 'Circlo',
    subtitle: 'Private social circles app',
    client: 'Circlo Inc.',
    clientMeta: 'Circlo • Social & Shared Calendars',
    desc: 'Private social circles with end-to-end chat, scheduled group events, and instant calendar synchronization.',
    fullDesc: 'Engineered a unified Flutter mobile application for iOS and Android featuring low-latency group messaging, end-to-end encryption, and cross-platform calendar synchronization that works reliably even on spotty mobile connections.',
    scope: [
      'Cross-platform Flutter mobile architecture with offline SQLite persistence',
      'Real-time WebSocket event layer for instant group calendar updates',
      'Automated CI/CD pipelines deploying to App Store TestFlight and Google Play Internal',
    ],
    outcomes: [
      'Shipped production mobile releases 2 weeks ahead of target launch',
      'Maintained 99.98% crash-free sessions across 50,000 monthly active users',
      'Reduced background battery consumption by 40% via batch sync scheduling',
    ],
    tags: ['Flutter', 'Firebase', 'Mobile'],
    category: 'm',
    previewType: 'circle-sync',
    metricsBadge: '4.9★ App Store · 50k MAU',
    review: {
      quote: 'HASH delivered our Flutter app two weeks ahead of schedule. The calendar sync and offline chat feel smoother than apps ten times our budget.',
      author: 'Shahzeb M.',
      role: 'Founder',
      company: 'Circlo',
      signature: 'Shahzeb M.',
      tilt: -1.2,
    },
  },
  {
    id: 'yaozay-zu',
    title: 'Yaozay Zu',
    subtitle: 'Route-matched carpooling platform',
    client: 'Yaozay Zu',
    clientMeta: 'Yaozay Zu • Mobility & Automated Transit',
    desc: 'Carpooling platform that computes route overlaps in sub-40ms and handles split-fare payment settlement automatically.',
    fullDesc: 'Built an algorithmic route-matching web platform and driver dispatch system that calculates detour tolerances in real time and automatically executes escrow split-fare settlements upon ride completion.',
    scope: [
      'High-throughput geospatial matching engine running on PostgreSQL and PostGIS',
      'Integrated Stripe Connect multi-party payment reconciliation and payout webhooks',
      'Real-time driver location telemetry visualization with responsive map overlays',
    ],
    outcomes: [
      'Sub-40 millisecond average route calculation latency under load',
      'Automated 100% of driver payouts and split fares without human intervention',
      'Zero dispatch service interruptions across 15,000 completed commute trips',
    ],
    tags: ['Full Stack', 'Maps API', 'Web'],
    category: 'w',
    previewType: 'carpool-map',
    metricsBadge: 'Sub-40ms Route Match',
    review: {
      quote: 'Clean updates, clean code, and no surprises. Our riders noticed the immediate route calculation speed on day one.',
      author: 'Sajid K.',
      role: 'Founder',
      company: 'Yaozay Zu',
      signature: 'Sajid K.',
      tilt: 1.0,
    },
  },
  {
    id: 'qaza-tracker',
    title: 'Qaza Tracker',
    subtitle: 'Offline Android prayer tracking app',
    client: 'Qaza Tracker',
    clientMeta: 'Qaza Tracker • Mobile App',
    desc: 'Fully offline, privacy-first Android app for calculating, tracking, and completing missed (Qaza) prayers.',
    fullDesc: 'Fully offline, privacy-first Android app built for calculating, tracking, and completing missed (Qaza) prayers with no account and no internet permission. Engineered with an event-sourced Room database model (computing remaining prayers from baseline, adjustments, and completion logs), MVVM with Hilt across 8+ screens, a synced home screen widget for one-tap logging, streak and milestone analytics with completion projections, WorkManager reminders for Android 13+, a verified v1-to-v2 database migration, R8 minification reducing the release bundle from ~9.9 MB to ~5 MB, and 260+ unit and Compose UI tests. Shipped to Google Play Production (v1.1.4).',
    scope: [
      'Event-sourced Room database model computing remaining prayers from baseline, adjustments, and logs',
      'MVVM architecture with Hilt dependency injection across 8+ Jetpack Compose screens and a synced home screen widget',
      'WorkManager reminders for Android 13+, verified v1-to-v2 migration, R8 minification (~5 MB bundle), and 260+ tests',
    ],
    outcomes: [
      'Shipped to Google Play Production (v1.1.4) with 100% offline privacy and zero internet permissions',
      'Reduced release bundle size from ~9.9 MB to ~5 MB via R8 optimization',
      'Verified reliability across 260+ automated unit and Compose UI tests',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Room', 'Hilt', 'WorkManager', 'DataStore'],
    category: 'm',
    previewType: 'prayer-compass',
    metricsBadge: 'Google Play v1.1.4 · 260+ Tests',
    review: {
      quote: 'Fast, completely private, and zero clutter. The one-tap home widget and streak projections make staying consistent effortless.',
      author: 'Nakki H.',
      role: 'Product Lead',
      company: 'Qaza Tracker',
      signature: 'Nakki H.',
      tilt: -0.8,
    },
  },
  {
    id: 'alpha-physiotherapy',
    title: 'Alpha Physiotherapy',
    subtitle: 'Clinical scheduling and AI telemetry engine',
    client: 'Alpha Physiotherapy',
    clientMeta: 'Alpha Physiotherapy • Clinical AI & Telemetry',
    desc: 'Automated intelligence engine reading live operational streams, anomaly detection, and automated morning executive briefs.',
    fullDesc: 'Designed and deployed an automated clinical and operational data pipeline with LLM summarization that ingests live session metrics, detects statistical anomalies, and compiles morning digests for leadership.',
    scope: [
      'Streaming event ingestion pipeline using Python, Redis Streams, and PostgreSQL',
      'Custom anomaly detection models evaluating operational throughput in real time',
      'Automated morning email and Slack digest generator powered by structured LLM prompts',
    ],
    outcomes: [
      'Saved operations leads an estimated 4 hours of manual reporting every morning',
      'Cut executive report preparation overhead by 62% across the organization',
      'Reliable automated digest delivery with zero queue bottlenecks',
    ],
    tags: ['AI/ML', 'Python', 'Live Data'],
    category: 'a',
    previewType: 'ai-telemetry',
    metricsBadge: '-62% Manual Reporting',
    review: {
      quote: 'The reporting engine gave our team their mornings back. What used to take hours of manual collation now lands cleanly before 7 AM.',
      author: 'Tayyab R.',
      role: 'Director',
      company: 'Alpha Physiotherapy',
      signature: 'Tayyab R.',
      tilt: 1.2,
    },
  },
  {
    id: 'oscill',
    title: 'Oscill',
    subtitle: 'AI-powered art gallery and creative identity app',
    client: 'Oscill',
    clientMeta: 'Oscill • AI & Data',
    desc: 'AI-powered art gallery web application helping artists and collectors understand their creative identity.',
    fullDesc: 'AI-powered art gallery web application that helps artists and collectors understand their creative identity. Supports artwork uploads with image storage and descriptions, AI-generated reflections using OpenAI and sentence-transformer embeddings, collection-wide identity synthesis (traits, themes, and emotional tone), an identity evolution timeline with version comparison, collections with filtering and sorting, a grounded AI chat with guardrails, role-based onboarding (Artist, Collector, Enthusiast), Google OAuth, and a light/dark gallery UI deployed on Docker and NGINX with Let\'s Encrypt SSL.',
    scope: [
      'AI reflection & identity synthesis pipeline powered by OpenAI and sentence-transformer embeddings',
      'Artwork uploads via MinIO storage, collection filtering/sorting, evolution timeline with version diffing, and grounded AI chat',
      'Role-based onboarding (Artist, Collector, Enthusiast), Google OAuth, and Docker + NGINX deployment with Let\'s Encrypt SSL',
    ],
    outcomes: [
      'Synthesizes collection-wide traits, themes, and emotional tone from artwork metadata and embeddings',
      'Interactive identity evolution timeline with version comparison and Chart.js analytics',
      'Production-hardened stack secured with Google OAuth, guardrailed AI chat, and HTTPS SSL',
    ],
    tags: ['React', 'Vite', 'Chart.js', 'Python', 'Flask', 'SQLAlchemy', 'SQLite', 'MinIO', 'OpenAI', 'Docker', 'NGINX'],
    category: 'a',
    previewType: 'sales-funnel',
    metricsBadge: 'AI Identity Engine · Docker + SSL',
    review: {
      quote: 'Oscill turns raw artwork collections into a clear visual and AI-driven identity timeline without compromising curation depth.',
      author: 'Zain T.',
      role: 'Product Lead',
      company: 'Oscill',
      signature: 'Zain T.',
      tilt: -1.0,
    },
  },
  {
    id: 'system',
    title: 'System',
    subtitle: 'Inventory and operations portal',
    client: 'Bao Logistics',
    clientMeta: 'Bao Logistics • Supply Chain & Inventory',
    desc: 'Operations management system handling multi-facility inventory tracking, staff scheduling, and two-tier approval chains.',
    fullDesc: 'Engineered an internal warehouse logistics portal for tracking multi-facility inventory balances, automated reorder thresholds, and role-based staff dispatch workflows.',
    scope: [
      'Relational schema architecture with ACID compliance for inventory item movements',
      'Real-time barcode scanning integration via web camera and handheld Bluetooth scanners',
      'Audit log trail recording every stock allocation, transfer, and manager approval',
    ],
    outcomes: [
      'Eliminated stockout blindspots across 4 regional warehouse locations',
      'Accelerated warehouse staff order intake processing speeds by 45%',
      'Sub-20 millisecond database response times on queries exceeding 100k items',
    ],
    tags: ['Full Stack', 'PostgreSQL', 'Admin'],
    category: 'w',
    previewType: 'inventory-matrix',
    metricsBadge: 'Zero Latency Sync',
    review: {
      quote: 'A solid operations backend that handles hundreds of daily warehouse receipts and staff sign-offs with zero transaction lag.',
      author: 'Bao Bao L.',
      role: 'Head of Operations',
      company: 'Bao Logistics',
      signature: 'Bao Bao L.',
      tilt: 0.8,
    },
  },
  {
    id: 'sissy',
    title: 'Sissy',
    subtitle: 'Custom fashion storefront',
    client: 'Sissy Atelier',
    clientMeta: 'Sissy Atelier • Fashion Commerce',
    desc: 'Headless apparel storefront engineered for rapid checkout performance and a bespoke visual editorial design system.',
    fullDesc: 'Designed and built a headless e-commerce storefront with server-side rendering, sub-second page transitions, and bespoke editorial layout transitions tailored for luxury fashion collections.',
    scope: [
      'Next.js headless front-end with edge caching and dynamic image optimization',
      'Bespoke visual editorial design system reflecting luxury fashion aesthetics',
      'Single-page checkout integration with Stripe and instant order receipt generation',
    ],
    outcomes: [
      'Checkout funnel conversion increased by 34% in the first 30 days after launch',
      'Achieved 98+ Google Lighthouse performance score across all catalog pages',
      'Sub-second collection browsing experience on mobile devices',
    ],
    tags: ['Next.js', 'UI/UX', 'Commerce'],
    category: 'w',
    previewType: 'luxury-store',
    metricsBadge: '+34% Funnel Conversion',
    review: {
      quote: 'Checkout conversion jumped 34% within the first month. The bespoke design system gives our apparel brand strong editorial weight.',
      author: 'Shivaji P.',
      role: 'Creative Director',
      company: 'Sissy Atelier',
      signature: 'Shivaji P.',
      tilt: -1.1,
    },
  },
  {
    id: 'last-of-us',
    title: 'LastofUs',
    subtitle: 'Game community and companion app',
    client: 'LastofUs Gaming',
    clientMeta: 'LastofUs Gaming • Community & Companion Apps',
    desc: 'Community hub and real-time companion application featuring interactive lore maps and live player matchmaking telemetry.',
    fullDesc: 'Built an interactive gaming community hub and companion web app featuring interactive vector maps, real-time player telemetry, and live match coordination for gaming clans.',
    scope: [
      'High-performance SVG vector map engine with pan, zoom, and dynamic pin filtering',
      'WebSocket telemetry channel streaming live player status updates',
      'Responsive mobile-first dark interface matching the game aesthetic',
    ],
    outcomes: [
      'Over 12,400 concurrent community players during launch tournament events',
      'Sub-50ms live coordinate sync across connected clan member screens',
      'Zero downtime recorded across major international gaming tournaments',
    ],
    tags: ['Web', 'Mobile Sync', 'App'],
    category: 'm',
    previewType: 'game-hud',
    metricsBadge: '12.4k Real-time Players',
    review: {
      quote: 'The dark UI aesthetic, interactive lore maps, and companion app sync seamlessly. Our global player community welcomed it on day one.',
      author: 'Jett V.',
      role: 'Community Lead',
      company: 'LastofUs Gaming',
      signature: 'Jett V.',
      tilt: 0.9,
    },
  },
];

export const WORK_FILTERS = [
  { key: '*', label: 'All Projects' },
  { key: 'm', label: 'Mobile Apps' },
  { key: 'w', label: 'Web Platforms' },
  { key: 'a', label: 'AI & Data Systems' },
];

export interface ProcessStep {
  stepNumber: number;
  title: string;
  desc: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discover',
    desc: 'We map your business workflows, define technical requirements, and agree on clear milestones.',
  },
  {
    stepNumber: 2,
    title: 'Design',
    desc: 'Interactive Figma prototypes and system architecture diagrams tested before code is written.',
  },
  {
    stepNumber: 3,
    title: 'Build',
    desc: 'Weekly working software builds pushed to a staging environment so you test as we build.',
  },
  {
    stepNumber: 4,
    title: 'Deploy',
    desc: 'Automated testing, security checks, and a calm production launch.',
  },
  {
    stepNumber: 5,
    title: 'Maintenance',
    desc: 'Ongoing monitoring, security updates, feature expansions, and direct access to your engineering team.',
  },
];

export const TARGET_INDUSTRIES = [
  'Fintech & Banking',
  'E-commerce & Retail',
  'Healthcare & MedTech',
  'Logistics & Supply Chain',
  'Real Estate & PropTech',
  'Education & EdTech',
  'Startups & SaaS',
  'AI Support Agents',
  'Custom CRMs & ERPs',
  'Workflow Automation',
  'Live Dashboards & Data',
  'Booking & Payments',
];

export interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  initials: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ubaid Malik',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/mubaidmalik',
    initials: 'UM',
  },
  {
    name: 'Afnan Khan',
    role: 'Co-founder and Director',
    linkedin: 'https://www.linkedin.com/in/afnan-khan-32a103267',
    initials: 'AK',
  },
  {
    name: 'Abdullah Bin Aftab',
    role: 'Co-founder and Director',
    linkedin: 'https://www.linkedin.com/in/abdullah-bin-aftab',
    initials: 'AB',
  },
  {
    name: 'Zile Hasnain',
    role: 'Lead Engineer',
    linkedin: 'https://www.linkedin.com/in/zile-hasnain-83b4a8267',
    initials: 'ZH',
  },
  {
    name: 'Irfan Hayat',
    role: 'AI/ML Engineer',
    linkedin: 'https://www.linkedin.com/in/irfan-hayat-8a6494367',
    initials: 'IH',
  },
];

export const CAREER_ROLES = [
  'Flutter Developer',
  'AI & ML Engineer',
  'UI/UX Designer',
  'Full-Stack Developer',
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most web platforms ship in 3 to 6 weeks, and mobile applications in 8 to 14 weeks depending on feature scope and third-party integrations.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer: 'Yes. Many of our clients are early-stage founders. We scope realistic minimum viable products to get you to market quickly with production-grade engineering.',
  },
  {
    question: 'Can you build cross-platform Flutter applications?',
    answer: 'Yes. Flutter is one of our primary frameworks. We build a single shared codebase that compiles natively for iOS and Android, reducing both build time and long-term maintenance.',
  },
  {
    question: 'Who owns the intellectual property and code?',
    answer: 'You own 100% of your source code, design files, and technical assets. Everything is transferred to your GitHub repositories upon project milestone sign-off.',
  },
  {
    question: 'Do you provide ongoing maintenance after deployment?',
    answer: 'Yes. We offer monthly maintenance plans for active infrastructure monitoring, security updates, and continued feature development.',
  },
];
