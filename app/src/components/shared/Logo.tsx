import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Frog Icon */}
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 28 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        <ellipse cx="14" cy="20" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="10" cy="12" r="1" fill="currentColor"/>
        <circle cx="18" cy="12" r="1" fill="currentColor"/>
        <path d="M12 16C12 16 13 17 14 17C15 17 16 16 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 10C6 10 5 7 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 10C22 10 23 7 21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      
      {/* Text */}
      <span className="text-lg font-medium tracking-[0.15em] text-foreground">
        DISCO FROG
      </span>
    </div>
  );
}
