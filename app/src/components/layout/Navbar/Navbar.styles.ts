export const navbarStyles = {
  wrapper: 'fixed inset-x-0 top-0 z-[1000] pointer-events-none',
  bar: 'pointer-events-auto w-full bg-transparent',
  inner: 'flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10',
  leftGroup: 'flex items-center gap-3',
  centerGroup: 'flex items-center gap-3 sm:gap-4',
  rightGroup: 'flex items-center gap-4 sm:gap-8',
  text: "font-['PP_Neue_Montreal_Medium',sans-serif] text-[13px] sm:text-[14px] uppercase tracking-[0.04em] text-[var(--nav-fixed-text)] font-medium",
  // Use the global .link CSS class for the slide-up flip hover
  link: 'link',
  clock: 'flex items-center gap-2',
} as const;