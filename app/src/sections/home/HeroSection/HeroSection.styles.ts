export const heroSectionStyles = {
  section:
    'relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 lg:px-10',
  inner: 'relative z-10 mx-auto flex w-full flex-col items-center justify-center text-center',
  title:
    'flex flex-col items-center justify-center  text-center font-[family-name:var(--font-display)] text-[clamp(5.2rem,14.5vw,15.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] w-full',
  // h-[0.9em] gives full height to prevent clipping bottom of letters
  hoverWord:
    'relative flex flex-col h-[0.9em]  overflow-hidden items-center justify-center text-center cursor-default select-none leading-[0.85] mx-auto',
  noise:
    'pointer-events-none absolute inset-0 z-[1] opacity-[0.18] [background-image:url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")]',
} as const;
