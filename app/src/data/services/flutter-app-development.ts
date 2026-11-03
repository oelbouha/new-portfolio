/**
 * Service: Custom Mobile Application Development (Flutter)
 * Primary Keyword: "custom mobile application development"
 * Secondary Keywords: iOS mobile app development services, hybrid mobile app development services, hire iPhone app developer, app design services, mobile UI design services
 * Differentiator: Single codebase for iOS and Android via Flutter.
 */

import type { ServiceDetail } from '../types';
import { siteConfig } from '../site';
import { keywords } from '../keywords';

export const flutterAppDevelopment: ServiceDetail = {
  slug: 'flutter-app-development',
  title: 'Custom Mobile Application Development',
  navLabel: 'Flutter Mobile',
  shortDescription:
    'Cross-platform mobile application development with Flutter and Dart. Native performance, adaptive layouts, and a single maintainable codebase for iOS and Android.',
  seo: {
    title: 'Custom Mobile Application Development | Outman Elbouhali',
    description:
      'Custom mobile application development with Flutter for iOS and Android. High-performance hybrid mobile app development services and app design services.',
    path: '/services/flutter-app-development',
    ogImage: siteConfig.defaultOgImage,
    primaryKeyword: keywords.flutterDev.primary,
    secondaryKeywords: keywords.flutterDev.secondary,
    schemaType: 'Service',
  },
  hero: {
    badge: '// MOBILE APP SPECIALIST',
    headline: 'Custom Mobile Application Development with Flutter',
    subheadline:
      'Ship your mobile product simultaneously to the Apple App Store and Google Play using a single unified Flutter codebase that guarantees 60fps native performance.',
    ctaButton: 'Build your mobile app',
    image: {
      src: '/images/atlas/atlass.jpeg',
      alt: 'Custom mobile application development interface on iOS and Android devices',
    },
  },
  deliverables: {
    tag: '[ DELIVERABLES ]',
    title: 'Native-Grade Mobile Deliverables for iOS & Android',
    items: [
      {
        title: 'Unified iOS & Android Mobile Apps',
        description:
          'Complete cross-platform applications delivering native look and feel on iPhones and Android devices. One clean Flutter codebase cuts development timelines and maintenance overhead in half.',
      },
      {
        title: 'Mobile UI Design Services & Architecture',
        description:
          'Bespoke, human-centered mobile user interfaces featuring fluid gesture interactions, custom widget libraries, dynamic typography, and dark/light mode support adhering to iOS Human Interface and Material Guidelines.',
      },
      {
        title: 'Offline-First Storage & Local Sync',
        description:
          'Resilient data architecture using Hive, SQLite, or ObjectBox with background sync, allowing your users uninterrupted access to their data even under unstable cellular connectivity.',
      },
      {
        title: 'Secure Authentication & Payment Processing',
        description:
          'Biometric Face ID / fingerprint login, OAuth (Apple, Google, GitHub), Apple In-App Purchases, Google Play Billing, Stripe mobile SDK, and token-based API authentication.',
      },
      {
        title: 'Real-Time Features & Push Notifications',
        description:
          'Instant messaging, live geolocation tracking, WebSocket subscriptions, and targeted push notification orchestration through Firebase Cloud Messaging (FCM) and OneSignal.',
      },
      {
        title: 'App Store & Google Play Submission',
        description:
          'End-to-end release management: signing certificates, provisioning profiles, store listing metadata, screenshot preparation, and navigating Apple Review guidelines to guaranteed approval.',
      },
    ],
  },
  techStack: {
    tag: '[ TECH STACK ]',
    title: 'The Modern Flutter & Mobile Ecosystem',
    items: [
      {
        category: 'Framework & Core',
        technologies: [
          'Flutter 3.x',
          'Dart',
          'Bloc / Cubit State Management',
          'Provider & Riverpod',
          'Clean Architecture Pattern',
        ],
      },
      {
        category: 'Backend & Services',
        technologies: [
          'Firebase (Auth, Firestore, Cloud Functions)',
          'Django REST APIs',
          'Supabase',
          'RESTful Endpoints & WebSockets',
          'PostgreSQL',
        ],
      },
      {
        category: 'Native & Tooling',
        technologies: [
          'Xcode & Android Studio',
          'CocoaPods & Gradle',
          'Fastlane Automated Deployments',
          'Sentry Performance Monitoring',
        ],
      },
    ],
  },
  process: {
    tag: '[ HOW A MOBILE PROJECT RUNS ]',
    title: 'From Wireframe to App Store Deployment',
    steps: [
      {
        step: '01',
        title: 'UX Flow & Interaction Mapping',
        duration: 'Week 1',
        description:
          'We blueprint every user flow, screen transition, and permission prompt. I deliver mobile UI design services wireframes highlighting tactile gesture zones and ergonomic navigation.',
      },
      {
        step: '02',
        title: 'Flutter Foundation & Core Architecture',
        duration: 'Weeks 2 — 3',
        description:
          'Setting up Bloc state management, dependency injection, theme systems, and reusable widget primitives. The foundational user authentication and profile flows are delivered.',
      },
      {
        step: '03',
        title: 'API Integration, Offline Sync & Hardware Features',
        duration: 'Weeks 4 — 6',
        description:
          'Connecting your backend REST APIs, camera and photo library access, push notification listeners, local persistence caches, and payment gateways with error-boundary recovery.',
      },
      {
        step: '04',
        title: 'TestFlight, Beta Testing & Store Publishing',
        duration: 'Weeks 7 — 8',
        description:
          'Distributing builds to your team and stakeholders via Apple TestFlight and Google Play Internal Testing. We iron out edge cases and submit for official App Store review.',
      },
    ],
  },
  relevantProjectTags: ['flutter-app-development'],
  audience: {
    tag: '[ WHO THIS IS FOR ]',
    title: 'Built for Founders Needing Reliable Mobile Execution',
    items: [
      {
        title: 'Startup Founders Launching Their First App',
        description:
          'You need to release on both iOS and Android simultaneously without hiring two separate native development teams or exhausting your seed capital on redundant engineers.',
      },
      {
        title: 'Established Web Businesses Expanding to Mobile',
        description:
          'You have a successful web platform and want to provide your active user base with a fast, dedicated mobile experience that keeps engagement high via push notifications.',
      },
      {
        title: 'Teams Seeking High-Performance Hybrid Mobile App Development',
        description:
          'You want the engineering efficiency of cross-platform code without the clunky web-view performance compromises of older hybrid toolkits. Flutter renders directly via Skia / Impeller.',
      },
      {
        title: 'Companies Requiring Dedicated iPhone & Android Expertise',
        description:
          'You need a developer who understands native platform conventions, background tasks, App Store guidelines, and mobile performance profiling down to the hardware level.',
      },
    ],
  },
  faq: {
    tag: '[ FAQ ]',
    title: 'Frequently Asked Questions About Flutter Development',
    items: [
      {
        question: 'Why choose Flutter for custom mobile application development over native Swift and Kotlin?',
        answer:
          'Flutter compiles directly to native ARM machine code using Google’s Impeller rendering engine, ensuring silky 60fps to 120fps animations. Choosing Flutter allows you to share over 95% of your codebase between iOS and Android. This drastically slashes development costs, speeds up time-to-market, and prevents feature parity bugs between platforms.',
      },
      {
        question: 'Do Flutter apps feel truly native to iOS and Android users?',
        answer:
          'Yes. Flutter allows adaptive widget rendering that automatically matches platform idioms—such as Cupertino navigation bars on iPhones and Material 3 transitions on Android. Users cannot distinguish a meticulously engineered Flutter app from one built in pure Swift or Kotlin.',
      },
      {
        question: 'Can you handle the entire Apple App Store and Google Play review process?',
        answer:
          'Yes, completely. I configure your Apple Developer and Google Play Console accounts, set up cryptographic distribution certificates and provisioning profiles, write App Store privacy declarations, prepare marketing screenshots, and resolve any feedback or guidelines questions from Apple reviewers.',
      },
      {
        question: 'How do you handle backend integration and API communication?',
        answer:
          'I connect Flutter apps to custom Django, Node.js, or Firebase backends using typed API repositories, interceptors for JWT token refreshes, and automatic request caching. If you do not yet have a backend, I can engineer your server APIs concurrently.',
      },
      {
        question: 'What happens when Apple or Google release new OS versions?',
        answer:
          'Because Flutter is maintained actively by Google and backed by an enormous global ecosystem, major iOS and Android updates are supported immediately. I build with clean, decoupled state architectures that make future SDK bumps simple and stress-free.',
      },
    ],
  },
  cta: {
    headline: 'Ready to Launch Your iOS & Android Mobile App?',
    subheadline:
      'Let’s turn your mobile product concept into a high-performance cross-platform application. Schedule a technical discovery session today.',
    buttonText: "Let's talk mobile apps",
  },
  relatedServiceSlugs: [
    'web-application-development',
    'django-python-development',
    'n8n-automation',
  ],
};
