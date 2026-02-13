import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/sections/about/AboutHero';
import { CTABox } from '@/sections/about/CTABox';
import { VisionMission } from '@/sections/about/VisionMission';
import { ServicesList } from '@/sections/about/ServicesList';
import { Testimonials } from '@/sections/about/Testimonials';

export function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="about" />
      <main>
        <AboutHero />
        <CTABox />
        <VisionMission />
        <ServicesList />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
