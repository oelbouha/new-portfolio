// Client logo data - using text representations
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

export function ClientLogos() {
  return (
    <section className="relative py-8 overflow-hidden border-y border-border/30 bg-background/50">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* Marquee */}
      <div className="flex animate-marquee">
        {/* First set */}
        {clients.map((client, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 px-8 sm:px-12"
          >
            <span className="text-sm sm:text-base font-medium text-foreground-tertiary whitespace-nowrap tracking-wide">
              {client}
            </span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {clients.map((client, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 px-8 sm:px-12"
          >
            <span className="text-sm sm:text-base font-medium text-foreground-tertiary whitespace-nowrap tracking-wide">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
