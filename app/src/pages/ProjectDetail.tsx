import { useParams, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useInView } from 'framer-motion';
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
      '/images/pong/pongarena.jpeg',
      '/images/pong/pongarena1.jpeg',
      '/images/pong/Create_a_mockup_2k_202602141751.jpeg',
      '/images/pong/Create_a_mockup_2k_202602141753.jpeg',
      '/images/pong/Create_a_mockup_2k_202602141753 (1).jpeg',
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
      '/images/docker.jpeg',
      '/images/docker1.png',
      '/images/docker2.webp',
      '/images/docker4.png',
      '/images/docker5.png',
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
      '/images/webserv.png',
      '/images/webserv1.avif',
      '/images/webserv2.png',
    ]
  },
  {
    id: 4,
    slug: 'Wordpress website',
    title: 'Wordpress Website',
    tags: ['Web Development', 'WordPress', 'Custom Theme', 'Responsive Design', 'Performance Optimization', 'oracle cloud', 'linux server', 'nginx'],
    link: '',
    overview: 'Custom WordPress website built with a focus on performance and responsive design.',
    conclusion: 'Successfully delivered a fully responsive and optimized WordPress website with custom theme development.',
    images: [
      '/images/zerotocoder/1.jpeg',
      '/images/zerotocoder/2.jpeg',
      '/images/zerotocoder/3.jpeg',
      '/images/zerotocoder/4.jpeg',
    ]
  },
  {
    id: 5,
    slug: 'Revo Website',
    title: 'Revo Website portfolio',
    tags: ['Web Development', 'React', 'Custom Design'],
    link: 'www.revo.ma',
    overview: 'Custom React website built with a focus on performance and responsive design.',
    conclusion: 'Successfully delivered a fully responsive and optimized React website.',
    images: [
      '/images/revo/revo.jpeg',
      '/images/revo/revo1.jpeg',
      '/images/revo/revoo.jpeg',
      '/images/revo/revoo2.jpeg',
      '/images/revo/revo3.jpeg',
      '/images/revo/revo4.jpeg',
    ]
  },
  {
    id: 6,
    slug: 'portfolio',
    title: 'Portfolio Website',
    tags: ['Web Development', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '',
    overview: 'A dynamic portfolio website showcasing projects and skills with modern design and smooth animations.',
    conclusion: 'Successfully delivered a polished portfolio website with responsive design and engaging user experience.',
    images: [
      '/images/portfolio.jpeg',
      '/images/portfolio1.jpeg',
      '/images/portfolio2.jpeg',
      '/images/portfolio4.jpeg',
      '/images/portfolio5.jpeg',
    ]
  },
  {
    id: 7,
    slug: 'quickdrop',
    title: 'QuickDrop',
    tags: ['Mobile Development', 'Flutter', 'Firebase', 'Stripe', 'Dart'],
    link: 'https://github.com/oelbouha/quickdrop',
    overview: 'A modern Flutter application that connects travelers with people who need to ship packages. It provides a platform for peer-to-peer package delivery services, featuring real-time tracking, secure Stripe payments, multi-language support, and in-app messaging.',
    conclusion: 'Successfully delivered a full-featured mobile application with real-time notifications, secure payment processing, and a seamless user experience for both senders and couriers.',
    images: [
      '/images/mobile/cover.png',
      '/images/mobile/mobile.png',
      '/images/mobile/mobile1.png',
      '/images/mobile/mobile2.png',
      '/images/mobile/Whisk_10a992c7bc333a9ab644a7d2c85b159edr.png',
      '/images/mobile/Whisk_188c37540388ac2af8f4f5905a9f78d3dr.png',
      '/images/mobile/Whisk_9ff658375fc0f839dfc4f628c878c6a0dr.png',
      '/images/mobile/Whisk_b19742d35327f6ab3474c6018115f2a4dr.png',
      '/images/mobile/Whisk_dfdc40498fd356faa444ae925c369615dr.png',
    ]
  },
];

/* ─────────────── Scroll-Driven Image Showcase ─────────────── */

interface ScrollImageShowcaseProps {
  images: string[];
  title: string;
}

