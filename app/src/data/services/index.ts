/**
 * Services Registry & /services Overview Page Content.
 * Central single source of truth for all service routes, navigation dropdowns,
 * footer links, overview cards, sitemap generation, and JSON-LD schemas.
 *
 * To add a new service:
 * 1. Create a service file in src/data/services/<slug>.ts implementing ServiceDetail.
 * 2. Import and append it to the servicesRegistry array below.
 */

import type { ServiceDetail, ServicesOverviewPage } from '../types';
import { siteConfig } from '../site';
import { keywords } from '../keywords';

import { webApplicationDevelopment } from './web-application-development';
import { flutterAppDevelopment } from './flutter-app-development';
import { djangoPythonDevelopment } from './django-python-development';
import { n8nAutomation } from './n8n-automation';
import { wordpressDevelopment } from './wordpress-development';

// The Central Registry of all active services
export const servicesRegistry: ServiceDetail[] = [
  webApplicationDevelopment,
  flutterAppDevelopment,
  djangoPythonDevelopment,
  n8nAutomation,
  wordpressDevelopment,
];

// Helper to find a service by its slug
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesRegistry.find((s) => s.slug === slug);
}

// Services Overview Page Content & SEO definition
export const servicesOverviewPage: ServicesOverviewPage = {
  seo: {
    title: 'Web and Mobile App Development Services | Outman Elbouhali',
    description:
      'Professional web and mobile app development services by Outman Elbouhali. Custom web apps, Flutter iOS & Android apps, Django APIs, and n8n automations.',
    path: '/services',
    ogImage: siteConfig.defaultOgImage,
    primaryKeyword: keywords.servicesOverview.primary,
    secondaryKeywords: keywords.servicesOverview.secondary,
    schemaType: 'Service',
  },
  hero: {
    badge: '// ENGINEERING & CONSULTING CAPABILITIES',
    title: 'Web and Mobile App Development Services',
    subtitle:
      'I engineer high-performance web applications, cross-platform mobile apps, scalable backend APIs, and automated business workflows for startups and growing businesses.',
    ctaButton: 'Discuss your project',
  },
  intro: {
    tag: '[ ARCHITECTURE & EXECUTION ]',
    statement:
      'FROM ARCHITECTURE TO PRODUCTION — PRODUCTION-GRADE CODE, HIGH-PERFORMANCE INTERFACES, AND PURPOSE-BUILT AUTOMATION.',
  },
  faq: {
    tag: '[ SERVICES FAQ ]',
    title: 'Frequently Asked Questions About My Services',
    items: [
      {
        question: 'What types of development services do you offer?',
        answer:
          'I offer five focused services: custom web application development (React/Next.js), cross-platform mobile app development (Flutter for iOS & Android), backend API architecture (Django/Python), self-hosted workflow automation (n8n & AI agents), and custom WordPress theme development.',
      },
      {
        question: 'How do you work with clients across different time zones?',
        answer:
          'Based in Morocco (GMT+1), my working hours overlap cleanly with European, Middle Eastern, and North American business days. I communicate through Slack, Discord, email, and scheduled video check-ins, providing clear weekly progress demos and asynchronous updates.',
      },
      {
        question: 'Can you help with both new products and existing codebases?',
        answer:
          'Yes. I specialize in building new MVPs and full products from the ground up, as well as stepping into established codebases to audit architecture, optimize database latency, add critical features, or automate backend workflows.',
      },
      {
        question: 'How are projects priced and billed?',
        answer:
          'I work on milestone-based fixed contracts for clearly scoped projects, or weekly/monthly retainers for ongoing feature engineering and consulting. All pricing is transparent with clear deliverable acceptance criteria and zero surprise add-on charges.',
      },
    ],
  },
  cta: {
    line1: "LET'S BUILD",
    line2: 'YOUR PRODUCT',
    desc: 'Have a product to launch or an operation to automate? Let’s talk about your roadmap.',
    buttonText: 'Start a project conversation',
  },
};
