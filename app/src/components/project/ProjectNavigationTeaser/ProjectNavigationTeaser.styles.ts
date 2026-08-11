export const projectNavigationTeaserStyles = {
  section: 'mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8 lg:py-24',
  teaserCard: 'group flex w-full flex-col gap-2 rounded-2xl border border-black/10 px-6 py-8 transition-all duration-300 hover:border-black/20 hover:bg-black/[0.03] dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/[0.03] lg:max-w-[48%]',
  direction: 'font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-black/35 dark:text-white/35',
  title: 'font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.9] tracking-[-0.03em] text-[var(--text)]',
} as const;