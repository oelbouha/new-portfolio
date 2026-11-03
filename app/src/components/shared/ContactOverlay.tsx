'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ui, layoutConfig } from '@/data';
import { SpotlightHeading } from '@/components/shared/SpotlightHeading';

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactOverlay({ isOpen, onClose }: ContactOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimating = useRef(false);
  const wasOpen = useRef(false);
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  const { contactModal, buttons } = ui;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const page = document.querySelector<HTMLElement>('.page-main');

    if (!overlay || !content) return;

    timelineRef.current?.kill();
    timelineRef.current = null;

    if (isOpen && !wasOpen.current) {
      wasOpen.current = true;
      setIsFullyDisplayed(false);
      isAnimating.current = true;

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
          timelineRef.current = null;
          isAnimating.current = false;
          setIsFullyDisplayed(true);
        },
      });
      timelineRef.current = tl;

      if (page) tl.to(page, { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5 }, 0);
      tl.to(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)' }, 0);
      tl.to(content, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);
    } else if (!isOpen && wasOpen.current) {
      wasOpen.current = false;
      setIsFullyDisplayed(false);
      isAnimating.current = true;

      const page2 = document.querySelector<HTMLElement>('.page-main');

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.8 },
        onComplete: () => {
          timelineRef.current = null;
          overlay.classList.remove('is-open');
          document.body.style.overflow = '';
          gsap.set([content, overlay], { clearProps: 'all' });
          if (page2) gsap.set(page2, { clearProps: 'all' });
          isAnimating.current = false;
          setIsFullyDisplayed(false);
        },
      });
      timelineRef.current = tl;

      if (page2) tl.to(page2, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);
      tl.to(content, { rotation: -15, x: -100, y: -100, scale: 1.5, opacity: 0.25 }, 0);
      tl.to(overlay, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }, 0);
    }
  }, [isOpen]);

  useEffect(() => () => {
    timelineRef.current?.kill();
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, []);

  // ESC key
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      ref={overlayRef}
      className="contact-overlay"
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div ref={contentRef} className="contact-overlay_panel">
        <button
          type="button"
          className="contact-close"
          onClick={onClose}
          aria-label="Close contact modal"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="1" y1="1" x2="11" y2="11" />
            <line x1="11" y1="1" x2="1" y2="11" />
          </svg>
          <span className="contact-close-label">{layoutConfig.navbar.menuCloseLabel}</span>
        </button>

        <div>
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <SpotlightHeading
                line1={contactModal.headlineLine1}
                line2={contactModal.headlineLine2}
                imageSrc={contactModal.spotlightImage}
                targetRectWidth={80}
                gap={6}
                fontSize={80}
                triggerOnScroll={false}
                play={isFullyDisplayed}
                delay={0.1}
                className="mb-4"
              />

              <p
                className="text-mono"
                style={{ marginBottom: '1.5rem', opacity: 0.45, letterSpacing: '0.1em' }}
              >
                {contactModal.subheadlineLine1}
                <br />
                {contactModal.subheadlineLine2}
              </p>

              <div className="contact-field-wrap">
                <label className="contact-label">{contactModal.fields.nameLabel}</label>
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder={contactModal.fields.namePlaceholder}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field-wrap">
                <label className="contact-label">{contactModal.fields.emailLabel}</label>
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder={contactModal.fields.emailPlaceholder}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field-wrap">
                <label className="contact-label">{contactModal.fields.interestLabel}</label>
                <div className="contact-radios">
                  {contactModal.fields.interestOptions.map((opt) => (
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
                <label className="contact-label">{contactModal.fields.messageLabel}</label>
                <textarea
                  className="contact-textarea"
                  name="message"
                  placeholder={contactModal.fields.messagePlaceholder}
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className="contact-submit" style={{ fontWeight: 700 }}>
                {buttons.sendMsg}
              </button>
            </form>
          ) : (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h2 className="cta-heading" style={{ color: 'var(--text)', marginBottom: '1rem' }}>
                {contactModal.success.title}
              </h2>
              <p className="text-mono" style={{ opacity: 0.6, marginTop: '1rem' }}>
                {contactModal.success.message}
              </p>
              <button
                onClick={onClose}
                className="contact-close"
                style={{ marginTop: '3rem' }}
              >
                {buttons.continueBrowsing}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
