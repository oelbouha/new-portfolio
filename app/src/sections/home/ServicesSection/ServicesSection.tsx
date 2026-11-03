'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { home } from '@/data';
import { serviceItemStyles } from '@/components/home/ServiceItem';
import { servicesSectionStyles } from './ServicesSection.styles';

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  onNavigate?: (href: string) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps = {}) {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [scrollService, setScrollService] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const previewRef = useRef<HTMLDivElement>(null);

  const { servicesTeaser } = home;
  const items = servicesTeaser.items;

  const activeService = hoveredService !== null ? hoveredService : scrollService;

  const updateActiveOnScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.bottom < window.innerHeight * 0.25 || rect.top > window.innerHeight * 0.75) {
      setScrollService(null);
      return;
    }

    const probeY = window.innerHeight * 0.5;
    let closestIndex = -1;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const itemRect = el.getBoundingClientRect();
      const centerY = itemRect.top + itemRect.height / 2;
      const distance = Math.abs(centerY - probeY);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== -1) {
      setScrollService(closestIndex);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      setHasMouseMoved(true);
      setMousePos({ x: e.clientX + 24, y: e.clientY + 24 });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const onScroll = () => {
      requestAnimationFrame(updateActiveOnScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let trigger: ScrollTrigger | null = null;
    if (sectionRef.current) {
      trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onUpdate: () => {
          updateActiveOnScroll();
        },
        onLeave: () => setScrollService(null),
        onLeaveBack: () => setScrollService(null),
      });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', onScroll);
      if (trigger) trigger.kill();
    };
  }, [updateActiveOnScroll]);

  let previewLeft = mousePos.x;
  let previewTop = mousePos.y;
  if (
    typeof window !== 'undefined' &&
    !hasMouseMoved &&
    activeService !== null &&
    itemRefs.current[activeService]
  ) {
    const itemRect = itemRefs.current[activeService]!.getBoundingClientRect();
    previewLeft = Math.min(window.innerWidth - 260, itemRect.right + 24);
    previewTop = itemRect.top + itemRect.height / 2 - 80;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section ref={sectionRef} className={servicesSectionStyles.section} id="services">
      <div className={servicesSectionStyles.container}>
        <div className={servicesSectionStyles.sectionTitle}>{servicesTeaser.title}</div>

        <div className={servicesSectionStyles.listWrapper}>
          {items.map((service, i) => {
            const isActive = activeService === i;
            const serviceUrl = `/services/${service.slug}`;

            return (
              <Link
                key={service.name + i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                href={serviceUrl}
                className="relative flex items-center justify-center w-full py-1 sm:py-2 text-center cursor-pointer select-none group text-current"
                style={{ textDecoration: 'none' }}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative inline-flex items-center justify-center">
                  <span
                    className={serviceItemStyles.title}
                    style={{
                      opacity: activeService !== null && !isActive ? 0.3 : 1,
                    }}
                  >
                    {service.name}
                  </span>
                  <span
                    className={`hidden md:inline-block absolute left-full ml-4 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase tracking-[0.08em] text-[var(--text)] pointer-events-none transition-all duration-300 ${
                      isActive ? '!opacity-100 !translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                  >
                    {service.sub}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Floating image preview */}
      {activeService !== null && items[activeService] && (
        <div
          ref={previewRef}
          className={servicesSectionStyles.previewBox}
          style={{
            left: previewLeft,
            top: previewTop,
          }}
        >
          <img
            key={activeService}
            src={items[activeService].image.src}
            alt={items[activeService].image.alt}
            className="w-full h-full object-cover transition-opacity duration-200"
          />
        </div>
      )}
    </section>
  );
}
