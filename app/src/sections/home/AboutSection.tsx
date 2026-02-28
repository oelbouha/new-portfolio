import { motion } from 'framer-motion';

export function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full">
                {/* Label with line */}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-medium tracking-wider text-foreground-secondary uppercase">About</span>
                        <div className="flex-1 h-px bg-border"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-6">
                        Building Digital Products That Matter
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <p className="text-lg leading-relaxed text-foreground-secondary mb-6">
                        I'm Outman Elbouhali, a developer specializing in Full Stack Web and Mobile App Development.
                        With experience spanning React, Flutter, WordPress, and backend infrastructure, I help startups
                        and businesses transform ideas into polished, production-ready products.
                    </p>
                    <p className="text-lg leading-relaxed text-foreground-secondary">
                        Whether it's a responsive web application, a cross-platform mobile app, or a complex automation
                        workflow — I focus on clean architecture, performance, and user experience. Every project is built
                        with scalability and maintainability at its core.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
