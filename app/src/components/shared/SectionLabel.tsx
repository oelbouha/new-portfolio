import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={cn(
      "text-xs font-medium tracking-[0.15em] uppercase text-foreground-secondary",
      className
    )}>
      {children}
    </span>
  );
}
