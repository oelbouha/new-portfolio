import { Target, Rocket, Award, Users } from 'lucide-react';

const items = [
  {
    icon: Target,
    label: 'OUR VISION',
    description: 'Create Meaningful Impact And Compelling Experiences With Our Clients.'
  },
  {
    icon: Rocket,
    label: 'OUR MISSION',
    description: 'Craft Digital Solutions That Blend Tech And Design Empowering Brands To Succeed.'
  },
  {
    icon: Award,
    label: 'OUR EXPERTISE',
    description: 'Delivering Top Notch And Unique Design Websites And Apps.'
  },
  {
    icon: Users,
    label: 'OUR APPROACH',
    description: 'Everything In House Working End To End To Ensure We Meet The Highest Standards.'
  }
];

export function VisionMission() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-background p-8 sm:p-10"
            >
              <item.icon className="w-6 h-6 text-[#4ade80] mb-4" />
              <h3 className="text-sm font-medium tracking-wide text-foreground-secondary mb-3">
                {item.label}
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
