import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/sections/home/HeroSection';
import { LaptopShowcase } from '@/sections/home/LaptopShowcase';
import { PortfolioCarousel } from '@/sections/home/PortfolioCarousel';
import { ServicesGrid } from '@/sections/home/ServicesGrid';
import { CTASection } from '@/sections/home/CTASection';

export function Home({ preloaderDone = true }: { preloaderDone?: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle scroll-to-section from menu navigation
  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      // Small delay to let the DOM render
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setSearchParams({}, { replace: true });
      }, 100);
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <div id="hero">
          <HeroSection preloaderDone={preloaderDone} />
        </div>
        <LaptopShowcase />
        <div id="work">
          <PortfolioCarousel />
        </div>
        <div id="services">
          <ServicesGrid />
        </div>
        <div id="contact">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

