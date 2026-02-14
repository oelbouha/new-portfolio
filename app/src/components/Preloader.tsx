import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
    const [count, setCount] = useState(0);
    const [phase, setPhase] = useState<'counting' | 'done' | 'exit'>('counting');

    // Count from 0 to 100
    useEffect(() => {
        if (phase !== 'counting') return;

        const duration = 3500; // 3.5 seconds total
        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-in-out curve for smooth counting
            const eased = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            const value = Math.round(eased * 100);
            setCount(value);

            if (value >= 100) {
                clearInterval(timer);
                setPhase('done');
                setTimeout(() => setPhase('exit'), 400);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [phase]);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {phase !== 'exit' && (
                <motion.div
                    className="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Top left - Name */}
                    <motion.div
                        className="preloader-top"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="preloader-name">OUTMAN EL BOUHALI</span>
                        <span className="preloader-title">FULL STACK DEVELOPER</span>
                    </motion.div>

                    {/* Center - Counter */}
                    <div className="preloader-center">
                        <motion.span
                            className="preloader-counter"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {count}
                        </motion.span>
                    </div>

                    {/* Bottom - Loading bar */}
                    <div className="preloader-bottom">
                        <div className="preloader-bar-track">
                            <motion.div
                                className="preloader-bar-fill"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: count / 100 }}
                                transition={{ duration: 0.1, ease: 'linear' }}
                            />
                        </div>
                        <motion.span
                            className="preloader-label"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            LOADING
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
