import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────
   Deep-sea background animation
   Layers:
   1. Water-depth tint gradient
   2. Faint sunlight rays filtering from the surface
   3. Marine snow — tiny particles drifting downward
   4. Bioluminescent orbs — glowing, pulsing, curved drift
───────────────────────────────────────────────────────── */

const BIOLUM = [
  '#00CED1', '#4EC9B0', '#7FFFD4',
  '#48CAE4', '#00B4D8', '#90E0EF',
  '#52C5B5', '#38BDF8',
];

function ca(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

interface Snow { x: number; y: number; vy: number; vx: number; r: number; a: number; t: number; }
interface Orb  { x: number; y: number; angle: number; speed: number; r: number; color: string; pulseT: number; pulseSpeed: number; turnSpeed: number; }
interface Ray  { x: number; baseX: number; w: number; alpha: number; t: number; tSpeed: number; }

export default function AnimatedBackground() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const raf   = useRef(0);

  useEffect(() => {
    const cv  = cvRef.current!;
    const ctx = cv.getContext('2d')!;
    let W = 0, H = 0, frame = 0;
    let snows: Snow[] = [], orbs: Orb[] = [], rays: Ray[] = [];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;

      /* Marine snow */
      snows = Array.from({ length: 150 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vy: Math.random() * 0.38 + 0.12,
        vx: (Math.random() - 0.5) * 0.1,
        r:  Math.random() * 1.5 + 0.3,
        a:  Math.random() * 0.22 + 0.06,
        t:  Math.random() * 100,
      }));

      /* Bioluminescent orbs */
      orbs = Array.from({ length: 24 }, () => ({
        x:          Math.random() * W,
        y:          Math.random() * H,
        angle:      Math.random() * Math.PI * 2,
        speed:      Math.random() * 0.42 + 0.14,
        r:          Math.random() * 3.2 + 1.4,
        color:      BIOLUM[Math.floor(Math.random() * BIOLUM.length)],
        pulseT:     Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.018 + 0.006,
        turnSpeed:  (Math.random() - 0.5) * 0.014,
      }));

      /* Light rays */
      rays = Array.from({ length: 6 }, (_, i) => ({
        baseX: (W / 7) * (i + 0.6),
        x:     0,
        w:     Math.random() * 90 + 45,
        alpha: Math.random() * 0.022 + 0.009,
        t:     Math.random() * Math.PI * 2,
        tSpeed:(Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      }));
    };

    init();
    window.addEventListener('resize', init);

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      frame++;

      /* ── Water-depth gradient tint ── */
      const depth = ctx.createLinearGradient(0, 0, 0, H * 0.6);
      depth.addColorStop(0, 'rgba(0, 22, 50, 0.14)');
      depth.addColorStop(1, 'transparent');
      ctx.fillStyle = depth;
      ctx.fillRect(0, 0, W, H);

      /* ── Sunlight rays ── */
      for (const r of rays) {
        r.t += r.tSpeed;
        const cx = r.baseX + Math.sin(r.t) * 60;
        const rg  = ctx.createLinearGradient(cx, 0, cx, H * 0.7);
        rg.addColorStop(0,   `rgba(80,185,245,${r.alpha})`);
        rg.addColorStop(0.4, `rgba(80,185,245,${r.alpha * 0.3})`);
        rg.addColorStop(1,   'transparent');
        ctx.beginPath();
        ctx.moveTo(cx,              0);
        ctx.lineTo(cx + r.w,        0);
        ctx.lineTo(cx + r.w * 1.9,  H * 0.7);
        ctx.lineTo(cx - r.w * 0.9,  H * 0.7);
        ctx.closePath();
        ctx.fillStyle = rg;
        ctx.fill();
      }

      /* ── Marine snow ── */
      for (const s of snows) {
        s.t  += 0.018;
        s.y  += s.vy;
        s.x  += s.vx + Math.sin(s.t) * 0.12;
        if (s.y > H + 4) { s.y = -4; s.x = Math.random() * W; }
        if (s.x < 0)       s.x = W;
        if (s.x > W)       s.x = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(195,228,255,${s.a})`;
        ctx.fill();
      }

      /* ── Bioluminescent orbs ── */
      for (const o of orbs) {
        /* Gently curve the drift path */
        o.angle  += o.turnSpeed + Math.sin(frame * 0.005 + o.pulseT) * 0.004;
        o.x      += Math.cos(o.angle) * o.speed;
        o.y      += Math.sin(o.angle) * o.speed;
        /* Wrap edges */
        if (o.x < -40)    o.x = W + 40;
        if (o.x > W + 40) o.x = -40;
        if (o.y < -40)    o.y = H + 40;
        if (o.y > H + 40) o.y = -40;

        o.pulseT += o.pulseSpeed;
        const pulse = 0.5 + 0.5 * Math.sin(o.pulseT);
        const alpha = 0.28 + pulse * 0.52;

        /* Outer diffuse glow */
        const g1 = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 11);
        g1.addColorStop(0, ca(o.color, alpha * 0.18));
        g1.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(o.x, o.y, o.r * 11, 0, Math.PI * 2);
        ctx.fillStyle = g1; ctx.fill();

        /* Mid glow halo */
        const g2 = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 4);
        g2.addColorStop(0, ca(o.color, alpha * 0.65));
        g2.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(o.x, o.y, o.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = g2; ctx.fill();

        /* Bright core */
        ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = ca(o.color, Math.min(1, alpha + 0.25));
        ctx.fill();
      }

      /* ── Occasional bioluminescent bloom ── */
      if (frame % 340 === 0) {
        const bx = Math.random() * W;
        const by = Math.random() * H;
        const bc = BIOLUM[Math.floor(Math.random() * BIOLUM.length)];
        const bg = ctx.createRadialGradient(bx, by, 0, bx, by, 100);
        bg.addColorStop(0, ca(bc, 0.28));
        bg.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(bx, by, 100, 0, Math.PI * 2);
        ctx.fillStyle = bg; ctx.fill();
      }
    };

    tick();
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener('resize', init); };
  }, []);

  return (
    <canvas
      ref={cvRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
