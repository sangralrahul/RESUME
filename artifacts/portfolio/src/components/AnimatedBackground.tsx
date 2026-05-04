import { useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════
   Full-page Deep Water Animation
   Layers (back → front):
   1. Depth gradient tint
   2. Multi-layer surface waves (top)
   3. Horizontal flowing water currents (full height)
   4. Full-height crepuscular rays
   5. Full-page caustic shimmer
   6. Turbidity particles
═══════════════════════════════════════════════════════════ */

interface Caustic  { x:number; y:number; vx:number; vy:number; r:number; t:number; tSpeed:number; }
interface Particle { x:number; y:number; angle:number; speed:number; r:number; a:number; }
interface Ray      { baseX:number; w:number; alpha:number; t:number; tSpeed:number; }
interface Current  { yBase:number; amplitude:number; freq:number; speed:number; alpha:number; dir:number; }

const wf = (x: number, frame: number, phase = 0) =>
  0.38 * Math.sin(x * 0.011 + frame * 0.016 + phase)
+ 0.22 * Math.sin(x * 0.024 + frame * 0.011 + phase + 1.3)
+ 0.12 * Math.sin(x * 0.043 + frame * 0.021 + phase + 2.5)
+ 0.06 * Math.sin(x * 0.072 + frame * 0.031 + phase + 0.7);

export default function AnimatedBackground() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const raf   = useRef(0);

  useEffect(() => {
    const cv  = cvRef.current!;
    const ctx = cv.getContext('2d')!;
    let W = 0, H = 0, frame = 0;
    let caustics: Caustic[] = [], particles: Particle[] = [], rays: Ray[] = [], currents: Current[] = [];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;

      /* Caustics — full page */
      caustics = Array.from({length:36}, () => ({
        x:      Math.random() * W,
        y:      Math.random() * H,
        vx:     (Math.random()-0.5) * 0.45,
        vy:     (Math.random()-0.5) * 0.28,
        r:      Math.random() * 30 + 12,
        t:      Math.random() * Math.PI * 2,
        tSpeed: Math.random() * 0.022 + 0.008,
      }));

      /* Turbidity particles — full page */
      particles = Array.from({length:100}, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.50 + 0.14,
        r:     Math.random() * 1.1 + 0.25,
        a:     Math.random() * 0.13 + 0.04,
      }));

      /* Light rays — full height */
      rays = Array.from({length:8}, (_, i) => ({
        baseX: (W/9) * (i + 0.65),
        w:     Math.random() * 70 + 28,
        alpha: Math.random() * 0.018 + 0.007,
        t:     Math.random() * Math.PI * 2,
        tSpeed:(Math.random() * 0.003 + 0.001) * (Math.random()>0.5?1:-1),
      }));

      /* Horizontal water currents — 14 bands distributed through full height */
      currents = Array.from({length:14}, (_, i) => ({
        yBase:     (H / 14) * i + H / 28,
        amplitude: Math.random() * 22 + 8,
        freq:      Math.random() * 0.007 + 0.003,
        speed:     Math.random() * 0.009 + 0.004,
        alpha:     Math.random() * 0.045 + 0.015,
        dir:       Math.random() > 0.5 ? 1 : -1,
      }));
    };

    init();
    window.addEventListener('resize', init);

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      frame++;

      /* ── 1. Depth gradient ── */
      const dg = ctx.createLinearGradient(0, 0, 0, H);
      dg.addColorStop(0,    'rgba(0, 32, 72, 0.24)');
      dg.addColorStop(0.35, 'rgba(0, 16, 44, 0.12)');
      dg.addColorStop(0.65, 'rgba(0, 8, 28, 0.06)');
      dg.addColorStop(1,    'rgba(0, 0, 14, 0.30)');
      ctx.fillStyle = dg; ctx.fillRect(0, 0, W, H);

      /* ── 2. Crepuscular rays (full height) ── */
      for (const r of rays) {
        r.t += r.tSpeed;
        const cx = r.baseX + Math.sin(r.t) * 50;
        const rg  = ctx.createLinearGradient(cx, 0, cx, H);
        rg.addColorStop(0,   `rgba(75,195,255,${r.alpha})`);
        rg.addColorStop(0.3, `rgba(75,195,255,${r.alpha*0.35})`);
        rg.addColorStop(0.65, `rgba(75,195,255,${r.alpha*0.08})`);
        rg.addColorStop(1,   'transparent');
        ctx.beginPath();
        ctx.moveTo(cx,           0);
        ctx.lineTo(cx + r.w,     0);
        ctx.lineTo(cx + r.w*2.2, H);
        ctx.lineTo(cx - r.w*1.2, H);
        ctx.closePath();
        ctx.fillStyle = rg; ctx.fill();
      }

      /* ── 3. Caustic shimmer (full page, additive) ── */
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (const c of caustics) {
        c.t  += c.tSpeed;
        c.x  += c.vx + Math.sin(c.t) * 0.28;
        c.y  += c.vy + Math.cos(c.t * 0.65) * 0.18;
        if (c.x < -60)    c.x = W + 60;
        if (c.x > W + 60) c.x = -60;
        if (c.y < -60)    c.y = H + 60;
        if (c.y > H + 60) c.y = -60;
        const a  = 0.036 + 0.022 * Math.sin(c.t);
        const cg = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        cg.addColorStop(0,   `rgba(110,205,255,${a})`);
        cg.addColorStop(0.5, `rgba(70,175,220,${a*0.38})`);
        cg.addColorStop(1,   'transparent');
        ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
        ctx.fillStyle = cg; ctx.fill();
      }
      ctx.restore();

      /* ── 4. Flowing horizontal water currents ── */
      for (const c of currents) {
        const t = frame * c.speed * c.dir;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const y = c.yBase
                  + Math.sin(x * c.freq + t) * c.amplitude
                  + Math.sin(x * c.freq * 1.9 + t * 0.7) * c.amplitude * 0.38;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(80, 170, 230, ${c.alpha})`;
        ctx.lineWidth   = 0.9;
        ctx.stroke();
      }

      /* ── 5. Turbidity particles ── */
      for (const p of particles) {
        const target = Math.sin(p.x * 0.003 + frame * 0.004) * 0.40;
        p.angle += (target - p.angle) * 0.018;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed * 0.35 + 0.10;
        if (p.y > H + 4) { p.y = -4; p.x = Math.random()*W; }
        if (p.x < 0)       p.x = W;
        if (p.x > W)       p.x = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(200,232,255,${p.a})`; ctx.fill();
      }

      /* ── 6. Multi-layer surface waves (top) ── */
      const SW = H * 0.26;

      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 3) {
        ctx.lineTo(x, Math.max(0, SW * (0.50 + wf(x, frame, 0.0))));
      }
      ctx.closePath();
      const wA = ctx.createLinearGradient(0, 0, 0, SW);
      wA.addColorStop(0,'rgba(4,38,78,0.78)'); wA.addColorStop(0.65,'rgba(4,38,78,0.26)'); wA.addColorStop(1,'transparent');
      ctx.fillStyle = wA; ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 3) {
        ctx.lineTo(x, Math.max(0, SW * (0.40 + wf(x, frame, 1.0) * 0.82)));
      }
      ctx.closePath();
      const wB = ctx.createLinearGradient(0, 0, 0, SW * 0.88);
      wB.addColorStop(0,'rgba(0,65,115,0.62)'); wB.addColorStop(0.55,'rgba(0,90,145,0.20)'); wB.addColorStop(1,'transparent');
      ctx.fillStyle = wB; ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 3) {
        ctx.lineTo(x, Math.max(0, SW * (0.29 + wf(x, frame, 2.1) * 0.60)));
      }
      ctx.closePath();
      const wC = ctx.createLinearGradient(0, 0, 0, SW * 0.70);
      wC.addColorStop(0,'rgba(8,105,165,0.52)'); wC.addColorStop(0.50,'rgba(0,120,180,0.15)'); wC.addColorStop(1,'transparent');
      ctx.fillStyle = wC; ctx.fill();

      /* Surface crest glow */
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const y = Math.max(0, SW * (0.29 + wf(x, frame, 2.1) * 0.60));
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(140,218,255,0.28)'; ctx.lineWidth = 1.3; ctx.stroke();
    };

    tick();
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener('resize', init); };
  }, []);

  return (
    <canvas
      ref={cvRef}
      style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }}
    />
  );
}
