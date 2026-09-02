import { useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { heroSectionStyles } from './HeroSection.styles';
import type { HeroSectionProps } from './HeroSection.types';

// Curated image pool — web/design/craft themed
const CRAFT_IMAGES = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80',
  'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80',
  'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=400&q=80',
  'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&q=80',
];

let imgIndex = 0;
let zBase = 9000;

const SPREAD = 35;

const IMAGE_SIZES = [
  { W: 130,  H: 100 },
  { W: 200,  H: 160 },
  { W: 170,  H: 230 },
];

function spawnImage(cx: number, cy: number, container: HTMLDivElement) {
  const src = CRAFT_IMAGES[imgIndex % CRAFT_IMAGES.length];
  imgIndex++;
  zBase++;

  const { W, H } = IMAGE_SIZES[imgIndex % IMAGE_SIZES.length];
  const spreadX = (Math.random() - 0.5) * SPREAD * 2;
  const spreadY = (Math.random() - 0.5) * SPREAD * 2;
  const left = Math.round(cx + spreadX - W / 2);
  const top  = Math.round(cy + spreadY - H / 2);
  const rotation = (Math.random() - 0.5) * 20;

  const img = document.createElement('img');
  img.src = src;
  img.style.cssText = `
    position: fixed;
    left: ${left}px;
    top: ${top}px;
    width: ${W}px;
    height: ${H}px;
    object-fit: cover;
    border-radius: 6px;
    pointer-events: none;
    z-index: ${zBase};
    will-change: transform, opacity;
    transform-origin: center center;
    box-shadow: 0 12px 40px rgba(0,0,0,0.28);
  `;

  container.appendChild(img);

  gsap
    .timeline({ onComplete: () => img.remove() })
    .fromTo(
      img,
      { scale: 0.7, opacity: 0, rotate: rotation - 6 },
      { scale: 1, opacity: 1, rotate: rotation, duration: 0.28, ease: 'back.out(1.6)' }
    )
    .to(img, {
      opacity: 0,
      scale: 0.9,
      duration: 0.24,
      ease: 'power2.in',
      delay: 0.58,
    });
}

import { homeData } from '@/data/home.data';

export function HeroSection({}: HeroSectionProps = {}) {
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordsRef     = useRef<(HTMLSpanElement | null)[]>([]);
  const cursorRef    = useRef({ x: 0, y: 0 });
  const heroRef      = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      wordsRef.current.forEach((wordEl, i) => {
        if (!wordEl) return;
        gsap.from(wordEl, {
          y: '100%',
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3 + i * 0.12,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const killHoverImages = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (containerRef.current) {
      const c = containerRef.current;
      gsap.to(Array.from(c.children), {
        opacity: 0,
        scale: 0.85,
        duration: 0.18,
        stagger: 0.02,
        ease: 'power2.in',
        onComplete: () => c.remove(),
      });
      containerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleOutsidePointer = (e: PointerEvent) => {
      if (heroRef.current && !heroRef.current.contains(e.target as Node)) {
        killHoverImages();
      }
    };
    document.addEventListener('pointerdown', handleOutsidePointer);
    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointer);
      killHoverImages();
    };
  }, [killHoverImages]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    cursorRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    cursorRef.current = { x: e.clientX, y: e.clientY };

    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:8999;';
    document.body.appendChild(container);
    containerRef.current = container;

    spawnImage(cursorRef.current.x, cursorRef.current.y, container);

    intervalRef.current = setInterval(() => {
      spawnImage(cursorRef.current.x, cursorRef.current.y, container);
    }, 340);
  }, []);

  const handleMouseLeave = useCallback(() => {
    killHoverImages();
  }, [killHoverImages]);

  return (
    <section ref={heroRef} className={heroSectionStyles.section} id="hero">
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[8999]" />

      <div className={heroSectionStyles.inner}>
        <h1 className={heroSectionStyles.title}>
          {homeData.hero.words.map((word, i) => (
            <span
              key={word}
              ref={(el) => { wordsRef.current[i] = el; }}
              className={heroSectionStyles.hoverWord}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      <div aria-hidden className={heroSectionStyles.noise} />
    </section>
  );
}

