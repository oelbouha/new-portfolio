import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FOOTER_IMAGES } from '@/lib/constants';
import { layoutData } from '@/data/layout.data';
import { footerStyles } from './Footer.styles';
import type { FooterProps } from './Footer.types';

export function Footer({}: FooterProps = {}) {
  const footerRef = useRef<HTMLElement>(null);

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
        {layoutData.nav.columns.map((col, ci) => (
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
      {/* <div className='mb-20'></div> */}
    </footer>
  );
}
