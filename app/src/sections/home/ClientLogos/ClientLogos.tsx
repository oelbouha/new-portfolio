import { clientLogosStyles } from './ClientLogos.styles';
import   type { ClientLogosProps } from './ClientLogos.types';

const clients = [
  "arya Alam Medika",
  "Fawkner",
  "FORMINDO",
  "PT ASSA PAPER",
  "JBS Villa",
  "LAVELY",
  "HIS",
  "Lestari Osean",
  "Marlupi",
];

export function ClientLogos({}: ClientLogosProps = {}) {
  return (
    <section className={clientLogosStyles.section}>
      {/* Gradient masks */}
      <div className={clientLogosStyles.maskLeft} />
      <div className={clientLogosStyles.maskRight} />
      
      {/* Marquee */}
      <div className={clientLogosStyles.marquee}>
        {clients.map((client, index) => (
          <div
            key={`first-${index}`}
            className={clientLogosStyles.item}
          >
            <span className={clientLogosStyles.text}>
              {client}
            </span>
          </div>
        ))}
        {clients.map((client, index) => (
          <div
            key={`second-${index}`}
            className={clientLogosStyles.item}
          >
            <span className={clientLogosStyles.text}>
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
