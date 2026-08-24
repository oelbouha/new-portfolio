import { useState, useRef, useCallback, useEffect } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home } from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import About from '@/pages/About';
import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/layout/Navbar';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';
import { ContactOverlay } from '@/components/shared/ContactOverlay';
import { CustomCursor } from '@/components/shared/CustomCursor';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AppInner() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const transitionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
    setTimeout(() => ScrollTrigger.refresh(), 200);
  }, []);

  const handleContactOpen = useCallback(() => {
    if (contactOpen) return;
    setContactOpen(true);
  }, [contactOpen]);

  const handleContactClose = useCallback(() => {
    setContactOpen(false);
  }, []);

  // Sync Phase 2 (Uncover) with route component mount
  useEffect(() => {
    if (!isTransitioningRef.current) return;
    const transition = transitionRef.current;
    const overlay = overlayRef.current;
    const page = pageRef.current;

    if (!transition || !overlay || !page) return;

    window.scrollTo(0, 0);
    gsap.set(page, { clearProps: 'transform,opacity' });

    // Phase 2: Slide OUT to reveal new page
    gsap.to(overlay, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      duration: 1.8,
      ease: 'power4.inOut',
      onComplete: () => {
        transition.style.display = 'none';
        gsap.set([overlay, page], { clearProps: 'all' });
        isTransitioningRef.current = false;
        ScrollTrigger.refresh();
      },
    });
  }, [location.pathname]);

  const handleNavigate = useCallback((href: string) => {
    setMenuOpen(false);

    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') {
        navigate('/');
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
      navigate(href);
      return;
    }

    const isDark = document.documentElement.classList.contains('is-dark');
    const startColor = isDark ? '#1C1C1C' : '#FAFAFA';
    const endColor = isDark ? '#111111' : '#E4E4E4';

    isTransitioningRef.current = true;
    transition.style.display = 'block';
    gsap.set(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });

    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut' },
    });

    // Phase 1: Slide IN to cover screen (exact match to menu open timing and transform)
    tl.to(page, { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5, duration: 1.8 }, 0);
    tl.to(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)', duration: 1.8 }, 0);
    tl.fromTo(overlay,
      { backgroundColor: startColor },
      { backgroundColor: endColor, duration: 1.2, ease: 'power4.inOut' },
      0.4
    );

    // Midpoint: when covered, navigate route
    tl.add(() => {
      // Keep page hidden until location effect fires after route change
      gsap.set(page, { opacity: 0 });
      if (location.pathname === href) {
        // Same route navigation re-trigger
        window.scrollTo(0, 0);
        gsap.set(page, { clearProps: 'transform,opacity' });
        gsap.to(overlay, {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          duration: 1.8,
          ease: 'power4.inOut',
          onComplete: () => {
            transition.style.display = 'none';
            gsap.set([overlay, page], { clearProps: 'all' });
            isTransitioningRef.current = false;
            ScrollTrigger.refresh();
          },
        });
      } else {
        navigate(href);
      }
    });
  }, [navigate, location.pathname]);

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Custom cursor (desktop) */}
      <CustomCursor />

      {/* Nav bars */}
      {!loading && (
        <Navbar
          onMenuOpen={() => setMenuOpen(true)}
          onContactOpen={handleContactOpen}
          onNavigate={handleNavigate}
        />
      )}

      {/* Fullscreen menu */}
      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
        onContactOpen={handleContactOpen}
      />

      {/* Contact overlay */}
      <ContactOverlay
        isOpen={contactOpen}
        onClose={handleContactClose}
      />

      {/* Page transition overlay */}
      <div ref={transitionRef} className="page-transition" aria-hidden="true">
        <div ref={overlayRef} className="page-transition_overlay" />
      </div>

      {/* Page content */}
      <div ref={pageRef} className="page-main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                preloaderDone={!loading}
                onContactOpen={handleContactOpen}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route path="/work/:slug" element={<ProjectDetail onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About onNavigate={handleNavigate} />} />
          <Route path="/work" element={<About onNavigate={handleNavigate} />} />
        </Routes>
      </div>
    </>
  );
}
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScroll>
          <AppInner />
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
