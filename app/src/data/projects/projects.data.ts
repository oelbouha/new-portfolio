
import type { Project } from './projects.types';

export const projectsData: Project[] = [
  {
    slug: 'skatys',
    title: 'Skatys',
    category: 'Full Stack Web App',
    year: '2026',
    tagline: 'The modern freelance marketplace built for speed.',
    description:
      'A freelance full-stack platform built with Next.js and Django, containerized with Docker on a production VPS.',
    overview:
      'Skatys is a custom-engineered web application combining a hyper-fast Next.js frontend with a robust Django REST backend. Deployed on a Linux VPS using Docker containers and NGINX reverse proxy for high security and performance.',
    conclusion:
      'Delivered a production-ready freelance platform with high-speed rendering, seamless API integration, and custom UI components.',
    thumbnail: '/images/skatys/skatys lab.png',
    heroImage: '/images/skatys/skatys.jpeg',
    coverImage: '/images/skatys/skatys.jpeg',
    images: [
      '/images/skatys/Screen Shot 2026-07-02 at 6.19.09 PM.png',
      '/images/skatys/mobile 1.jpeg',
      '/images/skatys/mobile.jpeg',
      '/images/skatys/skatys 2.jpeg',
      '/images/skatys/mobile 1.jpeg',
    ],
    services: [
      'Web Architecture',
      'Next.js Frontend',
      'Django API',
      'Docker VPS Setup',
    ],
    client: 'Skatys Inc.',
    website: 'https://skatys.com/',
    tags: ['Freelance', 'Next.js', 'Django', 'Docker', 'PostgreSQL'],
    link: 'https://skatys.com/',
    quote:
      'An exceptional team that transformed our vision into a high-performance platform. Delivered beyond expectations.',
    quoteAuthor: 'Skatys Inc.',
    quoteRole: 'Product Owner',
    credits: [
      { role: 'Full Stack Development', name: 'Outman El Bouhali' },
      { role: 'Architecture & DevOps', name: 'Outman El Bouhali' },
      { role: 'UI/UX Design', name: 'Outman El Bouhali' },
    ],
  },

  {
    slug: 'revo',
    title: 'Revo',
    category: 'React Web Application',
    year: '2025',
    tagline: 'A modern web experience built with React.',
    description:
      'A responsive web application built with React.js, focused on modern UI, reusable components, and a smooth user experience.',
    overview:
      'Revo is a modern web application developed with React.js. The project focuses on building a responsive and scalable frontend architecture using reusable components, clean UI patterns, and optimized rendering for a smooth experience across different screen sizes.',
    conclusion:
      'Delivered a responsive React.js web application with a reusable component architecture, polished interface, and strong focus on performance and user experience.',
    thumbnail: '/images/revo/revo lab.png',
    heroImage: '/images/revo/revo thumbnail.jpeg',
    coverImage: '/images/revo/revo4.jpeg',
    images: [
      '/images/revo/revo.jpeg',
            '/images/revo/revo.jpeg',

      '/images/revo/revoo.jpeg',
      // '/images/revo/revo mobile 3.jpeg',
      // '/images/revo/revo mobile 2.jpeg',
      // '/images/revo/revo mobile.jpeg',
      // '/images/revo/revo4.jpeg',
    ],
    services: [
      'React Development',
      'Frontend Architecture',
      'Responsive UI',
      'UI/UX Implementation',
    ],
    client: 'Revo',
    website: 'https://revo.com',
    tags: ['React.js', 'JavaScript', 'Frontend', 'Responsive Design'],
    link: 'https://github.com/oelbouha/Revo',
    quote:
      'Engineered with a modular component architecture focused on smooth UI state transitions, clean rendering patterns, and high-performance cross-device layout flexibility.',
    quoteAuthor: 'Architecture Note',
    quoteRole: 'Frontend Design & Technical Highlights',
    credits: [
      { role: 'Frontend Development', name: 'Outman El Bouhali' },
      { role: 'React Architecture', name: 'Outman El Bouhali' },
      { role: 'UI/UX Implementation', name: 'Outman El Bouhali' },
    ],
  },

  {
    slug: 'atlas',
    title: 'Atlas',
    category: 'Cross-Platform Mobile App',
    year: '2026',
    tagline: 'One Flutter application, built for mobile and TV.',
    description:
      'A cross-platform application built with Flutter, designed to run across Android phones and TV devices from a shared codebase.',
    overview:
      'Atlas is a cross-platform application developed with Flutter and Dart, designed to provide a consistent experience across Android smartphones and TV devices. The project focuses on responsive layouts, adaptive interfaces, and reusable Flutter components that scale across different screen sizes and interaction models.',
    conclusion:
      'Built a flexible Flutter application capable of adapting its interface across Android phones and TV platforms while maintaining a consistent and responsive user experience.',
    thumbnail: '/images/atlas/atlas book.jpeg',
    heroImage: '/images/atlas/atlass.jpeg',
    coverImage: '/images/atlas/atlass.jpeg',
    images: [
      '/images/atlas/atlass.jpeg',
      '/images/atlas/atlas 2.jpeg',
      // '/images/atlas/atlas.jpeg',
      '/images/atlas/atlas 1.jpeg',
    ],
    services: [
      'Flutter Development',
      'Android Development',
      'TV App Development',
      'Responsive UI',
    ],
    client: 'Atlas',
    website: '',
    tags: ['Flutter', 'Dart', 'Android', 'Android TV', 'Responsive UI'],
    link: '',
    quote:
      'Designed to seamlessly bridge mobile touch interaction and Android TV directional navigation using a single unified Flutter codebase.',
    quoteAuthor: 'Product Concept',
    quoteRole: 'Cross-Platform Strategy & UX Architecture',
    credits: [
      { role: 'Flutter Development', name: 'Outman El Bouhali' },
      { role: 'Cross-Platform Architecture', name: 'Outman El Bouhali' },
      { role: 'Responsive UI Development', name: 'Outman El Bouhali' },
    ],
  },

   {
    slug: 'pong-arena',
    title: 'Pong Arena',
    category: 'Full Stack Web App',
    year: '2024',
    tagline: 'Real-time multiplayer gaming built for the web.',
    description:
      'A full-stack multiplayer gaming platform built with Django and JavaScript, featuring real-time gameplay, WebSockets, and tournament management.',
    overview:
      'Pong Arena is a full-stack multiplayer web application built with Django and JavaScript. The platform combines a Django backend with a dynamic JavaScript frontend, using WebSockets to enable real-time multiplayer communication and gameplay. It also includes player management, matchmaking, and tournament functionality.',
    conclusion:
      'Built and delivered a complete real-time multiplayer platform, combining backend architecture, WebSocket communication, interactive game logic, and responsive frontend experiences.',
    thumbnail: '/images/pong/pong thumbnail.jpeg',
    heroImage: '/images/pong/pong thumbnail.jpeg',
    coverImage: '/images/pong/Create_a_mockup_2k_202602141753.jpeg',
    images: [
      '/images/pong/pongarena1.jpeg',
      '/images/pong/pongarena1.jpeg',
      '/images/pong/Create_a_mockup_2k_202602141751.jpeg',
    ],
    services: [
      'Full Stack Development',
      'Django Backend',
      'JavaScript Frontend',
      'WebSocket Architecture',
    ],
    client: '42 Network / Open Source',
    website: 'https://github.com/oelbouha/ft_transcendence',
    tags: ['Django', 'JavaScript', 'WebSockets', 'Full Stack'],
    link: 'https://github.com/oelbouha/ft_transcendence',
    quote:
      'A complete real-time multiplayer experience combining solid backend architecture with responsive gameplay.',
    quoteAuthor: '42 Network',
    quoteRole: 'Open Source Community',
    credits: [
      { role: 'Full Stack Development', name: 'Outman El Bouha' },
      { role: 'Real-Time Architecture', name: 'Outman El Bouha' },
      { role: 'Game Development', name: 'Outman El Bouha' },
    ],
  },
  
  {
    slug: 'habivio',
    title: 'Habivio',
    category: 'Mobile UX & Product',
    year: '2025',
    tagline: 'Mobile habit tracker & wellness interface built for daily engagement.',
    description:
      'A sleek habit tracking and personal wellness iOS & Android app built with React Native and modern micro-interactions.',
    overview:
      'Habivio is a mobile wellness platform designed to turn positive daily rituals into lasting habits. Featuring intuitive progress rings, streak analytics, and bespoke haptic feedback loops, the app provides a frictionless user experience that keeps users focused and motivated.',
    conclusion:
      'Engineered a polished cross-platform mobile application combining real-time progress visualization, offline-first data synchronization, and delightful micro-interactions.',
    thumbnail: '/images/habivio/habivio.png',
    heroImage: '/images/habivio/habivio.png',
    coverImage: '/images/habivio/habivio.png',
    images: [
      '/images/habivio/habivio.png',
      '/images/habivio/habivio 1.png',
      '/images/habivio/habivio 2.png',
      '/images/habivio/habivio 3.png',
    ],
    services: [
      'Mobile Product Design',
      'React Native Development',
      'UX Interaction Architecture',
      'Local Storage & Sync',
    ],
    client: 'Habivio Wellness',
    website: '',
    tags: ['Mobile UX', 'React Native', 'TypeScript', 'Wellness'],
    link: '',
    quote:
      'A masterclass in minimal, friction-free mobile product engineering with high-touch tactile feedback.',
    quoteAuthor: 'Product Review',
    quoteRole: 'Mobile UX & Interaction Design',
    credits: [
      { role: 'Mobile App Development', name: 'Outman El Bouhali' },
      { role: 'UI/UX Design', name: 'Outman El Bouhali' },
    ],
  },

  {
    slug: 'docker-vps',
    title: 'Docker VPS',
    category: 'Cloud & Infrastructure',
    year: '2025',
    tagline: 'VPS container orchestration & CI/CD deployment.',
    description:
      'Production VPS orchestration system leveraging Docker containers, NGINX reverse proxy, and automated CI/CD.',
    overview:
      'Designed and deployed a resilient server infrastructure on a Linux VPS. Isolated services into lightweight Docker containers, configured multi-domain SSL with Let’s Encrypt, and orchestrated automated zero-downtime deployment pipelines with GitHub Actions.',
    conclusion:
      'Established high availability, sub-100ms response times, and automated container lifecycle management across production servers.',
    thumbnail: '/images/docker.jpeg',
    heroImage: '/images/docker.jpeg',
    coverImage: '/images/docker.jpeg',
    images: [
      '/images/docker.jpeg',
      '/images/docker1.png',
      '/images/docker2.webp',
      '/images/docker5.png',
    ],
    services: [
      'Docker Containerization',
      'VPS Hardening',
      'NGINX Reverse Proxy',
      'CI/CD Pipelines',
    ],
    client: 'Cloud Infrastructure',
    website: '',
    tags: ['Docker', 'Linux VPS', 'NGINX', 'DevOps', 'CI/CD'],
    link: '',
    quote:
      'Robust server hardening and container orchestration that cut deployment friction to zero.',
    quoteAuthor: 'DevOps Architecture',
    quoteRole: 'Infrastructure Highlights',
    credits: [
      { role: 'DevOps Engineering', name: 'Outman El Bouhali' },
      { role: 'System Administration', name: 'Outman El Bouhali' },
    ],
  },

  {
    slug: 'webserv',
    title: 'Webserv',
    category: 'Systems Programming',
    year: '2024',
    tagline: 'Custom C++ HTTP/1.1 web server from scratch.',
    description:
      'Non-blocking I/O multiplexed HTTP/1.1 web server written in C++98 handling concurrent connections, CGI execution, and route management.',
    overview:
      'Developed a fully compliant HTTP/1.1 web server from scratch in C++ without external libraries. Built using poll/epoll socket multiplexing to handle hundreds of concurrent clients simultaneously with non-blocking I/O, custom NGINX-style configuration parsing, static file streaming, and dynamic CGI support.',
    conclusion:
      'Achieved strict RFC compliance, zero memory leaks, and high-throughput network performance verified through rigorous stress testing.',
    thumbnail: '/images/webserv.png',
    heroImage: '/images/webserv.png',
    coverImage: '/images/webserv.png',
    images: [
      '/images/webserv.png',
      '/images/webserv2.png',
      '/images/webserv1.avif',
    ],
    services: [
      'Systems Programming',
      'C++ Network Architecture',
      'HTTP/1.1 Protocol Engine',
      'CGI Execution Layer',
    ],
    client: '42 Network / Systems Project',
    website: 'https://github.com/oelbouha/webserv',
    tags: ['C++', 'HTTP/1.1', 'Sockets', 'Network Systems', 'epoll'],
    link: 'https://github.com/oelbouha/webserv',
    quote:
      'A deeply engineered socket server with meticulous state machines and asynchronous I/O multiplexing.',
    quoteAuthor: 'Systems Review',
    quoteRole: 'Core Network Engineering',
    credits: [
      { role: 'Lead Systems Developer', name: 'Outman El Bouhali' },
    ],
  },

  {
    slug: 'workflow-automation',
    title: 'Workflow Hub',
    category: 'Automation Pipelines',
    year: '2025',
    tagline: 'n8n & Make custom integration pipelines.',
    description:
      'Enterprise automation pipeline connecting multiple SaaS tools, webhooks, and AI agents for workflow optimization.',
    overview:
      'Constructed scalable automation architectures using self-hosted n8n instances and Make. Built custom webhooks, data transformation scripts, error recovery loops, and AI-powered categorization pipelines to automate routine business workflows.',
    conclusion:
      'Saved hundreds of operational hours per month by bridging CRM, billing, messaging, and database updates seamlessly.',
    thumbnail: '/images/call-to-action/n8n Automation Workflow .png',
    heroImage: '/images/call-to-action/n8n Automation Workflow .png',
    coverImage: '/images/call-to-action/n8n Automation Workflow .png',
    images: [
      '/images/call-to-action/n8n Automation Workflow .png',
      '/images/portfolio.jpeg',
      '/images/portfolio1.jpeg',
    ],
    services: [
      'n8n Architecture',
      'API & Webhook Integrations',
      'Data Transformation',
      'Workflow Optimization',
    ],
    client: 'Internal & Client Systems',
    website: '',
    tags: ['n8n', 'Automation', 'Webhooks', 'REST APIs', 'Pipelines'],
    link: '',
    quote:
      'Turned complex multi-tool operational headaches into reliable, zero-touch background automation.',
    quoteAuthor: 'Automation Engineering',
    quoteRole: 'Integration Systems',
    credits: [
      { role: 'Automation Architect', name: 'Outman El Bouhali' },
    ],
  },
];


