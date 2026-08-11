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
    const offsetX = 8;
    const offsetY = 8;

    // First move — show cursor
    const handleFirstMove = (e: MouseEvent) => {
      cursorEl.style.opacity = '1';
      mousePos.current = { x: e.clientX + offsetX, y: e.clientY + offsetY };
      cursorPos.current = { ...mousePos.current };
      document.removeEventListener('mousemove', handleFirstMove);
    };
    document.addEventListener('mousemove', handleFirstMove, { once: true });

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX + offsetX, y: e.clientY + offsetY };
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Hover state: elements with data-cursor-hover
    const handleMouseEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const label = el.dataset.cursorHover || '';
      cursorEl.classList.add('is-hover');
      cursorEl.textContent = label;
    };
    const handleMouseLeave = () => {
      cursorEl.classList.remove('is-hover');
      cursorEl.textContent = '';
    };

    const hoverEls = document.querySelectorAll<HTMLElement>('[data-cursor-hover]');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

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
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
