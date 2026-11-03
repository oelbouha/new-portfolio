/**
 * Service: n8n Automation & AI Workflow Engineering
 * Primary Keyword: "n8n developer"
 * Secondary Keywords: n8n consulting, workflow consultants, AI agents integration, AI agent development, agentic workflow builder, workflow automation with AI, automated workflow tools for scaling manual processes, hire CRM integration specialists
 * Dedicated H2: "AI Agents & Integrations"
 * Differentiator: Self-hosted n8n infrastructure on Linux VPS (Docker, NGINX, automated backups, zero execution fees).
 * Real data (no provisional notes).
 */

import type { ServiceDetail } from '../types';
import { siteConfig } from '../site';
import { keywords } from '../keywords';

export const n8nAutomation: ServiceDetail = {
  slug: 'n8n-automation',
  title: 'n8n Developer & AI Workflow Automation Consulting',
  navLabel: 'n8n Automation',
  shortDescription:
    'Hire an experienced n8n developer for self-hosted workflow automation, AI agents integration, and API connectors. Cut operational costs with zero per-step execution fees.',
  seo: {
    title: 'n8n Developer & AI Workflow Automation Consulting | Outman Elbouhali',
    description:
      'Hire an n8n developer for self-hosted workflow automation with AI, AI agents integration, and custom CRM connectors. Reduce SaaS expenses with self-hosted n8n.',
    path: '/services/n8n-automation',
    ogImage: siteConfig.defaultOgImage,
    primaryKeyword: keywords.n8nDev.primary,
    secondaryKeywords: keywords.n8nDev.secondary,
    schemaType: 'Service',
  },
  hero: {
    badge: '// AUTOMATION & AI AGENTS SPECIALIST',
    headline: 'n8n Developer for Scalable AI & Workflow Automation',
    subheadline:
      'I build robust, self-hosted n8n automation pipelines and intelligent AI agent workflows that connect your business tools, eliminate manual data entry, and reduce SaaS bills.',
    ctaButton: 'Automate your workflows with n8n',
    image: {
      src: '/images/call-to-action/n8n Automation Workflow .png',
      alt: 'n8n developer building complex self-hosted automation workflows and AI agents',
    },
  },
  deliverables: {
    tag: '[ AI AGENTS & INTEGRATIONS ]',
    title: 'AI Agents & Integrations for Automated Workflows',
    items: [
      {
        title: 'AI Agents Integration & Agentic Workflow Builder',
        description:
          'Designing intelligent autonomous agents inside n8n powered by OpenAI, Claude, or local LLMs via Ollama. I configure memory buffers, system prompts, vector search retrievers, and decision-tree tools that handle customer queries, parse documents, and execute multistep business actions.',
      },
      {
        title: 'Self-Hosted n8n Server Setup & Infrastructure',
        description:
          'Complete turn-key deployment of self-hosted n8n instances on Linux VPS servers using Docker Compose, secure NGINX reverse proxies, automated SSL certificates, and daily encrypted database backups. You get unlimited workflow executions without third-party step fees.',
      },
      {
        title: 'CRM Integration & Pipeline Synchronization',
        description:
          'Hire CRM integration specialists to bridge HubSpot, Salesforce, Pipedrive, or Close CRM with your billing software, databases, and customer support desks. Every lead, deal update, and invoice synchronizes bidirectionally in real time.',
      },
      {
        title: 'Automated Workflow Tools for Scaling Manual Processes',
        description:
          'Transform manual repetitive operations into automated background routines: PDF invoice parsing, customer onboarding email sequences, Slack and Telegram alerts, spreadsheet data normalization, and search engine indexation triggers.',
      },
      {
        title: 'Custom Webhook Engineering & API Connectors',
        description:
          'Building custom JavaScript / Python nodes and webhook receivers inside n8n to integrate legacy platforms, proprietary databases, and internal APIs that lack native third-party pre-built connectors.',
      },
      {
        title: 'Fault-Tolerant Error Handling & Recovery Loops',
        description:
          'Enterprise-grade workflow resilience: automated error trigger nodes, dead-letter queues, retry mechanisms with exponential backoff, and instant team notifications whenever external APIs timeout or return non-200 responses.',
      },
    ],
  },
  techStack: {
    tag: '[ TECH STACK ]',
    title: 'Automation, AI Models & Server Infrastructure',
    items: [
      {
        category: 'Core Automation Engines',
        technologies: [
          'n8n (Self-Hosted & Cloud)',
          'Make.com (Integromat)',
          'Zapier Webhooks',
          'Custom REST & GraphQL Endpoints',
        ],
      },
      {
        category: 'AI & LLM Integrations',
        technologies: [
          'OpenAI API (GPT-4o)',
          'Anthropic Claude 3.5',
          'LangChain & Vector Stores (Qdrant, Pinecone)',
          'Local LLMs via Ollama',
        ],
      },
      {
        category: 'Infrastructure & Storage',
        technologies: [
          'Docker & Docker Compose',
          'PostgreSQL (n8n Production DB)',
          'Linux VPS (Hetzner, DigitalOcean)',
          'NGINX Reverse Proxy & Let\'s Encrypt SSL',
          'Automated Volume Backups',
        ],
      },
    ],
  },
  process: {
    tag: '[ AUTOMATION WORKFLOW ]',
    title: 'How an n8n Automation Project Runs',
    steps: [
      {
        step: '01',
        title: 'Process Audit & System Architecture',
        duration: 'Days 1 — 3',
        description:
          'We audit your current manual bottlenecks, third-party software stack, data models, and API rate limits. I map out a clear data-flow diagram connecting every trigger to its target action.',
      },
      {
        step: '02',
        title: 'Server Provisioning & n8n Instance Hardening',
        duration: 'Days 3 — 5',
        description:
          'I provision an isolated Linux VPS, deploy containerized n8n backed by PostgreSQL, enforce SSL encryption, configure secure environment credentials, and establish automated daily backups.',
      },
      {
        step: '03',
        title: 'Workflow Construction & AI Agent Tuning',
        duration: 'Weeks 2 — 3',
        description:
          'Building the core automation graphs, writing data transformation logic in JavaScript, integrating AI agent nodes with tailored system instructions, and setting up error notification channels.',
      },
      {
        step: '04',
        title: 'Edge Case Testing, Monitoring & Handover',
        duration: 'Week 4',
        description:
          'Simulating malformed payloads, rate limit surges, and API downtime to verify recovery loops. I deliver complete workflow documentation and provide training for your internal operators.',
      },
    ],
  },
  relevantProjectTags: ['n8n-automation'],
  audience: {
    tag: '[ WHO THIS IS FOR ]',
    title: 'Designed for Businesses Scaling Operational Throughput',
    items: [
      {
        title: 'Companies Tired of Exponential Zapier / Make Invoices',
        description:
          'If your operations trigger tens of thousands of tasks monthly, commercial SaaS billing becomes extortionate. Self-hosted n8n gives you infinite executions for the flat monthly price of a basic VPS.',
      },
      {
        title: 'SaaS Founders Building AI-Powered Features',
        description:
          'You want to deploy agentic workflow builders and LLM-assisted workflows that process user documents, triage tickets, or generate personalized insights without building complex scaffolding from scratch.',
      },
      {
        title: 'Operations Leads Drowning in Manual Data Entry',
        description:
          'Your team spends hours copying data between forms, spreadsheets, CRMs, and email inboxes. I automate these repetitive processes so your team can focus on high-leverage strategic work.',
      },
      {
        title: 'Enterprises Requiring Complete Data Sovereignty',
        description:
          'You handle sensitive customer or financial data that cannot pass through multi-tenant US cloud servers. With self-hosted n8n, all data stays strictly on your private, GDPR-compliant infrastructure.',
      },
    ],
  },
  faq: {
    tag: '[ FAQ ]',
    title: 'Frequently Asked Questions About n8n & Workflow Automation',
    items: [
      {
        question: 'n8n vs Zapier vs Make: which should I use?',
        answer:
          'Zapier is simple for elementary 2-step tasks but becomes prohibitively expensive at scale. Make offers visual routing but retains usage tiers. n8n is the ultimate choice for technical teams and growing businesses: open-source, easily self-hosted, supports complex branching with custom JavaScript, and incurs zero per-execution costs while keeping all proprietary data on your private infrastructure.',
      },
      {
        question: 'n8n cloud vs self-hosted: what\'s the difference?',
        answer:
          'n8n Cloud is a managed subscription hosted on n8n’s servers with monthly execution caps. Self-hosted n8n is installed on your private Linux server via Docker. Self-hosting grants total data privacy, eliminates task execution limits, enables direct database connections, and allows local AI models, costing only the base VPS fee (typically $10–$20/month).',
      },
      {
        question: 'n8n community vs enterprise edition: which do I need?',
        answer:
          'The n8n Community Edition is free, open-source, and includes all core nodes, AI agent tools, and webhook features needed by 95% of businesses. The Enterprise Edition adds SSO authentication, advanced role-based access control (RBAC), and external audit logs, which are primarily necessary for large corporate compliance teams.',
      },
      {
        question: 'How do you ensure self-hosted n8n remains reliable and secure?',
        answer:
          'I configure production n8n deployments with PostgreSQL (never fragile SQLite), automatic SSL certificates, Docker restart policies, and daily off-site database backups. I also configure webhook secret validation, environment-level credential encryption, and dedicated error-handling notification pipelines.',
      },
      {
        question: 'Can n8n connect to my internal custom database or proprietary software?',
        answer:
          'Yes. Because n8n provides native PostgreSQL, MySQL, and MongoDB nodes alongside HTTP Request and Code nodes, I can connect it directly to your private databases, custom APIs, internal microservices, and private webhook endpoints behind your firewall.',
      },
    ],
  },
  cta: {
    headline: 'Ready to Streamline Operations with a Dedicated n8n Developer?',
    subheadline:
      'Eliminate manual busywork, reduce software expenses, and harness AI workflow automation on your terms. Schedule an automation consultation today.',
    buttonText: "Let's automate with n8n",
  },
  relatedServiceSlugs: [
    'web-application-development',
    'django-python-development',
    'wordpress-development',
  ],
};
