export interface ServiceItemData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  previewImage?: string;
}

export const servicesData: ServiceItemData[] = [
  {
    id: 'web-design',
    title: 'CREATIVE DIRECTION & UI/UX',
    subtitle: 'Interactive Design Systems',
    description: 'Bespoke design concepts, design systems, interactive prototypes, and typography-first visual identity.',
    previewImage: '/images/portfolio.jpeg',
  },
  {
    id: 'web-development',
    title: 'FULL-STACK DEVELOPMENT',
    subtitle: 'React / Next.js / TypeScript',
    description: 'High-performance web applications engineered for speed, clean architecture, and modularity.',
    previewImage: '/images/skatys/Screen Shot 2026-07-02 at 6.19.09 PM.png',
  },
  {
    id: 'devops-infra',
    title: 'DEVOPS & CLOUD INFRASTRUCTURE',
    subtitle: 'Docker / VPS / CI/CD',
    description: 'Automated deployment pipelines, secure container orchestration, reverse proxy configuration, and backend APIs.',
    previewImage: '/images/docker.jpeg',
  },
  {
    id: 'realtime-systems',
    title: 'SYSTEMS & REAL-TIME ENGINE',
    subtitle: 'C++ / WebSockets / Networks',
    description: 'Custom HTTP servers, low-latency socket communication engines, dynamic algorithms, and web platforms.',
    previewImage: '/images/webserv.png',
  },
];
