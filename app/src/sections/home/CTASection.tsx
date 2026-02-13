import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function CTASection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto"
            >
                <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
                    {/* Content */}
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-lg sm:text-xl text-foreground-secondary mb-8">
                            Have a project in mind? I'd love to hear about it and help bring your ideas to life.
                        </p>

                        <a
                            href="mailto:outmanelbouhali@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-secondary transition-all duration-300 hover:scale-105 group"
                        >
                            Get In Touch
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>

                    {/* Pixel Art Graphic */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 lg:opacity-40 pointer-events-none">
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-accent"
                        >
                            {/* Simple pixel art frog-like pattern */}
                            <rect x="60" y="40" width="20" height="20" fill="currentColor" />
                            <rect x="120" y="40" width="20" height="20" fill="currentColor" />
                            <rect x="40" y="60" width="20" height="20" fill="currentColor" />
                            <rect x="60" y="60" width="20" height="20" fill="currentColor" />
                            <rect x="80" y="60" width="20" height="20" fill="currentColor" />
                            <rect x="100" y="60" width="20" height="20" fill="currentColor" />
                            <rect x="120" y="60" width="20" height="20" fill="currentColor" />
                            <rect x="140" y="60" width="20" height="20" fill="currentColor" />
                            <rect x="40" y="80" width="20" height="20" fill="currentColor" />
                            <rect x="60" y="80" width="20" height="20" fill="currentColor" />
                            <rect x="80" y="80" width="20" height="20" fill="currentColor" />
                            <rect x="100" y="80" width="20" height="20" fill="currentColor" />
                            <rect x="120" y="80" width="20" height="20" fill="currentColor" />
                            <rect x="140" y="80" width="20" height="20" fill="currentColor" />
                            <rect x="60" y="100" width="20" height="20" fill="currentColor" />
                            <rect x="80" y="100" width="20" height="20" fill="currentColor" />
                            <rect x="100" y="100" width="20" height="20" fill="currentColor" />
                            <rect x="120" y="100" width="20" height="20" fill="currentColor" />
                            <rect x="80" y="120" width="20" height="20" fill="currentColor" />
                            <rect x="100" y="120" width="20" height="20" fill="currentColor" />
                            <rect x="40" y="140" width="20" height="20" fill="currentColor" />
                            <rect x="60" y="140" width="20" height="20" fill="currentColor" />
                            <rect x="120" y="140" width="20" height="20" fill="currentColor" />
                            <rect x="140" y="140" width="20" height="20" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
