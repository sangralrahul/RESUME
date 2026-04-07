import { useEffect, useRef, useState } from 'react';

const TRAIL_LENGTH = 10;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pos = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const trail = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -200, y: -200 }))
  );

  const isHovering = useRef(false);
  const isScrolling = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onScroll = () => {
      isScrolling.current = true;
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        isScrolling.current = false;
      }, 300);
    };

    const setHover = (on: boolean) => () => { isHovering.current = on; };

    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', setHover(true));
        el.addEventListener('mouseleave', setHover(false));
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    attachHover();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      const { x, y } = pos.current;

      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }

      // Ring lags behind
      ring.current.x += (x - ring.current.x) * 0.14;
      ring.current.y += (y - ring.current.y) * 0.14;

      const hovering = isHovering.current;
      const scrolling = isScrolling.current;

      if (ringRef.current) {
        const size = hovering ? 0 : scrolling ? 44 : 32;
        const half = size / 2;
        ringRef.current.style.transform = `translate(${ring.current.x - half}px, ${ring.current.y - half}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.borderColor = scrolling
          ? 'rgba(96,165,250,0.6)'
          : 'rgba(255,255,255,0.25)';
        ringRef.current.style.opacity = hovering ? '0' : '1';
      }

      // Hand icon follows ring position when hovering
      if (handRef.current) {
        handRef.current.style.transform = `translate(${x - 10}px, ${y - 4}px)`;
        handRef.current.style.opacity = hovering ? '1' : '0';
      }

      // Dot hides when hovering
      if (dotRef.current) {
        dotRef.current.style.opacity = hovering ? '0' : '1';
      }

      // Update trail
      trail.current = [{ x, y }, ...trail.current.slice(0, TRAIL_LENGTH - 1)];
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = trail.current[i];
        const progress = 1 - i / TRAIL_LENGTH;
        const size = progress * 4;
        el.style.transform = `translate(${t.x - size / 2}px, ${t.y - size / 2}px)`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.opacity = hovering ? '0' : `${progress * 0.25}`;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}>
      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            borderRadius: '50%',
            background: '#fff',
            pointerEvents: 'none',
            zIndex: 9995,
            transition: 'opacity 0.1s ease',
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '32px', height: '32px',
          border: '1.5px solid rgba(255,255,255,0.25)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9997,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.15s ease',
        }}
      />

      {/* Center dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '6px', height: '6px',
          background: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'opacity 0.15s ease',
        }}
      />

      {/* Hand pointer */}
      <div
        ref={handRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          fontSize: '20px',
          lineHeight: 1,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 0.15s ease',
          userSelect: 'none',
        }}
      >
        👆
      </div>
    </div>
  );
}
