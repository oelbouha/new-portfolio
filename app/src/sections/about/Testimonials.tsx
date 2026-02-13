import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "The new website feels clearer and more professional.",
    author: "Janice",
    role: "Founder"
  },
  {
    id: 2,
    quote: "The team understood my vision perfectly and transformed it into a clean, well-structured personal website.",
    author: "Hendy Liyanto",
    role: "Founder"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-12">
          Our Testimonials.
        </h2>

        {/* Testimonial Card */}
        <div className="relative">
          <Quote className="w-10 h-10 text-[#4ade80]/30 mb-6" />
          
          <div className="min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500",
                  index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-8"
                )}
              >
                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">{testimonial.author}</span>
                  <span className="text-foreground-tertiary">-</span>
                  <span className="text-foreground-secondary">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={prev}
              className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous slide
            </button>
            <button
              onClick={next}
              className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              Next slide
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
