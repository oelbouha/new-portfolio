/**
 * Layout configuration: fixed navigation, fullscreen menu, and footer.
 */

import type { LayoutConfig } from './types';
import { siteConfig } from './site';

export const layoutConfig: LayoutConfig = {
  navbar: {
    brandName: 'OUTMAN',
    brandHoverText: 'Home',
    tickerText: 'I turn ideas into production-ready products.',
    clocks: [
      { city: 'Tétouan, Morocco', tz: 'Africa/Casablanca' },
    ],
    ctaLabel: "LET'S TALK!",
    ctaHoverLabel: 'CONTACT',
    menuLabel: 'MENU',
    menuOpenLabel: 'OPEN',
    menuCloseLabel: 'CLOSE',
    themeDarkLabel: 'DARK MODE',
    themeLightLabel: 'LIGHT MODE',
  },
  fullscreenMenu: {
    tagline: 'WE CRAFT BOLD DESIGN & CLEAN CODE.',
    locationName: 'MOROCCO',
    col1: [
      {
        label: 'HOME',
        href: '/',
        img: '/images/call-to-action/home.jpeg',
      },
      {
        label: 'SERVICES',
        href: '/services',
        img: '/images/call-to-action/services.jpeg',
      },
      {
        label: 'WORK',
        href: '/work',
        img: '/images/call-to-action/work.jpeg',
      },
      {
        label: 'ABOUT',
        href: '/about',
        img: '/images/call-to-action/about.jpeg',
      },
    ],
    col2: [
      {
        label: 'WEB APP',
        href: '/services/web-application-development',
        img: '/images/skatys/skatys.jpeg',
      },
      {
        label: 'MOBILE APP',
        href: '/services/flutter-app-development',
        img: '/images/atlas/atlass.jpeg',
      },
      {
        label: 'DJANGO API',
        href: '/services/django-python-development',
        img: '/images/pong/pong thumbnail.jpeg',
      },
      {
        label: 'AUTOMATION',
        href: '/services/n8n-automation',
        img: '/images/call-to-action/n8n Automation Workflow .png',
      },
      {
        label: 'WORDPRESS',
        href: '/services/wordpress-development',
        img: '/images/salad/salad recipes.png',
      },
    ],
  },
  footer: {
    techStacks: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Flutter',
      'Django',
      'Python',
      'Tailwind CSS',
      'PostgreSQL',
      'Docker',
      'n8n Automation',
      'Node.js',
      'REST APIs',
      'GSAP Animations',
      'GraphQL',
      'Figma',
      'Git / CI/CD',
    ],
    banner: {
      subtitle: "Let's talk!",
      headingLine1: 'Ready for your',
      headingLine2: 'next product?',
      buttonText: 'BOOK A CALL',
      avatar: {
        src: '/profile.png',
        alt: 'Outman Elbouhali - Full Stack Developer',
      },
    },
    brandBadge: {
      icon: {
        src: '/images/icon.png',
        alt: 'Outman Elbouhali Logo Emblem',
      },
      symbol: '⚡',
      text: 'Full Stack & Mobile Pro',
    },
    columns: [
      {
        title: 'Pages',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Projects', href: '/work' },
          { label: 'About me', href: '/about' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Custom Web Apps', href: '/services/web-application-development' },
          { label: 'Flutter Mobile', href: '/services/flutter-app-development' },
          { label: 'Django / Python', href: '/services/django-python-development' },
          { label: 'n8n Automation', href: '/services/n8n-automation' },
          { label: 'WordPress & CMS', href: '/services/wordpress-development' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'GitHub', href: siteConfig.socialLinks.github, external: true },
          { label: 'LinkedIn', href: siteConfig.socialLinks.linkedin, external: true },
          { label: 'Email', href: siteConfig.socialLinks.email, external: true },
        ],
      },
    ],
    bottomRow: {
      copyright: `© 2026 | ${siteConfig.name}`,
      legalNotice: 'Independent Engineering & Architecture',
      location: siteConfig.location,
    },
  },
};
