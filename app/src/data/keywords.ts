/**
 * Exact keyword strategy per page.
 * Derived strictly from specification guidelines.
 * Imported by each page's SEO configuration block.
 */

export interface PageKeywords {
  primary: string;
  secondary: string[];
  faqQuestions?: string[];
}

export const keywords: Record<string, PageKeywords> = {
  home: {
    primary: 'full stack web and mobile app developer',
    secondary: [
      'custom web application development',
      'MVP development services',
      'cross-platform mobile apps',
      'backend architecture',
      'workflow automation',
    ],
  },
  servicesOverview: {
    primary: 'web and mobile app development services',
    secondary: [
      'custom web development',
      'mobile app engineering',
      'Django backend consulting',
      'n8n workflow automation',
      'custom WordPress development',
    ],
  },
  webAppDev: {
    primary: 'custom web development',
    secondary: [
      'responsive website development',
      'startup web app development',
      'custom website design',
      'affordable web developers',
      'website design services',
    ],
  },
  flutterDev: {
    primary: 'custom mobile application development',
    secondary: [
      'iOS mobile app development services',
      'hybrid mobile app development services',
      'hire iPhone app developer',
      'app design services',
      'mobile UI design services',
    ],
  },
  djangoDev: {
    primary: 'hire Django expert',
    secondary: [
      'Django consulting',
      'hire Django web developers',
      'hire Django REST framework developers',
      'Python development',
      'Django development team',
    ],
  },
  wordpressDev: {
    primary: 'WordPress theme development service',
    secondary: [
      'hire WordPress theme developer',
      'hire dedicated WordPress developer',
      'WordPress speed optimization',
      'enterprise WordPress development',
      'Elementor expert',
    ],
  },
  n8nDev: {
    primary: 'n8n developer',
    secondary: [
      'n8n consulting',
      'workflow consultants',
      'AI agents integration',
      'AI agent development',
      'agentic workflow builder',
      'workflow automation with AI',
      'automated workflow tools for scaling manual processes',
      'hire CRM integration specialists',
    ],
    faqQuestions: [
      'n8n vs Zapier vs Make: which should I use?',
      'n8n cloud vs self-hosted: what\'s the difference?',
      'n8n community vs enterprise edition: which do I need?',
    ],
  },
  about: {
    primary: 'Outman Elbouhali full-stack developer',
    secondary: [
      'freelance full-stack engineer',
      'React and Django engineer',
      'software engineering background',
      'cross-platform mobile developer',
    ],
  },
  projects: {
    primary: 'full stack web and mobile portfolio',
    secondary: [
      'React project case studies',
      'Django production applications',
      'Flutter mobile applications',
      'n8n automation case studies',
    ],
  },
  contact: {
    primary: 'hire full stack developer',
    secondary: [
      'software development consultation',
      'request a project quote',
      'freelance developer contact',
    ],
  },
  notFound: {
    primary: 'page not found',
    secondary: [],
  },
};
