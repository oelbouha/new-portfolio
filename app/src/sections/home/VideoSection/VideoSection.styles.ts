export const videoSectionStyles = {
  section: 'w-full px-0 py-8',
  container: 'mx-auto w-full px-4 sm:px-6 lg:px-8',
  videoWrapper: 'relative aspect-video overflow-hidden rounded-2xl bg-[#0d0d0d] shadow-[0_20px_40px_rgba(0,0,0,0.2)]',
  video: 'block h-full w-full object-cover',
  controls: 'absolute bottom-6 right-6 z-10 flex gap-3',
  controlBtn: 'flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white transition-all duration-300 hover:scale-105 hover:bg-white/20',
  badge: 'absolute left-6 top-6 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-[0.75rem] tracking-[0.05em] text-white backdrop-blur-md',
} as const;