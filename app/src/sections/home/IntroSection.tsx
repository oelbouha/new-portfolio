import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function IntroSection() {
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (taglineRef.current) {
      gsap.fromTo(taglineRef.current,
        { y: '2rem', opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: taglineRef.current, start: 'top 85%', once: true },
        }
      );
    }
    if (bodyRef.current) {
      gsap.fromTo(bodyRef.current,
        { y: '2rem', opacity: 0 },
        {
          y: 0, opacity: 0.7, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: bodyRef.current, start: 'top 88%', once: true },
        }
      );
    }
  }, []);

  return (
    <section className="section-intro">
      <div className="container-large">
        <div className="text-mono_wrapper" style={{ marginBottom: '1rem' }}>
          <span className="text-mono intro-heading">Creative studio building premium Brands</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '4rem', flexWrap: 'wrap' }}>
          <h2 ref={taglineRef} className="intro-tagline" style={{ opacity: 0 }}>
            It's never<br />"just a website."<br />
            Every detail matters.
          </h2>

          <p ref={bodyRef} className="intro-body" style={{ opacity: 0 }}>
            We craft digital experiences.<br />
            Your design.<br />
            Our obsession.<br />
            Your brand.<br />
            Our{' '}
            <span
              className="hover-word"
              data-cursor-hover="Playground"
            >
              playground
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
}
