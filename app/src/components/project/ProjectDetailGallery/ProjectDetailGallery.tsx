import { projectDetailGalleryStyles } from './ProjectDetailGallery.styles';
import type { ProjectDetailGalleryProps } from './ProjectDetailGallery.types';

export function ProjectDetailGallery({ images, title }: ProjectDetailGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className={projectDetailGalleryStyles.section}>
      <div className={projectDetailGalleryStyles.container}>
        {images.length >= 2 ? (
          <>
            {/* 2-column grid with phone aspect ratio 4/5 */}
            <div className={projectDetailGalleryStyles.grid2}>
              {images.slice(0, 2).map((src, i) => (
                <div key={i} className={projectDetailGalleryStyles.grid2Item}>
                  <img
                    src={src}
                    alt={`${title} showcase ${i + 1}`}
                    className={projectDetailGalleryStyles.grid2Img}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Any remaining images as full-width */}
            {images.slice(2).map((src, i) => (
              <div key={i} className={projectDetailGalleryStyles.fullMedia}>
                <img
                  src={src}
                  alt={`${title} detail ${i + 3}`}
                  className={projectDetailGalleryStyles.fullImg}
                  loading="lazy"
                />
              </div>
            ))}
          </>
        ) : (
          <div className={projectDetailGalleryStyles.fullMedia}>
            <img
              src={images[0]}
              alt={`${title} detail`}
              className={projectDetailGalleryStyles.fullImg}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
