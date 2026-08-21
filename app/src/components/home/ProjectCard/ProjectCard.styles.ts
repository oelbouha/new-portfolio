export const projectCardStyles = {
  motionShell: 'w-full will-change-transform',
  card: 'group relative block text-inherit no-underline rounded-2xl p-2.5 transition-all duration-300 hover:bg-blue-500/8 dark:hover:bg-blue-400/8 border border-transparent hover:border-blue-500/15',
  imageWrapper: 'relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[var(--card-bg)] lg:aspect-[5/4]',
  image: 'block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]',
  hoverOverlay: 'absolute inset-0 flex flex-col justify-between rounded-xl bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
  hoverBadge: 'self-start rounded-full px-3 py-1 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] bg-black/40 text-white/90 backdrop-blur-md transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white',
  hoverBottomRow: 'flex items-end justify-between gap-4',
  hoverTitle: 'font-[family-name:var(--font-display)] text-[clamp(1.4rem,3vw,2.4rem)] font-bold uppercase leading-none tracking-[-0.02em] text-white transition-transform duration-300 translate-y-2 group-hover:translate-y-0',
  hoverArrow: 'font-[family-name:var(--font-mono)] text-xl text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1',
} as const;

export const projectCardMotion = {
  fromLeft: {
    initial: { opacity: 0, x: -120, rotate: -12 },
    whileInView: { opacity: 1, x: 0, rotate: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
  fromRight: {
    initial: { opacity: 0, x: 120, rotate: 12 },
    whileInView: { opacity: 1, x: 0, rotate: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
} as const;