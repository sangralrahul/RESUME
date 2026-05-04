import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef  = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct  = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      if (barRef.current)  barRef.current.style.width  = `${pct}%`;
      if (glowRef.current) glowRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '2px', background: 'transparent', zIndex: 200, pointerEvents: 'none' }}>
      <div ref={barRef} style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg, #569CD6, #4EC9B0, #DCDCAA)', transition: 'width 0.08s linear' }} />
      <div ref={glowRef} style={{ position: 'absolute', top: 0, left: 0, height: '4px', width: '0%', background: 'linear-gradient(90deg, #569CD6, #4EC9B0)', filter: 'blur(4px)', opacity: 0.7, transition: 'width 0.08s linear' }} />
    </div>
  );
}
