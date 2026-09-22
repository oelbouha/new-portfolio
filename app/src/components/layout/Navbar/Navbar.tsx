import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTheme } from '@/context/ThemeContext';
import { CITY_CLOCKS } from '@/lib/constants';
import { navbarStyles } from './Navbar.styles';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onContactOpen?: () => void;
  onMenuOpen?: () => void;
  onNavigate?: (href: string) => void;
}

function useLiveClock(tz: string) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: tz,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [tz]);

  return time;
}

function CityTime({ city, tz }: { city: string; tz: string }) {
  const time = useLiveClock(tz);
  return (
    <div className={navbarStyles.clock}>
      <span className={navbarStyles.text} style={{ opacity: 0.55 }}>{city}</span>
      <span className={navbarStyles.text}>{time}</span>
    </div>
  );
}

export function Navbar({ onContactOpen, onMenuOpen, onNavigate }: NavbarProps) {
  const handleContactOpen = onContactOpen ?? (() => {});
  const handleMenuOpen = onMenuOpen ?? (() => {});
  const { theme, toggleTheme } = useTheme();
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isHiddenRef = useRef(false);
  const lastScrollY = useRef(0);

  // Initial intro animation
  useEffect(() => {
    gsap.to(topRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
    gsap.to(bottomRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
  }, []);

  // Directional scroll animation:
  // Scroll Down: Side items move sideways, middle items move up, bottom items move down
  // Scroll Up: Items smoothly animate back to their initial positions
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // Small threshold to prevent jitter on micro-scrolls
      if (Math.abs(diff) < 6 && currentScrollY > 15) return;

      if (currentScrollY > 60 && diff > 0) {
        // Scrolling DOWN -> Hide menu items directionally
        if (!isHiddenRef.current) {
          isHiddenRef.current = true;

          // Side items move to their respective sides
          gsap.to('.nav-item-left', {
            x: -80,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          });

          gsap.to('.nav-item-right', {
            x: 80,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          });

          // Middle items move to top
          gsap.to('.nav-item-middle', {
            y: -45,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          });

          // Bottom nav bar items move to bottom
          gsap.to(bottomRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      } else if (diff < 0 || currentScrollY <= 15) {
        // Scrolling UP or at top -> Show all menu items
        if (isHiddenRef.current) {
          isHiddenRef.current = false;

          gsap.to('.nav-item-left, .nav-item-right', {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto',
          });

          gsap.to('.nav-item-middle', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto',
          });

          gsap.to(bottomRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={navbarStyles.wrapper}>
      <nav ref={topRef} className={cn('nav-top', navbarStyles.bar)}>
        <div className={navbarStyles.inner}>
          {/* Mobile Layout (< md): OUTMAN on left, Dark Mode + MENU on right */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="nav-item-left flex items-center">
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/');
                  }
                }}
                className="link"
                style={{ textDecoration: 'none' }}
                data-cursor-hover="Home"
              >
                <div className="link_first"><span className={navbarStyles.text}>OUTMAN</span></div>
                <div className="link_second"><span className={navbarStyles.text}>OUTMAN</span></div>
              </a>
            </div>

            <div className="nav-item-right flex items-center gap-4 sm:gap-6">
              <button onClick={toggleTheme} className="link flex items-center" aria-label="Toggle theme">
                <div className="link_first">
                  <span className={navbarStyles.text}>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text}>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
                </div>
              </button>

              <button id="menuToggle" onClick={handleMenuOpen} className="link flex items-center" aria-label="Open menu">
                <div className="link_first"><span className={navbarStyles.text}>MENU</span></div>
                <div className="link_second"><span className={navbarStyles.text}>OPEN</span></div>
              </button>
            </div>
          </div>

          {/* Desktop Layout (md and up): Exact 12-Column Grid with directional animation classes */}
          <div className="hidden md:grid md:grid-cols-12 items-center w-full">
            {/* Column 1 (starts col 1): OUTMAN (slides left on scroll down) */}
            <div className="nav-item-left col-span-2 flex items-center justify-start">
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/');
                  }
                }}
                className="link"
                style={{ textDecoration: 'none' }}
                data-cursor-hover="Home"
              >
                <div className="link_first"><span className={navbarStyles.text}>OUTMAN</span></div>
                <div className="link_second"><span className={navbarStyles.text}>OUTMAN</span></div>
              </a>
            </div>

            {/* Column 2 (starts col 3): DARK MODE (slides top on scroll down) */}
            <div className="nav-item-middle col-start-3 col-span-3 flex items-center justify-start">
              <button onClick={toggleTheme} className="link" aria-label="Toggle theme">
                <div className="link_first">
                  <span className={navbarStyles.text}>{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text}>{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
                </div>
              </button>
            </div>

            {/* Column 3 (starts col 9): MENU (slides top on scroll down) */}
            <div className="nav-item-middle col-start-9 col-span-2 flex items-center justify-start">
              <button id="menuToggle" onClick={handleMenuOpen} className="link" aria-label="Open menu">
                <div className="link_first"><span className={navbarStyles.text}>MENU</span></div>
                <div className="link_second"><span className={navbarStyles.text}>OPEN</span></div>
              </button>
            </div>

            {/* Column 4 (ends col 12): LET'S TALK! (slides right on scroll down) */}
            <div className="nav-item-right col-start-11 col-span-2 flex items-center justify-end text-right">
              <button onClick={handleContactOpen} className="link" data-cursor-hover="Let's talk" aria-label="Open contact">
                <div className="link_first"><span className={navbarStyles.text}>LET'S TALK!</span></div>
                <div className="link_second"><span className={navbarStyles.text}>CONTACT</span></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav ref={bottomRef} className={cn('nav-bottom hidden md:flex', navbarStyles.bar)}>
        <div className={navbarStyles.inner}>
          <span className={navbarStyles.text} style={{ opacity: 0.6 }}>
            I turn ideas into production-ready products.
          </span>

          <div className={navbarStyles.rightGroup}>
            {CITY_CLOCKS.map((c) => (
              <CityTime key={c.city} city={c.city} tz={c.tz} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}