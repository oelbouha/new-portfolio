import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FOOTER_IMAGES } from '@/lib/constants';
import { footerStyles } from './Footer.styles';
import type { FooterProps } from './Footer.types';

export function Footer({ onContactOpen }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);

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
          <motion.div
            key={i}
            className={footerStyles.videoItem}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
          >
            <img src={src} alt="" loading="lazy" className={footerStyles.videoImg} />
          </motion.div>
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
