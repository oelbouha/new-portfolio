export const projectCardStyles = {
  motionShell: 'w-full will-change-transform',
  card: 'group relative block text-inherit no-underline transition-all duration-300',
  imageWrapper: 'relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--card-bg)] lg:aspect-[5/4]',
  image: 'block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]',
  hoverOverlay: 'hidden',
  hoverBadge: 'hidden',
  hoverBottomRow: 'hidden',
  hoverTitle: 'hidden',
  hoverArrow: 'hidden',
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