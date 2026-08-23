export const projectDetailGalleryStyles = {
  section:
    'relative w-full py-0 px-[clamp(1rem,2.5vw,2.5rem)]',
  container: 'mx-auto w-full max-w-[1980px]',
  fullMedia:
    'proj-img-reveal w-full overflow-hidden rounded-[0.4rem] mb-8 last:mb-0',
  fullImg:
    'w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]',
  grid2:
    'grid grid-cols-2 gap-6 mb-8 w-full max-sm:grid-cols-1',
  grid2Item:
    'proj-img-reveal overflow-hidden rounded-[1.75rem] aspect-[4/5] relative bg-black/5',
  grid2Img:
    'w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]',
} as const;
