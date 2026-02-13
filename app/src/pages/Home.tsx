import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/sections/home/HeroSection';
import { LaptopShowcase } from '@/sections/home/LaptopShowcase';
import { PortfolioCarousel } from '@/sections/home/PortfolioCarousel';
import { ServicesGrid } from '@/sections/home/ServicesGrid';
import { CTASection } from '@/sections/home/CTASection';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div id="hero">
          <HeroSection />
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
