import { useEffect, useRef } from 'react';

const PALETTE = ['#569CD6', '#4EC9B0', '#CE9178', '#DCDCAA', '#9CDCFE', '#B5CEA8', '#C586C0'];
const SYMBOLS = ['#', '//', '→', '{ }', '=>', '[ ]', '/*', '*/', '##', '///', '→→'];

function hex2rgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

interface Dot {
  x: number; y: number; ox: number; oy: number;
  vx: number; vy: number;
  size: number; alpha: number; color: string;
  pulseOffset: number;
}

interface Sym {
  x: number; y: number; vy: number;
  text: string; color: string; sz: number;
  opacity: number; rotate: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef(0);
  const dots = useRef<Dot[]>([]);
  const syms = useRef<Sym[]>([]);
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots.current = [];
      const sp = 72;
      const cols = Math.ceil(canvas.width / sp) + 1;
      const rows = Math.ceil(canvas.height / sp) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const ox = (i / (cols - 1)) * canvas.width;
          const oy = (j / (rows - 1)) * canvas.height;
          dots.current.push({
            x: ox + (Math.random() - 0.5) * 16,
            y: oy + (Math.random() - 0.5) * 16,
            ox, oy, vx: 0, vy: 0,
            size: Math.random() * 1.5 + 0.3,
            alpha: Math.random() * 0.2 + 0.04,
            color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
            pulseOffset: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const spawnSym = (y?: number) => {
      syms.current.push({
        x: Math.random() * canvas.width,
        y: y ?? canvas.height + 20,
        vy: -(Math.random() * 0.3 + 0.08),
        text: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        sz: Math.floor(Math.random() * 8 + 9),
        opacity: Math.random() * 0.09 + 0.025,
        rotate: (Math.random() - 0.5) * 0.3,
      });
    };

    // Pre-seed symbols at random heights
    for (let i = 0; i < 28; i++) spawnSym(Math.random() * canvas.height);

    init();

    const onResize = () => init();
    const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    let frame = 0;

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time.current += 0.008;
      frame++;

      if (frame % 80 === 0 && syms.current.length < 40) spawnSym();

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const ds = dots.current;

      // ── Dots ──
      for (const d of ds) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        const R = 180;

        if (dist < R && dist > 0) {
          const f = (1 - dist / R) * 4.2;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }

        d.vx += (d.ox - d.x) * 0.046;
        d.vy += (d.oy - d.y) * 0.046;
        d.vx *= 0.77;
        d.vy *= 0.77;
        d.x += d.vx;
        d.y += d.vy;

        // Subtle breathing pulse
        const pulse = Math.sin(time.current * 1.2 + d.pulseOffset) * 0.04 + 1;
        const near = dist < 240 ? (1 - dist / 240) : 0;
        const alpha = Math.min(1, d.alpha * pulse + near * 0.8);
        const sz = d.size * (1 + near * 0.6);

        // Main dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = hex2rgba(d.color, alpha);
        ctx.fill();

        // Glow halo for mouse-nearby dots
        if (near > 0.35) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, sz * 5, 0, Math.PI * 2);
          ctx.fillStyle = hex2rgba(d.color, near * 0.12);
          ctx.fill();
        }
      }

      // ── Connecting lines ──
      for (let i = 0; i < ds.length; i++) {
        for (let j = i + 1; j < ds.length; j++) {
          const adx = Math.abs(ds[i].x - ds[j].x);
          if (adx > 100) continue;
          const ady = Math.abs(ds[i].y - ds[j].y);
          if (ady > 100) continue;
          const dist = Math.hypot(adx, ady);
          if (dist < 100) {
            const a = (1 - dist / 100) * 0.1;
            ctx.beginPath();
            ctx.moveTo(ds[i].x, ds[i].y);
            ctx.lineTo(ds[j].x, ds[j].y);
            ctx.strokeStyle = `rgba(86,156,214,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // ── Mouse attraction beam ──
      if (mx > 0 && mx < canvas.width && my > 0 && my < canvas.height) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        grad.addColorStop(0, 'rgba(86,156,214,0.05)');
        grad.addColorStop(0.4, 'rgba(78,201,176,0.03)');
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mx, my, 220, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // ── Floating code symbols ──
      ctx.save();
      syms.current = syms.current.filter(s => s.y > -60);
      for (const s of syms.current) {
        s.y += s.vy;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotate);
        ctx.font = `${s.sz}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = hex2rgba(s.color, s.opacity);
        ctx.fillText(s.text, 0, 0);
        ctx.restore();
      }
      ctx.restore();

      // ── Scan line (subtle) ──
      const scanY = ((time.current * 28) % canvas.height);
      const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
      scanGrad.addColorStop(0, 'transparent');
      scanGrad.addColorStop(0.5, 'rgba(86,156,214,0.025)');
      scanGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 60, canvas.width, 120);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
