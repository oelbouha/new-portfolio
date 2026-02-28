import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

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
    name: 'WordPress Website',
    image: '/images/zerotocoder/3.jpeg',
  },
];

export function LaptopShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based width: scales from narrow to section-width (matches other sections padding)
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.88, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
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
                {/* Screen Bezel — height smaller than viewport */}
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
                        transition={{ duration: 0.7 }}
                      />
                    ))}
                  </div>

                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
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
