export const ctaSectionStyles = {
  // Client Logos Marquee Section
  marqueeSection:
    'w-full overflow-hidden border- py-[clamp(1.5rem,3vw,2.5rem)] dark:border-white/15',
  marqueeWrapper: 'clients-marquee',
  clientName: 'client-name',

  // CTA Main Section
  ctaSection: 'w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden',
  container: 'mx-auto w-full',
  layoutRow:
    'flex flex-col lg:flex-row-reverse items-start justify-between gap-8 lg:gap-12 ',

  // Left column: Description & Say Hello Button
  descWrapper:
    'flex flex-col gap-6 shrink-0 max-w-md w-full lg:pb-[2px]',
  descText:
    'cta-desc font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase  tracking-widest leading-relaxed text-black dark:text-white/60',
  button: 'small-link group inline-flex items-center gap-3 self-start mb-0 cursor-pointer',
  monoWrapper: 'text-mono_wrapper',
  monoText: 'text-mono',
  svgArrow: 'w-4 h-4 opacity-100 text-current transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5',

  // Right column: Heading SVG Container
  headingWrapper: 'w-full lg:flex-1 shrink-0 text-left overflow-visible',
  svgHeading: 'w-full h-auto text-[var(--text)] overflow-visible block',
} as const;
