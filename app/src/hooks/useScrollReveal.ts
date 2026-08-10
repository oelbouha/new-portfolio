import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  stagger?: number;
}

/**
 * Hook that applies a scroll reveal animation to an element ref.
 * Targets all direct children if stagger is provided.
 */
export function useScrollReveal<T extends HTMLElement>(options?: ScrollRevealOptions) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 50,
      opacity = 0,
      duration = 1.0,
      delay = 0,
      ease = 'power3.out',
      start = 'top 88%',
      stagger,
    } = options || {};

    const targets = stagger ? Array.from(el.children) as HTMLElement[] : [el];

    gsap.set(targets, { y, opacity });

    const st = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease,
          stagger: stagger || 0,
        });
      },
    });

    return () => {
      st.kill();
      gsap.killTweensOf(targets);
    };
  }, []);

  return ref;
}
