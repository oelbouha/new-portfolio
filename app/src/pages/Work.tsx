import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WorkHero } from '@/sections/work/WorkHero';
import { WorkFeatured } from '@/sections/work/WorkFeatured';
import { WorkRecentProjects } from '@/sections/work/WorkRecentProjects';
import { Footer } from '@/components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

interface WorkProps {
  onNavigate?: (href: string) => void;
  onContactOpen?: () => void;
}

export function Work({ onNavigate, onContactOpen }: WorkProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', color: 'var(--text)' }}>
      <div className="mx-auto w-full max-w-[1980px]">
        <main>
          <WorkHero />
          <WorkFeatured onNavigate={onNavigate} />
          <WorkRecentProjects onNavigate={onNavigate} />
        </main>
      </div>
      <Footer onContactOpen={onContactOpen} />
    </div>
  );
}

export default Work;
