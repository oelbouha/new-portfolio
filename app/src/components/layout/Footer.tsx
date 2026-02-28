import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/oelbouha',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/outman-elbouhali-55bb56270/',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:outmanelbouhali5@gmail.com',
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <footer className="w-full px-8 md:px-10 py-8 md:py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md text-foreground hover:bg-accent hover:text-background transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-[18px] h-[18px]" />
            </a>
          ))}
        </div>

        {/* Email Link */}
        <a
          href="mailto:outmanelbouhali5@gmail.com"
          className="text-foreground-secondary hover:text-foreground transition-colors duration-300 hover:underline"
        >
          outmanelbouhali5@gmail.com
        </a>

        {/* Copyright */}
        <span className="text-foreground-tertiary">
          Outman Elbouhali {new Date().getFullYear()}© All rights reserved
        </span>
      </div>
    </footer>
  );
}
