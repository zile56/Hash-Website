export interface ServiceItem {
  iconName: 'Brain' | 'BarChart3' | 'Globe' | 'Smartphone' | 'Layers' | 'Server' | 'Palette' | 'Layout';
  title: string;
  desc: string;
}

export const SERVICES: ServiceItem[] = [
  {
    iconName: 'Brain',
    title: 'AI & Machine Learning',
    desc: 'Custom models and autonomous AI agents that take repeat work off your team.',
  },
  {
    iconName: 'BarChart3',
    title: 'Data & Analytics',
    desc: 'Pipelines and live dashboards that turn raw numbers into high-conviction decisions.',
  },
  {
    iconName: 'Globe',
    title: 'Web Development',
    desc: 'Fast, secure sites and web applications, from high-converting landing pages to complex SaaS.',
  },
  {
    iconName: 'Smartphone',
    title: 'Mobile Apps',
    desc: 'iOS and Android apps engineered to feel truly native, fluid, and ready to scale.',
  },
  {
    iconName: 'Layers',
    title: 'Flutter',
    desc: 'One shared production codebase, two app stores, shipped in half the standard development time.',
  },
  {
    iconName: 'Server',
    title: 'Full Stack Engineering',
    desc: 'APIs, relational/vector databases, cloud orchestration, and responsive internal admin consoles.',
  },
  {
    iconName: 'Palette',
    title: 'Graphics & Branding',
    desc: 'Logos, cohesive social kits, and pitch decks that make your company look the part.',
  },
  {
    iconName: 'Layout',
    title: 'UI/UX Design',
    desc: 'User research, wireframes, and interactive Figma prototypes people genuinely enjoy using.',
  },
];

export const CLIENTS = [
  'Northwind',
  'Lumio',
  'Kestrel Labs',
  'Orbitly',
  'Vantage',
  'Meridian',
  'Zenith Pay',
  'Foldr',
];

export const TECH_STACK = [
  'Flutter',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'TensorFlow',
  'Firebase',
  'Figma',
  'AWS',
  'PostgreSQL',
  'TypeScript',
  'Docker',
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
    client: 'Shahzeb',
    desc: 'Private social circles with group chat, events and shared calendars.',
    tags: ['Flutter', 'Firebase'],
    category: 'm',
    previewType: 'circle-sync',
    metricsBadge: '4.9★ App Store · 50k MAU',
    review: {
      quote: 'HASH delivered our Flutter app two weeks ahead of schedule. The calendar sync and offline chat feel smoother than apps ten times our budget.',
      author: 'Shahzeb',
      role: 'Founder',
      company: 'Circlo',
      signature: 'Shahzeb M.',
      tilt: -1.2,
    },
  },
  {
    id: 'copool',
    title: 'Copool',
    client: 'Sajid',
    desc: 'Carpooling that matches riders by route and splits fares automatically.',
    tags: ['Full stack', 'Maps'],
    category: 'w',
    previewType: 'carpool-map',
    metricsBadge: 'Sub-40ms Route Match',
    review: {
      quote: 'Clean updates, clean code and no surprises. Our riders noticed the immediate route calculation speed on day one.',
      author: 'Sajid',
      role: 'Founder',
      company: 'Copool',
      signature: 'Sajid K.',
      tilt: 1.0,
    },
  },
  {
    id: 'namaz-counter',
    title: 'Namaz Counter',
    client: 'Nakki',
    desc: 'Prayer tracker with reminders, streaks and a Qibla compass.',
    tags: ['Flutter', 'UI/UX'],
    category: 'm',
    previewType: 'prayer-compass',
    metricsBadge: '100% Offline Calibration',
    review: {
      quote: 'The compass calibration and fluid animations made our app stand out on the Play Store. Over 60,000 monthly active users with zero crashes.',
      author: 'Nakki',
      role: 'Product Lead',
      company: 'Namaz Counter',
      signature: 'Nakki H.',
      tilt: -0.8,
    },
  },
  {
    id: 'alpha',
    title: 'Alpha',
    client: 'Tayyab',
    desc: 'AI engine that reads market data and flags opportunities live.',
    tags: ['AI/ML', 'Data'],
    category: 'a',
    previewType: 'ai-telemetry',
    metricsBadge: '−62% Manual Reporting',
    review: {
      quote: 'The reporting engine gave our analysts their mornings back. What used to take four hours of manual collation now lands in our inboxes at 7 AM.',
      author: 'Tayyab',
      role: 'Founder',
      company: 'Alpha',
      signature: 'Tayyab R.',
      tilt: 1.2,
    },
  },
  {
    id: 'wilson',
    title: 'Wilson',
    client: 'Wilson (client)',
    desc: 'Sales dashboard joining CRM, invoices and reports in one view.',
    tags: ['Data', 'Web'],
    category: 'a',
    previewType: 'sales-funnel',
    metricsBadge: '$148.2k Monthly Volume',
    review: {
      quote: 'Replaced three clunky legacy dashboards with one unified platform. Billing reconciliation that used to take days now runs in real-time.',
      author: 'Wilson',
      role: 'VP of Operations',
      company: 'Wilson International',
      signature: 'Wilson T.',
      tilt: -1.0,
    },
  },
  {
    id: 'system',
    title: 'System',
    client: 'Bao Bao',
    desc: 'Operations system for inventory, staff and approvals.',
    tags: ['Full stack', 'Admin'],
    category: 'w',
    previewType: 'inventory-matrix',
    metricsBadge: 'Zero Latency Sync',
    review: {
      quote: 'A rock-solid operations backend that handles hundreds of daily warehouse receipts and staff sign-offs with zero transaction lag.',
      author: 'Bao Bao',
      role: 'Head of Operations',
      company: 'Bao Logistics',
      signature: 'Bao Bao L.',
      tilt: 0.8,
    },
  },
  {
    id: 'sissy',
    title: 'Sissy',
    client: 'Shivaji',
    desc: 'Fashion storefront with fast checkout and a custom brand identity.',
    tags: ['Web', 'UI/UX', 'Graphics'],
    category: 'w',
    previewType: 'luxury-store',
    metricsBadge: '+34% Funnel Conversion',
    review: {
      quote: 'Checkout conversion jumped 34% within the first month. The bespoke design system gives our apparel brand genuine luxury editorial weight.',
      author: 'Shivaji',
      role: 'Creative Director',
      company: 'Sissy Atelier',
      signature: 'Shivaji P.',
      tilt: -1.1,
    },
  },
  {
    id: 'last-of-us',
    title: 'LastofUs',
    client: 'Jett',
    desc: 'Community site and companion app for a story-driven game.',
    tags: ['Web', 'Graphics', 'App'],
    category: 'm',
    previewType: 'game-hud',
    metricsBadge: '12.4k Real-time Players',
    review: {
      quote: 'The dark UI aesthetic, interactive lore maps, and companion app sync seamlessly. Our global player community fell in love with it on day one.',
      author: 'Jett',
      role: 'Community Lead',
      company: 'LastofUs Gaming',
      signature: 'Jett V.',
      tilt: 0.9,
    },
  },
];

