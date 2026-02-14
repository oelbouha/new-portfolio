import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface FullscreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '#contact' },
];

const overlayVariants = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
        opacity: 0,
        transition: { delay: 0.4, duration: 0.3, ease: 'easeOut' as const },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4 + i * 0.1,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: -40,
        transition: {
            delay: i * 0.05,
            duration: 0.3,
            ease: 'easeOut' as const,
        },
    }),
};

const textRevealVariants = (enterDelay: number) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: enterDelay, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.25, ease: 'easeOut' as const },
    },
});

const closeBtnVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.25, ease: 'easeOut' as const },
    },
};

const topbarLeftVariants = textRevealVariants(0.4);
const topbarRightVariants = textRevealVariants(0.7);
const bottomBarVariants = textRevealVariants(0.8);

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
    // Prevent scrolling while keeping scrollbar visible
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            const prevHtmlOverflowY = document.documentElement.style.overflowY;
            const prevBodyPosition = document.body.style.position;
            const prevBodyTop = document.body.style.top;
            const prevBodyWidth = document.body.style.width;
            const prevScrollBehavior = document.documentElement.style.scrollBehavior;

            document.documentElement.style.overflowY = 'scroll';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.documentElement.style.scrollBehavior = 'auto';

            return () => {
                const y = Math.abs(parseInt(document.body.style.top || '0', 10)) || 0;
                document.documentElement.style.overflowY = prevHtmlOverflowY;
                document.body.style.position = prevBodyPosition;
                document.body.style.top = prevBodyTop;
                document.body.style.width = prevBodyWidth;
                document.documentElement.style.scrollBehavior = prevScrollBehavior;
                window.scrollTo(0, y);
            };
        }
    }, [isOpen]);

    // Handle ESC key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKey);
        }
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onClose();

        const targetId = href.replace('#', '');

        if (location.pathname !== '/') {
            // Navigate to home page first, then scroll after mount
            setTimeout(() => {
                navigate('/?section=' + targetId);
            }, 600);
        } else {
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 800);
        }
    }, [onClose, navigate, location.pathname]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fullscreen-menu"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    aria-hidden={!isOpen}
                >
                    {/* Top Bar */}
                    <div className="hero-topbar">
                        <motion.div
                            className="hero-topbar-left"
                            variants={topbarLeftVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <span className="hero-local-label">LOCAL/</span>
                            <span className="hero-time" style={{ fontWeight: 400 }}>35° 46' N</span>
                        </motion.div>

                        <motion.button
                            className="menu-close-btn"
                            onClick={onClose}
                            aria-label="Close menu"
                            variants={closeBtnVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover={{ rotate: 90, scale: 1.1 }}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="1" y1="1" x2="17" y2="17" />
                                <line x1="17" y1="1" x2="1" y2="17" />
                            </svg>
                        </motion.button>

                        <motion.div
                            className="hero-topbar-right"
                            variants={topbarRightVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <a href="mailto:contact@outman.dev" className="hero-cta-btn">
                                LET'S TALK <span className="hero-cta-arrow">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Menu Items */}
                    <nav className="fullscreen-menu-nav">
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                className="fullscreen-menu-item"
                                custom={index}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={(e) => handleMenuClick(e, item.href)}
                            >
                                {index === 0 && <span className="menu-item-number">(1)</span>}
                                {item.label}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Bottom Bar */}
                    <motion.div
                        className="fullscreen-menu-bottom"
                        variants={bottomBarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="fullscreen-menu-bottom-left">
                            ©2025 ALL RIGHTS RESERVED
                        </div>
                        <div className="fullscreen-menu-bottom-right">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                INSTAGRAM<span className="external-arrow">↗</span>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                LINKEDIN<span className="external-arrow">↗</span>
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                GITHUB<span className="external-arrow">↗</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
