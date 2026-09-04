export const projectOverviewCardsStyles = {
  section: 'mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-24',
  card: 'flex min-h-[10rem] flex-col justify-between rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.03]',
  label: 'font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-black/35 dark:text-white/35',
  value: 'mt-4 font-[family-name:var(--font-display)] text-2xl uppercase leading-[0.95] tracking-[-0.03em] text-[var(--text)]',
  list: 'mt-4 flex flex-wrap gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-black/55 dark:text-white/55',
  link: 'mt-4 break-all font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[#52D766] transition-colors duration-300 hover:text-[#3ec254]',
} as const;