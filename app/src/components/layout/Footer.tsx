import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FOOTER_IMAGES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  onContactOpen?: () => void;
}

export function Footer({ onContactOpen }: FooterProps) {
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Grow-appear for footer video items
    document.querySelectorAll<HTMLElement>('.footer-video-item').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        }
      );
    });

    // Footer logo stretch animation on scroll into view
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { opacity: 0, y: '2rem' },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: logoRef.current, start: 'top 95%', once: true },
        }
      );
    }
  }, []);

  const NAV_COLS = [
    {
      title: 'Pages',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Work', href: '/work' },
        { label: 'Services', href: '/#services' },
        { label: 'About', href: '/about' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'GitHub ↗', href: 'https://github.com/oelbouha', external: true },
        { label: 'LinkedIn ↗', href: '#', external: true },
        { label: 'Dribbble ↗', href: '#', external: true },
        { label: 'Instagram ↗', href: '#', external: true },
      ],
    },
    {
      title: 'Studio',
      links: [
        { label: 'Based in Paris', href: '#' },
        { label: 'Available worldwide', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [{ label: 'hello@portfolio.com', href: 'mailto:hello@portfolio.com', external: true }],
    },
    {
      title: '',
      links: [
        { label: 'Legal', href: '#' },
        { label: '©2025 All rights reserved', href: '#' },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      {/* Project image grid */}
      <div className="footer-videos">
        {FOOTER_IMAGES.map((src, i) => (
          <div key={i} className="footer-video-item" style={{ opacity: 0 }}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      {/* Nav grid */}
      <div className="footer-grid">
        {NAV_COLS.map((col, ci) => (
          <div key={ci} className="footer-col">
            {col.title && (
              <span className="text-mono" style={{ marginBottom: '0.75rem', opacity: 0.35 }}>
                {col.title}
              </span>
            )}
            {col.links.map((link, li) => (
              <a
                key={li}
                href={link.href}
                target={'external' in link && link.external ? '_blank' : undefined}
                rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                className="text-mono"
                style={{ cursor: 'pointer' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* CTA bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem clamp(1rem, 2.5vw, 2.5rem)',
        borderTop: '1px solid rgba(128,128,128,0.15)',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p className="text-mono" style={{ opacity: 0.5 }}>
          Big project? Crazy thought? Or just feel like chatting?
        </p>
        <button
          onClick={onContactOpen}
          className="text-mono"
          data-cursor-hover="Send love"
          style={{ cursor: 'pointer', transition: 'opacity 0.25s ease' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
        >
          Let's talk! →
        </button>
      </div>

      {/* Stretched SVG logotype */}
      <div className="footer-logo-wrap">
        <svg
          ref={logoRef}
          className="footer-logo-svg"
          viewBox="0 0 1472 475"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ opacity: 0 }}
        >
          {/* "PORTFOLIO" rendered as block letters — simplified path representation */}
          {/* P */}
          <path d="M0 0H90V180C90 230 130 260 175 260H220V330H175C90 330 0 275 0 180V0Z" fill="currentColor" />
          <rect x="0" y="0" width="90" height="475" fill="currentColor" />
          <path d="M90 0H220C290 0 345 55 345 125C345 195 290 260 220 260H90V180H220C245 180 265 162 265 140C265 118 245 80 220 80H90V0Z" fill="currentColor" />
          {/* O */}
          <path d="M400 0C490 0 560 70 560 237C560 404 490 475 400 475C310 475 240 404 240 237C240 70 310 0 400 0ZM400 80C355 80 330 140 330 237C330 334 355 395 400 395C445 395 470 334 470 237C470 140 445 80 400 80Z" fill="currentColor" transform="translate(360, 0)" />
          {/* R */}
          <rect x="850" y="0" width="90" height="475" fill="currentColor" />
          <path d="M850 0H980C1050 0 1105 50 1105 120C1105 175 1075 215 1025 235L1120 475H1020L935 250H940V170H980C1005 170 1025 155 1025 130C1025 105 1005 80 980 80H940V0Z" fill="currentColor" />
          {/* T */}
          <rect x="1150" y="80" width="90" height="395" fill="currentColor" />
          <rect x="1100" y="0" width="350" height="80" fill="currentColor" />
          {/* Full name as text path fallback */}
          <text
            x="0" y="400"
            style={{ font: '700 430px Space Grotesk, sans-serif', letterSpacing: '-0.05em' }}
            fill="currentColor"
          >
            PORTFOLIO
          </text>
        </svg>
      </div>
    </footer>
  );
}
