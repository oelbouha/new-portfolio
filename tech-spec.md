# Disco Frog Studio - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |
| State Management | React Context (Theme) |

## 2. Tailwind Configuration

### Extended Colors
```javascript
colors: {
  background: {
    DEFAULT: 'var(--background)',
    secondary: 'var(--background-secondary)',
  },
  foreground: {
    DEFAULT: 'var(--foreground)',
    secondary: 'var(--foreground-secondary)',
    tertiary: 'var(--foreground-tertiary)',
  },
  accent: {
    DEFAULT: 'var(--accent)',
    secondary: 'var(--accent-secondary)',
  },
  border: 'var(--border)',
  card: 'var(--card)',
  cta: '#fbbf24',
}
```

### Extended Font Sizes
```javascript
fontSize: {
  'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display': ['3rem', { lineHeight: '1.2' }],
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customized for pill shape)
- Card
- Sheet (for mobile menu)
- Separator

### Custom Components

#### Layout Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | `scrolled: boolean` | Fixed navigation with theme toggle |
| `Footer` | - | CTA section + contact info |
| `PageWrapper` | `children` | Page layout wrapper with animations |

#### UI Components
| Component | Props | Description |
|-----------|-------|-------------|
| `ThemeToggle` | - | Dark/light mode toggle button |
| `Logo` | `className` | Disco Frog logo with icon |
| `NavLink` | `to, children, active` | Navigation link with active state |
| `CTAButton` | `children, variant, onClick` | Call-to-action button |
| `SectionLabel` | `children` | Uppercase section label |

#### Section Components
| Component | Page | Description |
|-----------|------|-------------|
| `HeroSection` | Home | Main hero with headline |
| `ClientLogos` | Home | Scrolling logo marquee |
| `LaptopShowcase` | Home | Laptop mockup with portfolio |
| `PortfolioCarousel` | Home | Horizontal project carousel |
| `ServicesGrid` | Home | 6 service cards grid |
| `WorkHero` | Work | Work page hero section |
| `PortfolioGrid` | Work | Filterable project grid |
| `AboutHero` | About | About page hero with 3D card |
| `CTABox` | About | Call-to-action section |
| `VisionMission` | About | 4-card grid |
| `ServicesList` | About | Numbered services accordion |
| `Testimonials` | About | Testimonial carousel |

#### Animation Components
| Component | Props | Description |
|-----------|-------|-------------|
| `FadeIn` | `delay, duration, children` | Fade in animation wrapper |
| `SlideUp` | `delay, children` | Slide up reveal animation |
| `StaggerContainer` | `staggerDelay, children` | Stagger children animations |
| `Parallax` | `speed, children` | Parallax scroll effect |
| `Marquee` | `speed, children` | Infinite scroll marquee |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load | Framer Motion | `AnimatePresence` + staggered children |
| Navbar Scroll | React State + CSS | `useScroll` hook, toggle `scrolled` class |
| Theme Toggle | CSS Variables | Data attribute on root, CSS custom properties |
| Hero Text Reveal | Framer Motion | `staggerChildren: 0.1`, `y: 30 -> 0`, `opacity: 0 -> 1` |
| Logo Marquee | CSS Animation | `@keyframes marquee`, infinite linear |
| Card Hover | Tailwind | `hover:scale-105 hover:-translate-y-1 transition-all duration-300` |
| Button Hover | Tailwind | `hover:scale-102 active:scale-98 transition-transform` |
| Portfolio Carousel | Framer Motion | `drag="x"`, dragConstraints, snap points |
| Scroll Reveal | Framer Motion | `whileInView`, `viewport: { once: true }` |
| Parallax | Framer Motion | `useScroll` + `useTransform` |
| Service Accordion | Framer Motion | `AnimatePresence`, height animation |
| Testimonial Carousel | Framer Motion | `AnimatePresence`, slide transitions |

### Animation Timing Reference
```javascript
const transitions = {
  default: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  smooth: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  bounce: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  stagger: { staggerChildren: 0.1 },
}
```

## 5. Project File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx
│   ├── shared/
│   │   ├── Logo.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── CTAButton.tsx
│   │   ├── NavLink.tsx
│   │   └── SectionLabel.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       ├── StaggerContainer.tsx
│       └── Marquee.tsx
├── sections/
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── LaptopShowcase.tsx
│   │   ├── PortfolioCarousel.tsx
│   │   └── ServicesGrid.tsx
│   ├── work/
│   │   ├── WorkHero.tsx
│   │   └── PortfolioGrid.tsx
│   └── about/
│       ├── AboutHero.tsx
│       ├── CTABox.tsx
│       ├── VisionMission.tsx
│       ├── ServicesList.tsx
│       └── Testimonials.tsx
├── hooks/
│   ├── useTheme.ts
│   ├── useScrollPosition.ts
│   └── useMediaQuery.ts
├── context/
│   └── ThemeContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── Work.tsx
│   └── About.tsx
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 6. Package Installation

```bash
# Animation library
npm install framer-motion

# Routing
npm install react-router-dom

# Icons (already included with shadcn)
# lucide-react is pre-installed

# Additional utilities
npm install clsx tailwind-merge
```

## 7. Route Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Landing page |
| `/work` | `Work` | Portfolio page |
| `/about` | `About` | About page |

## 8. Theme Implementation

### CSS Variables (index.css)
```css
:root {
  --background: #0d0f0e;
  --background-secondary: #141716;
  --foreground: #ffffff;
  --foreground-secondary: #a1a1a1;
  --foreground-tertiary: #6b6b6b;
  --accent: #4ade80;
  --accent-secondary: #22c55e;
  --border: rgba(255, 255, 255, 0.1);
  --card: rgba(255, 255, 255, 0.05);
}

[data-theme="light"] {
  --background: #f5f5f0;
  --background-secondary: #e8e8e3;
  --foreground: #1a1a1a;
  --foreground-secondary: #4a4a4a;
  --foreground-tertiary: #8a8a8a;
  --accent: #22c55e;
  --accent-secondary: #16a34a;
  --border: rgba(0, 0, 0, 0.1);
  --card: rgba(255, 255, 255, 0.8);
}
```

## 9. Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | < 640px | 1 |
| Tablet | 640-1024px | 2 |
| Desktop | 1024-1280px | 3 |
| Large | > 1280px | 4 |

## 10. Performance Considerations

1. **Images**: Use WebP format, lazy loading
2. **Animations**: Use `transform` and `opacity` only
3. **Fonts**: Preload Inter font
4. **Code Splitting**: Route-based splitting
5. **Will-change**: Add to frequently animated elements
