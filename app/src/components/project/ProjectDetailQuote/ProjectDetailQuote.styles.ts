export const projectDetailQuoteStyles = {
  section:
    'relative w-full py-[clamp(4rem,8vw,10rem)] px-[clamp(1rem,2.5vw,2.5rem)]',
  container:
    'mx-auto w-full max-w-[800px] flex flex-col gap-8 text-center',
  quoteText:
    'font-["Space_Grotesk",system-ui,sans-serif] text-[clamp(1.4rem,3vw,2.4rem)] font-normal leading-[1.4] tracking-[-0.01em] text-[var(--text)] italic border-0 p-0 m-0',
  meta: 'flex flex-col items-center gap-1',
  monoWrapper: 'overflow-hidden',
  monoText:
    'block font-["IBM_Plex_Mono",monospace] text-[clamp(0.65rem,1vw,0.75rem)] font-normal tracking-[0.02em] uppercase opacity-60',
} as const;
