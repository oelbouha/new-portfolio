import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';

export function HeroSection() {
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

  return (
    <>
      <section className="hero-section">
        {/* Top Bar */}
        <div className="hero-topbar">
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

        {/* Center Content */}
        <div className="hero-center">
          <h1 className="hero-headline">
            BEAUTIFUL
            <br />
            EXPERIENCES
            <br />
            BUILT TO PERFORM
          </h1>
          <p className="hero-subtitle">
            FROM CONCEPT TO CODE, BUILDING ROBUST APPLICATIONS 

            <br />
            FLAWLESS MIX OF CODE AND DESIGN
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="hero-bottombar">
          <div className="hero-bottombar-left">
            <span className="hero-based-label">BASED IN</span>{' '}
            <span className="hero-based-location">TÉTOUAN, MOROCCO</span>
          </div>
          <div className="hero-bottombar-right">
            <span className="hero-name">OUTMAN</span>
            <span className="hero-separator">|</span>
            <span className="hero-role">FULL STACK DEVELOPER</span>
          </div>
        </div>
      </section>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
