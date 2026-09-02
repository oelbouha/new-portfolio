export const aboutHeroStyles = {
  section: 'relative flex flex-col items-center justify-start w-full min-h-screen pt-24 sm:pt-32 lg:pt-36 pb-16 px-4 overflow-hidden',
  headlineWrapper: 'flex flex-col items-center justify-center text-center gap-2 sm:gap-4 min-h-[70vh] sm:min-h-[75vh] my-auto select-none',
  line1: 'font-[family-name:var(--font-display)] text-[clamp(4rem,10vw,11.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] select-none text-center',
  line2: 'font-[family-name:var(--font-display)] text-[clamp(4rem,10vw,11.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] select-none text-center',
  line3: 'font-[family-name:var(--font-display)] text-[clamp(4rem,10vw,11.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] select-none text-center',
  imageWrapper: 'w-full flex justify-center pt-24 pb-16 px-4',
  imageFrame: 'relative overflow-hidden bg-background rounded-[8rem] sm:rounded-[10rem] w-full max-w-[500px] h-[520px] sm:h-[600px]',
  imageMask: 'w-full h-full overflow-hidden relative',
  image: 'w-full h-full object-cover select-none',
} as const;

