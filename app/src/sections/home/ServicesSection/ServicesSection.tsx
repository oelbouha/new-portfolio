import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '@/lib/constants';
import { serviceItemStyles } from '@/components/home/ServiceItem';
import { servicesSectionStyles } from './ServicesSection.styles';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=480&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=480&q=80',
  'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=480&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=480&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&q=80',
];

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [scrollService, setScrollService] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const previewRef = useRef<HTMLDivElement>(null);

  // Hover takes priority over scroll-based active service
  const activeService = hoveredService !== null ? hoveredService : scrollService;

  // Detect which service item is centered in viewport on scroll
  const updateActiveOnScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    // Only activate while section is within comfortable reading viewport
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

  // Determine preview box position: follows mouse if moved, or floats beside active item
  let previewLeft = mousePos.x;
  let previewTop = mousePos.y;
  if (!hasMouseMoved && activeService !== null && itemRefs.current[activeService]) {
    const itemRect = itemRefs.current[activeService]!.getBoundingClientRect();
    previewLeft = Math.min(window.innerWidth - 260, itemRect.right + 24);
    previewTop = itemRect.top + itemRect.height / 2 - 80;
  }

  return (
    <section ref={sectionRef} className={servicesSectionStyles.section} id="services">
      <div className={servicesSectionStyles.container}>
        <div className={servicesSectionStyles.sectionTitle}>
          SERVICES
        </div>

        <div className={servicesSectionStyles.listWrapper}>
          {SERVICES.map((service, i) => {
            const isActive = activeService === i;

            return (
              <div
                key={service.name}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={`${serviceItemStyles.item} relative select-none`}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <span
                  className={serviceItemStyles.title}
                  style={{
                    opacity: activeService !== null && !isActive ? 0.3 : 1,
                  }}
                >
                  {service.name}
                </span>
                <span
                  className={`${serviceItemStyles.subtitle} transition-all duration-300 ${
                    isActive ? '!opacity-100 !translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}
                >
                  {service.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating image preview (desktop only) */}
      {activeService !== null && (
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
            src={SERVICE_IMAGES[activeService] || SERVICE_IMAGES[0]}
            alt=""
            aria-hidden
            className="w-full h-full object-cover transition-opacity duration-200"
          />
        </div>
      )}
    </section>
  );
}
