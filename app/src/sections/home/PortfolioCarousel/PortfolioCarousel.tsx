import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { portfolioCarouselStyles } from './PortfolioCarousel.styles';
import type { PortfolioCarouselProps, ViewMode, ProjectItem } from './PortfolioCarousel.types';

const projects: ProjectItem[] = [
  {
    id: 0,
    slug: 'skatys',
    name: 'Skatys',
    image: '/images/skatys/Screen Shot 2026-07-01 at 6.12.17 PM.png',
    category: 'Freelance',
    height: 'tall',
    description: 'A freelance full-stack web app built with Next.js and Django, deployed on a VPS with Docker and NGINX.',
    tech: 'Next.js, Django, PostgreSQL, Docker, NGINX'
  },
  {
    id: 1,
    slug: 'Revo Website',
    name: 'Revo Website',
    image: '/images/revo/revo.jpeg',
    category: 'Web Development',
    height: 'tall',
    description: 'Custom React website built with a focus on performance and responsive design.',
    tech: 'React, Custom Design'
  },
  {
    id: 2,
    slug: 'inception',
    name: 'Inception Unleashed',
    image: '/images/docker1.png',
    category: 'DevOps',
    height: 'medium',
    description: 'Dockerized web stack with NGINX, WordPress, and MariaDB showcasing containerization and automation.',
    tech: 'Docker, NGINX, WordPress, MariaDB'
  },
  {
    id: 3,
    slug: 'webserv',
    name: 'Webserv',
    image: '/images/webserv2.png',
    category: 'System Programming',
    height: 'tall',
    description: 'Custom HTTP server built from scratch in C++98, handling multiple connections with non-blocking I/O.',
    tech: 'C++98, HTTP 1.1, Network Programming'
  },
  {
    id: 4,
    slug: 'Wordpress website',
    name: 'Wordpress Website',
    image: '/images/zerotocoder/2.jpeg',
    category: 'Web Development',
    height: 'medium',
    description: 'Custom WordPress website built with a focus on performance and responsive design.',
    tech: 'WordPress, Custom Theme, NGINX, Oracle Cloud'
  },
  {
    id: 5,
    slug: 'pong-arena',
    name: 'Pong Arena',
    image: '/images/pong/pongarena.jpeg',
    category: 'Web Development',
    height: 'tall',
    description: 'A dynamic gaming website featuring Ping Pong and Slap Hands, playable offline or online with friends.',
    tech: 'JavaScript, WebSocket, Full-Stack'
  },
  {
    id: 6,
    slug: 'portfolio',
    name: 'Portfolio Website',
    image: '/images/portfolio.jpeg',
    category: 'Web Development',
    height: 'tall',
    description: 'A dynamic portfolio website showcasing projects and skills.',
    tech: 'React, TypeScript, Tailwind CSS'
  },
  {
    id: 7,
    slug: 'quickdrop',
    name: 'QuickDrop',
    image: '/images/mobile/cover.png',
    category: 'Mobile Development',
    height: 'medium',
    description: 'A peer-to-peer package delivery app connecting travelers with shippers, featuring real-time tracking and secure payments.',
    tech: 'Flutter, Firebase, Stripe, Dart'
  },
  {
    id: 8,
    slug: 'habivio',
    name: 'Habivio',
    image: '/images/habivio mockups/Create_a_premium_mobile_app_mockup_presentationuse_delpmaspu (1).png',
    category: 'Mobile Development',
    height: 'tall',
    description: 'A minimalist execution system for serious productivity — fully offline, privacy-first habit tracking and task management.',
    tech: 'Flutter, Dart, SQLite'
  },
  {
    id: 9,
    slug: 'automation-workflows',
    name: 'Automation Workflows',
    image: '/images/n8n/n8n_workflow_1.png',
    category: 'Automation & Integration',
    height: 'medium',
    description: 'Custom workflow automations using n8n and Make.com to streamline business processes and connect tools.',
    tech: 'n8n, Make.com, APIs, Webhooks'
  },
];

