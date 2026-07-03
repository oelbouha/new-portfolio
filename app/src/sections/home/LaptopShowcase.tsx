import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

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

export function LaptopShowcase() {
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
    <section ref={containerRef} className="relative py-20 overflow-hidden hidden md:block">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale }}
          className="origin-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Laptop Mockup */}
            <div className="relative">
              {/* Laptop Screen */}
              <div className="relative bg-[#1a1a1a] shadow-2xl rounded-t-2xl p-3 sm:p-4">
                {/* Screen Bezel */}
                <div className="relative bg-black overflow-hidden rounded-lg aspect-[16/10]">
                  {/* Screen Content - Scrolling Images */}
                  <div className="relative w-full h-full overflow-hidden">
                    {projects.map((project, index) => (
                      <motion.img
                        key={project.image}
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 0.9, ease: 'easeInOut' }}
                      />
                    ))}
                  </div>

                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                  {/* Project Title & Progress Bar — inside screen, bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6 bg-gradient-to-t from-black/70 to-transparent">
                    {/* Project Title */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentIndex}
                        className="text-white text-xl font-semibold mb-3 tracking-wide"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {projects[currentIndex].name}
                      </motion.p>
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <div className="w-full h-[2px] bg-white/20 overflow-hidden">
                      <motion.div
                        className="h-full bg-white"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Camera */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#333] rounded-full" />
              </div>

              {/* Laptop Base */}
              <div className="relative">
                {/* Keyboard Area */}
                <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] h-4 sm:h-6 rounded-b-lg shadow-xl" />

                {/* Trackpad */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-2 bg-[#333]/50 rounded-b-md" />
              </div>

              {/* Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
