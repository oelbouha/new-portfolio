export const projectDetailNextStyles = {
  section: 'proj-next w-full py-20 md:py-32 border-t border-black/15 dark:border-white/15 px-4 sm:px-6 lg:px-8',
  container: 'proj-next__container mx-auto w-full max-w-7xl flex flex-col items-center justify-center text-center',
  link: 'proj-next__link relative group flex flex-col items-center justify-center gap-10 w-full py-12 overflow-visible text-center text-[var(--text)] no-underline cursor-pointer',
  label: 'proj-next__label font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-black/50 dark:text-white/50',
  titleWrapper: 'proj-next__title-wrapper relative inline-flex items-center justify-center w-full',
  title: 'proj-next-title font-[family-name:var(--font-display)] text-[clamp(3rem,7.5vw,6.5rem)] font-normal uppercase leading-[0.85] tracking-[0.02em] text-[var(--text)] opacity-35 transition-all duration-600 ease-out group-hover:scale-[1.75] group-hover:opacity-100',
  badge: 'proj-next__open-badge absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-6 scale-60 opacity-0 pointer-events-none bg-[#0047ff] text-white px-6 py-2.5 rounded-full font-[family-name:var(--font-mono)] text-xs md:text-sm font-bold tracking-[0.12em] uppercase whitespace-nowrap shadow-[0_12px_30px_-4px_rgba(0,71,255,0.45)] transition-opacity duration-250 ease-out group-hover:opacity-100 z-10',
} as const;
