import { CTAButton } from '@/components/shared/CTAButton';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      {/* CTA Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl sm:text-2xl text-foreground-secondary mb-8">
            Ready to bring your ideas to life?
          </p>
          <p className="text-3xl sm:text-4xl font-medium text-accent mb-10">
            Get In Touch
          </p>
          <CTAButton variant="primary" size="lg" showArrow>
            Contact Me
          </CTAButton>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/oelbouha"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 text-foreground hover:bg-accent hover:text-background transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/outman-elbouhali-55bb56270/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 text-foreground hover:bg-accent hover:text-background transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:outmanelbouhali5@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 text-foreground hover:bg-accent hover:text-background transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-lg font-medium text-foreground mb-2">Tétouan, Morocco</h3>
          <p className="text-foreground-secondary text-sm mb-1">outmanelbouhali5@gmail.com</p>
          <p className="text-foreground-secondary text-sm">Full Stack Developer</p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8  border-border/50">
          <p className="text-sm text-foreground-tertiary">
            © {new Date().getFullYear()} Outman Elbouhali. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
