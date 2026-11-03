/**
 * Service: Custom Web Application Development
 * Primary Keyword: "custom web development"
 * Secondary Keywords: responsive website development, startup web app development, custom website design, affordable web developers, website design services
 */

import type { ServiceDetail } from '../types';
import { siteConfig } from '../site';
import { keywords } from '../keywords';

export const webApplicationDevelopment: ServiceDetail = {
  slug: 'web-application-development',
  title: 'Custom Web Development Services',
  navLabel: 'Custom Web Apps',
  shortDescription:
    'Full-stack custom web development for SaaS founders and startups. Scalable React and Next.js applications engineered for speed, clean architecture, and conversion.',
  seo: {
    title: 'Custom Web Development Services | Outman Elbouhali',
    description:
      'Custom web development for startups and ambitious businesses. Scalable React and Next.js web applications, responsive website development, and APIs.',
    path: '/services/web-application-development',
    ogImage: siteConfig.defaultOgImage,
    primaryKeyword: keywords.webAppDev.primary,
    secondaryKeywords: keywords.webAppDev.secondary,
    schemaType: 'Service',
  },
  hero: {
    badge: '// FULL-STACK ENGINEERING',
    headline: 'Custom Web Development for Scalable Products',
    subheadline:
      'I engineer production-grade web applications from architecture and interactive UI to database schemas, third-party integrations, and automated cloud deployments.',
    ctaButton: 'Start your web project',
    image: {
      src: '/images/skatys/Skatys Website .png',
      alt: 'Custom web development dashboard and architecture showcase',
    },
  },
  deliverables: {
    tag: '[ DELIVERABLES ]',
    title: 'What I Build for Web Platforms',
    items: [
      {
        title: 'Full-Stack SaaS Applications',
        description:
          'End-to-end software applications with multi-tenant architectures, role-based authentication, real-time dashboards, billing and subscription hooks, and robust database layers.',
      },
      {
        title: 'Startup Web App Development & MVPs',
        description:
          'Fast turnaround MVPs engineered with maintainable foundations. I build functional, high-velocity web products that allow startup founders to test hypotheses and onboard paying customers without technical debt.',
      },
      {
        title: 'Responsive Website Development',
        description:
          'Pixel-perfect, fluid layouts built with modern Tailwind CSS and semantic markup that guarantee flawless performance and interaction on mobile phones, tablets, and high-resolution desktop displays.',
      },
      {
        title: 'Custom Website Design & Design Systems',
        description:
          'Translating brand identity into structured component libraries using modern typography, dark and light mode themes, micro-interactions, and accessible UI primitives.',
      },
      {
        title: 'API Integrations & Payment Gateways',
        description:
          'Secure integrations with Stripe, PayPal, Lemon Squeezy, headless CMS platforms, customer messaging services, transactional email providers, and webhooks.',
      },
      {
        title: 'Performance Optimization & Core Web Vitals',
        description:
          'Sub-second initial page loads, optimal bundle splitting, font rendering strategies, asset preloading, and Lighthouse scores consistently exceeding 95 across all core audit categories.',
      },
    ],
  },
  techStack: {
    tag: '[ TECH STACK ]',
    title: 'Modern, Battle-Tested Web Technologies',
    items: [
      {
        category: 'Frontend & UI',
        technologies: [
          'React 19',
          'Next.js (App Router)',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
          'GSAP',
          'Radix UI Primitives',
        ],
      },
      {
        category: 'Backend & Data',
        technologies: [
          'Node.js',
          'Django REST Framework',
          'PostgreSQL',
          'Redis Caching',
          'Prisma ORM',
          'REST & GraphQL APIs',
        ],
      },
      {
        category: 'Deployment & DevOps',
        technologies: [
          'Docker Containers',
          'Linux VPS & NGINX',
          'Vercel Edge Network',
          'GitHub Actions CI/CD',
          'Cloudflare CDN & SSL',
        ],
      },
    ],
  },
  process: {
    tag: '[ PROJECT WORKFLOW ]',
    title: 'How a Web Project Runs From Concept to Launch',
    steps: [
      {
        step: '01',
        title: 'Technical Discovery & Architecture',
        duration: 'Week 1',
        description:
          'We review your product goals, user journeys, data entities, and integration requirements. I deliver a comprehensive technical roadmap, database schema, and architectural specification.',
      },
      {
        step: '02',
        title: 'Interactive UI & Component Foundations',
        duration: 'Weeks 2 — 3',
        description:
          'I establish the component system, responsive layouts, theme context, and design tokens. Core views are built with interactive micro-animations and zero dummy layouts.',
      },
      {
        step: '03',
        title: 'Backend Logic, APIs & Database Integration',
        duration: 'Weeks 3 — 5',
        description:
          'I implement secure user authentication, CRUD operations, database queries, webhooks, and third-party service connections, validating data integrity with rigorous typing.',
      },
      {
        step: '04',
        title: 'Testing, Hardening & Production Launch',
        duration: 'Week 6',
        description:
          'Cross-device responsive testing, performance benchmarking, Lighthouse optimization, domain and SSL configuration, and zero-downtime deployment to your hosting environment.',
      },
    ],
  },
  relevantProjectTags: ['web-application-development'],
  audience: {
    tag: '[ WHO THIS IS FOR ]',
    title: 'Tailored Solutions for Founders and Digital Teams',
    items: [
      {
        title: 'Early-Stage Startups & Solo Founders',
        description:
          'You need an engineering partner who can translate your product vision into a live, scalable MVP without hiring an expensive agency or managing disparate contractors.',
      },
      {
        title: 'SaaS Companies Scaling Features',
        description:
          'You already have traction and need a dedicated full-stack developer to architect new customer dashboards, optimize frontend latency, or refactor legacy codebases.',
      },
      {
        title: 'Digital Agencies Needing Senior Execution',
        description:
          'You have demanding client deliverables and need reliable, high-standard frontend and full-stack execution that hits deadlines and follows strict code standards.',
      },
      {
        title: 'Businesses Modernizing Manual Operations',
        description:
          'You want to replace spreadsheets and disconnected off-the-shelf software with a custom web application designed around your company’s exact operational workflows.',
      },
    ],
  },
  faq: {
    tag: '[ FAQ ]',
    title: 'Frequently Asked Questions About Web Development',
    items: [
      {
        question: 'Why hire an independent developer instead of an agency for custom web development?',
        answer:
          'Working with me gives you direct access to the senior engineer building your codebase. There are no project managers diluting communication, no hidden overhead fees, and no junior staff assigned to your project. You get faster iteration cycles, consistent engineering standards, and complete accountability from discovery through post-launch support.',
      },
      {
        question: 'How long does a typical startup web app development project take?',
        answer:
          'Most focused MVPs and custom web applications launch within 4 to 8 weeks depending on scope, authentication complexity, and third-party integrations. Because I work with modular React and Next.js architectures and pre-tested backend patterns, we move swiftly into user-facing testing without cutting technical corners.',
      },
      {
        question: 'Will I own all code, intellectual property, and deployment infrastructure?',
        answer:
          'Yes, 100%. All repository code, database migrations, configuration scripts, and documentation belong completely to you upon project milestone completion. I build using open-source, vendor-neutral tooling without proprietary lock-ins, so your team or future hires can easily build on the foundation.',
      },
      {
        question: 'How do you ensure responsive website development across all screen sizes?',
        answer:
          'I test layouts continuously across real iOS and Android mobile viewports, tablets, laptops, and ultra-wide desktop monitors. Using CSS grid, flexible flexbox primitives, and fluid typography, your application delivers an intuitive, thumb-friendly mobile experience alongside an expansive desktop dashboard.',
      },
      {
        question: 'Can you work with my existing design files or wireframes?',
        answer:
          'Absolutely. If you have Figma, Sketch, or Adobe XD mockups, I translate them with obsessive attention to spacing, hierarchy, and micro-interactions. If you only have wireframes or product specs, I provide website design services and interactive UI layouts tailored to your brand.',
      },
    ],
  },
  cta: {
    headline: 'Ready to Build Your Custom Web Application?',
    subheadline:
      'Let’s discuss your technical requirements, architectural options, and launch timeline. Book a direct discovery call today.',
    buttonText: "Let's talk web development",
  },
  relatedServiceSlugs: [
    'django-python-development',
    'flutter-app-development',
    'n8n-automation',
  ],
};
