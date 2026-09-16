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

    const speed = 0.3;
    const defaultOffset = 10;
    const hoverOffset = 22;

    // First move — show cursor
    const handleFirstMove = (e: MouseEvent) => {
      cursorEl.style.opacity = '1';
      mousePos.current = { x: e.clientX + defaultOffset, y: e.clientY + defaultOffset };
      cursorPos.current = { ...mousePos.current };
      document.removeEventListener('mousemove', handleFirstMove);
    };
    document.addEventListener('mousemove', handleFirstMove, { once: true });

    const handleMouseMove = (e: MouseEvent) => {
      const isHover = cursorEl.classList.contains('is-hover');
      const offset = isHover ? hoverOffset : defaultOffset;
      mousePos.current = { x: e.clientX + offset, y: e.clientY + offset };
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Dynamic Hover state via event delegation on document
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor-hover]');
      if (target) {
        const label = target.dataset.cursorHover || '';
        cursorEl.classList.add('is-hover');
        cursorEl.textContent = label;
      } else {
        cursorEl.classList.remove('is-hover');
        cursorEl.textContent = '';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    // RAF loop — lerp cursor to mouse
    function animate() {
      if (!cursorEl) return;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * speed;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * speed;
      const isHover = cursorEl.classList.contains('is-hover');
      const angle = isHover ? -7 : 0;
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
