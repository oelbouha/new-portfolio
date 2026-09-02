export const aboutBioStyles = {
  section: 'py-24 sm:py-36 px-4 sm:px-6 lg:px-8',
  container: 'max-w-6xl mx-auto flex flex-col items-center',
  badge: "font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-widest text-foreground-secondary mb-8 sm:mb-12",
  linesWrapper: 'flex flex-col items-center gap-3 text-center w-full',
  line: 'font-[family-name:var(--font-display)] text-[clamp(2.2rem,5.5vw,5.5rem)] uppercase leading-[0.95] tracking-[0.01em] text-[var(--text)]',
  paragraph: "mt-12 text-base sm:text-lg font-['Space_Grotesk'] text-foreground-secondary max-w-3xl text-center leading-relaxed",
  resumeButton: "inline-flex items-center gap-3 mt-10 px-8 py-4 border border-foreground/20 rounded-full font-['Space_Grotesk'] text-xs font-semibold text-foreground hover:bg-foreground hover:text-background transition-all duration-300 uppercase tracking-widest shadow-sm",
} as const;
