import { projectDetailInfosStyles } from './ProjectDetailInfos.styles';
import type { ProjectDetailInfosProps } from './ProjectDetailInfos.types';

export function ProjectDetailInfos({ credits, services, client, year, tags }: ProjectDetailInfosProps) {
  return (
    <section className={projectDetailInfosStyles.section}>
      <div className={projectDetailInfosStyles.grid}>
        {/* Credits */}
        {credits && (
          <div className={projectDetailInfosStyles.col}>
            <div className={projectDetailInfosStyles.monoWrapper}>
              <span className={projectDetailInfosStyles.monoText}>Credits</span>
            </div>
            <div className={projectDetailInfosStyles.rows}>
              <div className={projectDetailInfosStyles.roles}>
                {credits.map((c) => (
                  <p key={c.role}>{c.role}</p>
                ))}
              </div>
              <div className={projectDetailInfosStyles.names}>
                {credits.map((c) => (
                  <p key={c.name + c.role}>{c.name}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scope */}
        <div className={projectDetailInfosStyles.col}>
          <div className={projectDetailInfosStyles.monoWrapper}>
            <span className={projectDetailInfosStyles.monoText}>Scope</span>
          </div>
          <div className={projectDetailInfosStyles.scopeList}>
            {services.map((svc) => (
              <p key={svc}>{svc}</p>
            ))}
          </div>
        </div>

        {/* Extra meta */}
        <div className={projectDetailInfosStyles.colMeta}>
          <div className={projectDetailInfosStyles.monoWrapper}>
            <span className={projectDetailInfosStyles.monoText}>Client</span>
          </div>
          <p className={projectDetailInfosStyles.metaValue}>{client || '—'}</p>

          <div className={projectDetailInfosStyles.monoWrapper} style={{ marginTop: '2rem' }}>
            <span className={projectDetailInfosStyles.monoText}>Year</span>
          </div>
          <p className={projectDetailInfosStyles.metaValue}>{year}</p>

          {tags && tags.length > 0 && (
            <>
              <div className={projectDetailInfosStyles.monoWrapper} style={{ marginTop: '2rem' }}>
                <span className={projectDetailInfosStyles.monoText}>Stack</span>
              </div>
              <div className={projectDetailInfosStyles.tagsWrapper}>
                {tags.map((t) => (
                  <span key={t} className={projectDetailInfosStyles.tag}>{t}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
