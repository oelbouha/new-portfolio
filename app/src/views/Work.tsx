import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WorkProjectsList } from '@/sections/work/WorkProjectsList';
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
    <div style={{ background: 'var(--background)', minHeight: '100vh', color: 'var(--text)' }} className="w-full">
      <main className="w-full">
        <WorkProjectsList onNavigate={onNavigate} />
      </main>
      <Footer onContactOpen={onContactOpen} onNavigate={onNavigate} />
    </div>
  );
}

export default Work;
