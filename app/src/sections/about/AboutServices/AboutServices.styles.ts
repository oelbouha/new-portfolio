export const aboutServicesStyles = {
  section: 'py-24 sm:py-36 px-4 sm:px-6 lg:px-8',
  container: 'max-w-7xl mx-auto',
  layoutRow: 'flex flex-col lg:flex-row gap-12 lg:gap-20',
  stickyCol: 'lg:sticky lg:top-28 lg:self-start lg:w-64 flex-shrink-0',
  tag: "font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-foreground-secondary block mb-2",
  title: 'font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-black text-foreground uppercase tracking-tight',
  listWrapper: 'flex-1 space-y-10',
  itemCard: 'group py-2',
  itemHeader: 'flex items-center gap-4 mb-3',
  itemTitle: 'font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wider text-foreground uppercase group-hover:text-accent transition-colors',
  itemBadge: "font-['IBM_Plex_Mono'] text-[10px] font-bold px-2 py-0.5 rounded border border-border text-foreground-secondary uppercase tracking-widest",
  itemDesc: "font-['Space_Grotesk'] text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl",
} as const;
