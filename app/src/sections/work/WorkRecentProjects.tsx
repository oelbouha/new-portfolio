import { useState, useEffect, useRef, useCallback } from 'react';
import { projectsData } from '@/data/projects/projects.data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WorkRecentProjectsProps {
  onNavigate?: (href: string) => void;
}

export function WorkRecentProjects({ onNavigate }: WorkRecentProjectsProps) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // The active index for text highlight: hovered project if hovering, otherwise the project in focus from scrolling
  const activeIndex = hoveredIndex !== null ? hoveredIndex : scrollIndex;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  // Scroll detection: checks which project title's vertical center is closest to viewport probe line
  const updateActiveOnScroll = useCallback(() => {
    const probeY = window.innerHeight * 0.48; // Eye level center
    let closestIndex = -1;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distance = Math.abs(centerY - probeY);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== -1) {
      setScrollIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    }
  }, []);

  useEffect(() => {
    // Initial check
    const timer = setTimeout(() => {
      updateActiveOnScroll();
    }, 150);

    // Scroll listener on window — updates active item highlight smoothly
    const onScroll = () => {
      setHoveredIndex(null);
      requestAnimationFrame(updateActiveOnScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // GSAP ScrollTrigger for sync with Lenis smooth scroll
    let trigger: ScrollTrigger | null = null;
    if (containerRef.current) {
      trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: () => {
          setHoveredIndex(null);
          updateActiveOnScroll();
        },
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      if (trigger) trigger.kill();
    };
  }, [updateActiveOnScroll]);

  return (
    <section ref={containerRef} className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1980px]">
        {/* Subtle Section Label (matching studionamma style, left-aligned with cards) */}
        <div className="mb-6 sm:mb-10">
          <span className="text-mono text-xs sm:text-sm tracking-wider uppercase opacity-60 text-[var(--text)]">
            Recent projects ({projectsData.length})
          </span>
        </div>

        {/* Desktop View: Titles on Left + Smooth Sticky Video on Right */}
        <div className="hidden lg:flex items-start justify-between relative w-full py-10">
          {/* Left: Huge Editorial Titles List */}
          <div
            className="w-full max-w-[56%] flex flex-col items-start justify-start"
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
          >
            {projectsData.map((project, index) => {
              const isSelected = index === activeIndex;

              return (
                <a
                  key={project.slug}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  href={`/work/${project.slug}`}
                  onClick={(e) => handleClick(e, `/work/${project.slug}`)}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                  }}
                  data-cursor-hover="Open project"
                  className={`group relative block w-full py-1.5 transition-opacity duration-300 select-none ${
                    isSelected ? 'opacity-100' : 'opacity-20 hover:opacity-70'
                  }`}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-[clamp(4.2rem,8.2vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-[var(--text)] whitespace-nowrap">
                    {project.title}
                  </h3>
                </a>
              );
            })}
          </div>

          {/* Right: Sticky Smooth Video Moving With Scroll (No Jumping) */}
          <div className="sticky top-[20vh] self-start w-[460px] xl:w-[540px] 2xl:w-[620px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl pointer-events-none z-20">
            <video
              src="https://studionamma.vercel.app/videos/cut/video-matera2.webm"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Mobile View: Vertical Title List with Clean Video Previews */}
        <div className="lg:hidden flex flex-col gap-8">
          {projectsData.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={project.slug} className="flex flex-col">
                <a
                  href={`/work/${project.slug}`}
                  onClick={(e) => handleClick(e, `/work/${project.slug}`)}
                  className="block py-1 select-none group"
                  data-cursor-hover="Open project"
                >
                  <h3
                    className={`font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-bold uppercase tracking-tight text-[var(--text)] leading-none transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    {project.title}
                  </h3>
                </a>

                {/* Mobile Preview: Clean Video */}
                <div className="mt-3 w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                  <video
                    src="https://studionamma.vercel.app/videos/cut/video-matera2.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
