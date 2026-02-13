import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorkHero } from '@/sections/work/WorkHero';
import { PortfolioGrid } from '@/sections/work/PortfolioGrid';

export function Work() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="work" />
      <main>
        <WorkHero />
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  );
}
