import { home, layoutConfig, ui } from '@/data';
import { ctaSectionStyles } from './CTASection.styles';
import { SpotlightHeading } from '@/components/shared/SpotlightHeading';
import type { CTASectionProps } from './CTASection.types';

export function CTASection({ onContactOpen }: CTASectionProps) {
  const { cta } = home;
  const marqueeItems = layoutConfig.footer.techStacks;

  return (
    <>
      {/* Marquee */}
      <section className={ctaSectionStyles.marqueeSection}>
        <div className={ctaSectionStyles.marqueeWrapper}>
          {[...marqueeItems, ...marqueeItems].map((name, i) => (
            <span key={`${name}-${i}`} className={ctaSectionStyles.clientName}>
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={ctaSectionStyles.ctaSection} id="contact">
        <div className={ctaSectionStyles.container}>
          <div className={ctaSectionStyles.layoutRow}>
            {/* LEFT: desc text + button */}
            <div className={ctaSectionStyles.descWrapper}>
              <p className={ctaSectionStyles.descText} style={{ whiteSpace: 'pre-line' }}>
                {cta.desc}
              </p>

              <button
                onClick={onContactOpen}
                className={ctaSectionStyles.button}
                data-cursor-hover="Let's talk"
                aria-label="Open contact form"
              >
                <div className={ctaSectionStyles.monoWrapper}>
                  <span className={ctaSectionStyles.monoText}>{cta.buttonText}</span>
                </div>
                <svg
                  className={ctaSectionStyles.svgArrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66663 11.3333L11.3333 4.66663M11.3333 4.66663H5.33329M11.3333 4.66663V10.6666"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* RIGHT: SpotlightHeading */}
            <div className={ctaSectionStyles.headingWrapper}>
              <SpotlightHeading
                line1={cta.line1}
                line2={cta.line2}
                imageSrc={ui.contactModal.spotlightImage}
                targetRectWidth={120}
                gap={14}
                triggerOnScroll
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
