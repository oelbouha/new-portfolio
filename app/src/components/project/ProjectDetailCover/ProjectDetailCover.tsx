import { projectDetailCoverStyles } from './ProjectDetailCover.styles';
import type { ProjectDetailCoverProps } from './ProjectDetailCover.types';

export function ProjectDetailCover({ coverImage, title, coverRef }: ProjectDetailCoverProps) {
  return (
    <section className={projectDetailCoverStyles.section}>
      <div className={projectDetailCoverStyles.container}>
        <div ref={coverRef} className={projectDetailCoverStyles.media}>
          <img
            src={coverImage}
            alt={`${title} cover`}
            className={projectDetailCoverStyles.img}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
