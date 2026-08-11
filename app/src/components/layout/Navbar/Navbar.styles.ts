export const navbarStyles = {
  wrapper: 'fixed inset-x-0 top-0 z-[1000] pointer-events-none',
  bar: 'pointer-events-auto w-full bg-transparent',
  inner: 'flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10',
  leftGroup: 'flex items-center gap-3',
  centerGroup: 'flex items-center gap-3 sm:gap-4',
  rightGroup: 'flex items-center gap-4 sm:gap-8',
  text: 'font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] text-[var(--nav-fixed-text)]',
  link: 'group relative inline-flex h-[1.05rem] flex-col overflow-hidden',
  linkLine: 'transition-transform duration-[350ms] ease-[cubic-bezier(0.65,0,0.35,1)] leading-none',
  linkSecond: 'absolute left-0 top-[110%]',
  clock: 'flex items-center gap-2',
} as const;