import { useEffect, useRef, useState } from 'react';
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
  const [activeService, setActiveService] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX + 24, y: e.clientY + 24 });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Line appear animations
    document.querySelectorAll<HTMLElement>('.service-item').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: '1.5rem' },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={servicesSectionStyles.section} id="services">
      <div className={servicesSectionStyles.container}>
        <div className={servicesSectionStyles.sectionTitle}>
          SERVICES
        </div>

        <div className={servicesSectionStyles.listWrapper}>
          {SERVICES.map((service, i) => (
            <div
              key={service.name}
              className={serviceItemStyles.item}
              onMouseEnter={() => setActiveService(i)}
              onMouseLeave={() => setActiveService(null)}
            >
              <span
                className={serviceItemStyles.title}
                style={{
                  opacity: activeService !== null && activeService !== i ? 0.32 : 1,
                }}
              >
                {service.name}
              </span>
              <span className={serviceItemStyles.subtitle}>
                {service.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating image preview (desktop only) */}
      {activeService !== null && (
        <div
          ref={previewRef}
          className={servicesSectionStyles.previewBox}
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
        >
          <img
            src={SERVICE_IMAGES[activeService] || SERVICE_IMAGES[0]}
            alt=""
            aria-hidden
          />
        </div>
      )}
    </section>
  );
}
