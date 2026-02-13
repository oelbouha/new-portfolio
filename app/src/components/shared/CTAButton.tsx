import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  showArrow = false,
  className,
  onClick,
  href
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-[#fbbf24] text-black hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-secondary/50 text-foreground border border-border hover:bg-secondary/70 hover:scale-[1.02] active:scale-[0.98]",
    ghost: "bg-transparent text-foreground hover:text-[#4ade80] transition-colors"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      {showArrow && <ArrowUpRight className="w-4 h-4" />}
    </Component>
  );
}