export const WORK_FILTERS = [
  { key: '*', label: 'All' },
  { key: 'm', label: 'Mobile' },
  { key: 'w', label: 'Web' },
  { key: 'a', label: 'AI & Data' },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'circlo',
    quote: 'HASH turned a rough idea into a polished app in weeks. They answered every message like it was their own launch.',
    author: 'Shahzeb',
    role: 'Founder',
    company: 'Circlo',
  },
  {
    id: 'copool',
    quote: 'Clear updates, clean code and no surprises. Our riders noticed the difference on day one.',
    author: 'Sajid',
    role: 'Founder',
    company: 'Copool',
  },
  {
    id: 'alpha',
    quote: 'The reporting engine gave our team their mornings back. I would hire them again tomorrow.',
    author: 'Tayyab',
    role: 'Founder',
    company: 'Alpha',
  },
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
    desc: 'We listen, map your goals and scope the work.',
  },
  {
    stepNumber: 2,
    title: 'Design',
    desc: 'Wireframes and prototypes you can click through.',
  },
  {
    stepNumber: 3,
    title: 'Build',
    desc: 'Weekly builds you can test as we go.',
  },
  {
    stepNumber: 4,
    title: 'Launch',
    desc: 'Testing, deployment and a calm release day.',
  },
  {
    stepNumber: 5,
    title: 'Support',
    desc: 'Fixes, updates and new features after launch.',
  },
];

export interface JournalArticle {
  category: string;
  title: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    category: 'AI agents',
    title: 'How AI agents can save a small team 20 hours a week',
  },
  {
    category: 'Flutter',
    title: 'Flutter or native: choosing the right path for your first app',
  },
  {
    category: 'Design',
    title: 'Five UI mistakes that quietly cost you customers',
  },
];

export const INDUSTRIES = [
  'Fintech',
  'E-commerce',
  'Healthcare',
  'Logistics',
  'Education',
  'Real estate',
  'Retail',
  'Startups & SaaS',
];

export const SOLUTIONS = [
  'AI support agents',
  'Custom CRMs',
  'Workflow automation',
  'Booking & payments',
  'Live dashboards',
  'Mobile apps',
  'Admin portals',
  'API integrations',
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
    role: 'Founder and CEO',
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
  {
    name: 'Zile Hasnain',
    role: 'Mobile & Flutter Lead',
    linkedin: 'https://www.linkedin.com/in/zile-hasnain-83b4a8267',
    initials: 'ZH',
  },
  {
    name: 'Irfan Hayyat',
    role: 'Product & UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/irfan-hayat-8a6494367',
    initials: 'IH',
  },
];

export const CAREER_ROLES = [
  'Flutter Developer',
  'ML Engineer',
  'UI/UX Designer',
  'Full Stack Developer',
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How long does a project take?',
    answer: 'Most websites ship in 3 to 6 weeks and apps in 8 to 14, depending on scope.',
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes. Many of our clients are first-time founders, and we scope work to fit early budgets.',
  },
  {
    question: 'Can you build Flutter apps?',
    answer: 'Yes. Flutter is one of our core skills for shipping iOS and Android together.',
  },
  {
    question: 'Who owns the code?',
    answer: 'You do. Everything we build is handed over in full when the project is paid.',
  },
  {
    question: 'Do you offer support after launch?',
    answer: 'Yes. We offer monthly support plans for fixes, updates and new features.',
  },
];
