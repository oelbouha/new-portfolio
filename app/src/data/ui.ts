/**
 * Micro-copy, form labels, button texts, status messages, and aria accessibility labels.
 */

import type { UiStrings } from './types';

export const ui: UiStrings = {
  buttons: {
    sayHello: 'say hello',
    letsTalk: "let's talk",
    bookCall: 'BOOK A CALL',
    sendMsg: 'Send message →',
    backHome: 'Back home',
    visitWebsite: 'Visit website',
    openProject: 'OPEN PROJECT',
    continueBrowsing: 'Continue browsing →',
    allProjects: 'VIEW ALL PROJECTS',
    viewAllServices: 'EXPLORE ALL SERVICES',
    exploreService: 'Explore service →',
  },
  labels: {
    credits: 'CREDITS',
    servicesScope: 'SERVICES / SCOPE',
    projectOverview: 'PROJECT OVERVIEW',
    client: 'CLIENT',
    year: 'YEAR',
    stack: 'TECH STACK',
    nextProject: 'NEXT PROJECT',
    projectInfo: 'Project info',
    strategyInsight: 'PROJECT STRATEGY & INSIGHT',
    selectedProjects: 'SELECTED PROJECTS',
    playground: 'PLAYGROUND',
    portfolioBadge: 'PORTFOLIO',
    servicesTag: '[ SERVICES & EXPERTISE ]',
    faqTag: '[ FREQUENTLY ASKED QUESTIONS ]',
    processTag: '[ HOW A PROJECT RUNS ]',
    deliverablesTag: '[ WHAT I DELIVER ]',
    techStackTag: '[ TOOLS & TECHNOLOGIES ]',
    audienceTag: '[ WHO THIS IS FOR ]',
    relatedServicesTag: '[ COMPLEMENTARY SERVICES ]',
    relevantProjectsTag: '[ CASE STUDIES & CODE ]',
  },
  contactModal: {
    badge: '// GET IN TOUCH',
    headlineLine1: "LET'S WORK",
    headlineLine2: 'TOGETHER',
    subheadlineLine1: "WORK WITH ME IF AVERAGE ISN'T YOUR THING.",
    subheadlineLine2: "DROP YOUR VISION, I'LL BUILD IT.",
    spotlightImage: '/images/call-to-action/lets work.jpeg',
    fields: {
      nameLabel: 'Name',
      namePlaceholder: 'Your Name or Company',
      emailLabel: 'Email',
      emailPlaceholder: 'hello@yourcompany.com',
      interestLabel: 'Interest',
      interestOptions: [
        'Custom Web App',
        'Mobile Development',
        'Django Consulting',
        'n8n Automation',
        'WordPress Solution',
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your product, timeline, and goals…',
    },
    success: {
      title: 'Thank you!',
      message: "I have received your note and will review it promptly within 24 hours.",
    },
  },
  notFound: {
    badge: 'Page not found',
    code: '404',
    message: 'The page you requested could not be found or has moved.',
    button: 'Back home',
  },
  preloader: {
    portfolio: 'Portfolio',
    loading: 'Loading',
    status: 'Crafting your experience',
  },
};
