import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const projects = [
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
    image: '/images/webserv1.avif',
    category: 'System Programming',
    height: 'tall',
    description: 'Custom HTTP server built from scratch in C++98, handling multiple connections with non-blocking I/O.',
    tech: 'C++98, HTTP 1.1, Network Programming'
  },
  {
    id: 4,
    slug: 'Wordpress website',
    name: 'Wordpress Website',
    image: '/images/zerotocoder/Create_a_mockup_2k_202602141803.jpeg',
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
];

type ViewMode = '4-col' | '3-col' | '2-col';

export function PortfolioCarousel() {
  const [viewMode, setViewMode] = useState<ViewMode>('3-col');
  const [shuffledProjects, setShuffledProjects] = useState(projects);

  // Shuffle function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Handle grid change with shuffle
  const handleGridChange = (mode: ViewMode) => {
    if (mode === viewMode) return;
    setViewMode(mode);
    setShuffledProjects(shuffleArray([...projects]));
  };

  const gridClasses = {
    '4-col': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    '3-col': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '2-col': 'grid-cols-1 sm:grid-cols-2'
  };



  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        {/* Label with line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium tracking-wider text-foreground-secondary uppercase">Our Work</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col gap-4">
            {/* Title and See All in one row */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground">Selected Work</h2>

              <a
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary hover:text-accent transition-colors group"
              >
                See All Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Grid Toggle below */}
            <div className="flex items-center gap-1">
              {/* 4-col: 3x3 grid */}
              <button
                onClick={() => setViewMode('4-col')}
                className={cn(
                  "p- rounded transition-colors",
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

              {/* 3-col: 2x2 grid */}
              <button
                onClick={() => setViewMode('3-col')}
                className={cn(
                  "p- rounded transition-colors",
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

              {/* 2-col: Two vertical bars */}
              <button
                onClick={() => setViewMode('2-col')}
                className={cn(
                  "p- rounded transition-colors",
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
        <div className={cn("grid gap-4", gridClasses[viewMode])}>
          <AnimatePresence>
            {shuffledProjects.map((project) => (
              <motion.div
                layout
                key={`${project.id}-${viewMode}`}
                transition={{
                  layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                <ProjectCard
                  project={project}
                  viewMode={viewMode}
                  item={item}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  viewMode: ViewMode;
  item: any;
}

function ProjectCard({ project, viewMode, item }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [arrowPosition, setArrowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Constrain to center area with subtle movement
    const constrainedX = 50 + (x - 50) * 0.3;
    const constrainedY = 50 + (y - 50) * 0.3;

    setArrowPosition({ x: constrainedX, y: constrainedY });
  };

  return (
    <Link
      to={`/work/${project.slug}`}
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      className={cn(
        "group block",
        viewMode === 'list' && "flex gap-4 items-center"
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden",
        viewMode === 'list' && "w-48 flex-shrink-0"
      )}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Circular Arrow on Hover - follows cursor */}
        <div
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            left: `${arrowPosition.x}%`,
            top: `${arrowPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <ArrowRight className="w-6 h-6 text-background" />
          </div>
        </div>
      </div>

      {/* Title below image - always visible */}
      <div className="mt-4">
        <p className="text-foreground text-sm font-medium">{project.name}</p>
      </div>
    </Link>
  );
}
