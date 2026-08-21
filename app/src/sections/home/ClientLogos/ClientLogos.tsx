import { clientLogosStyles } from './ClientLogos.styles';
import type { ClientLogosProps } from './ClientLogos.types';

const tools = [
  "React JS",
  "Next.js",
  "Flutter",
  "Django",
  "Automation",
  "n8n",
  "WordPress",
  "Python",
  "TypeScript",
  "Docker",
  "PostgreSQL",
  "Tailwind CSS",
  "GSAP",
];

export function ClientLogos({}: ClientLogosProps = {}) {
  return (
    <section className={clientLogosStyles.section}>
      {/* Gradient masks */}
      <div className={clientLogosStyles.maskLeft} />
      <div className={clientLogosStyles.maskRight} />
      
      {/* Marquee */}
      <div className={clientLogosStyles.marquee}>
        {tools.map((tool, index) => (
          <div
            key={`first-${index}`}
            className={clientLogosStyles.item}
          >
            <span className={clientLogosStyles.text}>
              {tool}
            </span>
          </div>
        ))}
        {tools.map((tool, index) => (
          <div
            key={`second-${index}`}
            className={clientLogosStyles.item}
          >
            <span className={clientLogosStyles.text}>
              {tool}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
