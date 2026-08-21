import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { videoSectionStyles } from './VideoSection.styles';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 60, duration: 1.2, ease: 'power4.out', start: 'top 90%' });


  return (
    <section className={videoSectionStyles.section}>
      <div className={videoSectionStyles.container}>
        <div ref={sectionRef} className={videoSectionStyles.videoWrapper}>
          <video
            ref={videoRef}
            className={videoSectionStyles.video}
            autoPlay
            loop
            muted={true}
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
            
          </div>
        </div>
      </div>
    </section>
  );
}
