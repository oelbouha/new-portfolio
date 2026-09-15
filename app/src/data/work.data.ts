export interface WorkProjectItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  image: string;
  video?: string;
  tags?: string[];
}

export interface ArchiveItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  images: [string, string, string];
}

export const workPageData = {
  hero: {
    tag: '[ WORK & EXPERIMENTS ]',
    headingLine1: 'OUR',
    headingLine2: 'GAME',
    subtitle: 'High-performance web platforms, cross-platform mobile apps, and full-stack engineering.',
    scrollText: '[ SCROLL ]',
  },

  featuredProjects: [
    {
      slug: 'skatys',
      title: 'Skatys',
      tagline: 'The modern freelance marketplace built for speed.',
      category: 'Full Stack Web App',
      year: '2026',
      image: '/images/skatys/skatys.jpeg',
      tags: ['Next.js', 'Django', 'Docker', 'VPS'],
    },
    {
      slug: 'pong-arena',
      title: 'Pong Arena',
      tagline: 'Real-time multiplayer gaming built for the web.',
      category: 'Full Stack Web App',
      year: '2024',
      image: '/images/pong/pong thumbnail.jpeg',
      tags: ['Django', 'WebSockets', 'JS', 'Matchmaking'],
    },
    {
      slug: 'revo',
      title: 'Revo',
      tagline: 'A modern web experience built with React.',
      category: 'React Application',
      year: '2025',
      image: '/images/revo/revo thumbnail.jpeg',
      tags: ['React.js', 'Tailwind', 'Frontend'],
    },
    {
      slug: 'atlas',
      title: 'Atlas',
      tagline: 'One Flutter application, built for mobile and TV.',
      category: 'Cross-Platform Mobile',
      year: '2026',
      image: '/images/atlas/atlass.jpeg',
      tags: ['Flutter', 'Dart', 'Android TV', 'Mobile'],
    },
  ] as WorkProjectItem[],

  recentProjects: [
    {
      slug: 'skatys',
      title: 'Skatys',
      tagline: 'Next.js & Django VPS infrastructure.',
      category: 'Full Stack',
      year: '2026',
      image: '/images/skatys/skatys.jpeg',
    },
    {
      slug: 'pong-arena',
      title: 'Pong Arena',
      tagline: 'WebSocket real-time multiplayer arena.',
      category: 'Full Stack',
      year: '2024',
      image: '/images/pong/pong thumbnail.jpeg',
    },
    {
      slug: 'revo',
      title: 'Revo',
      tagline: 'Modular React component engine.',
      category: 'React App',
      year: '2025',
      image: '/images/revo/revo thumbnail.jpeg',
    },
    {
      slug: 'atlas',
      title: 'Atlas',
      tagline: 'Unified mobile & TV Flutter architecture.',
      category: 'Flutter App',
      year: '2026',
      image: '/images/atlas/atlass.jpeg',
    },
  ] as WorkProjectItem[],

  archives: [
    {
      id: 'archive-habivio',
      title: 'Habivio',
      subtitle: 'Mobile habit tracker & wellness interface',
      category: 'Mobile UX',
      year: '2025',
      images: [
        '/images/habivio/habivio.png',
        '/images/habivio/habivio 1.png',
        '/images/habivio/habivio 2.png',
      ],
    },
    {
      id: 'archive-docker-vps',
      title: 'Docker Cloud Infrastructure',
      subtitle: 'VPS container orchestration & CI/CD deployment',
      category: 'DevOps / Cloud',
      year: '2025',
      images: [
        '/images/docker.jpeg',
        '/images/docker1.png',
        '/images/docker5.png',
      ],
    },
    {
      id: 'archive-webserv',
      title: 'Webserv HTTP Server',
      subtitle: 'Custom C++ HTTP/1.1 web server from scratch',
      category: 'Systems Programming',
      year: '2024',
      images: [
        '/images/webserv.png',
        '/images/webserv2.png',
        '/images/webserv1.avif',
      ],
    },
    {
      id: 'archive-n8n',
      title: 'Workflow Automation Hub',
      subtitle: 'n8n & Make custom integration pipelines',
      category: 'Automation',
      year: '2025',
      images: [
        '/images/portfolio.jpeg',
        '/images/portfolio1.jpeg',
        '/images/portfolio2.jpeg',
      ],
    },
  ] as ArchiveItem[],
};