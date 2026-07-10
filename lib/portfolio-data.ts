import {
  Brain,
  Layers,
  Terminal,
  BarChart3,
  Building2,
  PenLine,
  type LucideIcon,
} from 'lucide-react'

const GITHUB_USER = 'https://github.com/Leonell92'

export const siteConfig = {
  name: 'Leo Emmanuel',
  title: 'Python Developer • AI Engineer • Automation Specialist • Data Analyst',
  email: 'Lemmanuel659@gmail.com',
  github: GITHUB_USER,
  linkedin: 'https://www.linkedin.com/in/leo-emmanuel-550488150/',
  resumeUrl: '/resume.pdf',
}

export const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#analytics', label: 'Analytics' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export interface ExpertiseItem {
  icon: LucideIcon
  title: string
  description: string
  metrics: { label: string; value: string }[]
  features?: string[]
}

export const expertiseItems: ExpertiseItem[] = [
  {
    icon: Brain,
    title: 'AI Engineering',
    description:
      'I build AI-powered applications using tools like ChatGPT, Grok, Gemini, Claude, LangChain, and vector databases. These systems can answer questions, search company knowledge, automate tasks, and improve productivity.',
    metrics: [
      { label: 'AI Systems Built', value: '12+' },
      { label: 'LLM Integrations', value: '8+' },
    ],
    features: [
      'AI Assistants',
      'Knowledge Search',
      'Task Automation',
      'Productivity Tools',
    ],
  },
  {
    icon: Layers,
    title: 'Full Stack Systems',
    description:
      'I build complete web applications—from the user interface to the database and backend. Whether it\'s an internal company tool or a customer-facing platform, I can handle the entire development process.',
    metrics: [
      { label: 'Full-Stack Apps', value: '15+' },
      { label: 'APIs Built', value: '20+' },
    ],
    features: [
      'Web Applications',
      'User Interfaces',
      'Backend Systems',
      'Database Design',
    ],
  },
  {
    icon: Terminal,
    title: 'Python Automation',
    description:
      'I create Python tools that automate repetitive work, connect different software, process data, and save hours of manual effort.',
    metrics: [
      { label: 'Automations', value: '30+' },
      { label: 'Scripts', value: '100+' },
    ],
    features: [
      'Task Automation',
      'Data Processing',
      'Software Integration',
      'Time Savings',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'I turn raw data into clear dashboards and reports that help businesses understand performance and make better decisions.',
    metrics: [
      { label: 'Dashboards', value: '25+' },
      { label: 'Reports', value: '40+' },
    ],
    features: [
      'Data Dashboards',
      'Business Reports',
      'Performance Tracking',
      'Decision Support',
    ],
  },
  {
    icon: Building2,
    title: 'Business Software',
    description:
      'I develop custom business software such as helpdesk systems, ticketing platforms, internal dashboards, and productivity tools tailored to how your team works.',
    metrics: [
      { label: 'Platforms', value: '6+' },
      { label: 'Users Served', value: '500+' },
    ],
    features: [
      'Custom Software',
      'Team Tools',
      'Productivity Apps',
      'Workflow Systems',
    ],
  },
  {
    icon: PenLine,
    title: 'Technical Writing',
    description:
      'I write clear technical documentation, software guides, API documentation, blog articles, and technical content that makes complex topics easier to understand.',
    metrics: [
      { label: 'Articles', value: '35+' },
      { label: 'Guides', value: '20+' },
    ],
    features: [
      'Documentation',
      'Software Guides',
      'API Docs',
      'Technical Articles',
    ],
  },
]

export interface ProjectScreenshot {
  src: string
  alt: string
  label: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  features: string[]
  metrics: { label: string; value: string }[]
  github?: string
  githubSecondary?: string
  demo?: string
  screenshots?: ProjectScreenshot[]
  featured: boolean
  variant: 'ai' | 'enterprise' | 'fullstack' | 'analytics' | 'desktop'
}

const FINANCE_SCREENSHOTS_BASE =
  'https://raw.githubusercontent.com/Leonell92/personal-finance-analyzer/main/screenshots'

export const projects: Project[] = [
  {
    id: 'nexus-iq',
    title: 'Nexus IQ',
    subtitle: 'AI Knowledge Assistant',
    description:
      'An AI assistant that helps employees quickly find company information, answer questions, search documents, and access internal knowledge from one place.',
    tech: ['Python', 'Streamlit', 'LangChain', 'Groq API', 'ChromaDB', 'SQLAlchemy'],
    features: [
      'AI assistant & search',
      'Analytics dashboards',
      'Auth & role management',
      'IT support workflows',
    ],
    metrics: [
      { label: 'Query Latency', value: '<2s' },
      { label: 'Knowledge Docs', value: '10K+' },
    ],
    github: `${GITHUB_USER}/rag-chatbot`,
    screenshots: [
      {
        src: '/projects/nexus-iq-dashboard.png',
        alt: 'Nexus IQ dashboard overview with system health and knowledge base metrics',
        label: 'Dashboard',
      },
      {
        src: '/projects/nexus-iq-knowledge-base.png',
        alt: 'Nexus IQ knowledge base document repository and content management',
        label: 'Knowledge Base',
      },
      {
        src: '/projects/nexus-iq-ai-assistant.png',
        alt: 'Nexus IQ AI knowledge assistant with grounded answers, citations, and conversation history',
        label: 'AI Assistant',
      },
    ],
    featured: true,
    variant: 'ai',
  },
  {
    id: 'it-helpdesk',
    title: 'IT Helpdesk Platform',
    subtitle: 'Support & Ticket Management',
    description:
      'A modern helpdesk system where teams can report issues, track support tickets, monitor performance, and manage IT requests from one dashboard.',
    tech: ['Python', 'Streamlit', 'SQLAlchemy', 'PostgreSQL', 'Pandas'],
    features: [
      'Ticket lifecycle management',
      'SLA tracking',
      'Admin dashboards',
      'Workflow automation',
    ],
    metrics: [
      { label: 'Ticket Types', value: '12+' },
      { label: 'Resolution Rate', value: '94%' },
    ],
    github: `${GITHUB_USER}/it-helpdesk-enterprise`,
    screenshots: [
      {
        src: '/projects/it-helpdesk-homepage.png',
        alt: 'IT Helpdesk Platform homepage with dashboard overview and ticket management interface',
        label: 'Homepage',
      },
    ],
    featured: true,
    variant: 'enterprise',
  },
  {
    id: 'aurora-hotel',
    title: 'Aurora Grand',
    subtitle: 'Hotel Management System',
    description:
      'A complete hotel management system that handles bookings, guest records, room management, and administration.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'SQLAlchemy'],
    features: [
      'Booking engine',
      'Admin workflows',
      'Room inventory',
      'Guest management',
    ],
    metrics: [
      { label: 'Modules', value: '8+' },
      { label: 'API Endpoints', value: '45+' },
    ],
    github: `${GITHUB_USER}/aurora-grand-hotel-frontend`,
    githubSecondary: `${GITHUB_USER}/aurora-grand-hotel-backend`,
    demo: 'https://aurora-grand-hotel-frontend.vercel.app',
    screenshots: [
      {
        src: '/projects/aurora-grand-hero.png',
        alt: 'Aurora Grand luxury hotel landing page with hero section and property gallery',
        label: 'Landing Page',
      },
    ],
    featured: true,
    variant: 'fullstack',
  },
  {
    id: 'finance-analyzer',
    title: 'Personal Finance Analyzer',
    subtitle: 'AI-Powered Expense Intelligence',
    description:
      'AI-powered analytics dashboard for intelligent expense categorization, anomaly detection, and financial insights visualization.',
    tech: ['Python', 'Pandas', 'Streamlit', 'Scikit-learn', 'Plotly'],
    features: [
      'Smart categorization',
      'Anomaly detection',
      'Trend forecasting',
      'Visual insights',
    ],
    metrics: [
      { label: 'Categories', value: '25+' },
      { label: 'Accuracy', value: '92%' },
    ],
    github: `${GITHUB_USER}/personal-finance-analyzer`,
    screenshots: [
      {
        src: `${FINANCE_SCREENSHOTS_BASE}/dashboard-overview.png`,
        alt: 'Personal Finance Analyzer dashboard overview with key metrics',
        label: 'Command Center',
      },
      {
        src: `${FINANCE_SCREENSHOTS_BASE}/financial-overview.png`,
        alt: 'Financial overview with spending trends and anomaly insights',
        label: 'Deep Dive',
      },
      {
        src: `${FINANCE_SCREENSHOTS_BASE}/budget-tracker.png`,
        alt: 'Budget tracker with targets and cash flow progress',
        label: 'Budget Tracker',
      },
    ],
    featured: false,
    variant: 'analytics',
  },
  {
    id: 'clipboard-intel',
    title: 'Clipboard Manager',
    subtitle: 'Desktop Productivity Tool',
    description:
      'A desktop application that automatically saves everything you copy, making it easy to search, organize, and reuse text whenever you need it.',
    tech: ['Python', 'PyQt', 'SQLite', 'Keyboard Hooks'],
    features: [
      'Smart categorization',
      'Quick retrieval',
      'Search & filter',
      'History management',
    ],
    metrics: [
      { label: 'Items Stored', value: '1K+' },
      { label: 'Retrieval', value: '<100ms' },
    ],
    github: `${GITHUB_USER}/clipboardxfrontend`,
    screenshots: [
      {
        src: '/projects/clipboardx-screenshot.png',
        alt: 'Clipboard Manager main interface with clipboard history and smart categorization',
        label: 'Main Interface',
      },
    ],
    featured: false,
    variant: 'desktop',
  },
  {
    id: 'explorer-hook',
    title: 'Windows Explorer Hook',
    subtitle: 'Tabbed File Explorer',
    description:
      'A Windows desktop utility that merges multiple File Explorer windows into tabbed navigation for better file management.',
    tech: ['C#', 'Win32 API', 'Shell Hooks', 'WPF'],
    features: [
      'Tabbed navigation',
      'Instance merging',
      'Session persistence',
      'Low-level hooks',
    ],
    metrics: [
      { label: 'Instances', value: 'Multi' },
      { label: 'Overhead', value: 'Minimal' },
    ],
    github: `${GITHUB_USER}/win-explorer-hook`,
    screenshots: [
      {
        src: '/projects/win-explorer-hook.png',
        alt: 'WinExplorerHook settings UI with hook control, startup options, and system compatibility',
        label: 'Settings',
      },
    ],
    featured: false,
    variant: 'desktop',
  },
]

export const automationCapabilities = [
  {
    title: 'Workflow Orchestration',
    description: 'Multi-step pipeline automation with scheduling, retries, and error handling.',
    command: 'python orchestrator.py --pipeline nightly-etl',
  },
  {
    title: 'Desktop Automation',
    description: 'Windows utilities, shell hooks, and GUI automation for operational efficiency.',
    command: 'automation.run(task="explorer-merge", mode=watch)',
  },
  {
    title: 'API Integration',
    description: 'REST API connectors, webhook handlers, and third-party service orchestration.',
    command: 'curl -X POST /api/v1/workflows/trigger -d @payload.json',
  },
  {
    title: 'Monitoring Systems',
    description: 'Health checks, alerting pipelines, and operational dashboards for system status.',
    command: 'monitor.status --service=all --alert=slack',
  },
  {
    title: 'Data Pipelines',
    description: 'ETL scripts, data transformation, and automated reporting workflows.',
    command: 'pandas_etl.run(source=db, transform=clean, sink=warehouse)',
  },
  {
    title: 'Scripting Systems',
    description: 'Reusable Python modules for repetitive operational and engineering tasks.',
    command: 'python -m scripts.deploy --env production',
  },
]

export const analyticsCategories = [
  {
    title: 'Sales Analytics',
    description: 'Revenue trends, pipeline forecasting, and regional performance breakdowns.',
    kpis: [
      { label: 'Revenue Growth', value: '+24%', trend: 'up' },
      { label: 'Conversion Rate', value: '18.3%', trend: 'up' },
      { label: 'Avg Deal Size', value: '$12.4K', trend: 'neutral' },
    ],
  },
  {
    title: 'Financial Reporting',
    description: 'P&L statements, budget variance analysis, and cash flow visualization.',
    kpis: [
      { label: 'Gross Margin', value: '67%', trend: 'up' },
      { label: 'OpEx Ratio', value: '32%', trend: 'down' },
      { label: 'Net Profit', value: '$2.1M', trend: 'up' },
    ],
  },
  {
    title: 'Operational Insights',
    description: 'Process efficiency, SLA compliance, and resource utilization metrics.',
    kpis: [
      { label: 'SLA Compliance', value: '96.2%', trend: 'up' },
      { label: 'Avg Resolution', value: '4.2h', trend: 'down' },
      { label: 'Throughput', value: '+18%', trend: 'up' },
    ],
  },
  {
    title: 'Customer Analytics',
    description: 'Churn prediction, cohort analysis, and customer lifetime value modeling.',
    kpis: [
      { label: 'Retention Rate', value: '89%', trend: 'up' },
      { label: 'NPS Score', value: '72', trend: 'up' },
      { label: 'Churn Risk', value: '4.1%', trend: 'down' },
    ],
  },
  {
    title: 'Performance Monitoring',
    description: 'System uptime, response times, and infrastructure health dashboards.',
    kpis: [
      { label: 'Uptime', value: '99.9%', trend: 'up' },
      { label: 'P95 Latency', value: '142ms', trend: 'down' },
      { label: 'Error Rate', value: '0.02%', trend: 'down' },
    ],
  },
  {
    title: 'Data Transformation',
    description: 'ETL pipelines, data cleaning workflows, and quality assurance reporting.',
    kpis: [
      { label: 'Records/Day', value: '250K', trend: 'up' },
      { label: 'Data Quality', value: '98.7%', trend: 'up' },
      { label: 'Pipeline Time', value: '12min', trend: 'down' },
    ],
  },
]

export const techStackGroups = [
  {
    category: 'AI & Machine Learning',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'Groq API', 'OpenAI API', 'Embeddings'],
  },
  {
    category: 'Backend',
    technologies: ['Python', 'FastAPI', 'Streamlit', 'SQLAlchemy', 'REST APIs', 'Auth Systems'],
  },
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL', 'SQLite', 'SQL', 'ChromaDB', 'Redis'],
  },
  {
    category: 'Automation',
    technologies: ['Selenium', 'PyAutoGUI', 'Shell Scripting', 'Win32 API', 'Scheduling'],
  },
  {
    category: 'Data Analytics',
    technologies: ['Power BI', 'Excel', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib'],
  },
]

