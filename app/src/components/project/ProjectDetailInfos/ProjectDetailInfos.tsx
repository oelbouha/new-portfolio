import { motion } from 'framer-motion';
import { ui } from '@/data';
import type { ProjectDetailInfosProps } from './ProjectDetailInfos.types';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: custom * 0.1 },
  }),
};

export function ProjectDetailInfos({ credits, services, client, year, tags }: ProjectDetailInfosProps) {
  const { labels } = ui;

  return (
    <section className="relative w-full py-[clamp(4rem,8vw,10rem)] px-[clamp(1rem,2.5vw,2.5rem)]">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-[clamp(2.5rem,5vw,6rem)] items-start">
        {/* 1. Credits Column */}
        {credits && credits.length > 0 && (
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="flex items-center gap-4">
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest uppercase opacity-60">
                {labels.credits}
              </span>
              <div className="flex-1 h-px bg-current opacity-15" />
            </div>

            <div className="space-y-4">
              {credits.map((c) => (
                <div key={c.role + c.name} className="flex items-center justify-between gap-4 py-1.5 ">
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs uppercase opacity-70">
                    {c.role}
                  </span>
                  <span className="font-bold text-sm sm:text-base uppercase tracking-tight">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2. Scope Column */}
        <motion.div
          className="flex flex-col gap-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest uppercase opacity-60">
              {labels.servicesScope}
            </span>
            <div className="flex-1 h-px bg-current opacity-15" />
          </div>

          <div className="flex flex-col gap-3">
            {services.map((svc) => (
              <div key={svc} className="flex items-center gap-3 py-1 ">
                <span className="text-xs opacity-40">✦</span>
                <span className="font-bold text-sm sm:text-base uppercase tracking-tight">
                  {svc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. Project Meta Column (Client, Year, Stack) */}
        <motion.div
          className="flex flex-col gap-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest uppercase opacity-60">
              {labels.projectOverview}
            </span>
            <div className="flex-1 h-px bg-current opacity-15" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="block font-['IBM_Plex_Mono',monospace] text-[0.68rem] tracking-wider uppercase opacity-55 mb-1">
                {labels.client}
              </span>
              <span className="font-bold text-base sm:text-lg uppercase tracking-tight">
                {client || '—'}
              </span>
            </div>

            <div>
              <span className="block font-['IBM_Plex_Mono',monospace] text-[0.68rem] tracking-wider uppercase opacity-55 mb-1">
                {labels.year}
              </span>
              <span className="font-bold text-base sm:text-lg uppercase tracking-tight">
                {year}
              </span>
            </div>
          </div>

          {tags && tags.length > 0 && (
            <div className="pt-2">
              <span className="block font-['IBM_Plex_Mono',monospace] text-[0.68rem] tracking-wider uppercase opacity-55 mb-2">
                {labels.stack}
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="font-['IBM_Plex_Mono',monospace] text-xs uppercase px-2 py-0.5 rounded bg-current/5 border border-current/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
