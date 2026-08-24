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

  useEffect(() => {
    gsap.to(topRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
    gsap.to(bottomRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
  }, []);

  return (
    <header className={navbarStyles.wrapper}>
      <nav ref={topRef} className={cn('nav-top', navbarStyles.bar)}>
        <div className={navbarStyles.inner}>
          {/* Left: OUTMAN + Dark mode */}
          <div className="flex items-center gap-4 sm:gap-8">
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

            <button onClick={toggleTheme} className="link" aria-label="Toggle theme">
              <div className="link_first">
                <span className={navbarStyles.text}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              </div>
              <div className="link_second">
                <span className={navbarStyles.text}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              </div>
            </button>
          </div>

          {/* Right: Menu + Let's talk */}
          <div className={navbarStyles.rightGroup}>
            <button id="menuToggle" onClick={handleMenuOpen} className="link" aria-label="Open menu">
              <div className="link_first"><span className={navbarStyles.text}>Menu</span></div>
              <div className="link_second"><span className={navbarStyles.text}>Open</span></div>
            </button>

            <button onClick={handleContactOpen} className="link" data-cursor-hover="Let's talk" aria-label="Open contact">
              <div className="link_first"><span className={navbarStyles.text}>Let's talk!</span></div>
              <div className="link_second"><span className={navbarStyles.text}>Contact us</span></div>
            </button>
          </div>
        </div>
      </nav>

      <nav ref={bottomRef} className={cn('nav-bottom', navbarStyles.bar)}>
        <div className={navbarStyles.inner}>
          <span className={navbarStyles.text} style={{ opacity: 0.6 }}>
            We craft bold design &amp; clean code.
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