import { useState, useRef, useCallback } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import About from '@/pages/About';
import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/layout/Navbar';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';
import { ContactOverlay } from '@/components/shared/ContactOverlay';
import { CustomCursor } from '@/components/shared/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AppInner() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const transitionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
    // Refresh ScrollTrigger after DOM settles
    setTimeout(() => ScrollTrigger.refresh(), 200);
  }, []);

  const handleNavigate = useCallback((href: string) => {
    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return;
    }

    // Page transition animation
    const transition = transitionRef.current;
    const overlay = overlayRef.current;
    const page = pageRef.current;

    if (!transition || !overlay || !page) { navigate(href); return; }

    const isDark = document.documentElement.classList.contains('is-dark');
    const startColor = isDark ? '#1C1C1C' : '#FAFAFA';
    const endColor = isDark ? '#111111' : '#E4E4E4';

    transition.style.display = 'block';
    gsap.set(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' });

    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut', duration: 1.6 },
      onComplete: () => {
        navigate(href);
        requestAnimationFrame(() => {
          transition.style.display = 'none';
          gsap.set([overlay, page], { clearProps: 'all' });
          window.scrollTo(0, 0);
          ScrollTrigger.refresh();
        });
      },
    });

    tl.to(page, { rotation: 10, x: 300, y: -450, opacity: 0, scale: 1.5 }, 0);
    tl.to(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)' }, 0);
    tl.fromTo(overlay,
      { backgroundColor: startColor },
      { backgroundColor: endColor, duration: 1.2, ease: 'power4.inOut' },
      0.7
    );
  }, [navigate]);

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
          onContactOpen={() => setContactOpen(true)}
        />
      )}

      {/* Fullscreen menu */}
      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Contact overlay */}
      <ContactOverlay
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
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
                onContactOpen={() => setContactOpen(true)}
              />
            }
          />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
