export interface ServiceItem {
  iconName: 'Brain' | 'BarChart3' | 'Globe' | 'Smartphone' | 'Layers' | 'Server' | 'Palette' | 'Layout';
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
    iconName: 'Palette',
    title: 'Graphics and Branding',
    desc: 'Logos, visual identity systems, social media kits, and investor pitch decks that give your product a consistent look.',
  },
  {
    iconName: 'Layout',
    title: 'UI/UX Design',
    desc: 'User flows, wireframes, and interactive Figma prototypes tested for clarity before a single line of production code is written.',
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
    id: 'copool',
    title: 'Copool',
    client: 'Copool Transit',
    clientMeta: 'Copool • Mobility & Automated Transit',
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
      company: 'Copool',
      signature: 'Sajid K.',
      tilt: 1.0,
    },
  },
  {
    id: 'namaz-counter',
    title: 'Namaz Counter',
    client: 'FaithTech Studio',
    clientMeta: 'Namaz Counter • Faith & Offline Utilities',
    desc: 'Prayer tracker with automated notifications, streak records, and an offline magnetic-sensor Qibla compass.',
    fullDesc: 'Engineered an offline-first mobile utility featuring continuous sensor fusion compass calibration, location-based astronomical prayer time algorithms, and zero-latency local notification scheduling.',
    scope: [
      'Sensor fusion Kalman filter for flutter device magnetic heading calibration',
      'Astronomical calculation engine running 100% on-device without network calls',
      'Low-power background push daemon adhering to strict iOS and Android battery limits',
    ],
    outcomes: [
      'Over 60,000 monthly active users worldwide with 100% offline functionality',
      '4.8-star average rating across Google Play and iOS App Store',
      'Zero third-party analytics tracking, ensuring total user privacy',
    ],
    tags: ['Flutter', 'Sensor APIs', 'Mobile'],
    category: 'm',
    previewType: 'prayer-compass',
    metricsBadge: '100% Offline Calibration',
    review: {
      quote: 'The compass calibration and fluid animations made our app stand out on the Play Store. Over 60,000 monthly active users with zero crashes.',
      author: 'Nakki H.',
      role: 'Product Lead',
      company: 'Namaz Counter',
      signature: 'Nakki H.',
      tilt: -0.8,
    },
  },
  {
    id: 'alpha',
    title: 'Alpha',
    client: 'Alpha Telemetry',
    clientMeta: 'Alpha Telemetry • Market AI & Telemetry',
    desc: 'Automated intelligence engine reading live financial streams, anomaly detection, and automated morning executive briefs.',
    fullDesc: 'Designed and deployed an automated financial data pipeline and LLM summarization system that ingests live market tickers, detects statistical volume anomalies, and compiles executive digests every morning.',
    scope: [
      'Streaming event ingestion pipeline using Python, Redis Streams, and PostgreSQL',
      'Custom anomaly detection models evaluating order book volatility in real time',
      'Automated morning email and Slack digest generator powered by structured LLM prompts',
    ],
    outcomes: [
      'Saved investment analysts an estimated 4 hours of manual data collation every morning',
      'Cut executive report preparation overhead by 62% across the firm',
      'Processes over 1.2 million market ticks daily with zero queue bottlenecks',
    ],
    tags: ['AI/ML', 'Python', 'Live Data'],
    category: 'a',
    previewType: 'ai-telemetry',
    metricsBadge: '-62% Manual Reporting',
    review: {
      quote: 'The reporting engine gave our analysts their mornings back. What used to take four hours of manual collation now lands in our inboxes at 7 AM.',
      author: 'Tayyab R.',
      role: 'Founder',
      company: 'Alpha',
      signature: 'Tayyab R.',
      tilt: 1.2,
    },
  },
  {
    id: 'wilson',
    title: 'Wilson',
    client: 'Wilson International',
    clientMeta: 'Wilson International • Logistics & Finance',
    desc: 'Centralized sales operations platform combining enterprise CRM data, automated invoices, and financial reporting in one view.',
    fullDesc: 'Consolidated three disjointed legacy systems into a single React-based operations console, automating international currency conversions, automated invoice delivery, and cross-border billing reconciliation.',
    scope: [
      'Multi-currency ledger architecture with automated tax and tariff calculation rules',
      'Custom ETL data synchronization workers bridging legacy ERP and modern web UI',
      'Role-based access control protecting enterprise financial statements and audits',
    ],
    outcomes: [
      'Consolidated 3 legacy platforms into a unified single-pane operational view',
      'Reduced weekly invoice reconciliation time from 3 business days to 15 minutes',
      'Handled over $148,000 in monthly transaction volume with zero discrepancies',
    ],
    tags: ['Data Pipelines', 'React', 'Cloud'],
    category: 'a',
    previewType: 'sales-funnel',
    metricsBadge: '$148.2k Monthly Volume',
    review: {
      quote: 'Replaced three legacy dashboards with one unified platform. Billing reconciliation that used to take days now runs in real-time.',
      author: 'Wilson T.',
      role: 'VP of Operations',
      company: 'Wilson International',
      signature: 'Wilson T.',
      tilt: -1.0,
    },
  },
  {
    id: 'system',
    title: 'System',
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
    desc: 'Rigorous automated testing, security checks, and seamless production cloud release.',
  },
  {
    stepNumber: 5,
    title: 'Support',
    desc: 'Ongoing monitoring, feature expansions, and direct access to your engineering team.',
  },
];

export const TARGET_INDUSTRIES = [
  'E-commerce',
  'Healthcare',
  'Logistics',
  'Education',
  'Real Estate',
  'Retail',
  'AI Support Agents',
  'Custom CRMs',
  'Workflow Automation',
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
    role: 'AI & Automation Lead',
    linkedin: 'https://www.linkedin.com/in/afnan-khan-32a103267',
    initials: 'AK',
  },
  {
    name: 'Abdullah Bin Aftab',
    role: 'Full-Stack Engineer',
    linkedin: 'https://www.linkedin.com/in/abdullah-bin-aftab',
    initials: 'AB',
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
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes. We offer monthly support plans for active infrastructure monitoring, security updates, and continued feature development.',
  },
];
