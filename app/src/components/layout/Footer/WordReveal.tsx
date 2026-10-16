import { useEffect, useRef, useCallback } from 'react';

/* ── Tunables ─────────────────────────────── */
const WORD   = 'OUTMAN';
const ASPECT = 0.34;   // word height = ASPECT × viewport width
const EASE   = 0.10;   // lerp factor per rAF frame
const START  = 0.35;   // scroll progress where growth begins

/**
 * Scroll-driven "giant word reveal" that grows from the bottom edge.
 * Uses requestAnimationFrame + lerp for buttery smooth motion.
 * Reads scroll position via getBoundingClientRect (Lenis-compatible).
 */
export function WordReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number>(0);
  const shownRef = useRef(0);

  /* ── Fit word to viewport width & compute scaleY ratio ── */
  const fit = useCallback(() => {
    const wrap = wrapRef.current;
    const word = wordRef.current;
    if (!wrap || !word) return;

    // Reset for measurement
    word.style.fontSize = '100px';
    word.style.transform = 'none';
    word.textContent = WORD;

    const r = word.getBoundingClientRect();
    const fs = 100 * window.innerWidth / r.width;
    word.style.fontSize = `${fs}px`;

    // Measure cap-height via canvas
    const cs = getComputedStyle(word);
    const ctx = document.createElement('canvas').getContext('2d')!;
    ctx.font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
    const ink = ctx.measureText(WORD).actualBoundingBoxAscent;

    // Baseline marker
    const marker = document.createElement('span');
    marker.style.cssText = 'display:inline-block;width:0;height:0';
    word.textContent = '';
    word.append(WORD, marker);

    const base = marker.getBoundingClientRect().bottom - word.getBoundingClientRect().top;

    const fullH = ASPECT * window.innerWidth;
    wrap.style.height = `${fullH}px`;
    word.style.top = `${fullH - base}px`;
    word.style.transformOrigin = `50% ${base}px`;
    word.dataset.k = String(fullH / ink);
  }, []);

  /* ── Scroll progress: 0 → 1 as footer enters ── */
  const progress = useCallback(() => {
    const footer = footerRef.current;
    if (!footer) return 0;
    const r = footer.getBoundingClientRect();
    return Math.min(1, Math.max(0, (window.innerHeight - r.top) / r.height));
  }, []);

  /* ── rAF render loop with lerp smoothing ── */
  const render = useCallback(() => {
    const word = wordRef.current;
    if (!word) return;

    // Check prefers-reduced-motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      const k = parseFloat(word.dataset.k || '1');
      word.style.transform = `scaleY(${k.toFixed(4)})`;
      return; // no loop needed
    }

    const target = progress();
    let shown = shownRef.current;
    shown += (target - shown) * EASE;
    if (Math.abs(target - shown) < 0.0005) shown = target;
    shownRef.current = shown;

    const s = Math.min(1, Math.max(0, (shown - START) / (1 - START)));
    const k = parseFloat(word.dataset.k || '1');
    word.style.transform = `scaleY(${(k * s).toFixed(4)})`;

    rafRef.current = requestAnimationFrame(render);
  }, [progress]);

  useEffect(() => {
    const word = wordRef.current;
    if (!word) return;

    // Walk up to find the footer element (parent of .footer-reveal__word-wrap)
    footerRef.current = word.closest('.footer-reveal');

    const onResize = () => fit();

    // Wait for fonts then start
    document.fonts.ready.then(() => {
      fit();
      rafRef.current = requestAnimationFrame(render);
    });

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [fit, render]);

  return (
    <div className="footer-reveal__word-wrap" ref={wrapRef} id="word-wrap">
      <div
        className="footer-reveal__word"
        ref={wordRef}
        id="reveal-word"
        aria-hidden="true"
      >
        {WORD}
      </div>
    </div>
  );
}
