export const aboutCTAStyles = {
  section: 'py-24 sm:py-32 px-4 sm:px-6 lg:px-10',
  container: 'max-w-6xl mx-auto text-center flex flex-col items-center',
  statement: 'font-[family-name:var(--font-display)] text-[clamp(2.2rem,5.2vw,5.2rem)] font-bold uppercase leading-[0.95] tracking-[0.01em] text-[var(--text)] [text-wrap:balance] mb-12 max-w-5xl select-none',
  subtitle: "font-['Space_Grotesk'] text-xl sm:text-2xl text-foreground-secondary mb-8",
  button: 'small-link group inline-flex items-center gap-3 self-center cursor-pointer',
  monoWrapper: 'text-mono_wrapper',
  monoText: 'text-mono',
  svgArrow: 'w-4 h-4 opacity-100 text-current transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5',
} as const;
