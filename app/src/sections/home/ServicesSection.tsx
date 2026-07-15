import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '@/lib/constants';

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
      gsap.fromTo(el,
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
    <section className="section-services" id="services">
      <div className="container-large">
        <div className="text-mono_wrapper" style={{ marginBottom: '2rem' }}>
          <span className="text-mono services-label">Services</span>
        </div>

        <div className="services-list">
          {SERVICES.map((service, i) => (
            <div
              key={service.name}
              className="service-item"
              data-cursor-hover={service.name}
              onMouseEnter={() => setActiveService(i)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flex: 1 }}>
                <span className="service-name" style={{
                  opacity: activeService !== null && activeService !== i ? 0.3 : 1,
                  transition: 'opacity 0.3s ease',
                }}>
                  {service.name}
                </span>
              </div>
              <span className="service-sub">{service.sub}</span>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a href="/work" className="small-link" style={{ textDecoration: 'none' }}>
            <div className="text-mono_wrapper">
              <span className="text-mono">See all services</span>
            </div>
            <svg
              className="small-link-arrow"
              width="14" height="8" viewBox="0 0 14 8" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0 }}
            >
              <path d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Floating image preview (desktop only) */}
      {activeService !== null && (
        <div
          ref={previewRef}
          className="service-video-preview is-visible"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            position: 'fixed',
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
