import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTheme } from '@/context/ThemeContext';
import { CITY_CLOCKS } from '@/lib/constants';

interface NavbarProps {
  onContactOpen: () => void;
  onMenuOpen: () => void;
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
    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
      <span className="text-mono nav-text" style={{ opacity: 0.55 }}>{city}</span>
      <span className="text-mono nav-text">{time}</span>
    </div>
  );
}

export function Navbar({ onContactOpen, onMenuOpen }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate in after a tiny delay (will be called after preloader)
    gsap.to(topRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
    gsap.to(bottomRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
  }, []);

  return (
    <>
      {/* TOP NAV BAR */}
      <nav ref={topRef} className="nav-top">
        <div className="nav-top_component">
          {/* Left: Logo */}
          <a href="/" className="link" style={{ textDecoration: 'none' }} data-cursor-hover="Home">
            <div className="link_first"><span className="text-mono nav-text">Portfolio</span></div>
            <div className="link_second"><span className="text-mono nav-text">Portfolio</span></div>
          </a>

          {/* Center: Menu button */}
          <button
            id="menuToggle"
            onClick={onMenuOpen}
            className="link"
            aria-label="Open menu"
            style={{ cursor: 'pointer' }}
          >
            <div className="link_first"><span className="text-mono nav-text">Menu</span></div>
            <div className="link_second"><span className="text-mono nav-text">Open</span></div>
          </button>

          {/* Right: Dark mode + Let's talk */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button
              onClick={toggleTheme}
              className="link"
              aria-label="Toggle theme"
            >
              <div className="link_first">
                <span className="text-mono nav-text">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              </div>
              <div className="link_second">
                <span className="text-mono nav-text">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              </div>
            </button>

            <button
              onClick={onContactOpen}
              className="link"
              data-cursor-hover="Let's talk"
              aria-label="Open contact"
            >
              <div className="link_first"><span className="text-mono nav-text">Let's talk!</span></div>
              <div className="link_second"><span className="text-mono nav-text">Contact us</span></div>
            </button>
          </div>
        </div>
      </nav>

      {/* BOTTOM NAV BAR */}
      <nav ref={bottomRef} className="nav-bottom">
        <div className="nav-bottom_component">
          {/* Left: tagline */}
          <span className="text-mono nav-text" style={{ opacity: 0.6 }}>
            We craft bold design &amp; clean code.
          </span>

          {/* Right: City clocks */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {CITY_CLOCKS.map((c) => (
              <CityTime key={c.tz} city={c.city} tz={c.tz} />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
