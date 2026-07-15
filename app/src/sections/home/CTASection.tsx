import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLIENT_NAMES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  onContactOpen?: () => void;
}

export function CTASection({ onContactOpen }: CTASectionProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const visualRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading line reveal
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { y: '3rem', opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
        }
      );
    }

    // Inline visual expand
    if (visualRef.current) {
      const targetWidth = window.innerWidth <= 767 ? '4rem' : window.innerWidth <= 1024 ? '7rem' : '10rem';
      gsap.fromTo(visualRef.current,
        { width: '0rem' },
        {
          width: targetWidth, duration: 1.2, ease: 'power4.out', delay: 0.4,
          scrollTrigger: { trigger: visualRef.current, start: 'top 90%', once: true },
        }
      );
    }

    // Desc
    if (descRef.current) {
      gsap.fromTo(descRef.current,
        { opacity: 0, y: '1.5rem' },
        {
          opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: descRef.current, start: 'top 90%', once: true },
        }
      );
    }
  }, []);

  return (
    <>
      {/* Client Logos Marquee */}
      <section
        className="section-clients"
        style={{ overflow: 'hidden', borderTop: '1px solid rgba(128,128,128,0.15)', borderBottom: '1px solid rgba(128,128,128,0.15)', padding: 'clamp(1.5rem, 3vw, 2.5rem) 0' }}
      >
        <div className="clients-marquee">
          {CLIENT_NAMES.map((name, i) => (
            <span key={`${name}-${i}`} className="client-name">{name}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta" id="contact">
        <div className="container-large">
          <h2 ref={headingRef} className="cta-heading" style={{ opacity: 0 }}>
            Let's work
            <br />
            <span ref={visualRef} className="cta-inline-visual" aria-hidden="true" />
            together
          </h2>

          <div ref={descRef} className="cta-body" style={{ opacity: 0 }}>
            <p className="cta-desc">
              Work with us if average isn't your thing.<br />
              Drop it, we'll build it!
            </p>

            <button
              onClick={onContactOpen}
              className="small-link"
              data-cursor-hover="Let's talk"
              aria-label="Open contact form"
            >
              <div className="text-mono_wrapper">
                <span className="text-mono">say hello</span>
              </div>
              <svg
                className="small-link-arrow"
                width="14" height="8" viewBox="0 0 14 8" fill="none"
                style={{ opacity: 0 }}
              >
                <path d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
