export const navbarStyles = {
  wrapper: 'fixed inset-x-0 top-0 z-[1000] pointer-events-none',
  bar: 'pointer-events-auto w-full bg-transparent',
  inner: 'flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-10',
  leftGroup: 'flex items-center gap-3',
  centerGroup: 'flex items-center gap-3 sm:gap-4',
  rightGroup: 'ml-auto flex items-center gap-4 text-right sm:gap-8',
  text: 'font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] text-[var(--nav-fixed-text)]',
  link: 'link',
  clock: 'flex items-center gap-2',
} as const;