/**
 * Home page data and SEO definition.
 * Controls hero words, intro headline, teaser sections, and main schema.
 */

import type { HomePage } from '../types';
import { siteConfig } from '../site';
import { keywords } from '../keywords';

export const home: HomePage = {
  seo: {
    title: 'Full Stack Web & Mobile App Development | Outman Elbouhali',
    description:
      'Independent Full Stack Developer specializing in custom web development, Flutter cross-platform mobile apps, Django APIs, and n8n workflow automation.',
    path: '/',
    ogImage: siteConfig.defaultOgImage,
    primaryKeyword: keywords.home.primary,
    secondaryKeywords: keywords.home.secondary,
    schemaType: 'Person',
  },
  hero: {
    words: ['I BUILD', 'DIGITAL', 'PRODUCTS'],
  },
  intro: {
    tag: '[ FULL-STACK DEVELOPER ]',
    statement:
      'FULL STACK WEB AND MOBILE APP DEVELOPMENT — FROM FRONTEND TO BACKEND, MOBILE TO AUTOMATION. I TURN IDEAS INTO PRODUCTS THAT ACTUALLY WORK.',
  },
  video: {
    src: 'https://studionamma.vercel.app/videos/cut/video-matera2.webm',
    type: 'video/webm',
  },
  playground: {
    label: 'SELECTED PROJECTS',
    title: 'PLAYGROUND',
    badge: 'PORTFOLIO',
    href: '/work',
  },
  servicesTeaser: {
    title: 'SERVICES',
    items: [
      {
        slug: 'web-application-development',
        name: 'Web Development',
        sub: 'React / Next.js',
        image: {
          src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=480&q=80',
          alt: 'Custom web application engineering preview',
        },
      },
      {
        slug: 'wordpress-development',
        name: 'WordPress & CMS',
        sub: 'Custom Themes',
        image: {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80',
          alt: 'WordPress theme development and CMS architecture',
        },
      },
      {
        slug: 'django-python-development',
        name: 'Backend Engineering',
        sub: 'Django / REST APIs',
        image: {
          src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=480&q=80',
          alt: 'Django and Python backend engineering',
        },
      },
      {
        slug: 'flutter-app-development',
        name: 'Mobile Development',
        sub: 'Flutter / iOS & Android',
        image: {
          src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=480&q=80',
          alt: 'Flutter mobile application development for iOS and Android',
        },
      },
      {
        slug: 'web-application-development',
        name: 'MVP Development',
        sub: 'Build & Launch Fast',
        image: {
          src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=480&q=80',
          alt: 'Rapid startup MVP development and prototyping',
        },
      },
      {
        slug: 'n8n-automation',
        name: 'Automation & AI',
        sub: 'n8n / Self-Hosted',
        image: {
          src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&q=80',
          alt: 'n8n workflow automation and AI agent pipelines',
        },
      },
    ],
  },
  aboutTeaser: {
    label: 'About',
    title: 'Full-Stack Developer. Product Builder.',
    paragraph1:
      "I'm Outman Elbouhali, a full-stack developer based in Morocco. I build web and mobile applications using React, Next.js, Django, PostgreSQL, and Flutter — taking products from architecture and UI to APIs, databases, integrations, and deployment.",
    paragraph2:
      'I also build automation workflows with n8n, Make, and Zapier, and work with WordPress when a content-driven or business website is the right solution. My focus is simple: clean code, solid architecture, good UX, and products that are built to grow.',
  },
  cta: {
    desc: "Have an idea, a product to build, or a workflow to automate?\nLet's make it real.",
    buttonText: 'say hello',
    line1: "LET'S BUILD",
    line2: 'TOGETHER',
  },
};