export function PortfolioCarousel({}: PortfolioCarouselProps = {}) {
  const [viewMode, setViewMode] = useState<ViewMode>('3-col');
  const [shuffledProjects] = useState(projects);

  const gridClasses = {
    '4-col': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    '3-col': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '2-col': 'grid-cols-1 sm:grid-cols-2'
  };

  return (
    <section className={portfolioCarouselStyles.section}>
      <div className={portfolioCarouselStyles.container}>
        {/* Label with line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={portfolioCarouselStyles.labelWrapper}
        >
          <div className={portfolioCarouselStyles.labelRow}>
            <span className={portfolioCarouselStyles.label}>My Work</span>
            <div className={portfolioCarouselStyles.line}></div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={portfolioCarouselStyles.headerWrapper}
        >
          <div className={portfolioCarouselStyles.headerInner}>
            <div className={portfolioCarouselStyles.titleRow}>
              <h2 className={portfolioCarouselStyles.title}>Selected Work</h2>
            </div>

            {/* Grid Toggle */}
            <div className={portfolioCarouselStyles.toggleGroup}>
              <button
                onClick={() => setViewMode('4-col')}
                className={cn(
                  portfolioCarouselStyles.toggleBtn,
                  viewMode === '4-col' ? "text-accent" : "text-foreground-secondary hover:text-foreground"
                )}
                aria-label="4 column grid"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="4" height="4" fill="currentColor" />
                  <rect x="8" y="2" width="4" height="4" fill="currentColor" />
                  <rect x="14" y="2" width="4" height="4" fill="currentColor" />
                  <rect x="2" y="8" width="4" height="4" fill="currentColor" />
                  <rect x="8" y="8" width="4" height="4" fill="currentColor" />
                  <rect x="14" y="8" width="4" height="4" fill="currentColor" />
                  <rect x="2" y="14" width="4" height="4" fill="currentColor" />
                  <rect x="8" y="14" width="4" height="4" fill="currentColor" />
                  <rect x="14" y="14" width="4" height="4" fill="currentColor" />
                </svg>
              </button>

              <button
                onClick={() => setViewMode('3-col')}
                className={cn(
                  portfolioCarouselStyles.toggleBtn,
                  viewMode === '3-col' ? "text-accent" : "text-foreground-secondary hover:text-foreground"
                )}
                aria-label="3 column grid"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="6" height="6" fill="currentColor" />
                  <rect x="11" y="3" width="6" height="6" fill="currentColor" />
                  <rect x="3" y="11" width="6" height="6" fill="currentColor" />
                  <rect x="11" y="11" width="6" height="6" fill="currentColor" />
                </svg>
              </button>

              <button
                onClick={() => setViewMode('2-col')}
                className={cn(
                  portfolioCarouselStyles.toggleBtn,
                  viewMode === '2-col' ? "text-accent" : "text-foreground-secondary hover:text-foreground"
                )}
                aria-label="2 column grid"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="3" width="5" height="14" fill="currentColor" />
                  <rect x="11" y="3" width="5" height="14" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className={cn(portfolioCarouselStyles.gridContainer, gridClasses[viewMode])}>
          <AnimatePresence>
            {shuffledProjects.map((project) => (
              <motion.div
                layout
                key={`${project.id}-${viewMode}`}
                transition={{
                  layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [arrowPosition, setArrowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const constrainedX = 50 + (x - 50) * 0.3;
    const constrainedY = 50 + (y - 50) * 0.3;

    setArrowPosition({ x: constrainedX, y: constrainedY });
  };

  return (
    <Link
      to={`/work/${project.slug}`}
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      className={portfolioCarouselStyles.cardLink}
    >
      <div className={portfolioCarouselStyles.imageContainer}>
        <img
          src={project.image}
          alt={project.name}
          className={portfolioCarouselStyles.image}
        />
        <div className={portfolioCarouselStyles.overlay} />

        <div
          className={portfolioCarouselStyles.arrowWrapper}
          style={{
            left: `${arrowPosition.x}%`,
            top: `${arrowPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className={portfolioCarouselStyles.arrowCircle}>
            <ArrowRight className={portfolioCarouselStyles.arrowIcon} />
          </div>
        </div>
      </div>

      <div className={portfolioCarouselStyles.titleWrapper}>
        <p className={portfolioCarouselStyles.cardTitle}>{project.name}</p>
      </div>
    </Link>
  );
}
