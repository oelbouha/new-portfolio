export const projectCardStyles = {
  motionShell: 'w-full will-change-transform',
  card: 'group relative block text-inherit no-underline',
  imageWrapper: 'relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[var(--card-bg)] lg:aspect-[5/4]',
  image: 'block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]',
  hoverOverlay: 'absolute inset-0 flex items-end rounded-lg bg-black/45 p-6 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100',
  hoverTitle: 'text-[clamp(1.4rem,3vw,2.2rem)] leading-none uppercase tracking-[-0.02em] text-white transition-transform duration-[400ms] translate-y-2 group-hover:translate-y-0 [font-family:var(--font-display)]',
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