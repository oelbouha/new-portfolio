export const serviceItemStyles = {
  item: 'group flex items-center justify-between gap-6 border-b border-black/10 py-10 text-center transition-all duration-300 hover:bg-blue-500/8 dark:border-white/10 dark:hover:bg-blue-400/8 md:text-left',
  leftGroup: 'flex flex-1 flex-col items-center gap-4 md:flex-row md:items-baseline md:gap-8',
  index: 'font-[family-name:var(--font-mono)] text-sm text-black/35 dark:text-white/35',
  titleGroup: 'flex flex-col items-center gap-1 text-center md:items-start md:text-left',
  title: 'font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.8rem)] uppercase leading-none font-bold text-[var(--text)]',
  subtitle: 'rounded-full px-3 py-1 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] text-black/45 transition-colors duration-300 group-hover:bg-blue-500/15 group-hover:text-blue-700 dark:text-white/45 dark:group-hover:text-blue-300',
  description: 'max-w-xl font-[family-name:var(--font-body)] text-sm leading-6 text-black/45 dark:text-white/45',
} as const;