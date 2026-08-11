export const heroSectionStyles = {
  section:
    'relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 lg:px-10',
  inner: 'relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8',
  title:
    'flex flex-col items-center gap-1 font-[family-name:var(--font-display)] text-[clamp(4.5rem,11vw,11rem)] font-bold uppercase leading-[0.82] tracking-[-0.02em] text-[var(--text)]',
  line: 'block text-center',
  wordRow: 'flex justify-center',
  wordViewport: 'inline-flex h-[1em] items-start overflow-hidden align-bottom',
  wordSlot: 'flex flex-col will-change-transform',
  word: 'block h-[1em] leading-[1em] text-center italic',
  subtitle: 'max-w-2xl text-center text-sm uppercase tracking-[0.18em] text-black/45 dark:text-white/45',
  noise:
    'pointer-events-none absolute inset-0 z-[1] opacity-[0.18] [background-image:url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")]',
} as const;