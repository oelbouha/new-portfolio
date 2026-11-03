'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsPage } from '@/data';

interface WorkProjectsListProps {
  onNavigate?: (href: string) => void;
}

export function WorkProjectsList({ onNavigate }: WorkProjectsListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { header, projects } = projectsPage;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeIndex =
    hoveredIndex !== null ? hoveredIndex : isMobile ? scrollActiveIndex : -1;

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined' || window.innerWidth >= 1024) return;
    const probeY = window.innerHeight * 0.48;
    let closestIndex = 0;
    let minDistance = Infinity;

    rowRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distance = Math.abs(centerY - probeY);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setScrollActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-10">
      <div className="w-full">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start w-full gap-6 lg:gap-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="col-span-1 lg:col-span-8 flex items-start">
            <h1 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(4.5rem,12vw,12.5rem)] uppercase leading-[0.82] tracking-[-0.01em] text-[var(--text)] select-none">
              {header.title}
              <span className="sr-only"> — Full Stack Web and Mobile Portfolio Case Studies</span>
            </h1>
          </div>

          <div className="col-span-1 lg:col-start-9 lg:col-span-4 flex items-start gap-3 sm:gap-4 pt-1 sm:pt-2 lg:pt-3">
            <span className="shrink-0 px-2.5 py-1 rounded-[4px] bg-black/10 dark:bg-white/15 text-[11px] font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold select-none">
              {header.badge}
            </span>
            <p className="font-['Space_Grotesk'] text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-snug">
              {header.description}
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div
          className="flex flex-col w-full relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            const projectUrl = `/work/${project.slug}`;
            const thumbnailSrc =
              project.thumbnail?.src || project.heroImage?.src || project.coverImage?.src;
            const thumbnailAlt =
              project.thumbnail?.alt || `${project.title} preview screenshot`;

            return (
              <div
                key={project.slug}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                className="relative w-full border-b border-black/15 dark:border-white/15"
              >
                <a
                  href={projectUrl}
                  onClick={(e) => handleClick(e, projectUrl)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  data-cursor-hover="Open project"
                  data-cursor-icon="↗"
                  className="relative flex items-center justify-between w-full py-3.5 sm:py-4 lg:py-5 px-0 select-none text-decoration-none"
                >
                  <div
                    className={`absolute -inset-y-[1px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-[4px] pointer-events-none ${
                      isActive
                        ? '-inset-x-2 sm:-inset-x-3 lg:-inset-x-4 bg-[#111111] dark:bg-white/[0.13] dark:border dark:border-white/25 shadow-xl opacity-100 z-0'
                        : 'inset-x-0 opacity-0 z-0'
                    }`}
                  />

                  {/* Left Column: Year & Category */}
                  <div className="relative z-10 w-[140px] sm:w-[220px] lg:w-[35%] shrink-0 text-left flex items-center pl-0">
                    <span
                      className={`font-mono text-[11px] sm:text-xs lg:text-[13px] tracking-wider uppercase font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-neutral-300 dark:text-neutral-100'
                          : 'text-neutral-500 dark:text-neutral-400'
                      }`}
                    >
                      {project.year}, {project.category}
                    </span>
                  </div>

                  {/* Center Column: Thumbnail & Title */}
                  <div className="relative z-10 flex-1 flex items-center justify-start gap-3 sm:gap-5 lg:gap-6 overflow-hidden pr-2">
                    <motion.div
                      initial={false}
                      animate={{
                        width:
                          isActive
                            ? typeof window !== 'undefined' && window.innerWidth < 640
                              ? 90
                              : 145
                            : 0,
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.92,
                      }}
                      transition={{
                        duration: 0.32,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden rounded-[3px] shrink-0 aspect-[1.5/1] shadow-2xl pointer-events-none bg-neutral-900 border border-white/10"
                    >
                      <img
                        src={thumbnailSrc}
                        alt={thumbnailAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>

                    <h2
                      className={`font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(1.85rem,3.4vw,3.75rem)] uppercase leading-[0.88] tracking-[-0.01em] transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis ${
                        isActive ? 'text-white' : 'text-[var(--text)]'
                      }`}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* Right Column: Icon */}
                  <div className="relative z-10 shrink-0 flex items-center justify-end text-right pr-0">
                    <div
                      className={`w-6 h-6 flex items-center justify-end transition-all duration-200 ${
                        isActive
                          ? 'text-white translate-x-0.5 -translate-y-0.5'
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkProjectsList;
