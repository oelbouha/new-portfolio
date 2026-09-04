import { CLIENT_NAMES, CONTACT_SPOTLIGHT_IMAGE } from '@/lib/constants';
import { homeData } from '@/data/home.data';
import { ctaSectionStyles } from './CTASection.styles';
import { SpotlightHeading } from '@/components/shared/SpotlightHeading';
import type { CTASectionProps } from './CTASection.types';

export function CTASection({ onContactOpen }: CTASectionProps) {
  return (
    <>
      {/* Client Logos Marquee */}
      <section className={ctaSectionStyles.marqueeSection}>
        <div className={ctaSectionStyles.marqueeWrapper}>
          {CLIENT_NAMES.map((name, i) => (
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
            {/* LEFT: desc text + say hello button */}
            <div className={ctaSectionStyles.descWrapper}>
              <p className={ctaSectionStyles.descText}>
                {homeData.cta.desc.split('\n')[0]}
                <br />
                {homeData.cta.desc.split('\n')[1]}
              </p>

              <button
                onClick={onContactOpen}
                className={ctaSectionStyles.button}
                data-cursor-hover="Let's talk"
                aria-label="Open contact form"
              >
                <div className={ctaSectionStyles.monoWrapper}>
                  <span className={ctaSectionStyles.monoText}>{homeData.cta.buttonText}</span>
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

            {/* RIGHT: Reusable Spotlight Heading */}
            <div className={ctaSectionStyles.headingWrapper}>
              <SpotlightHeading
                line1={homeData.cta.line1}
                line2={homeData.cta.line2}
                imageSrc={CONTACT_SPOTLIGHT_IMAGE}
                targetRectWidth={15}
                fontSize={15}
                gap={1}
                triggerOnScroll={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

