import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────
   Professional particle constellation background
   Single accent color, subtle opacity, clean geometry
───────────────────────────────────────────────────────── */

const ACCENT = [86, 156, 214] as const; // #569CD6
const rgba   = (a: number) => `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${a})`;

interface Node { x: number; y: number; vx: number; vy: number; }
interface Ring { x: number; y: number; r: number; maxR: number; speed: number; }

export default function AnimatedBackground() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const raf   = useRef(0);

  useEffect(() => {
    const cv  = cvRef.current!;
    const ctx = cv.getContext('2d')!;

    let W = 0, H = 0, frame = 0;
    let nodes: Node[] = [];
    let rings: Ring[] = [];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;
      nodes = Array.from({ length: 32 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const spawnRing = () => rings.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0,
      maxR: Math.random() * 200 + 120,
      speed: Math.random() * 0.55 + 0.35,
    });

    for (let i = 0; i < 2; i++) spawnRing();
    init();

    const onResize = () => init();
    window.addEventListener('resize', onResize);

    const GRID = 46;

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      frame++;

      if (frame % 360 === 0 && rings.length < 4) spawnRing();

      /* ── Static dot grid ── */
      ctx.fillStyle = rgba(0.055);
      for (let x = GRID; x < W; x += GRID) {
        for (let y = GRID; y < H; y += GRID) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* ── Connection lines ── */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = rgba((1 - d / 180) * 0.11);
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }

      /* ── Particle dots ── */
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = rgba(0.45);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = rgba(0.06);
        ctx.fill();
      }

      /* ── Slow pulse rings ── */
      rings = rings.filter(r => r.r < r.maxR);
      for (const r of rings) {
        r.r += r.speed;
        const a = (1 - r.r / r.maxR) * 0.07;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(a);
        ctx.lineWidth   = 1;
        ctx.stroke();
      }

      /* ── Horizontal scan line (very subtle) ── */
      const sy  = (frame * 0.22) % (H + 200) - 100;
      const sg  = ctx.createLinearGradient(0, sy - 80, 0, sy + 80);
      sg.addColorStop(0, 'transparent');
      sg.addColorStop(0.5, rgba(0.025));
      sg.addColorStop(1, 'transparent');
      ctx.fillStyle = sg;
      ctx.fillRect(0, sy - 80, W, 160);
    };

    tick();
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <canvas
      ref={cvRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