export const journeyMilestones = [
  {
    year: '2024',
    title: 'AI Applications',
    description:
      'Built AI-powered applications like Nexus IQ — combining AI assistants, knowledge search, and analytics to help teams work smarter.',
    tags: ['AI Systems', 'LangChain', 'ChatGPT'],
  },
  {
    year: '2023',
    title: 'Full-Stack Development',
    description:
      'Built helpdesk systems, hotel management platforms, and dashboards with authentication, workflows, and database integration.',
    tags: ['Streamlit', 'SQLAlchemy', 'Dashboards'],
  },
  {
    year: '2022',
    title: 'Data Analytics Focus',
    description:
      'Developed Power BI and Excel analytics solutions — creating dashboards, reports, and data pipelines to help businesses understand performance.',
    tags: ['Power BI', 'Excel', 'Pandas'],
  },
  {
    year: '2021',
    title: 'Automation Tools',
    description:
      'Created Python automation suites, desktop utilities, and workflow tools — saving hours of manual work across operations teams.',
    tags: ['Python', 'Selenium', 'Automation'],
  },
  {
    year: '2020',
    title: 'Programming Foundations',
    description:
      'Established core skills in Python development, SQL, APIs, and technical writing — building the foundation for software development.',
    tags: ['Python', 'SQL', 'APIs'],
  },
]

export const terminalLines = [
  { type: 'command', text: '$ nexus-iq deploy --env production' },
  { type: 'output', text: '✓ AI knowledge system initialized' },
  { type: 'output', text: '✓ ChromaDB vector store connected' },
  { type: 'output', text: '✓ Analytics dashboard live' },
  { type: 'command', text: '$ python orchestrator.py --status' },
  { type: 'output', text: '→ 6 workflows active | 0 failures' },
  { type: 'command', text: '$ analytics.export --format powerbi' },
  { type: 'output', text: '✓ Dashboard refreshed | 24 KPIs updated' },
]
