import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '@/sections/home/HeroSection/HeroSection';
import { SelectedProjects } from '@/sections/home/SelectedProjects';
import { VideoSection } from '@/sections/home/VideoSection/VideoSection';

import { ServicesSection } from '@/sections/home/ServicesSection';
import { CTASection } from '@/sections/home/CTASection';
import { Footer } from '@/components/layout/Footer';
import { IntroSection } from '@/sections/home/IntroSection/IntroSection';
import { PlaygroundSection } from '@/sections/home/PlaygroundSection/PlaygroundSection';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  preloaderDone?: boolean;
  onContactOpen?: () => void;
}

export function Home({ preloaderDone = true, onContactOpen }: HomeProps) {
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
      <main>
        <HeroSection />
        {/* <SelectedProjects /> */}
        <VideoSection />
        <IntroSection />
        <PlaygroundSection />
        <ServicesSection />
        {/* <ServicesSection /> */}
        <CTASection onContactOpen={onContactOpen} />
      </main>
      <Footer onContactOpen={onContactOpen} />
    </div>
  );
}
