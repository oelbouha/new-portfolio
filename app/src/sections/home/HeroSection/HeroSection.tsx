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

// ─── CONFIG — edit these to tweak the hover image effect ────────────────────
const SPREAD = 35; // random spread radius around cursor (px)

const IMAGE_SIZES = [
  // Label    W(px)  H(px)
  { W: 130,  H: 100 }, // S — small landscape
  { W: 200,  H: 160 }, // M — medium wide
  { W: 170,  H: 230 }, // L — tall portrait
];
// ─────────────────────────────────────────────────────────────────────────────

function spawnImage(cx: number, cy: number, container: HTMLDivElement) {
  const src = CRAFT_IMAGES[imgIndex % CRAFT_IMAGES.length];
  imgIndex++;
  zBase++;

  const { W, H } = IMAGE_SIZES[imgIndex % IMAGE_SIZES.length];

  // Small spread around cursor — images cluster near cursor but fan out slightly
  const spreadX = (Math.random() - 0.5) * SPREAD * 2;
  const spreadY = (Math.random() - 0.5) * SPREAD * 2;

  // Center the image on (cursor + spread offset)
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

export function HeroSection({}: HeroSectionProps = {}) {
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordsRef     = useRef<(HTMLSpanElement | null)[]>([]);
  // Live cursor position tracked by onMouseMove
  const cursorRef = useRef({ x: 0, y: 0 });

  // Initial load stagger flip animation for WE, CRAFT, WEBSITES
  useEffect(() => {
    const ctx = gsap.context(() => {
      wordsRef.current.forEach((wordEl, i) => {
        if (!wordEl) return;
        const first = wordEl.querySelector('.link_first');
        const second = wordEl.querySelector('.link_second');
        if (!first || !second) return;

        gsap.timeline({ delay: 0.4 + i * 0.3 })
          .to([first, second], {
            yPercent: -110,
            duration: 0.45,
            ease: 'power3.inOut',
          })
          .to([first, second], {
            yPercent: 0,
            duration: 0.45,
            ease: 'power3.inOut',
            delay: 0.2,
          });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    cursorRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    cursorRef.current = { x: e.clientX, y: e.clientY };

    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:8999;';
    document.body.appendChild(container);
    containerRef.current = container;

    // Spawn first image immediately at cursor
    spawnImage(cursorRef.current.x, cursorRef.current.y, container);

    intervalRef.current = setInterval(() => {
      spawnImage(cursorRef.current.x, cursorRef.current.y, container);
    }, 340);
  }, []);

  const handleMouseLeave = useCallback(() => {
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

  const WORDS = ['WE THINK', 'CRAFT AND', 'DESIGN'];

  return (
    <section className={heroSectionStyles.section} id="hero">
      <div className={heroSectionStyles.inner}>
        <h1 className={heroSectionStyles.title}>
          {WORDS.map((word, i) => (
            <span
              key={word}
              ref={(el) => (wordsRef.current[i] = el)}
              className={heroSectionStyles.hoverWord}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div className="link_first w-full text-center flex items-center justify-center">{word}</div>
              <div className="link_second w-full text-center flex items-center justify-center">{word}</div>
            </span>
          ))}
        </h1>
      </div>

      <div aria-hidden className={heroSectionStyles.noise} />
    </section>
  );
}

