export const GITHUB_URL = 'https://github.com/syntropize-ai/rounds'
export const DOCS_URL = 'https://docs.rounds.dev'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Get Started', href: '#get-started' },
  { label: 'Docs', href: DOCS_URL },
  { label: 'FAQ', href: '#faq' },
] as const

export const FEATURES = [
  {
    title: 'Observe',
    description:
      'Create, open, edit, explain, and organize dashboards from natural language. Rounds discovers real metrics and validates queries before saving.',
    icon: 'layout-dashboard',
    color: 'red' as const,
  },
  {
    title: 'Detect',
    description:
      'Create and tune alert rules through chat or the Alerts page. When a rule fires, start an investigation from the alert context.',
    icon: 'bell',
    color: 'orange' as const,
  },
  {
    title: 'Investigate',
    description:
      'Ask why latency, errors, or saturation changed. The agent queries metrics, logs, recent changes, and Kubernetes when configured.',
    icon: 'search',
    color: 'yellow' as const,
  },
  {
    title: 'Act safely',
    description:
      'Review risky work in Action Center. Mutating cluster operations become approval requests with RBAC and audit logging before execution.',
    icon: 'shield-check',
    color: 'green' as const,
  },
  {
    title: 'Workspace controls',
    description:
      'Folders, service accounts, teams, roles, audit logs, setup, settings, and connector policies are part of the product.',
    icon: 'puzzle',
    color: 'cyan' as const,
  },
  {
    title: 'Persistent sessions',
    description:
      'Continue work from Recents, keep resource context after navigation, and review compact activity steps when you need details.',
    icon: 'activity',
    color: 'violet' as const,
  },
] as const

export const AGENTS = [
  { name: 'Chat', desc: 'Ask, open, create', color: 'sp-red' },
  { name: 'Dashboards', desc: 'Panels and folders', color: 'sp-orange' },
  { name: 'Alerts', desc: 'Rules and state', color: 'sp-yellow' },
  { name: 'Investigations', desc: 'Evidence reports', color: 'sp-green' },
  { name: 'Actions', desc: 'Approvals', color: 'sp-cyan' },
  { name: 'Admin', desc: 'RBAC and settings', color: 'sp-violet' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'What data sources does Rounds support?',
    answer:
      'Rounds supports Prometheus-compatible metrics, Loki logs, Kubernetes operations connectors, manual change events, notifications, and LLM providers. More integrations are planned.',
  },
  {
    question: 'How does Rounds avoid hallucinated queries?',
    answer:
      'Rounds follows a discovery-first approach. Before generating dashboards or alerts, it queries configured connectors for real metrics and labels, then validates generated PromQL before saving.',
  },
  {
    question: 'What makes Rounds different from an observability chatbot?',
    answer:
      'Rounds is a workspace, not just a chat box. It creates and opens dashboards, manages alert rules, writes evidence-backed investigations, tracks feed items, and routes risky fixes through approvals.',
  },
  {
    question: 'Which LLM providers are supported?',
    answer:
      'Rounds supports Anthropic, OpenAI, Gemini, DeepSeek, Ollama, Azure OpenAI, Bedrock, and OpenAI-compatible APIs through the LLM gateway.',
  },
  {
    question: 'Is Rounds production-ready?',
    answer:
      'Rounds is under active development. It includes built-in safety features like dry-run execution, approval workflows, query validation, and permission modes. We recommend starting with read-only mode and gradually enabling more capabilities as you gain confidence.',
  },
  {
    question: 'Can I self-host Rounds?',
    answer:
      'Yes. Rounds is self-hosted. A single command starts the API gateway and web dashboard. It uses SQLite by default, with PostgreSQL recommended for production Kubernetes installs.',
  },
  {
    question: 'How do I contribute?',
    answer:
      'Check out the contributing guide in the repository. The adapter SDK makes it especially easy to contribute new infrastructure integrations. We welcome issues, PRs, and adapter contributions.',
  },
] as const

export const TECH_STACK = [
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Vite',
  'Prometheus',
  'Tailwind CSS',
  'OpenTelemetry',
] as const

