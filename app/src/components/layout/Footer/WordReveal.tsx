import { useEffect, useRef, useCallback } from 'react';

/* ── Tunables ─────────────────────────────── */
const WORD     = 'OUTMAN';
const ASPECT   = 0.34;   // final height = ASPECT * viewportWidth
const EASE     = 0.10;   // lerp factor per rAF frame
const DELAY_VH = 0.10;   // delay = DELAY_VH * viewportHeight

function getScrollY(): number {
  const lenis = (window as any).__lenis;
  if (lenis && typeof lenis.scroll === 'number') {
    return lenis.scroll;
  }
  return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
}

export function WordReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const fullHRef = useRef(1);
  const kRef = useRef(1);
  const growStartRef = useRef(0);
  const delayRef = useRef(0);
  const shownRef = useRef(0);
  const rafRef = useRef<number>(0);

  /* ── Fit word to full viewport width & compute scaleY ratio ── */
  const fit = useCallback(() => {
    const wrap = wrapRef.current;
    const word = wordRef.current;
    if (!wrap || !word) return;

    // Reset styles for measurement
    word.style.fontSize = '100px';
    word.style.transform = 'none';
    word.textContent = WORD;

    // Fit to full viewport width
    const fs = (100 * window.innerWidth) / (word.getBoundingClientRect().width || 100);
    word.style.fontSize = `${fs}px`;

    // Cap height above baseline via canvas
    const cs = getComputedStyle(word);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let ink = 0;
    if (ctx) {
      ctx.font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
      ink = ctx.measureText(WORD).actualBoundingBoxAscent;
    }
    if (!ink) ink = fs * 0.76;

    // Zero-size marker = baseline
    const m = document.createElement('span');
    m.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline;';
    word.textContent = '';
    word.append(WORD, m);

    const base = m.getBoundingClientRect().bottom - word.getBoundingClientRect().top;
    const fullH = ASPECT * window.innerWidth;
    const k = fullH / (ink || fullH);

    wrap.style.height = `${fullH}px`;
    word.style.top = `${fullH - base}px`;
    word.style.transformOrigin = `50% ${base}px`;

    const delay = DELAY_VH * window.innerHeight;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const growStart = maxScroll - fullH - delay;

    fullHRef.current = fullH;
    kRef.current = k;
    delayRef.current = delay;
    growStartRef.current = growStart;
  }, []);

  /* ── rAF loop with 1:1 progress formula & lerp smoothing ── */
  const loop = useCallback(() => {
    const word = wordRef.current;
    if (!word) return;

    // Reduced motion check
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      word.style.transform = `scaleY(${kRef.current.toFixed(4)})`;
      return;
    }

    const scrollY = getScrollY();
    const fullH = fullHRef.current;
    const delay = delayRef.current;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const growStart = maxScroll - fullH - delay;

    // Target reaches 1 exactly at maxScroll
    const target = Math.min(1, Math.max(0, (scrollY - growStart - delay) / fullH));

    // If Lenis smooth-scroll is active, it already interpolates the scroll frames smoothly.
    // Use EASE = 1 when Lenis is active to avoid double smoothing; otherwise use EASE = 0.10.
    const easeFactor = (window as any).__lenis ? 1 : EASE;
    let shown = shownRef.current;
    shown += (target - shown) * easeFactor;
    if (Math.abs(target - shown) < 0.0005) shown = target;
    shownRef.current = shown;

    word.style.transform = `scaleY(${(kRef.current * shown).toFixed(4)})`;

    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    const onResize = () => fit();
    window.addEventListener('resize', onResize);

    const resizeObserver = new ResizeObserver(() => fit());
    resizeObserver.observe(document.body);

    document.fonts.ready.then(() => {
      fit();
      rafRef.current = requestAnimationFrame(loop);
    });

    return () => {
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [fit, loop]);

  return (
    <div className="word-wrap" ref={wrapRef} id="wrap" aria-hidden="true">
      <div className="word" ref={wordRef} id="word">
        {WORD}
      </div>
    </div>
  );
}
