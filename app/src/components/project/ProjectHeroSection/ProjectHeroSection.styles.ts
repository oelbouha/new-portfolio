export const projectHeroSectionStyles = {
  hero: 'mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28',
  title: 'font-[family-name:var(--font-display)] text-[clamp(3.5rem,9vw,9rem)] font-bold uppercase leading-[0.86] tracking-[-0.03em] text-[var(--text)]',
  metaRow: 'flex flex-wrap items-center justify-center gap-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-black/45 dark:text-white/45',
  tags: 'flex flex-wrap items-center justify-center gap-2',
  tag: 'rounded-full border border-black/10 px-3 py-1 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.08em] text-black/55 dark:border-white/10 dark:text-white/55',
  heroImageWrapper: 'mt-4 overflow-hidden rounded-3xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5',
  heroImage: 'block w-full object-cover',
} as const;