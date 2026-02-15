import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    category: 'WEB DEVELOPMENT',
    title: 'Building Modern Web Applications with React',
    description: 'Full-stack web development using React.js, JavaScript, and modern frameworks to create responsive, high-performance applications.'
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
    description: 'Building robust backend systems with Docker, NGINX, MariaDB, MongoDB, and WebSocket for real-time applications.'
  },
  {
    category: 'SYSTEM PROGRAMMING',
    title: 'Low-Level Programming and Network Solutions',
    description: 'Custom HTTP servers, network programming, and system-level applications using C/C++ with focus on performance and efficiency.'
  }
];

export function ServicesGrid() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        {/* Label with line */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium tracking-wider text-foreground-secondary uppercase">Services</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>
        </motion.div>

        {/* 3-Column Grid Layout — Desktop */}
        <div className="hidden md:grid lg:grid-cols-3 gap-8">
          {/* Left Column - Sticky Title */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-20 lg:self-start"
          >
              <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-accent mb-2">
                How I Approach
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-accent">
                Design & Development
              </h2>
                </div>
            </div>
          </motion.div>

          {/* Right Two Columns - Service Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <section
                key={service.category}
                className="flex flex-1 flex-col justify-between gap-4 rounded-2xl p-5 backdrop-blur-[2px] transition-all duration-300 bg-[#454545] border border-border hover:border-accent/50 service-card skill-item min-h-[363px] w-full"
              >
                <div>
                  <p className="tag-font text-[#e8e8e8] uppercase text-[12px] tracking-wider">
                    {service.category}
                  </p>
                  <h4 className="subheading-regular pb-2 hidden !text-[24px] !leading-[32px] !font-normal">
                    {service.title}
                  </h4>
                </div>
                <h4 className="w-[390px] max-xl:w-[80%] subheading-regular pb-2 text-[#ffffff] !text-[24px] !leading-[32px] !font-normal">
                  {service.title}
                </h4>
              </section>
            ))}
          </div>
        </div>

        {/* Mobile Layout — Swipeable Cards */}
        <div className="md:hidden">
          {/* Title Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
              <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-6 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                <div className="relative z-10">
              <h2 className="text-2xl font-bold text-accent mb-">
                How I Approach
              </h2>
              <h2 className="text-2xl font-bold text-accent">
                Design & Development
              </h2>
                </div>
            </div>
          </motion.div>

          {/* Scrollable Row */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {services.map((service) => (
                <section
                  key={service.category}
                  className="flex flex-1 flex-col justify-between gap-4 rounded-2xl p-5 backdrop-blur-[2px] transition-all duration-300 bg-[#454545] border border-border hover:border-accent/50 service-card skill-item min-h-[363px] w-full flex-shrink-0"
                  style={{
                    width: '80vw',
                    maxWidth: '340px',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <div>
                    <p className="tag-font text-[#e8e8e8] uppercase">
                      {service.category}
                    </p>
                    <h4 className="subheading-regular pb-2 hidden !text-[24px] !leading-[32px] !font-normal">
                      {service.title}
                    </h4>
                  </div>
                  <h4 className="w-[390px] max-xl:w-[80%] subheading-regular pb-2 text-[#ffffff] !text-[24px] !leading-[32px] !font-normal">
                    {service.title}
                  </h4>
                  <p className="text-[#ffffff] !text-[32px] !leading-[40px] !tracking-[-0.544px] !font-normal">
                    {service.description}
                  </p>
                  <p className="text-[#ffffff] !text-[32px] !leading-[40px] !tracking-[-0.544px] !font-normal">
                    {service.description}
                  </p>
                </section>
              ))}
            </div>

            {/* Swipe Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {/* Left arrow hint */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollPosition !== 'start' ? 0.7 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-medium tracking-wider text-foreground-secondary uppercase"
              >
                ← Swipe back
              </motion.span>

              <span className="text-foreground-tertiary mx-2">·</span>

              {/* Right arrow hint */}
              <motion.span
                initial={{ opacity: 1 }}
                animate={{
                  opacity: scrollPosition === 'end' ? 0 : hasScrolled ? 0.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="text-xs font-medium tracking-wider text-foreground-secondary uppercase"
              >
                Swipe →
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
