import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FOOTER_IMAGES } from '@/lib/constants';
import { footerStyles } from './Footer.styles';
import type { FooterProps } from './Footer.types';

gsap.registerPlugin(ScrollTrigger);

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
    <footer ref={footerRef} className={footerStyles.footer}>
      {/* Project image grid */}
      <div className={footerStyles.videosGrid}>
        {FOOTER_IMAGES.map((src, i) => (
          <div key={i} className={footerStyles.videoItem} style={{ opacity: 0 }}>
            <img src={src} alt="" loading="lazy" className={footerStyles.videoImg} />
          </div>
        ))}
      </div>

      {/* Nav grid */}
      <div className={footerStyles.navGrid}>
        {NAV_COLS.map((col, ci) => (
          <div key={ci} className={footerStyles.navCol}>
            {col.title && <span className={footerStyles.colTitle}>{col.title}</span>}
            {col.links.map((link, li) => (
              <a
                key={li}
                href={link.href}
                target={'external' in link && link.external ? '_blank' : undefined}
                rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                className={footerStyles.navLink}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* CTA bar */}
      <div className={footerStyles.ctaBar}>
        <p className={footerStyles.ctaText}>
          Big project? Crazy thought? Or just feel like chatting?
        </p>
        <button
          onClick={onContactOpen}
          className={footerStyles.ctaButton}
          data-cursor-hover="Send love"
        >
          <span>Let's talk!</span>
          <span className={footerStyles.ctaArrow}>→</span>
        </button>
      </div>
    </footer>
  );
}
