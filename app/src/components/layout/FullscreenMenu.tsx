import { useEffect, useRef, useState } from 'react';

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

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Prevent scrolling using overflow hidden to avoid visual jump
    useEffect(() => {
        if (isOpen) {
            // Prevent scrolling by hiding overflow
            const scrollY = window.scrollY;
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            // Keep the scroll position visually
            document.documentElement.style.scrollBehavior = 'auto';

            return () => {
                // Restore scrolling
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
                document.documentElement.style.scrollBehavior = '';
            };
        }
    }, [isOpen]);

    // Handle opening/closing with animation delay
    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            setIsClosing(false);
        } else if (isAnimating) {
            // Start closing animation
            setIsClosing(true);
            // Wait for exit animations to complete before hiding
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setIsClosing(false);
            }, 500); // Faster exit to match bdsn.club
            return () => clearTimeout(timer);
        }
    }, [isOpen, isAnimating]);

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

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onClose();

        // Smooth scroll to section
        setTimeout(() => {
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 700); // Wait for menu close animation
    };

    // Determine class names
    const menuClasses = [
        'fullscreen-menu',
        isOpen && isAnimating && !isClosing ? 'fullscreen-menu--open' : '',
        isClosing ? 'fullscreen-menu--closing' : ''
    ].filter(Boolean).join(' ');

    return (
        <div
            ref={overlayRef}
            className={menuClasses}
            aria-hidden={!isOpen}
            style={{ display: isAnimating || isOpen ? 'flex' : 'none' }}
        >
            {/* Top Bar */}
            <div className="hero-topbar">
                <div className="hero-topbar-left">
                    <span className="hero-local-label">LOCAL/</span>
                    <span className="hero-time" style={{ fontWeight: 400 }}>35° 46' N</span>
                </div>

                <button
                    className="menu-close-btn"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="1" y1="1" x2="17" y2="17" />
                        <line x1="17" y1="1" x2="1" y2="17" />
                    </svg>
                </button>

                <div className="hero-topbar-right">
                    <a href="mailto:contact@outman.dev" className="hero-cta-btn">
                        LET'S TALK <span className="hero-cta-arrow">→</span>
                    </a>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="fullscreen-menu-nav">
                {menuItems.map((item, index) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="fullscreen-menu-item"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                        onClick={(e) => handleMenuClick(e, item.href)}
                    >
                        {index === 0 && <span className="menu-item-number">(1)</span>}
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Bottom Bar */}
            <div className="fullscreen-menu-bottom">
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
            </div>
        </div>
    );
}
