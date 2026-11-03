'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '@/context/ThemeContext';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';
import { ContactOverlay } from '@/components/shared/ContactOverlay';
import { CustomCursor } from '@/components/shared/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const transitionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);
  const safetyTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Listen for custom open-contact events
  useEffect(() => {
    const handleOpen = () => setContactOpen(true);
    window.addEventListener('open-contact', handleOpen);
    return () => window.removeEventListener('open-contact', handleOpen);
  }, []);

  const handleContactOpen = useCallback(() => {
    setContactOpen(true);
  }, []);

  const handleContactClose = useCallback(() => {
    setContactOpen(false);
  }, []);

  // Cleanup helper
  const completeTransition = useCallback(() => {
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
    const transition = transitionRef.current;
    const overlay = overlayRef.current;
    const page = pageRef.current;

    if (transition) transition.style.display = 'none';
    if (overlay && page) gsap.set([overlay, page], { clearProps: 'all' });
    isTransitioningRef.current = false;
    ScrollTrigger.refresh();
  }, []);

  // Handle route change during navigation — reveal new page cleanly with overlay fade
  useEffect(() => {
    if (!isTransitioningRef.current) return;
    const transition = transitionRef.current;
    const overlay = overlayRef.current;
    const page = pageRef.current;

    if (!transition || !overlay || !page) return;

    window.scrollTo(0, 0);
    // Reset page transform so new page is positioned normally behind overlay
    gsap.set(page, { clearProps: 'transform,rotation,scale', opacity: 1 });

    // Phase 2: Fade out overlay cleanly to reveal the new page text and content
    requestAnimationFrame(() => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: completeTransition,
      });
    });
  }, [pathname, completeTransition]);

  const handleNavigate = useCallback(
    (href: string) => {
      setMenuOpen(false);

      if (href.startsWith('#')) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (href.startsWith('/#')) {
        const id = href.slice(2);
        if (pathname !== '/') {
          handleNavigate('/');
        }
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
        return;
      }

      if (isTransitioningRef.current) return;

      const transition = transitionRef.current;
      const overlay = overlayRef.current;
      const page = pageRef.current;

      if (!transition || !overlay || !page) {
        router.push(href);
        return;
      }

      const normalizedCurrent = (pathname || '/').replace(/\/$/, '') || '/';
      const normalizedTarget = href.replace(/\/$/, '') || '/';

      const isDark =
        document.documentElement.classList.contains('is-dark') ||
        document.documentElement.classList.contains('dark');
      const isTargetProject = href.startsWith('/work/');
      const isCurrentProject = (pathname || '').startsWith('/work/');

      const homeBg = isDark ? '#111111' : '#E4E4E4';
      const projectBg = isDark ? '#111111' : '#E4E4E4';

      const startColor = isCurrentProject ? projectBg : homeBg;
      const endColor = isTargetProject ? projectBg : homeBg;

      isTransitioningRef.current = true;
      transition.style.display = 'block';
      gsap.set(overlay, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        opacity: 1,
      });

      // Safety timeout: if route doesn't change in 4s, clean up
      safetyTimerRef.current = setTimeout(() => {
        completeTransition();
      }, 4000);

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut' },
      });

      // Phase 1: Match exact menu open timing and transform (rotation 10, x 300, y 450, scale 1.5)
      tl.to(
        page,
        { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5, duration: 1.8 },
        0
      );
      tl.to(
        overlay,
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)', duration: 1.8 },
        0
      );
      tl.fromTo(
        overlay,
        { backgroundColor: startColor },
        { backgroundColor: endColor, duration: 1.2, ease: 'power4.inOut' },
        0.4
      );

      // Midpoint: screen is covered by overlay. Trigger route change.
      tl.call(() => {
        if (normalizedCurrent === normalizedTarget) {
          window.scrollTo(0, 0);
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: completeTransition,
          });
        } else {
          router.push(href);
        }
      });
    },
    [router, pathname, completeTransition]
  );

  // Capture clicks on internal links to guarantee smooth animation BEFORE any navigation
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Allow user to cmd/ctrl click to open in a new tab
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore external links, mailto, tel, target="_blank", or download
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        target.getAttribute('target') === '_blank' ||
        target.hasAttribute('download')
      ) {
        return;
      }

      // Hash navigation on same page
      if (href.startsWith('#')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // Internal route navigation
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        handleNavigate(href);
      }
    };

    // Use capture phase to intercept BEFORE Next.js Link or React handles it
    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => document.removeEventListener('click', handleDocumentClick, { capture: true });
  }, [handleNavigate]);

  return (
    <ThemeProvider>
      <SmoothScroll>
        <CustomCursor />

        <Navbar
          onMenuOpen={() => setMenuOpen(true)}
          onContactOpen={handleContactOpen}
          onNavigate={handleNavigate}
        />

        <FullscreenMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={handleNavigate}
          onContactOpen={handleContactOpen}
        />

        <ContactOverlay isOpen={contactOpen} onClose={handleContactClose} />

        {/* Page transition overlay */}
        <div ref={transitionRef} className="page-transition" aria-hidden="true">
          <div ref={overlayRef} className="page-transition_overlay" />
        </div>

        {/* Page content */}
        <div ref={pageRef} className="page-main">
          {children}
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
