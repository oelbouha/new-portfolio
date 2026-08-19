import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { servicesGridStyles } from './ServicesGrid.styles';
import { ServicesGridProps } from './ServicesGrid.types';

const services = [
  {
    category: 'WEB DEVELOPMENT',
    title: 'Building Modern Web Applications with React',
    description: 'Full-stack web development using React.js, Next.js, JavaScript, and modern frameworks to create responsive, high-performance applications.'
  },
  {
    category: 'WORDPRESS DEVELOPMENT',
    title: 'Custom WordPress Websites and Solutions',
    description: 'Professional WordPress websites tailored to your needs, from simple blogs to complex e-commerce platforms with custom themes and plugins.'
  },
  {
    category: 'AUTOMATION & INTEGRATION',
    title: 'Workflow Automation with n8n and Make',
    description: 'Streamline your business processes with powerful automation workflows using n8n and Make, connecting your tools and eliminating repetitive tasks.'
  },
  {
    category: 'MOBILE DEVELOPMENT',
    title: 'Cross-Platform Mobile Apps with Flutter',
    description: 'Native mobile applications built with Flutter (Dart) for iOS and Android, delivering seamless user experiences across platforms.'
  },
  {
    category: 'BACKEND & INFRASTRUCTURE',
    title: 'Scalable Backend Systems and DevOps',
    description: 'Building robust backend systems with Django, Docker, NGINX, MariaDB, MongoDB, and WebSocket for real-time applications.'
  },
  {
    category: 'SYSTEM PROGRAMMING',
    title: 'Low-Level Programming and Network Solutions',
    description: 'Custom HTTP servers, network programming, and system-level applications using C/C++ with focus on performance and efficiency.'
  }
];

export function ServicesGrid({}: ServicesGridProps = {}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<'start' | 'middle' | 'end'>('start');

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!hasScrolled) setHasScrolled(true);

      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft <= 10) {
        setScrollPosition('start');
      } else if (scrollLeft + clientWidth >= scrollWidth - 10) {
        setScrollPosition('end');
      } else {
        setScrollPosition('middle');
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <section className={servicesGridStyles.section}>
      <div className={servicesGridStyles.container}>
        {/* 3-Column Grid Layout — Desktop */}
        <div className={servicesGridStyles.desktopGrid}>
          {/* Left Column - Sticky Title */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={servicesGridStyles.stickyCol}
          >
            <div className={servicesGridStyles.cardBox}>
              <div className={servicesGridStyles.patternBg}>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>
              <div className="relative z-10">
                <h3 className={servicesGridStyles.cardTitle}>
                  How I Approach
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Two Columns - Service Cards */}
          <div className={servicesGridStyles.cardsCol}>
            {services.map((service) => (
              <section
                key={service.category}
                className={servicesGridStyles.serviceCard}
              >
                <div>
                  <p className={servicesGridStyles.categoryTag}>
                    {service.category}
                  </p>
                </div>
                <h4 className={servicesGridStyles.cardHeading}>
                  {service.title}
                </h4>
              </section>
            ))}
          </div>
        </div>

        {/* Mobile Layout — Swipeable Cards */}
        <div className={servicesGridStyles.mobileWrapper}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className={servicesGridStyles.mobileScroll}
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* "How I Approach" card */}
              <div
                className={servicesGridStyles.mobileCard}
                style={{
                  width: '80vw',
                  maxWidth: '340px',
                  scrollSnapAlign: 'start',
                  minHeight: '220px',
                }}
              >
                <div className={servicesGridStyles.patternBg}>
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-accent mb-1">
                    How I Approach
                  </h3>
                  <h3 className="text-2xl font-bold text-accent">
                    Design & Development
                  </h3>
                </div>
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: scrollPosition === 'end' ? 0 : hasScrolled ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={servicesGridStyles.swipeText}
                >
                  Swipe →
                </motion.span>
              </div>

              {/* Service cards */}
              {services.map((service) => (
                <section
                  key={service.category}
                  className={servicesGridStyles.mobileServiceCard}
                  style={{
                    width: '80vw',
                    maxWidth: '340px',
                    scrollSnapAlign: 'start',
                    minHeight: '220px',
                  }}
                >
                  <div>
                    <p className={servicesGridStyles.categoryTag}>
                      {service.category}
                    </p>
                  </div>
                  <h4 className={servicesGridStyles.cardHeading}>
                    {service.title}
                  </h4>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
