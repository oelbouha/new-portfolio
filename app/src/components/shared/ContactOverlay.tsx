import { useRef, useState } from 'react';

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactOverlay({ isOpen, onClose }: ContactOverlayProps) {
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="contact-overlay is-open" role="dialog" aria-modal="true">
      <button className="contact-close" onClick={onClose} aria-label="Close contact">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="1" y1="1" x2="11" y2="11" />
          <line x1="11" y1="1" x2="1" y2="11" />
        </svg>
        <span>Close</span>
      </button>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-heading">
            Let's work<br />together
          </h2>

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

          <button type="submit" className="contact-submit">
            Send message →
          </button>
        </form>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="contact-heading">Thank you!</h2>
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
  );
}
