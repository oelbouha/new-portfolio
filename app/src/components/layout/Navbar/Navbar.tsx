import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTheme } from '@/context/ThemeContext';
import { CITY_CLOCKS } from '@/lib/constants';
import { navbarStyles } from './Navbar.styles';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onContactOpen?: () => void;
  onMenuOpen?: () => void;
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

export function Navbar({ onContactOpen, onMenuOpen }: NavbarProps) {
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
          <a href="/" className={navbarStyles.link} style={{ textDecoration: 'none' }} data-cursor-hover="Home">
            <span className={cn(navbarStyles.text, navbarStyles.linkLine)}>OUTMAN</span>
            <span className={cn(navbarStyles.text, navbarStyles.linkLine, navbarStyles.linkSecond)}>OUTMAN</span>
          </a>

          <button
            id="menuToggle"
            onClick={handleMenuOpen}
            className={navbarStyles.link}
            aria-label="Open menu"
            style={{ cursor: 'pointer' }}
          >
            <span className={cn(navbarStyles.text, navbarStyles.linkLine)}>Menu</span>
            <span className={cn(navbarStyles.text, navbarStyles.linkLine, navbarStyles.linkSecond)}>Open</span>
          </button>

          <div className={navbarStyles.rightGroup}>
            <button onClick={toggleTheme} className={navbarStyles.link} aria-label="Toggle theme">
              <span className={cn(navbarStyles.text, navbarStyles.linkLine)}>
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </span>
              <span className={cn(navbarStyles.text, navbarStyles.linkLine, navbarStyles.linkSecond)}>
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </span>
            </button>

            <button
              onClick={handleContactOpen}
              className={navbarStyles.link}
              data-cursor-hover="Let's talk"
              aria-label="Open contact"
            >
              <span className={cn(navbarStyles.text, navbarStyles.linkLine)}>Let's talk!</span>
              <span className={cn(navbarStyles.text, navbarStyles.linkLine, navbarStyles.linkSecond)}>Contact us</span>
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
              <CityTime key={c.tz} city={c.city} tz={c.tz} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}