import { useState, useEffect } from 'react';
import { HeroHeadline } from '@/components/home/HeroHeadline/HeroHeadline';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}:${seconds}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section} id="hero">
      <HeroHeadline />

      {/* <div className={styles.bottomRow}>
        <div className={styles.leftText}>
          WE CRAFT BOLD DESIGN & CLEAN WEBFLOW.
        </div>
        <div className={styles.rightText}>
          LOS ANGELES, CA {timeStr}
        </div>
      </div> */}
    </section>
  );
}
