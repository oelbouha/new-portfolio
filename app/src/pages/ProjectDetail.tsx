import { useParams, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';

// Project data (will be expanded with real data)
const projectsData = [
  {
    id: 1,
    slug: 'pong-arena',
    title: 'Pong Arena',
    tags: ['Web Development', 'Full-Stack', 'WebSocket'],
    link: 'https://github.com/oelbouha/ft_transcendence',
    overview: 'A dynamic gaming website featuring Ping Pong and Slap Hands, playable offline or online with friends.',
    conclusion: 'Successfully delivered a real-time multiplayer gaming platform with smooth gameplay and responsive design.',
    images: [
      'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop',
    ]
  },
  {
    id: 2,
    slug: 'inception',
    title: 'Inception Unleashed',
    tags: ['DevOps', 'Docker', 'System Administration'],
    link: 'https://github.com/oelbouha/Inception',
    overview: 'Dockerized web stack with NGINX, WordPress, and MariaDB showcasing containerization and automation.',
    conclusion: 'Built a robust, scalable infrastructure demonstrating modern DevOps practices and container orchestration.',
    images: [
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    ]
  },
  {
    id: 3,
    slug: 'webserv',
    title: 'Webserv',
    tags: ['System Programming', 'C++98', 'Network Programming'],
    link: 'https://github.com/oelbouha/webserv',
    overview: 'Custom HTTP server built from scratch in C++98, handling multiple connections with non-blocking I/O.',
    conclusion: 'Developed a high-performance web server from the ground up, deepening understanding of HTTP protocol and network programming.',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
    ]
  },
];

/* ─────────────── Scroll-Driven Image Showcase ─────────────── */

interface ScrollImageShowcaseProps {
  images: string[];
  title: string;
}

function ScrollImageShowcase({ images, title }: ScrollImageShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastProgressRef = useRef(0);
  const thresholdRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Expand width from 80% → 100% as section scrolls into view
  const width = useTransform(scrollYProgress, [0, 0.35], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.35], [24, 0]);

  // Switch images based on scroll direction
  const switchImage = useCallback(
    (direction: 'next' | 'prev') => {
      setCurrentIndex((prev) => {
        if (direction === 'next') {
          return prev < images.length - 1 ? prev + 1 : prev;
        }
        return prev > 0 ? prev - 1 : prev;
      });
    },
    [images.length]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const diff = latest - lastProgressRef.current;
    thresholdRef.current += diff;

    // Only switch after accumulating enough scroll delta
    if (thresholdRef.current > 0.12) {
      switchImage('next');
      thresholdRef.current = 0;
    } else if (thresholdRef.current < -0.12) {
      switchImage('prev');
      thresholdRef.current = 0;
    }

    lastProgressRef.current = latest;
  });

  return (
    <section
      ref={containerRef}
      className="relative py-16 overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      <motion.div
        style={{ width, borderRadius }}
        className="mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Laptop Frame */}
          <div className="relative">
            {/* Laptop Screen */}
            <div className="relative bg-[#1a1a1a] rounded-t-2xl p-3 sm:p-4 shadow-2xl">
              {/* Screen Bezel */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-[16/10]">
                {/* Screen Content – Crossfading Images */}
                <div className="relative w-full h-full overflow-hidden">
                  {images.map((image, index) => (
                    <motion.img
                      key={image}
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={false}
                      animate={{
                        opacity: index === currentIndex ? 1 : 0,
                        x: index === currentIndex ? 0 : index < currentIndex ? -40 : 40,
                      }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    />
                  ))}
                </div>

                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Arrow Navigation Buttons */}
                <button
                  onClick={() => switchImage('prev')}
                  className={`absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-300 shadow-lg ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
                    }`}
                  disabled={currentIndex === 0}
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </button>
                <button
                  onClick={() => switchImage('next')}
                  className={`absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-300 shadow-lg ${currentIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
                    }`}
                  disabled={currentIndex === images.length - 1}
                  aria-label="Next image"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </button>
              </div>

              {/* Camera */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#333] rounded-full" />
            </div>

            {/* Laptop Base */}
            <div className="relative">
              <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] h-4 sm:h-6 rounded-b-lg shadow-xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-2 bg-[#333]/50 rounded-b-md" />
            </div>

            {/* Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full" />
          </div>
        </motion.div>

        {/* Image Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-accent w-6'
                : 'bg-foreground-secondary/30 hover:bg-foreground-secondary/60'
                }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────── Project Detail Page ─────────────── */

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug]);

  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Fixed Top Bar */}
      <div className="hero-topbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '24px 40px', zIndex: 50, background: 'hsl(var(--background))' }}>
        <div className="hero-topbar-left">
          <span className="hero-local-label">TÉTOUAN, MOROCCO</span>
          <span className="hero-time">{currentTime}</span>
        </div>

        <button
          className="hero-menu-dots"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>

        <div className="hero-topbar-right">
          <ThemeToggle />
        </div>
      </div>

      <main className="flex min-h-screen flex-col gap-10 pt-[120px] pb-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full px-[40px]"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Visit Website Button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
            >
              Visit Repository
              <ArrowRight className="w-5 h-5" />
            </a>
          )}
        </motion.section>

        {/* Overview & Conclusion Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full px-[40px] flex gap-5 max-sm:flex-col"
        >
          {/* Project Overview */}
          <div className="flex h-auto min-h-[300px] flex-1 flex-col justify-between gap-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-8">
            <p className="text-xs font-semibold tracking-wider text-foreground-secondary uppercase">
              PROJECT OVERVIEW
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {project.overview}
            </p>
          </div>

          {/* Conclusion */}
          <div className="flex h-auto min-h-[300px] flex-1 flex-col justify-between gap-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-8">
            <p className="text-xs font-semibold tracking-wider text-foreground-secondary uppercase">
              CONCLUSION
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {project.conclusion}
            </p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full px-[40px] py-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Deliver.
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Best Result For Our Client.
          </h3>
        </motion.div>

        {/* Scroll-Driven Image Showcase */}
        <ScrollImageShowcase images={project.images} title={project.title} />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full px-[40px]"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Projects
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
