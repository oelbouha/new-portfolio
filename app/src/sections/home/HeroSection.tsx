import { useState, useEffect } from 'react';
import { motion, type Easing } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as Easing, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as Easing, delay },
  }),
};

export function HeroSection({ preloaderDone = true }: { preloaderDone?: boolean }) {
  const [currentTime, setCurrentTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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

  const animate = preloaderDone ? 'visible' : 'hidden';

  return (
    <>
      <section className="hero-section">
        {/* Top Bar */}
        <motion.div
          className="hero-topbar"
          variants={fadeIn}
          initial="hidden"
          animate={animate}
          custom={0.3}
        >
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
        </motion.div>

        {/* Center Content */}
        <div className="hero-center">
          <h1 className="hero-headline">
            <motion.span
              className="hero-line"
              variants={fadeSlideUp}
              initial="hidden"
              animate={animate}
              custom={0}
            >
              FULL STACK WEB
            </motion.span>
            <motion.span
              className="hero-line"
              variants={fadeSlideUp}
              initial="hidden"
              animate={animate}
              custom={0.15}
            >
              & MOBILE APP
            </motion.span>
            <motion.span
              className="hero-line"
              variants={fadeSlideUp}
              initial="hidden"
              animate={animate}
              custom={0.3}
            >
              DEVELOPER
            </motion.span>
          </h1>
          <motion.p
            className="hero-subtitle"
            variants={fadeSlideUp}
            initial="hidden"
            animate={animate}
            custom={0.55}
          >
            FULL STACK WEB AND MOBILE APP DEVELOPMENT
            <br />
            FOR STARTUPS, SAAS, AND GLOBAL CLIENTS
          </motion.p>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="hero-bottombar"
          variants={fadeIn}
          initial="hidden"
          animate={animate}
          custom={0.6}
        >
          <div className="hero-bottombar-left">
            <span className="hero-based-label">BASED IN</span>{' '}
            <span className="hero-based-location">TÉTOUAN, MOROCCO</span>
          </div>
          <div className="hero-bottombar-right">
            <span className="hero-name">OUTMAN</span>
            <span className="hero-separator">|</span>
            <span className="hero-role">FULL STACK DEVELOPER</span>
          </div>
        </motion.div>
      </section>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
