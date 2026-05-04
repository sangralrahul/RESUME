import { useEffect, useRef, useState } from 'react';

const TRAIL = 8;

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pos   = useRef({ x: -300, y: -300 });
  const ring  = useRef({ x: -300, y: -300 });
  const trail = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL }, () => ({ x: -300, y: -300 }))
  );
  const hovering  = useRef(false);
  const frameRef  = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const setHov = (v: boolean) => () => { hovering.current = v; };
    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', setHov(true));
        el.addEventListener('mouseleave', setHov(false));
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    attachHover();
    const obs = new MutationObserver(attachHover);
    obs.observe(document.body, { childList: true, subtree: true });

    const tick = () => {
      frameRef.current = requestAnimationFrame(tick);
      const { x, y } = pos.current;
      const h = hovering.current;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px,${y - 3}px)`;
        dotRef.current.style.opacity = h ? '0' : '1';
        dotRef.current.style.background = '#569CD6';
      }

      ring.current.x += (x - ring.current.x) * 0.13;
      ring.current.y += (y - ring.current.y) * 0.13;
      if (ringRef.current) {
        const sz = h ? 44 : 30;
        const half = sz / 2;
        ringRef.current.style.transform = `translate(${ring.current.x - half}px,${ring.current.y - half}px)`;
        ringRef.current.style.width  = `${sz}px`;
        ringRef.current.style.height = `${sz}px`;
        ringRef.current.style.borderColor = h ? 'rgba(78,201,176,0.7)' : 'rgba(86,156,214,0.6)';
        ringRef.current.style.opacity = '1';
      }

      trail.current = [{ x, y }, ...trail.current.slice(0, TRAIL - 1)];
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = trail.current[i];
        const p = 1 - i / TRAIL;
        const sz = p * 3.5;
        el.style.transform = `translate(${t.x - sz / 2}px,${t.y - sz / 2}px)`;
        el.style.width  = `${sz}px`;
        el.style.height = `${sz}px`;
        el.style.opacity = h ? '0' : `${p * 0.4}`;
        el.style.background = '#569CD6';
      });
    };
    tick();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', onMove);
      obs.disconnect();
    };
  }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s' }}>
      {Array.from({ length: TRAIL }).map((_, i) => (
        <div key={i} ref={el => { trailRefs.current[i] = el; }}
          style={{ position: 'fixed', top: 0, left: 0, borderRadius: '50%', pointerEvents: 'none', zIndex: 9995, transition: 'opacity 0.08s' }} />
      ))}
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, width: '30px', height: '30px',
        border: '1.5px solid rgba(86,156,214,0.6)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9997,
        transition: 'width 0.18s ease, height 0.18s ease, border-color 0.18s ease',
        boxShadow: '0 0 8px rgba(86,156,214,0.25)',
      }} />
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, width: '6px', height: '6px',
        background: '#569CD6', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999,
        boxShadow: '0 0 6px rgba(86,156,214,0.8)',
        transition: 'opacity 0.12s',
      }} />
    </div>
  );
}
