import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Columns2, Columns3, Columns4 } from 'lucide-react';

const projects = [
  { id: 1, name: 'Marlupi Dance Academy', image: '/images/portfolio/marlupi-dance.jpg', category: 'Web Design' },
  { id: 2, name: 'Zizi Calligraphy', image: '/images/portfolio/zizi-calligraphy.jpg', category: 'Web Design' },
  { id: 3, name: 'Formindo', image: '/images/portfolio/formindo.jpg', category: 'Branding' },
  { id: 4, name: 'Assa Paper', image: '/images/portfolio/assa-paper.jpg', category: 'Web Design' },
  { id: 5, name: 'Karya Alam Medika', image: '/images/portfolio/karya-alam-medika.jpg', category: 'Web Design' },
  { id: 6, name: 'JBS Villa', image: '/images/portfolio/jbs-villa.jpg', category: 'Web Design' },
  { id: 7, name: 'Bhineka Tatamulya', image: '/images/portfolio/bhineka-tatamulya.jpg', category: 'Branding' },
  { id: 8, name: 'Lavely Music', image: '/images/portfolio/lavely-music.jpg', category: 'App Design' },
  { id: 9, name: 'Fawkner Property', image: '/images/portfolio/fawkner-property.jpg', category: 'Web Design' },
  { id: 10, name: '9 Walnut St', image: '/images/portfolio/9-walnut-st.jpg', category: 'Web Design' },
  { id: 11, name: 'Hendy Liyanto', image: '/images/portfolio/hendy-liyanto.jpg', category: 'Web Design' },
  { id: 12, name: 'Ragam Collective', image: '/images/portfolio/ragam-collective.jpg', category: 'Branding' },
  { id: 13, name: 'Lestari Osean', image: '/images/portfolio/lestari-osean.jpg', category: 'Web Design' },
  { id: 14, name: 'Spectra Consultant', image: '/images/portfolio/spectra-consultant.jpg', category: 'Web Design' },
  { id: 15, name: 'Sumber Anugerah', image: '/images/portfolio/sumber-anugerah.jpg', category: 'Branding' },
];

type GridLayout = 2 | 3 | 4;

export function PortfolioGrid() {
  const [layout, setLayout] = useState<GridLayout>(3);

  const layoutIcons = [
    { value: 2 as GridLayout, icon: Columns2 },
    { value: 3 as GridLayout, icon: Columns3 },
    { value: 4 as GridLayout, icon: Columns4 },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Layout Toggle */}
        <div className="flex justify-end gap-2 mb-8">
          {layoutIcons.map(({ value, icon: Icon }) => (
            <button
              key={value}
              onClick={() => setLayout(value)}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                layout === value
                  ? "bg-secondary text-foreground"
                  : "text-foreground-tertiary hover:text-foreground hover:bg-secondary/50"
              )}
              aria-label={`${value} column layout`}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={cn(
            "grid gap-4 transition-all duration-500",
            layout === 2 && "grid-cols-1 sm:grid-cols-2",
            layout === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            layout === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={`/work/${project.id}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-xs text-white/60 mb-1">{project.category}</p>
                <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#4ade80] transition-colors">
                  {project.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
