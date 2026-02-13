import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export function NavLink({ href, children, isActive, className }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
        isActive 
          ? "bg-secondary text-foreground" 
          : "text-foreground-secondary hover:text-foreground hover:bg-secondary/50",
        className
      )}
    >
      {children}
    </a>
  );
}
