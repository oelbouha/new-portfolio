import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { openMenu, closeMenu } from '@/lib/animations';
import { useTheme } from '@/context/ThemeContext';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (href: string) => void;
  onContactOpen?: () => void;
}

function useLiveClock(tz: string) {
  const [time, setTime] = useState('');

  useEffect(() => {
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

const COL_1_ITEMS = [
  {
    label: 'HOME',
    href: '/',
    img: '/images/call-to-action/home.jpeg',
  },
  {
    label: 'WORK',
    href: '/work',
    img: '/images/call-to-action/work.jpeg',
  },
  {
    label: 'SERVICES',
    href: '/#services',
    img: '/images/call-to-action/services.jpeg',
  },
  {
    label: 'ABOUT',
    href: '/about',
    img: '/images/call-to-action/about.jpeg',
  },
];

const COL_2_ITEMS = [
  {
    label: 'STUDIO',
    href: '/about',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
  },
  {
    label: 'PLANS',
    href: '/work',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
  },
  {
    label: 'NEWS',
    href: '/about',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
  },
];

function SVGMenuItem({
  label,
  href,
  img,
  isInteractive,
  onNavigate,
}: {
  label: string;
  href: string;
  img: string;
  isInteractive: boolean;
  onClose?: () => void;
  onNavigate?: (href: string) => void;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const blackRectRef = useRef<SVGRectElement>(null);
  const rectClipRef = useRef<SVGRectElement>(null);
  const imgRef = useRef<SVGImageElement>(null);
  const clipId = useRef(`menu-clip-${label.toLowerCase()}`);

  const targetRectWidth = 160;
  const gap = 18;

  useEffect(() => {
    let isCancelled = false;

    const measureAndInit = () => {
      if (!svgRef.current || !textRef.current || !blackRectRef.current || !rectClipRef.current || !imgRef.current) {
        return;
      }

      const fontSize = 120;
      const fontSpec = `900 ${fontSize}px "Bebas Neue", "Space Grotesk", sans-serif`;

      const canvas = document.createElement('canvas');
      const canvasCtx = canvas.getContext('2d');

      let ascent = fontSize * 0.72;
      let descent = 0;

      if (canvasCtx) {
        canvasCtx.font = fontSpec;
        const metrics = canvasCtx.measureText(label);
        if (metrics.actualBoundingBoxAscent > 0) {
          ascent = metrics.actualBoundingBoxAscent;
          descent = metrics.actualBoundingBoxDescent || 0;
        }
      }

      const rectHeight = ascent + descent;
      const rectY = 4;
      const baselineY = rectY + ascent;
      const rectRx = Math.min(rectHeight * 0.12, 10);

      const textW = textRef.current.getComputedTextLength();
      const totalWidth = targetRectWidth + gap + textW + 30;
      const totalHeight = rectHeight + 12;

      if (!isCancelled && svgRef.current) {
        svgRef.current.setAttribute('viewBox', `0 0 ${totalWidth} ${totalHeight}`);

        gsap.set(rectClipRef.current, {
          attr: { x: 0, y: rectY, width: 0, height: rectHeight, rx: rectRx },
        });

        gsap.set(imgRef.current, {
          attr: { x: 0, y: rectY, width: targetRectWidth, height: rectHeight },
          opacity: 0,
        });

        gsap.set(textRef.current, {
          attr: { x: 0, y: baselineY },
        });
      }
    };

    if (document.fonts) {
      document.fonts.ready.then(measureAndInit);
    } else {
      measureAndInit();
    }

    return () => {
      isCancelled = true;
    };
  }, [label]);

  // Reset animation state whenever isInteractive turns false (e.g. menu opening or closing)
  useEffect(() => {
    if (!isInteractive) {
      if (rectClipRef.current) gsap.set(rectClipRef.current, { attr: { width: 0 } });
      if (textRef.current) gsap.set(textRef.current, { attr: { x: 0 } });
      if (imgRef.current) gsap.set(imgRef.current, { opacity: 0 });
    }
  }, [isInteractive]);

  const handleMouseEnter = () => {
    if (!isInteractive || !textRef.current || !rectClipRef.current || !imgRef.current) return;

    gsap.killTweensOf([rectClipRef.current, textRef.current, imgRef.current]);

    gsap.to(rectClipRef.current, {
      attr: { width: targetRectWidth },
      duration: 0.82,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    gsap.to(textRef.current, {
      attr: { x: targetRectWidth + gap },
      duration: 0.82,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    gsap.to(imgRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    if (!textRef.current || !rectClipRef.current || !imgRef.current) return;

    gsap.killTweensOf([rectClipRef.current, textRef.current, imgRef.current]);

    gsap.to(rectClipRef.current, {
      attr: { width: 0 },
      duration: 0.62,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });

    gsap.to(textRef.current, {
      attr: { x: 0 },
      duration: 0.62,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });

    gsap.to(imgRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: 'power2.in',
      overwrite: 'auto',
    });
  };

  return (
    <a
      href={href}
      className={`block select-none py-1 sm:py-2 w-full text-left ${isInteractive ? 'cursor-pointer' : 'cursor-default'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        e.preventDefault();
        if (!isInteractive) return;
        if (rectClipRef.current) gsap.set(rectClipRef.current, { attr: { width: 0 } });
        if (textRef.current) gsap.set(textRef.current, { attr: { x: 0 } });
        if (imgRef.current) gsap.set(imgRef.current, { opacity: 0 });
        // Navigate directly — handleNavigate will close the menu behind the overlay
        onNavigate?.(href);
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 600 120"
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-auto max-h-[130px] sm:max-h-[175px] lg:max-h-[215px] overflow-visible block text-left"
      >
        <defs>
          <clipPath id={clipId.current}>
            <rect ref={rectClipRef} x="0" y="4" width="0" height="100" rx="10" />
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId.current})`}>
          <image
            ref={imgRef}
            href={img}
            x="0"
            y="4"
            width={targetRectWidth}
            height="100"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>

        <text
          ref={textRef}
          x="0"
          y="96"
          className="fill-current font-black uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '120px',
            fontWeight: 900,
            letterSpacing: '-0.012em',
          }}
        >
          {label}
        </text>
      </svg>
    </a>
  );
}

export function FullscreenMenu({ isOpen, onClose, onNavigate, onContactOpen }: FullscreenMenuProps) {
  const menuRef = useRef<HTMLElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const wasOpen = useRef(false);
  const isNavigatingRef = useRef(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const moroccoTime = useLiveClock('Africa/Casablanca');

  // Called by SVGMenuItem when user clicks a nav link
  const handleMenuItemNavigate = (href: string) => {
    isNavigatingRef.current = true;
    onNavigate?.(href);
  };

  useEffect(() => {
    const page = document.querySelector<HTMLElement>('.page-main');
    const menu = menuRef.current;
    const content = menuContentRef.current;

    if (!page || !menu || !content) return;

    if (isOpen && !wasOpen.current) {
      wasOpen.current = true;
      setIsInteractive(false);
      if (isAnimating.current) return;
      isAnimating.current = true;
      const tl = openMenu(page, menu, content);
      tl?.eventCallback('onComplete', () => { 
        isAnimating.current = false; 
        setIsInteractive(true);
      });
    } else if (!isOpen && wasOpen.current) {
      wasOpen.current = false;
      setIsInteractive(false);

      // If navigating, skip closeMenu's page-restore animation —
      // the page transition overlay is opaque and handles everything.
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        isAnimating.current = false;
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
        gsap.set([menu, content], { clearProps: 'all' });
        return;
      }

      if (isAnimating.current) return;
      isAnimating.current = true;
      closeMenu(page, menu, content, () => { 
        isAnimating.current = false; 
        setIsInteractive(false);
      });
    }
  }, [isOpen]);

  // ESC key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

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
        className="nav-menu_component relative w-full h-full overflow-hidden"
        style={{
          opacity: 0.25,
          transform: 'translateX(-100px) translateY(-100px) scale(1.5) rotate(-15deg)',
        }}
      >
        {/* 1. Top Header Bar — Absolutely Pinned to Top */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6 z-30 pointer-events-auto">
          {/* Left: OUTMAN + DARK MODE */}
          <div className="flex items-center gap-6 sm:gap-10">
            <a href="/" className="link" style={{ textDecoration: 'none' }}>
              <div className="link_first"><span className="text-mono">OUTMAN</span></div>
              <div className="link_second"><span className="text-mono">OUTMAN</span></div>
            </a>

            <button onClick={toggleTheme} className="link" aria-label="Toggle theme">
              <div className="link_first">
                <span className="text-mono">{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
              </div>
              <div className="link_second">
                <span className="text-mono">{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
              </div>
            </button>
          </div>

          {/* Right: CLOSE + LET'S TALK! */}
          <div className="flex items-center gap-6 sm:gap-10">
            <button onClick={onClose} aria-label="Close menu" className="link">
              <div className="link_first"><span className="text-mono">CLOSE</span></div>
              <div className="link_second"><span className="text-mono">CLOSE</span></div>
            </button>

            <button
              onClick={() => {
                onClose();
                onContactOpen?.();
              }}
              className="link"
              aria-label="Open contact"
            >
              <div className="link_first"><span className="text-mono">LET'S TALK!</span></div>
              <div className="link_second"><span className="text-mono">LET'S TALK!</span></div>
            </button>
          </div>
        </div>

        {/* 2. Middle Menu Items Grid — Padded between top & bottom bars */}
        <div className="absolute inset-0 pt-20 pb-20 px-6 sm:px-12 flex items-center justify-center z-10">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-28 gap-y-0 sm:gap-y-1 w-full max-w-[1980px] mx-auto items-center ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <div className="flex flex-col items-start w-full">
              {COL_1_ITEMS.map((item) => (
                <SVGMenuItem
                  key={item.label}
                  {...item}
                  isInteractive={isInteractive}
                  onClose={onClose}
                  onNavigate={handleMenuItemNavigate}
                />
              ))}
            </div>
            <div className="flex flex-col items-start w-full">
              {COL_2_ITEMS.map((item) => (
                <SVGMenuItem
                  key={item.label}
                  {...item}
                  isInteractive={isInteractive}
                  onClose={onClose}
                  onNavigate={handleMenuItemNavigate}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3. Bottom Footer Bar — Absolutely Pinned to Bottom */}
        <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-6 py-4 sm:px-10 sm:py-5 border-t border-black/10 dark:border-white/10 z-30 pointer-events-auto bg-[var(--nav-menu-bg)]">
          <span className="text-mono opacity-60">WE CRAFT BOLD DESIGN &amp; CLEAN CODE.</span>
          <div className="flex items-center gap-3">
            <span className="text-mono opacity-60">MOROCCO</span>
            <span className="text-mono font-medium">{moroccoTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
