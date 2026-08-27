export const aboutHeroStyles = {
  section: 'relative flex flex-col items-center justify-center pt-28 sm:pt-36 lg:pt-40 pb-16 px-4 overflow-hidden',
  headlineWrapper: 'text-center flex flex-col items-center gap-1 sm:gap-2',
  line1: 'font-[family-name:var(--font-display)] text-[clamp(4rem,12vw,10.5rem)] uppercase leading-[0.85] tracking-[0.02em] text-[var(--text)] select-none',
  line2: 'font-[family-name:var(--font-display)] text-[clamp(3.6rem,11vw,9.5rem)] uppercase leading-[0.85] tracking-[0.02em] text-[var(--text)] select-none opacity-90',
  imageWrapper: 'w-full flex justify-center mt-12 mb-8 px-4',
  imageFrame: 'relative overflow-hidden bg-background rounded-[8rem] sm:rounded-[10rem] w-full max-w-[500px] h-[520px] sm:h-[600px]',
  imageMask: 'w-full h-full overflow-hidden relative',
  image: 'w-full h-full object-cover select-none',
} as const;
