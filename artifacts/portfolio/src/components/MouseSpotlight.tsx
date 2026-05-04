import { useEffect, useRef } from 'react';

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -9999, y: -9999 });
  const cur = useRef({ x: -9999, y: -9999 });
  const raf = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      cur.current.x = lerp(cur.current.x, pos.current.x, 0.1);
      cur.current.y = lerp(cur.current.y, pos.current.y, 0.1);
      if (!ref.current) return;
      const x = cur.current.x;
      const y = cur.current.y;
      ref.current.style.background = `
        radial-gradient(700px circle at ${x}px ${y}px,
          rgba(86,156,214,0.07) 0%,
          rgba(78,201,176,0.04) 30%,
          transparent 65%)
      `;
    };
    tick();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  );
}
