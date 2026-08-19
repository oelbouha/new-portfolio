import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FOOTER_IMAGES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  onContactOpen?: () => void;
}

export function Footer({ onContactOpen }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Footer Video/Image Grid reveal animation
      document.querySelectorAll<HTMLElement>('.footer-video-item').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          }
        );
      });
    }, footerRef);

    return () => ctx.revert();
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
        { label: 'Based in morocco', href: '#' },
        { label: 'Available worldwide', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [{ label: 'outmanelbouhali5@gmail.com', href: 'mailto:outmanelbouhali5@gmail.com', external: true }],
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
    <footer ref={footerRef} className="site-footer overflow-hidden">
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem clamp(1rem, 2.5vw, 2.5rem)',
          borderTop: '1px solid rgba(128,128,128,0.15)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p className="text-mono" style={{ opacity: 0.5 }}>
          Big project? Crazy thought? Or just feel like chatting?
        </p>
        <button
          onClick={onContactOpen}
          className="text-mono inline-flex items-center gap-2 group cursor-pointer"
          data-cursor-hover="Send love"
          style={{ transition: 'opacity 0.25s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
        >
          <span>Let's talk!</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>

    </footer>
  );
}
