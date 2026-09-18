export const navbarStyles = {
  wrapper: 'fixed inset-x-0 top-0 z-[1000] pointer-events-none',
  bar: 'pointer-events-auto w-full bg-transparent',
  inner: 'flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10',
  leftGroup: 'flex items-center gap-3',
  centerGroup: 'flex items-center gap-3 sm:gap-4',
  text: "font-['Gt_Pressura_Mono',Georgia,sans-serif] text-[var(--_responsive---font-size--mono)] leading-[var(--_responsive---line-height--mono)] tracking-[0.121875rem] uppercase mb-0 font-[300] text-[var(--nav-fixed-text)]",
  link: 'link',
  clock: 'flex items-center gap-2',
} as const;