import { useState } from 'react';
import { Logo } from '@/components/shared/Logo';
import { NavLink } from '@/components/shared/NavLink';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { CTAButton } from '@/components/shared/CTAButton';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'work' | 'about';
}

export function Navbar({ currentPage = 'home' }: NavbarProps) {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" isActive={currentPage === 'home'}>
              Home
            </NavLink>
            <NavLink href="/work" isActive={currentPage === 'work'}>
              Work
            </NavLink>
            <NavLink href="/about" isActive={currentPage === 'about'}>
              About
            </NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className={cn("hidden sm:block", mobileMenuOpen && "!hidden")}>
              <CTAButton variant="primary" size="sm" showArrow>
                Book a Call
              </CTAButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            <a
              href="/"
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                currentPage === 'home'
                  ? "bg-secondary text-foreground"
                  : "text-foreground-secondary hover:text-foreground hover:bg-secondary/50"
              )}
            >
              Home
            </a>
            <a
              href="/work"
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                currentPage === 'work'
                  ? "bg-secondary text-foreground"
                  : "text-foreground-secondary hover:text-foreground hover:bg-secondary/50"
              )}
            >
              Work
            </a>
            <a
              href="/about"
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                currentPage === 'about'
                  ? "bg-secondary text-foreground"
                  : "text-foreground-secondary hover:text-foreground hover:bg-secondary/50"
              )}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
