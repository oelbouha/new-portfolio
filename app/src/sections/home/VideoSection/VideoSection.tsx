import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { videoSectionStyles } from './VideoSection.styles';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 60, duration: 1.2, ease: 'power4.out', start: 'top 90%' });

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className={videoSectionStyles.section}>
      <div className={videoSectionStyles.container}>
        <div ref={sectionRef} className={videoSectionStyles.videoWrapper}>
          <video
            ref={videoRef}
            className={videoSectionStyles.video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            style={{ pointerEvents: 'none' }}
          >
            <source
              src="https://studionamma.vercel.app/videos/cut/video-matera2.webm"
              type="video/webm"
            />
          </video>

          <div className={videoSectionStyles.controls}>
            <button
              type="button"
              onClick={toggleMute}
              className={videoSectionStyles.controlBtn}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          <div className={videoSectionStyles.badge}>
            <span className="text-mono">SHOWCASE REEL / 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
