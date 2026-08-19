import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { laptopShowcaseStyles } from './LaptopShowcase.styles';
import { LaptopShowcaseProps } from './LaptopShowcase.types';

const projects = [
  {
    name: 'Revo Website',
    image: '/images/revo/revo4.jpeg',
  },
  {
    name: 'Revo Branding',
    image: '/images/revo/revoo.jpeg',
  },
  {
    name: 'Skatys',
    image: '/images/skatys/Screen Shot 2026-07-02 at 6.19.30 PM.png',
  },
];

const INTERVAL = 3000;

export function LaptopShowcase({}: LaptopShowcaseProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(Date.now());

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.88, 1]);

  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      startTimeRef.current = Date.now();
      setProgress(0);
    }, INTERVAL);

    const raf = () => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min(elapsed / INTERVAL, 1));
      rafId = requestAnimationFrame(raf);
    };
    let rafId = requestAnimationFrame(raf);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={containerRef} className={laptopShowcaseStyles.section}>
      <div className={laptopShowcaseStyles.container}>
        <motion.div
          style={{ scale }}
          className={laptopShowcaseStyles.scaleWrapper}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Laptop Mockup */}
            <div className={laptopShowcaseStyles.laptopOuter}>
              {/* Laptop Screen */}
              <div className={laptopShowcaseStyles.laptopScreen}>
                {/* Screen Bezel */}
                <div className={laptopShowcaseStyles.bezel}>
                  {/* Screen Content - Scrolling Images */}
                  <div className={laptopShowcaseStyles.contentArea}>
                    {projects.map((project, index) => (
                      <motion.img
                        key={project.image}
                        src={project.image}
                        alt={project.name}
                        className={laptopShowcaseStyles.image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 0.9, ease: 'easeInOut' }}
                      />
                    ))}
                  </div>

                  {/* Screen Reflection */}
                  <div className={laptopShowcaseStyles.reflection} />

                  {/* Project Title & Progress Bar */}
                  <div className={laptopShowcaseStyles.overlay}>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentIndex}
                        className={laptopShowcaseStyles.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {projects[currentIndex].name}
                      </motion.p>
                    </AnimatePresence>

                    <div className={laptopShowcaseStyles.progressBg}>
                      <motion.div
                        className={laptopShowcaseStyles.progressBar}
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Camera */}
                <div className={laptopShowcaseStyles.camera} />
              </div>

              {/* Laptop Base */}
              <div className={laptopShowcaseStyles.base}>
                <div className={laptopShowcaseStyles.keyboard} />
                <div className={laptopShowcaseStyles.trackpad} />
              </div>

              {/* Shadow */}
              <div className={laptopShowcaseStyles.shadow} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
