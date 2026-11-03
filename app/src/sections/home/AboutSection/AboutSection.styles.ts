export const aboutSectionStyles = {
  section: 'w-full px-4 py-20 sm:px-6 lg:px-10 lg:py-32',
  container: 'mx-auto w-full max-w-5xl',
  headerWrapper: 'mb-8',
  labelRow: 'flex items-center gap-4 mb-4',
  label: "font-['IBM_Plex_Mono',monospace] text-xs uppercase tracking-[0.16em] text-[var(--text)] opacity-50",
  line: 'flex-1 h-px bg-black/10 dark:bg-white/10',
  title: "font-['PP_Neue_Corp_Tight_Ultrabold'] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-[var(--text)] mb-6",
  contentWrapper: 'max-w-3xl flex flex-col gap-5',
  paragraph: "font-['Space_Grotesk'] text-base sm:text-lg text-[var(--text)] opacity-80 leading-relaxed",
  paragraphLast: "font-['Space_Grotesk'] text-base sm:text-lg text-[var(--text)] opacity-80 leading-relaxed",
} as const;
