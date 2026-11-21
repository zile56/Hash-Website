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
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  clientMeta: string;
  desc: string;
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
    tags: ['Flutter', 'Firebase', 'Mobile'],
    category: 'm',
    previewType: 'circle-sync',
    metricsBadge: '4.9★ App Store · 50k MAU',
    review: {
      quote: 'HASH delivered our Flutter app two weeks ahead of schedule. The calendar sync and offline chat feel smoother than apps ten times our budget.',
      author: 'Shahzeb M.',
      role: 'Founder',
      company: 'Circlo',
    },
  },
  {
    id: 'copool',
    title: 'Copool',
    client: 'Copool Transit',
    clientMeta: 'Copool • Mobility & Automated Transit',
    desc: 'Carpooling platform that computes route overlaps in sub-40ms and handles split-fare payment settlement automatically.',
    tags: ['Full Stack', 'Maps API', 'Web'],
    category: 'w',
    previewType: 'carpool-map',
    metricsBadge: 'Sub-40ms Route Match',
    review: {
      quote: 'Clean updates, clean code, and no surprises. Our riders noticed the immediate route calculation speed on day one.',
      author: 'Sajid K.',
      role: 'Founder',
      company: 'Copool',
    },
  },
  {
    id: 'namaz-counter',
    title: 'Namaz Counter',
    client: 'FaithTech Studio',
    clientMeta: 'Namaz Counter • Faith & Offline Utilities',
    desc: 'Prayer tracker with automated notifications, streak records, and an offline magnetic-sensor Qibla compass.',
    tags: ['Flutter', 'Sensor APIs', 'Mobile'],
    category: 'm',
    previewType: 'prayer-compass',
    metricsBadge: '100% Offline Calibration',
    review: {
      quote: 'The compass calibration and fluid animations made our app stand out on the Play Store. Over 60,000 monthly active users with zero crashes.',
      author: 'Nakki H.',
      role: 'Product Lead',
      company: 'Namaz Counter',
    },
  },
  {
    id: 'alpha',
    title: 'Alpha',
    client: 'Alpha Telemetry',
    clientMeta: 'Alpha Telemetry • Market AI & Telemetry',
    desc: 'Automated intelligence engine reading live financial streams, anomaly detection, and automated morning executive briefs.',
    tags: ['AI/ML', 'Python', 'Live Data'],
    category: 'a',
    previewType: 'ai-telemetry',
    metricsBadge: '-62% Manual Reporting',
    review: {
      quote: 'The reporting engine gave our analysts their mornings back. What used to take four hours of manual collation now lands in our inboxes at 7 AM.',
      author: 'Tayyab R.',
      role: 'Founder',
      company: 'Alpha',
    },
  },
  {
    id: 'wilson',
    title: 'Wilson',
    client: 'Wilson International',
    clientMeta: 'Wilson International • Logistics & Finance',
    desc: 'Centralized sales operations platform combining enterprise CRM data, automated invoices, and financial reporting in one view.',
    tags: ['Data Pipelines', 'React', 'Cloud'],
    category: 'a',
    previewType: 'sales-funnel',
    metricsBadge: '$148.2k Monthly Volume',
    review: {
      quote: 'Replaced three legacy dashboards with one unified platform. Billing reconciliation that used to take days now runs in real-time.',
      author: 'Wilson T.',
      role: 'VP of Operations',
      company: 'Wilson International',
    },
  },
  {
    id: 'system',
    title: 'System',
    client: 'Bao Logistics',
    clientMeta: 'Bao Logistics • Supply Chain & Inventory',
    desc: 'Operations management system handling multi-facility inventory tracking, staff scheduling, and two-tier approval chains.',
    tags: ['Full Stack', 'PostgreSQL', 'Admin'],
    category: 'w',
    previewType: 'inventory-matrix',
    metricsBadge: 'Zero Latency Sync',
    review: {
      quote: 'A solid operations backend that handles hundreds of daily warehouse receipts and staff sign-offs with zero transaction lag.',
      author: 'Bao Bao L.',
      role: 'Head of Operations',
      company: 'Bao Logistics',
    },
  },
  {
    id: 'sissy',
    title: 'Sissy',
    client: 'Sissy Atelier',
    clientMeta: 'Sissy Atelier • Fashion Commerce',
    desc: 'Headless apparel storefront engineered for rapid checkout performance and a bespoke visual editorial design system.',
    tags: ['Next.js', 'UI/UX', 'Commerce'],
    category: 'w',
    previewType: 'luxury-store',
    metricsBadge: '+34% Funnel Conversion',
    review: {
      quote: 'Checkout conversion jumped 34% within the first month. The bespoke design system gives our apparel brand strong editorial weight.',
      author: 'Shivaji P.',
      role: 'Creative Director',
      company: 'Sissy Atelier',
    },
  },
  {
    id: 'last-of-us',
    title: 'LastofUs',
    client: 'LastofUs Gaming',
    clientMeta: 'LastofUs Gaming • Community & Companion Apps',
    desc: 'Community hub and real-time companion application featuring interactive lore maps and live player matchmaking telemetry.',
    tags: ['Web', 'Mobile Sync', 'App'],
    category: 'm',
    previewType: 'game-hud',
    metricsBadge: '12.4k Real-time Players',
    review: {
      quote: 'The dark UI aesthetic, interactive lore maps, and companion app sync seamlessly. Our global player community welcomed it on day one.',
      author: 'Jett V.',
      role: 'Community Lead',
      company: 'LastofUs Gaming',
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