function ScrollImageShowcase({ images, title }: ScrollImageShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(frameRef, { once: true, margin: "-80px" });
  const isArrowNavRef = useRef(false);

  const totalScreens = images.length;

  // Tracker 1: expand/shrink as section enters/leaves viewport
  const { scrollYProgress: expandProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Tracker 2: image swapping while pinned
  const { scrollYProgress: swapProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map swap progress directly to image index
  const currentIndexMV = useTransform(
    swapProgress,
    [0, 1],
    [0, totalScreens - 1]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prevIndexRef = useRef(0);

  useMotionValueEvent(currentIndexMV, "change", (latest) => {
    if (isArrowNavRef.current) return;
    const clamped = Math.min(Math.max(latest, 0), totalScreens - 1);
    const rounded = Math.round(clamped);
    if (rounded !== prevIndexRef.current) {
      setDirection(rounded > prevIndexRef.current ? 1 : -1);
      prevIndexRef.current = rounded;
      setCurrentIndex(rounded);
    }
  });

  // Fullscreen expand: when pinned, go to full viewport (top:0, 100vh) and above navbar
  const top = useTransform(expandProgress, [0.1, 0.25, 0.75, 0.9], [80, 0, 0, 80]);
  const height = useTransform(expandProgress, [0.1, 0.25, 0.75, 0.9], [
    'calc(100vh - 80px)', '100vh', '100vh', 'calc(100vh - 80px)'
  ]);
  const zIndex = useTransform(expandProgress, [0.1, 0.25, 0.75, 0.9], [40, 60, 60, 40]);

  // Restore original width/borderRadius animation for the inner container
  const width = useTransform(expandProgress, [0.1, 0.25, 0.75, 0.9], ["80%", "100%", "100%", "80%"]);
  const borderRadius = useTransform(expandProgress, [0.1, 0.25, 0.75, 0.9], [24, 0, 0, 24]);
  const bgOpacity = useTransform(expandProgress, [0.1, 0.25, 0.75, 0.9], [0, 1, 1, 0]);

  // Scroll to the position for a given image index
  const scrollToImage = useCallback(
    (index: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollRange = containerHeight - window.innerHeight;
      const targetProgress = index / (totalScreens - 1);
      const targetScroll = containerTop + targetProgress * scrollRange;

      isArrowNavRef.current = true;
      setDirection(index > currentIndex ? 1 : -1);
      prevIndexRef.current = index;
      setCurrentIndex(index);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });

      setTimeout(() => {
        isArrowNavRef.current = false;
      }, 800);
    },
    [totalScreens, currentIndex]
  );

  const switchImage = useCallback(
    (dir: 'next' | 'prev') => {
      const newIndex = dir === 'next'
        ? Math.min(currentIndex + 1, images.length - 1)
        : Math.max(currentIndex - 1, 0);
      if (newIndex !== currentIndex) {
        scrollToImage(newIndex);
      }
    },
    [currentIndex, images.length, scrollToImage]
  );

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${totalScreens * 50}vh` }}
    >
      {/* Sticky fullscreen wrapper — covers navbar when pinned */}
      <motion.div
        className="sticky left-0 right-0 w-full flex flex-col items-center justify-center"
        style={{ top, height, zIndex }}
      >
        {/* Background overlay that appears when fullscreen */}
        <motion.div
          className="absolute inset-0 bg-background"
          style={{ opacity: bgOpacity }}
        />

        {/* Content with width expansion */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <motion.div
            ref={frameRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            style={{ width, borderRadius, overflow: 'hidden' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex items-center justify-center max-w-[100vw] mx-auto"
          >
            {/* ── Laptop Frame ── */}
            <div className="relative w-full">
              <div className="relative bg-[#1a1a1a] rounded-t-2xl p-3 sm:p-4 shadow-2xl">
                <div className="relative bg-black rounded-lg overflow-hidden aspect-[16/10]">
                  <div className="relative w-full h-full">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`${title} screenshot ${currentIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"
                        custom={direction}
                        variants={{
                          enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                          center: { x: 0, opacity: 1 },
                          exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </AnimatePresence>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </div>
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#333] rounded-full" />
              </div>
              <div className="relative">
                <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] h-4 sm:h-6 rounded-b-lg shadow-xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-2 bg-[#333]/50 rounded-b-md" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full" />
            </div>
          </motion.div>

          {/* Arrow Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
            <button
              onClick={() => switchImage('prev')}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[hsl(var(--accent))] shadow-lg shadow-[hsl(var(--accent))/0.3] flex items-center justify-center transition-all duration-300 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110 hover:shadow-xl hover:shadow-[hsl(var(--accent))/0.4]'
                }`}
              disabled={currentIndex === 0}
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            <div className="flex items-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToImage(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-[hsl(var(--accent))] w-5'
                    : 'bg-[hsl(var(--accent)/0.4)] w-1.5 hover:bg-[hsl(var(--accent)/0.7)]'
                    }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => switchImage('next')}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[hsl(var(--accent))] shadow-lg shadow-[hsl(var(--accent))/0.3] flex items-center justify-center transition-all duration-300 ${currentIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110 hover:shadow-xl hover:shadow-[hsl(var(--accent))/0.4]'
                }`}
              disabled={currentIndex === images.length - 1}
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
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
            The Process.
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Crafted With Precision & Care.
          </h3>
        </motion.div>

        {/* Scroll-Driven Image Showcase */}
        <ScrollImageShowcase
          key={project.slug}
          images={project.images}
          title={project.title}
        />

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
