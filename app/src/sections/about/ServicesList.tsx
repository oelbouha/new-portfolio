import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    number: '01',
    title: 'Website Design and Development',
    description: 'Creating seamless digital experiences across all platforms with modern technologies and stunning designs.'
  },
  {
    number: '02',
    title: 'Crafting Unique Branding Identities',
    description: 'Building memorable brand identities that resonate with your audience and stand out in the market.'
  },
  {
    number: '03',
    title: 'Creating Seamless Motion Design',
    description: 'Bringing ideas to life with stunning animations and motion graphics that captivate viewers.'
  },
  {
    number: '04',
    title: 'Designing Social Media Feeds',
    description: 'Designing eye-catching content that engages your audience and builds brand presence.'
  },
  {
    number: '05',
    title: 'Photography',
    description: 'Capturing moments with professional and creative photography for all your visual needs.'
  },
  {
    number: '06',
    title: 'Videography',
    description: 'Producing high-quality video content that tells your story and connects with audiences.'
  },
  {
    number: '07',
    title: 'Company Profile',
    description: 'Creating comprehensive company profiles that showcase your business and its values.'
  },
  {
    number: '08',
    title: 'Enhancing Digital Experience',
    description: 'Optimizing user interactions for memorable digital experiences that drive results.'
  }
];

export function ServicesList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-2">
            All the Services You Need
          </h2>
          <p className="text-2xl sm:text-3xl text-foreground-secondary">
            — Under One Roof
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="border-t border-border/30 last:border-b"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between group text-left"
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="text-sm font-medium text-foreground-tertiary">
                    {service.number}
                  </span>
                  <span className="text-lg sm:text-xl font-medium text-foreground group-hover:text-[#4ade80] transition-colors">
                    {service.title}
                  </span>
                </div>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-foreground-secondary transition-transform duration-300",
                    expandedIndex === index && "rotate-180"
                  )} 
                />
              </button>
              
              {/* Expandable Content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedIndex === index ? "max-h-32 pb-6" : "max-h-0"
                )}
              >
                <p className="text-foreground-secondary pl-12 sm:pl-20 pr-12">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
