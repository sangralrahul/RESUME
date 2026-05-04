import { useEffect, useRef } from 'react';

const PALETTE = ['#569CD6', '#4EC9B0', '#CE9178', '#DCDCAA', '#9CDCFE', '#B5CEA8', '#C586C0'];
const SYMBOLS = ['#', '//', '→', '{ }', '=>', '[ ]', '/*', '*/', '##', '→→', '<>', '( )', '::'];

function hex2rgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

interface Dot { x: number; y: number; ox: number; oy: number; vx: number; vy: number; size: number; baseAlpha: number; color: string; phase: number; }
interface Sym  { x: number; y: number; vy: number; text: string; color: string; sz: number; opacity: number; }
interface Streak { x: number; y: number; vx: number; len: number; color: string; alpha: number; life: number; max: number; }
interface Ring   { x: number; y: number; r: number; maxR: number; speed: number; color: string; alpha: number; }
interface Spark  { x: number; y: number; vx: number; vy: number; color: string; life: number; max: number; }

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf   = useRef(0);
  const t     = useRef(0);

  const dots    = useRef<Dot[]>([]);
  const syms    = useRef<Sym[]>([]);
  const streaks = useRef<Streak[]>([]);
  const rings   = useRef<Ring[]>([]);
  const sparks  = useRef<Spark[]>([]);

  useEffect(() => {
    const cv  = canvasRef.current!;
    const ctx = cv.getContext('2d')!;

    /* ── init dot grid ── */
    const initDots = () => {
      cv.width  = window.innerWidth;
      cv.height = window.innerHeight;
      dots.current = [];
      const sp = 68;
      const cols = Math.ceil(cv.width / sp) + 1;
      const rows = Math.ceil(cv.height / sp) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const ox = (i / (cols - 1)) * cv.width;
          const oy = (j / (rows - 1)) * cv.height;
          dots.current.push({
            x: ox, y: oy, ox, oy, vx: 0, vy: 0,
            size: Math.random() * 1.6 + 0.4,
            baseAlpha: Math.random() * 0.28 + 0.08,
            color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    /* ── spawn helpers ── */
    const spawnSym = (startY?: number) => {
      syms.current.push({
        x: Math.random() * cv.width,
        y: startY ?? cv.height + 10,
        vy: -(Math.random() * 0.45 + 0.12),
        text: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        sz: Math.floor(Math.random() * 8 + 10),
        opacity: Math.random() * 0.16 + 0.06,
      });
    };

    const spawnStreak = () => {
      const dir = Math.random() > 0.5 ? 1 : -1;
      streaks.current.push({
        x: dir > 0 ? -80 : cv.width + 80,
        y: Math.random() * cv.height,
        vx: dir * (Math.random() * 3.5 + 2),
        len: Math.random() * 180 + 80,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        alpha: Math.random() * 0.4 + 0.2,
        life: 0,
        max: Math.floor((cv.width + 160) / (Math.random() * 3.5 + 2)),
      });
    };

    const spawnRing = () => {
      rings.current.push({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        r: 0,
        maxR: Math.random() * 160 + 80,
        speed: Math.random() * 1.2 + 0.6,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        alpha: Math.random() * 0.35 + 0.15,
      });
    };

    const spawnSpark = (x: number, y: number) => {
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6 + Math.random() * 0.5;
        const speed = Math.random() * 1.5 + 0.5;
        sparks.current.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          life: 0, max: 40 + Math.floor(Math.random() * 20),
        });
      }
    };

    /* ── seed initial symbols ── */
    for (let i = 0; i < 36; i++) spawnSym(Math.random() * cv.height);
    /* ── seed some streaks & rings at start ── */
    for (let i = 0; i < 3; i++) spawnStreak();
    for (let i = 0; i < 2; i++) spawnRing();

    initDots();
    window.addEventListener('resize', initDots);
    window.addEventListener('mousemove', (e) => { mouse.current = { x: e.clientX, y: e.clientY }; }, { passive: true });
    window.addEventListener('mouseleave', () => { mouse.current = { x: -9999, y: -9999 }; });

    let frame = 0;

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, cv.width, cv.height);
      t.current += 0.009;
      frame++;

      /* ── spawn events ── */
      if (frame % 55 === 0  && syms.current.length < 50)    spawnSym();
      if (frame % 120 === 0 && streaks.current.length < 8)  spawnStreak();
      if (frame % 180 === 0 && rings.current.length < 6)    spawnRing();
      if (frame % 300 === 0) spawnSpark(Math.random() * cv.width, Math.random() * cv.height);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const T  = t.current;

      /* ════════════ DOTS ════════════ */
      for (const d of dots.current) {
        /* autonomous wave target — always moving */
        const waveX = Math.sin(T * 0.85 + d.oy * 0.022 + d.phase) * 15
                    + Math.cos(T * 0.55 + d.ox * 0.016 + d.phase * 0.7) * 7;
        const waveY = Math.cos(T * 0.72 + d.ox * 0.018 + d.phase) * 11
                    + Math.sin(T * 0.45 + d.oy * 0.013 + d.phase * 0.8) * 6;
        const tx = d.ox + waveX;
        const ty = d.oy + waveY;

        const dx   = d.x - mx;
        const dy   = d.y - my;
        const dist = Math.hypot(dx, dy);
        const R    = 180;

        if (dist < R && dist > 0) {
          /* mouse push */
          const f = (1 - dist / R) * 5;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
          /* snap back to origin when pushed */
          d.vx += (d.ox - d.x) * 0.05;
          d.vy += (d.oy - d.y) * 0.05;
        } else {
          /* spring toward wave position */
          d.vx += (tx - d.x) * 0.03;
          d.vy += (ty - d.y) * 0.03;
        }

        d.vx *= 0.80; d.vy *= 0.80;
        d.x  += d.vx;  d.y  += d.vy;

        /* brightness: base + wave pulse + mouse proximity */
        const pulse = Math.sin(T * 2.2 + d.phase) * 0.06 + 1;
        const near  = dist < 240 ? (1 - dist / 240) : 0;
        const alpha = Math.min(0.95, d.baseAlpha * pulse + near * 0.9);
        const sz    = d.size * (1 + near * 0.8);

        ctx.beginPath();
        ctx.arc(d.x, d.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = hex2rgba(d.color, alpha);
        ctx.fill();

        if (near > 0.3) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, sz * 4.5, 0, Math.PI * 2);
          ctx.fillStyle = hex2rgba(d.color, near * 0.14);
          ctx.fill();
        }
      }

      /* ════════════ LINES ════════════ */
      const ds = dots.current;
      for (let i = 0; i < ds.length; i++) {
        for (let j = i + 1; j < ds.length; j++) {
          const adx = Math.abs(ds[i].x - ds[j].x);
          if (adx > 105) continue;
          const ady = Math.abs(ds[i].y - ds[j].y);
          if (ady > 105) continue;
          const d   = Math.hypot(adx, ady);
          if (d < 105) {
            const a = (1 - d / 105) * 0.16;
            ctx.beginPath();
            ctx.moveTo(ds[i].x, ds[i].y);
            ctx.lineTo(ds[j].x, ds[j].y);
            ctx.strokeStyle = `rgba(86,156,214,${a})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      /* ════════════ FLOATING SYMBOLS ════════════ */
      syms.current = syms.current.filter(s => s.y > -60);
      ctx.save();
      for (const s of syms.current) {
        s.y += s.vy;
        ctx.font = `${s.sz}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = hex2rgba(s.color, s.opacity);
        ctx.fillText(s.text, s.x, s.y);
      }
      ctx.restore();

      /* ════════════ SHOOTING STREAKS ════════════ */
      streaks.current = streaks.current.filter(s => s.life < s.max);
      for (const s of streaks.current) {
        s.x += s.vx;
        s.life++;
        const progress = s.life / s.max;
        const a = s.alpha * Math.sin(progress * Math.PI);
        const x0 = s.vx > 0 ? s.x - s.len : s.x + s.len;
        const grad = ctx.createLinearGradient(x0, s.y, s.x, s.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.4, hex2rgba(s.color, a * 0.4));
        grad.addColorStop(1, hex2rgba(s.color, a));
        ctx.beginPath();
        ctx.moveTo(x0, s.y);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        /* bright tip dot */
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = hex2rgba(s.color, a);
        ctx.fill();
      }

      /* ════════════ PULSE RINGS ════════════ */
      rings.current = rings.current.filter(r => r.r < r.maxR);
      for (const r of rings.current) {
        r.r += r.speed;
        const a = r.alpha * (1 - r.r / r.maxR);
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = hex2rgba(r.color, a);
        ctx.lineWidth = 1.2;
        ctx.stroke();
        /* second inner ring */
        if (r.r > 20) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.r * 0.5, 0, Math.PI * 2);
          ctx.strokeStyle = hex2rgba(r.color, a * 0.4);
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      /* ════════════ SPARKLES ════════════ */
      sparks.current = sparks.current.filter(s => s.life < s.max);
      for (const s of sparks.current) {
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.92;
        s.vy *= 0.92;
        s.life++;
        const a = (1 - s.life / s.max) * 0.8;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = hex2rgba(s.color, a);
        ctx.fill();
      }

      /* ════════════ MOUSE GLOW ════════════ */
      if (mx > 0 && mx < cv.width && my > 0 && my < cv.height) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 250);
        g.addColorStop(0, 'rgba(86,156,214,0.07)');
        g.addColorStop(0.5, 'rgba(78,201,176,0.03)');
        g.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mx, my, 250, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      /* ════════════ SCAN LINE ════════════ */
      const sy = ((T * 32) % cv.height);
      const sg = ctx.createLinearGradient(0, sy - 80, 0, sy + 80);
      sg.addColorStop(0, 'transparent');
      sg.addColorStop(0.5, 'rgba(86,156,214,0.04)');
      sg.addColorStop(1, 'transparent');
      ctx.fillStyle = sg;
      ctx.fillRect(0, sy - 80, cv.width, 160);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', initDots);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
