import { useEffect, useRef } from 'react';
import { openMenu, closeMenu } from '@/lib/animations';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (href: string) => void;
}

export function FullscreenMenu({ isOpen, onClose, onNavigate }: FullscreenMenuProps) {
  const menuRef = useRef<HTMLElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const wasOpen = useRef(false);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>('.page-main');
    const menu = menuRef.current;
    const content = menuContentRef.current;

    if (!page || !menu || !content) return;

    if (isOpen && !wasOpen.current) {
      wasOpen.current = true;
      if (isAnimating.current) return;
      isAnimating.current = true;
      const tl = openMenu(page, menu, content);
      tl?.eventCallback('onComplete', () => { isAnimating.current = false; });
    } else if (!isOpen && wasOpen.current) {
      wasOpen.current = false;
      if (isAnimating.current) return;
      isAnimating.current = true;
      closeMenu(page, menu, content, () => { isAnimating.current = false; });
    }
  }, [isOpen]);

  // ESC key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

  const allItems = [
    { label: 'Home', href: '/', col: 1 },
    { label: 'Work', href: '/work', col: 1 },
    { label: 'Services', href: '/#services', col: 1 },
    { label: 'About', href: '/about', col: 1 },
    { label: 'Studio', href: '/about', col: 2 },
    { label: 'Contact', href: '#contact', col: 2 },
  ];

  const col1 = allItems.filter(i => i.col === 1);
  const col2 = allItems.filter(i => i.col === 2);

  return (
    <section
      ref={menuRef}
      className="nav-menu"
      aria-hidden={!isOpen}
      aria-modal={isOpen}
      role="dialog"
    >
      <div
        ref={menuContentRef}
        className="nav-menu_component"
        style={{
          opacity: 0.25,
          transform: 'translateX(-100px) translateY(-100px) scale(1.5) rotate(-15deg)',
        }}
      >
        {/* Menu header */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(1rem, 2.5vw, 2.5rem)',
          paddingTop: '1.1rem',
          paddingBottom: '1.1rem',
        }}>
          <span className="text-mono" style={{ opacity: 0.5 }}>Portfolio — Navigation</span>
          <button
            onClick={onClose}
            className="link"
            aria-label="Close menu"
            style={{ cursor: 'pointer' }}
          >
            <div className="link_first"><span className="text-mono">Close</span></div>
            <div className="link_second"><span className="text-mono">Close</span></div>
          </button>
        </div>

        {/* Column 1 */}
        <div className="nav-menu_col">
          {col1.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-menu_link_wrapper"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => onNavigate?.(item.href), 900);
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="nav-menu_link">{item.label}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Column 2 */}
        <div className="nav-menu_col">
          {col2.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-menu_link_wrapper"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => onNavigate?.(item.href), 900);
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="nav-menu_link">{item.label}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer row */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(1rem, 2.5vw, 2.5rem)',
          paddingTop: '1.1rem',
          paddingBottom: '1.1rem',
          borderTop: '1px solid rgba(128,128,128,0.15)',
        }}>
          <span className="text-mono" style={{ opacity: 0.5 }}>©2025 All rights reserved</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/oelbouha' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Dribbble', href: '#' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono"
                style={{ opacity: 0.55, transition: 'opacity 0.25s ease' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
