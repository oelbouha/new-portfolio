import { motion } from 'framer-motion';
import type { ProjectDetailQuoteProps } from './ProjectDetailQuote.types';

export function ProjectDetailQuote({ quote, quoteAuthor, quoteRole }: ProjectDetailQuoteProps) {
  if (!quote) return null;

  return (
    <section className="relative w-full py-[clamp(4rem,8vw,9rem)] px-[clamp(1rem,2.5vw,2.5rem)]">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-8 items-center text-center">
        {/* Section Header with Centered Line Dividers */}
        <motion.div
          className="flex items-center justify-center gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex-1 h-px bg-current opacity-20" />
          <span className="font-['IBM_Plex_Mono',monospace] text-[clamp(0.7rem,1.1vw,0.85rem)] font-bold tracking-[0.12em] uppercase opacity-60 shrink-0">
            PROJECT STRATEGY &amp; INSIGHT
          </span>
          <div className="flex-1 h-px bg-current opacity-20" />
        </motion.div>

        {/* Detailed Bold Paragraph */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text)] uppercase leading-relaxed tracking-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          {quote}
        </motion.p>

        {/* Sub-details if present */}
        {(quoteAuthor || quoteRole) && (
          <motion.div
            className="flex items-center justify-center gap-3 pt-2 text-[var(--text)] opacity-75"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <div className="w-8 h-px bg-current opacity-40" />
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold tracking-widest uppercase">
              {[quoteAuthor, quoteRole].filter(Boolean).join(' — ')}
            </span>
            <div className="w-8 h-px bg-current opacity-40" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
