export const clientLogosStyles = {
  section: 'relative py-8 overflow-hidden border-y border-border/30 bg-background/50',
  maskLeft: 'absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none',
  maskRight: 'absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none',
  marquee: 'flex animate-marquee',
  item: 'flex-shrink-0 px-8 sm:px-12',
  text: 'text-sm sm:text-base font-medium text-foreground-tertiary whitespace-nowrap tracking-wide',
} as const;
