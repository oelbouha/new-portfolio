import { useState } from 'react';
import { AboutHero } from '@/sections/about/AboutHero/AboutHero';
import { AboutBio } from '@/sections/about/AboutBio/AboutBio';
import { AboutServices } from '@/sections/about/AboutServices/AboutServices';
import { AboutExperience } from '@/sections/about/AboutExperience/AboutExperience';
import { AboutCTA } from '@/sections/about/AboutCTA/AboutCTA';
import { Footer } from '@/components/layout/Footer';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';

interface AboutProps {
  onNavigate?: (href: string) => void;
  onContactOpen?: () => void;
}

export default function About({ onNavigate, onContactOpen }: AboutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background text-[var(--text)] w-full">
        <main className="w-full">
          <AboutHero />
          <AboutBio />
          <AboutServices />
          <AboutExperience />
          <AboutCTA onContactOpen={onContactOpen} />
        </main>
        <Footer onContactOpen={onContactOpen} onNavigate={onNavigate} />
      </div>

      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={onNavigate}
        onContactOpen={onContactOpen}
      />
    </>
  );
}
