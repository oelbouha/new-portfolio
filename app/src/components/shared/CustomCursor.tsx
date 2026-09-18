import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth <= 1024) return;

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const speed = 0.12;
    const defaultOffsetX = -7;
    const defaultOffsetY = -16;
    const hoverOffsetX = 16;
    const hoverOffsetY = 16;

    // First move — show cursor
    const handleFirstMove = (e: MouseEvent) => {
      cursorEl.style.opacity = '1';
      mousePos.current = { x: e.clientX + defaultOffsetX, y: e.clientY + defaultOffsetY };
      cursorPos.current = { ...mousePos.current };
      document.removeEventListener('mousemove', handleFirstMove);
    };
    document.addEventListener('mousemove', handleFirstMove, { once: true });

    const handleMouseMove = (e: MouseEvent) => {
      const isHover = cursorEl.classList.contains('is-hover');
      const offsetX = isHover ? hoverOffsetX : defaultOffsetX;
      const offsetY = isHover ? hoverOffsetY : defaultOffsetY;
      mousePos.current = { x: e.clientX + offsetX, y: e.clientY + offsetY };

      // Check if mouse is over fullscreen menu or elements configured to hide cursor
      const targetEl = e.target as HTMLElement | null;
      const isInMenu = targetEl?.closest('.nav-menu, [data-no-cursor]');
      const isMenuOpen = document.querySelector('.nav-menu.is-open');

      if (isInMenu || isMenuOpen) {
        cursorEl.classList.add('is-hidden');
      } else {
        cursorEl.classList.remove('is-hidden');
      }
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Dynamic Hover state via event delegation on document
    const handleMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement | null;
      if (!targetEl) return;

      const isInMenu = targetEl.closest('.nav-menu, [data-no-cursor]');
      const isMenuOpen = document.querySelector('.nav-menu.is-open');
      if (isInMenu || isMenuOpen) {
        cursorEl.classList.add('is-hidden');
        cursorEl.classList.remove('is-hover');
        cursorEl.innerHTML = '';
        return;
      }

      const target = targetEl.closest<HTMLElement>('[data-cursor-hover]');
      if (target) {
        const label = target.dataset.cursorHover || '';
        const icon = target.dataset.cursorIcon || '';
        cursorEl.classList.add('is-hover');

        // Render label + icon
        if (icon) {
          cursorEl.innerHTML = `<span>${label}</span><span class="cursor-icon">${icon}</span>`;
        } else {
          cursorEl.innerHTML = `<span>${label}</span>`;
        }
      } else {
        cursorEl.classList.remove('is-hover');
        cursorEl.innerHTML = '';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    // RAF loop — lerp cursor to mouse
    function animate() {
      if (!cursorEl) return;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * speed;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * speed;
      const isHover = cursorEl.classList.contains('is-hover');
      const angle = isHover ? -5 : 0;
      cursorEl.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) rotate(${angle}deg)`;
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
