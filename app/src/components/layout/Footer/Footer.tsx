import { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FOOTER_IMAGES } from '@/lib/constants';
// import { layoutData } from '@/data/layout.data';
// import { CTASection } from '@/sections/home/CTASection';
import type { FooterProps } from './Footer.types';

export function Footer({ onContactOpen }: FooterProps = {}) {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={footerRef} className="w-full overflow-hidden pt-2 pb-6 sm:pb-10">
      {/* Ready for your new website CTA Banner — Full viewport height with subtle margins */}
      <div className="px-4 sm:px-6 lg:px-10 my-2 sm:my-3 lg:my-4 w-full">
        <div className="w-full h-[calc(100vh-2.5rem)] sm:h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-4.5rem)] min-h-[560px] max-h-[860px] rounded-[4px] bg-[#111111] dark:bg-[#161618] border border-black/10 dark:border-white/10 px-6 sm:px-10 flex flex-col items-center justify-center text-center overflow-hidden relative">
          {/* Subtitle */}
          <span className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] text-neutral-400 font-normal tracking-normal mb-4 sm:mb-6 select-none">
            Let's talk!
          </span>

          {/* Large Display Heading */}
          <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(3.5rem,9.5vw,10.5rem)] text-[#ebe9e4] uppercase leading-[0.85] tracking-[-0.01em] select-none max-w-6xl">
            READY FOR YOUR<br />NEW WEBSITE?
          </h2>

          {/* Book a Call Button */}
          <button
            onClick={onContactOpen}
            data-cursor-hover="Book a call"
            aria-label="Book a call"
            className="mt-8 sm:mt-12 inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4 sm:py-2 rounded-[4px] bg-[#ebe9e4] hover:bg-white text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer"
          >
            <img
              src="/profile.png"
              alt="Outman"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-[3px] object-cover shrink-0"
            />
            <span className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[13px] sm:text-[14px] font-medium tracking-normal text-black">
              BOOK A CALL
            </span>
          </button>
        </div>
      </div>

      {/* Footer Info Section — 3 Columns with independent top borders matching Grigoletti */}
      <div className="px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-4 sm:pb-6 w-full">
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 w-full">
          {/* Column 1 (Left - Cols 1-6): Badge (SVG removed as requested) */}
          <div className="col-span-1 md:col-span-6 border-t border-black/15 dark:border-white/15 pt-5 sm:pt-6 flex flex-col justify-start items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black dark:bg-white/10 text-white dark:text-neutral-200 text-[12px] font-['PP_Neue_Montreal_Medium',sans-serif] tracking-normal select-none">
              <span className="text-[12px]">⚡</span>
              <span>Full Stack & Mobile Pro</span>
            </div>
          </div>

          {/* Column 2 (Middle - Cols 7-9): Navigation links */}
          <div className="col-span-1 md:col-span-3 border-t border-black/15 dark:border-white/15 pt-5 sm:pt-6 flex flex-col items-start gap-2">
            <a
              href="/"
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              Home
            </a>
            <a
              href="/#services"
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              Services
            </a>
            <a
              href="/work"
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              Projects
            </a>
            <a
              href="/about"
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              About me
            </a>
            <button
              onClick={onContactOpen}
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150 text-left cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Column 3 (Right - Cols 10-12): Social Links */}
          <div className="col-span-1 md:col-span-3 border-t border-black/15 dark:border-white/15 pt-5 sm:pt-6 flex flex-col items-start gap-2">
            <a
              href="https://github.com/oelbouha"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/outman-elbouhali/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              LinkedIn
            </a>
            <a
              href="mailto:outmanelbouhali5@gmail.com"
              className="font-['PP_Neue_Montreal_Medium',sans-serif] text-[14px] leading-[1.2] text-[#555] dark:text-[#aaa] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Row — Border Top added & columns aligned 1:1 with columns above */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-black/15 dark:border-white/15 text-[14px] leading-[1.2] font-['PP_Neue_Montreal_Medium',sans-serif] text-[#555] dark:text-[#aaa]">
          <div className="col-span-1 md:col-span-6 text-left">
            © 2026 | Outman Elbouhali
          </div>
          <div className="col-span-1 md:col-span-3 text-left">
            Legal Notice | Privacy Policy | Cookies
          </div>
          <div className="col-span-1 md:col-span-3 text-left">
            Tétouan, Morocco
          </div>
        </div>
      </div>
    </footer>
  );
}
