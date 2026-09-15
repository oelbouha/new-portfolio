import { motion } from 'framer-motion';

export function WorkHero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full pt-28 sm:pt-36 lg:pt-40 pb-12 px-4 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-4 select-none">
        <motion.h1
          className="font-[family-name:var(--font-display)] text-[clamp(4.8rem,13vw,14.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] select-none text-center"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          SELECTED
        </motion.h1>
        <motion.h1
          className="font-[family-name:var(--font-display)] text-[clamp(4.8rem,13vw,14.5rem)] font-bold uppercase leading-[0.85] tracking-[0.01em] text-[var(--text)] select-none text-center"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          WORKS
        </motion.h1>
      </div>
    </section>
  );
}
