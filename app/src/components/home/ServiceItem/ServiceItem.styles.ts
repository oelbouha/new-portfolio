export const serviceItemStyles = {
  item: 'group flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-1 sm:py-2 text-center cursor-pointer transition-all duration-300',
  leftGroup: 'flex flex-1 flex-col items-center gap-4 md:flex-row md:items-baseline md:gap-8',
  index: 'font-[family-name:var(--font-mono)] text-sm text-black/35 dark:text-white/35',
  titleGroup: 'flex flex-col items-center gap-1 text-center',
  title: 'font-[family-name:var(--font-display)] text-[clamp(3.5rem,7.5vw,7.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] transition-opacity duration-300 select-none text-center',
  subtitle: 'font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.08em] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--text)] pointer-events-none self-center whitespace-nowrap',
  description: 'max-w-xl font-[family-name:var(--font-body)] text-sm leading-6 text-black/45 dark:text-white/45',
} as const;