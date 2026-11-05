/**
 * Central data export module.
 * Single entry point for all site data, page content, SEO blocks, and registries.
 */

export * from './types';
export * from './site';
export * from './keywords';
export * from './layout';
export * from './ui';
export * from './pages/home';
export * from './pages/about';
export * from './projects/projects.data';
export * from './pages/contact';
export * from './pages/not-found';
export * from './services';

// Aliases for legacy component compatibility during refactoring
export { home as homeData } from './pages/home';
export { about as aboutData } from './pages/about';
export { layoutConfig as layoutData } from './layout';
export { projectsPage as workPageData } from './projects/projects.data';
