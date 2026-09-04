import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CONTACT_SPOTLIGHT_IMAGE } from '@/lib/constants';
import { SpotlightHeading } from '@/components/shared/SpotlightHeading';

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactOverlay({ isOpen, onClose }: ContactOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const wasOpen = useRef(false);
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const page = document.querySelector<HTMLElement>('.page-main');

    if (!overlay || !content) return;

    if (isOpen && !wasOpen.current) {
      wasOpen.current = true;
      setIsFullyDisplayed(false);
      if (isAnimating.current) return;
      isAnimating.current = true;

      // Same as openMenu: page flies off, overlay clips in from polygon
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';

      gsap.set(content, {
        opacity: 0.25,
        x: -100,
        y: -100,
        scale: 1.5,
        rotation: -15,
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.8 },
        onComplete: () => {
          isAnimating.current = false;
          setIsFullyDisplayed(true);
        },
      });

      if (page) tl.to(page, { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5 }, 0);
      tl.to(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)' }, 0);
      tl.to(content, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);

    } else if (!isOpen && wasOpen.current) {
      wasOpen.current = false;
      setIsFullyDisplayed(false);
      if (isAnimating.current) return;
      isAnimating.current = true;

      // Same as closeMenu: page comes back, overlay clips out
      const page2 = document.querySelector<HTMLElement>('.page-main');

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.8 },
        onComplete: () => {
          overlay.classList.remove('is-open');
          document.body.style.overflow = '';
          gsap.set([content, overlay], { clearProps: 'all' });
          if (page2) gsap.set(page2, { clearProps: 'all' });
          isAnimating.current = false;
          setIsFullyDisplayed(false);
        },
      });

      if (page2) tl.to(page2, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);
      tl.to(content, { rotation: -15, x: -100, y: -100, scale: 1.5, opacity: 0.25 }, 0);
      tl.to(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }, 0);
    }
  }, [isOpen]);

  // ESC key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={overlayRef} className="contact-overlay" role="dialog" aria-modal="true" aria-hidden={!isOpen}>
      <div ref={contentRef} className="contact-overlay_panel">
        <button className="contact-close" onClick={onClose} aria-label="Close contact">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="1" y1="1" x2="11" y2="11" />
            <line x1="11" y1="1" x2="1" y2="11" />
          </svg>
          <span>Close</span>
        </button>

        <div>
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Reusable Spotlight Heading for Let's Talk Together */}
              <SpotlightHeading
                line1="LET'S WORK"
                line2="TOGETHER"
                imageSrc={CONTACT_SPOTLIGHT_IMAGE}
                targetRectWidth={80}
                gap={6}
                fontSize={80}
                triggerOnScroll={false}
                play={isFullyDisplayed}
                delay={0.1}
                className="mb-4"
              />

              <p className="text-mono" style={{ marginBottom: '1.5rem', opacity: 0.45, letterSpacing: '0.1em' }}>
                WORK WITH US IF AVERAGE ISN&apos;T YOUR THING.
                <br />
                DROP IT, WE&apos;LL BUILD IT!
              </p>

              <div className="contact-field-wrap">
                <label className="contact-label">Name</label>
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Chuck Norris"
                  autoComplete="name"
                />
              </div>

              <div className="contact-field-wrap">
                <label className="contact-label">Email</label>
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="hello@yourstudio.com"
                  required
                />
              </div>

              <div className="contact-field-wrap">
                <label className="contact-label">Interest</label>
                <div className="contact-radios">
                  {['Web Development', 'UI/UX Design', 'Branding', 'Full Package'].map((opt) => (
                    <label className="contact-radio-label" key={opt}>
                      <input
                        type="radio"
                        name="interest"
                        value={opt}
                        checked={interest === opt}
                        onChange={() => setInterest(opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="contact-field-wrap">
                <label className="contact-label">Message</label>
                <textarea
                  className="contact-textarea"
                  name="message"
                  placeholder="Tell me about your project, deadline, budget…"
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className="contact-submit" style={{ fontWeight: 700 }}>
                Send message →
              </button>
            </form>
          ) : (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="cta-heading" style={{ color: 'var(--text)', marginBottom: '1rem' }}>Thank you!</h2>
              <p className="text-mono" style={{ opacity: 0.6, marginTop: '1rem' }}>
                I'll get back to you very soon.
              </p>
              <button
                onClick={onClose}
                className="contact-close"
                style={{ marginTop: '3rem' }}
              >
                Continue browsing →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
