import { projectDetailGalleryStyles } from './ProjectDetailGallery.styles';
import type { ProjectDetailGalleryProps } from './ProjectDetailGallery.types';

function getImageSrc(item: string | { src: string; alt?: string }): string {
  return typeof item === 'string' ? item : item.src;
}

function getImageAlt(item: string | { src: string; alt?: string }, fallback: string): string {
  if (typeof item === 'object' && item.alt) return item.alt;
  return fallback;
}

export function ProjectDetailGallery({ images, title }: ProjectDetailGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className={projectDetailGalleryStyles.section}>
      <div className={projectDetailGalleryStyles.container}>
        {images.length >= 2 ? (
          <>
            {/* 2-column grid with phone aspect ratio 4/5 */}
            <div className={projectDetailGalleryStyles.grid2}>
              {images.slice(0, 2).map((item, i) => (
                <div key={i} className={projectDetailGalleryStyles.grid2Item}>
                  <img
                    src={getImageSrc(item)}
                    alt={getImageAlt(item, `${title} showcase ${i + 1}`)}
                    className={projectDetailGalleryStyles.grid2Img}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Any remaining images as full-width */}
            {images.slice(2).map((item, i) => (
              <div key={i} className={projectDetailGalleryStyles.fullMedia}>
                <img
                  src={getImageSrc(item)}
                  alt={getImageAlt(item, `${title} detail ${i + 3}`)}
                  className={projectDetailGalleryStyles.fullImg}
                  loading="lazy"
                />
              </div>
            ))}
          </>
        ) : (
          <div className={projectDetailGalleryStyles.fullMedia}>
            <img
              src={getImageSrc(images[0])}
              alt={getImageAlt(images[0], `${title} detail`)}
              className={projectDetailGalleryStyles.fullImg}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
