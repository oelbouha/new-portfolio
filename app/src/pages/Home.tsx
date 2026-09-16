import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '@/sections/home/HeroSection';
import { VideoSection } from '@/sections/home/VideoSection';
import { ServicesSection } from '@/sections/home/ServicesSection';
import { Footer } from '@/components/layout/Footer';
import { IntroSection } from '@/sections/home/IntroSection';
import { PlaygroundSection } from '@/sections/home/PlaygroundSection';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  preloaderDone?: boolean;
  onContactOpen?: () => void;
  onNavigate?: (href: string) => void;
}

export function Home({ preloaderDone = true, onContactOpen, onNavigate }: HomeProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle scroll-to-section from menu navigation
  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setSearchParams({}, { replace: true });
      }, 100);
    }
  }, [searchParams, setSearchParams]);

  // Init scroll animations after preloader
  useEffect(() => {
    if (!preloaderDone) return;
    setTimeout(() => ScrollTrigger.refresh(), 300);
  }, [preloaderDone]);

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="mx-auto w-full max-w-[1980px]">
        <main>
          <HeroSection preloaderDone={preloaderDone} />
          {/* <SelectedProjects /> */}
          <VideoSection />
          <IntroSection />
          <PlaygroundSection onNavigate={onNavigate} />
          <ServicesSection />
        </main>
      </div>
      <Footer onContactOpen={onContactOpen} />
    </div>
  );
}
