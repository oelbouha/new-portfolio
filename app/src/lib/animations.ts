import { useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// CUSTOM EASE (approximating Studio Namma's GSAP eases)
// ============================================
// "power4.inOut" for page/menu transitions
// "power4.out" for link slides
// "expo.out" for element reveals

// ============================================
// NAV INTRO ANIMATION
// ============================================
export function animateNavIn(onComplete?: () => void) {
  const tl = gsap.timeline({ onComplete });
  tl.to('.nav-top', {
    y: 0,
    duration: 1.4,
    ease: 'power4.out',
    delay: 0.2,
  });
  tl.to('.nav-bottom', {
    y: 0,
    duration: 1.4,
    ease: 'power4.out',
  }, '<');
  return tl;
}

// ============================================
// MENU OPEN
// ============================================
export function openMenu(pageEl: HTMLElement | null, menuEl: HTMLElement | null, menuContent: HTMLElement | null) {
  if (!pageEl || !menuEl || !menuContent) return;

  menuEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  const links = menuEl.querySelectorAll('.nav-menu_link');
  gsap.set(links, { y: (_, el) => (el as HTMLElement).offsetHeight * 1.2 });

  const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1.8 } });

  tl.to(pageEl, { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5 }, 0);
  tl.to(menuContent, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);
  tl.to(menuEl, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)' }, 0);
  tl.to(links, { y: 0, duration: 1.4, stagger: 0.05, ease: 'power4.out' }, 0.6);

  return tl;
}

// ============================================
// MENU CLOSE
// ============================================
export function closeMenu(
  pageEl: HTMLElement | null,
  menuEl: HTMLElement | null,
  menuContent: HTMLElement | null,
  onComplete?: () => void
) {
  if (!pageEl || !menuEl || !menuContent) return;

  const tl = gsap.timeline({
    defaults: { ease: 'power4.inOut', duration: 1.8 },
    onComplete: () => {
      menuEl.classList.remove('is-open');
      document.body.style.overflow = '';
      // Only clear menuContent and menuEl — NOT pageEl.
      // The page transition animation owns pageEl and will reset it itself.
      gsap.set([menuContent, menuEl], { clearProps: 'all' });
      onComplete?.();
    },
  });

  tl.to(pageEl, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);
  tl.to(menuContent, { rotation: -15, x: -100, y: -100, scale: 1.5, opacity: 0.25 }, 0);
  tl.to(menuEl, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }, 0);

  return tl;
}

// ============================================
// PAGE TRANSITION
// ============================================
export function playPageTransition(
  url: string,
  transitionEl: HTMLElement | null,
  overlayEl: HTMLElement | null,
  pageEl: HTMLElement | null
) {
  if (!transitionEl || !overlayEl || !pageEl) return;

  const isDark = document.documentElement.classList.contains('is-dark');
  const startColor = isDark ? '#1C1C1C' : '#FAFAFA';
  const endColor = isDark ? '#111111' : '#E4E4E4';

  transitionEl.style.display = 'block';
  gsap.set(overlayEl, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });

  const tl = gsap.timeline({
    defaults: { ease: 'power4.inOut', duration: 1.8 },
    onComplete: () => { window.location.href = url; },
  });

  tl.to(pageEl, { rotation: 10, x: 300, y: -450, opacity: 0, scale: 1.5 }, 0);
  tl.to(overlayEl, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)' }, 0);
  tl.fromTo(overlayEl,
    { backgroundColor: startColor },
    { backgroundColor: endColor, duration: 1.2, ease: 'power4.inOut' },
    0.8
  );

  return tl;
}

// ============================================
// TEXT MONO WRAPPER — slide up from bottom
// ============================================
export function initTextMonoAnimations() {
  document.querySelectorAll<HTMLElement>('.text-mono_wrapper .text-mono').forEach((el) => {
    gsap.fromTo(el, { y: '120%', scale: 0.9 }, {
      y: '0%',
      scale: 1,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });
}

// ============================================
// SIMPLE APPEAR — fade in + slide up
// ============================================
export function initSimpleAppear() {
  document.querySelectorAll<HTMLElement>('.simple-appear').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: '3rem' }, {
      opacity: 1,
      y: '0rem',
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });
}

// ============================================
// LINE APPEAR — reveal text lines with mask
// ============================================
export function initLineAppear() {
  document.querySelectorAll<HTMLElement>('.line-appear').forEach((el) => {
    const lines = Array.from(el.querySelectorAll<HTMLElement>('.animated-line'));
    if (lines.length === 0) {
      // No split text — just animate the element directly
      gsap.fromTo(el, { y: '100%', opacity: 0 }, {
        y: '0%',
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    } else {
      gsap.fromTo(lines, { y: '110%' }, {
        y: '0%',
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    }
  });
}

// ============================================
// PROJECT VISUALS FLY IN
// ============================================
export function initProjectFlyIn() {
  document.querySelectorAll<HTMLElement>('.project-visual-odd').forEach((el) => {
    gsap.to(el, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.4,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });
  document.querySelectorAll<HTMLElement>('.project-visual-even').forEach((el) => {
    gsap.to(el, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.4,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });
}

// ============================================
// CTA VISUAL EXPAND
// ============================================
export function initCtaVisual() {
  document.querySelectorAll<HTMLElement>('.cta-inline-visual').forEach((el) => {
    const targetWidth = window.innerWidth <= 767 ? '4rem' : window.innerWidth <= 1024 ? '7rem' : '10rem';
    gsap.fromTo(el, { width: '0rem' }, {
      width: targetWidth,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.3,
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });
}

// ============================================
// HERO HEADLINE WORD ROTATOR
// ============================================
export function useHeroWordRotation(words: string[]) {
  const indexRef = useRef(0);
  const slotRef = useRef<HTMLDivElement | null>(null);

  const animate = useCallback(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const next = (indexRef.current + 1) % words.length;
    indexRef.current = next;

    gsap.to(slot, {
      y: `-${next * 100}%`,
      duration: 0.9,
      ease: 'power4.inOut',
    });
  }, [words.length]);

  return { slotRef, animate };
}
