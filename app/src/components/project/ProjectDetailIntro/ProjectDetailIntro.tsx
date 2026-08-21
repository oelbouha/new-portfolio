import { projectDetailIntroStyles } from './ProjectDetailIntro.styles';
import type { ProjectDetailIntroProps } from './ProjectDetailIntro.types';

function ArrowIcon() {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L7 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectDetailIntro({ overview, description, website }: ProjectDetailIntroProps) {
  return (
    <section className={projectDetailIntroStyles.section}>
      <div className={projectDetailIntroStyles.container}>
        <div className={projectDetailIntroStyles.labelCol}>
          <div className={projectDetailIntroStyles.monoWrapper}>
            <span className={projectDetailIntroStyles.monoText}>Project info</span>
          </div>
        </div>
        <div className={projectDetailIntroStyles.bodyCol}>
          <p className={projectDetailIntroStyles.desc}>
            {overview || description}
          </p>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className={projectDetailIntroStyles.visitLink}
            >
              <div className={projectDetailIntroStyles.monoWrapper}>
                <span className={projectDetailIntroStyles.monoText}>Visit website</span>
              </div>
              <span className={projectDetailIntroStyles.arrowIcon}><ArrowIcon /></span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
