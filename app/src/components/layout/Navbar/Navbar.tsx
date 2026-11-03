'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '@/context/ThemeContext';
import { layoutConfig } from '@/data';
import { navbarStyles } from './Navbar.styles';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface NavbarProps {
  onContactOpen?: () => void;
  onMenuOpen?: () => void;
  onNavigate?: (href: string) => void;
}

function useLiveClock(tz: string) {
  const [time, setTime] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: tz,
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
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
      <span className={navbarStyles.text} style={{ opacity: 0.55 }}>
        {city}
      </span>
      <span className={navbarStyles.text} suppressHydrationWarning>{time}</span>
    </div>
  );
}

export function Navbar({ onContactOpen, onMenuOpen, onNavigate }: NavbarProps) {
  const handleContactOpen = onContactOpen ?? (() => {});
  const handleMenuOpen = onMenuOpen ?? (() => {});
  const { theme, toggleTheme, mounted } = useTheme();
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isHiddenRef = useRef(false);
  const lastScrollY = useRef(0);

  const { navbar } = layoutConfig;

  // Initial intro animation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.to(topRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
    gsap.to(bottomRef.current, { y: 0, duration: 1.4, ease: 'power4.out', delay: 0.1 });
  }, []);

  // Directional scroll animation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (Math.abs(diff) < 6 && currentScrollY > 15) return;

      if (currentScrollY > 60 && diff > 0) {
        if (!isHiddenRef.current) {
          isHiddenRef.current = true;

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

          gsap.to('.nav-item-middle', {
            y: -45,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          });

          gsap.to(bottomRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      } else if (diff < 0 || currentScrollY <= 15) {
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

  const handleLinkNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <header className={navbarStyles.wrapper}>
      <nav ref={topRef} className={cn('nav-top', navbarStyles.bar)}>
        <div className={navbarStyles.inner}>
          {/* Mobile Layout (< md) */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="nav-item-left flex items-center">
              <a
                href="/"
                onClick={(e) => handleLinkNavigate(e, '/')}
                className="link"
                style={{ textDecoration: 'none' }}
                data-cursor-hover={navbar.brandHoverText}
              >
                <div className="link_first">
                  <span className={navbarStyles.text}>{navbar.brandName}</span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text}>{navbar.brandName}</span>
                </div>
              </a>
            </div>

            <div className="nav-item-right flex items-center gap-4 sm:gap-6">
              <button
                onClick={toggleTheme}
                className="link flex items-center"
                aria-label="Toggle theme"
              >
                <div className="link_first">
                  <span className={navbarStyles.text} suppressHydrationWarning>
                    {!mounted ? 'DARK' : theme === 'dark' ? 'LIGHT' : 'DARK'}
                  </span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text} suppressHydrationWarning>
                    {!mounted ? 'DARK' : theme === 'dark' ? 'LIGHT' : 'DARK'}
                  </span>
                </div>
              </button>

              <button
                id="menuToggle"
                onClick={handleMenuOpen}
                className="link flex items-center"
                aria-label="Open menu"
              >
                <div className="link_first">
                  <span className={navbarStyles.text}>{navbar.menuLabel}</span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text}>{navbar.menuOpenLabel}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Desktop Layout (md and up): 12-Column Grid */}
          <div className="hidden md:grid md:grid-cols-12 items-center w-full">
            {/* Column 1 (col-span-2): Brand OUTMAN */}
            <div className="nav-item-left col-span-2 flex items-center justify-start">
              <a
                href="/"
                onClick={(e) => handleLinkNavigate(e, '/')}
                className="link"
                style={{ textDecoration: 'none' }}
                data-cursor-hover={navbar.brandHoverText}
              >
                <div className="link_first">
                  <span className={navbarStyles.text}>{navbar.brandName}</span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text}>{navbar.brandName}</span>
                </div>
              </a>
            </div>

            {/* Column 2 (col-start-3 col-span-3): Theme Mode Toggle */}
            <div className="nav-item-middle col-start-3 col-span-3 flex items-center justify-start">
              <button onClick={toggleTheme} className="link" aria-label="Toggle theme">
                <div className="link_first">
                  <span className={navbarStyles.text} suppressHydrationWarning>
                    {!mounted
                      ? navbar.themeDarkLabel
                      : theme === 'dark'
                      ? navbar.themeLightLabel
                      : navbar.themeDarkLabel}
                  </span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text} suppressHydrationWarning>
                    {!mounted
                      ? navbar.themeDarkLabel
                      : theme === 'dark'
                      ? navbar.themeLightLabel
                      : navbar.themeDarkLabel}
                  </span>
                </div>
              </button>
            </div>

            {/* Column 3 (col-start-9 col-span-2): MENU */}
            <div className="nav-item-middle col-start-9 col-span-2 flex items-center justify-start">
              <button
                id="menuToggle"
                onClick={handleMenuOpen}
                className="link"
                aria-label="Open menu"
              >
                <div className="link_first">
                  <span className={navbarStyles.text}>{navbar.menuLabel}</span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text}>{navbar.menuOpenLabel}</span>
                </div>
              </button>
            </div>

            {/* Column 4 (col-start-11 col-span-2): LET'S TALK! */}
            <div className="nav-item-right col-start-11 col-span-2 flex items-center justify-end text-right">
              <button
                onClick={handleContactOpen}
                className="link"
                data-cursor-hover={navbar.ctaHoverLabel}
                aria-label="Open contact"
              >
                <div className="link_first">
                  <span className={navbarStyles.text}>{navbar.ctaLabel}</span>
                </div>
                <div className="link_second">
                  <span className={navbarStyles.text}>{navbar.ctaHoverLabel}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Nav Bar */}
      <nav ref={bottomRef} className={cn('nav-bottom hidden md:flex', navbarStyles.bar)}>
        <div className={navbarStyles.inner}>
          <span className={navbarStyles.text} style={{ opacity: 0.6 }}>
            {navbar.tickerText}
          </span>

          <div className={navbarStyles.rightGroup}>
            {navbar.clocks.map((c) => (
              <CityTime key={c.city} city={c.city} tz={c.tz} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
