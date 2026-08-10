import { IntroHeadline } from '@/components/home/IntroHeadline/IntroHeadline';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './IntroSection.module.css';

export function IntroSection() {
  const tagRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.8, delay: 0 });
  const headlineRef = useScrollReveal<HTMLDivElement>({ y: 60, duration: 1.1, delay: 0.1, ease: 'power4.out' });

  return (
    <section className={styles.section} id="intro">
      <div className={styles.inner}>
        <div ref={tagRef} className={styles.tag}>[ ABOUT OUTMAN ]</div>
        <div ref={headlineRef}>
          <IntroHeadline />
        </div>
      </div>
    </section>
  );
}
