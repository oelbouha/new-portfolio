import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './VideoSection.module.css';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 60, duration: 1.2, ease: 'power4.out', start: 'top 90%' });

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <div ref={sectionRef} className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.controls}>
            <button
              type="button"
              onClick={togglePlay}
              className={styles.controlBtn}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className={styles.controlBtn}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          <div className={styles.badge}>
            <span className="text-mono">SHOWCASE REEL / 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
