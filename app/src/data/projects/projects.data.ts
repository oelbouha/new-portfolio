
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
    thumbnail: '/images/skatys/skatys.jpeg',
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
    coverImage: '/images/pong/pong thumbnail.jpeg',
    images: [
      '/images/pong/pongarena1.jpeg',
      '/images/pong/Create_a_mockup_2k_202602141751.jpeg',
      '/images/pong/Create_a_mockup_2k_202602141753.jpeg',
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
    thumbnail: '/images/revo/revo thumbnail.jpeg',
    heroImage: '/images/revo/revo thumbnail.jpeg',
    coverImage: '/images/revo/revo thumbnail.jpeg',
    images: [
      '/images/revo/revo.jpeg',
      '/images/revo/revo mobile.jpeg',
      '/images/revo/revo mobile 3.jpeg',
      '/images/revo/revo mobile 2.jpeg',
      '/images/revo/revo mobile.jpeg',
      '/images/revo/revo4.jpeg',
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
    thumbnail: '/images/atlas/atlass.jpeg',
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
    credits: [
      { role: 'Flutter Development', name: 'Outman El Bouhali' },
      { role: 'Cross-Platform Architecture', name: 'Outman El Bouhali' },
      { role: 'Responsive UI Development', name: 'Outman El Bouhali' },
    ],
  },
];

