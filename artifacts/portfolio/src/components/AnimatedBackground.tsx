import { useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════
   Pure Water Animation — no creatures, just physics:
   1. Depth gradient tint
   2. Multi-layer animated surface waves
   3. Underwater crepuscular rays
   4. Caustic light shimmer (screen blend)
   5. Subtle turbidity drift
═══════════════════════════════════════════════════════════ */

interface Caustic  { x:number; y:number; vx:number; vy:number; r:number; t:number; tSpeed:number; }
interface Particle { x:number; y:number; angle:number; speed:number; r:number; a:number; }
interface Ray      { baseX:number; w:number; alpha:number; t:number; tSpeed:number; }

/* Combined multi-harmonic wave function */
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
    let caustics: Caustic[] = [], particles: Particle[] = [], rays: Ray[] = [];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;

      /* Caustic blobs — concentrated in upper portion */
      caustics = Array.from({length:30}, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 0.65,
        vx: (Math.random()-0.5) * 0.45,
        vy: (Math.random()-0.5) * 0.25,
        r:  Math.random() * 28 + 12,
        t:  Math.random() * Math.PI * 2,
        tSpeed: Math.random() * 0.022 + 0.008,
      }));

      /* Turbidity particles — very faint */
      particles = Array.from({length:90}, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.50 + 0.15,
        r:     Math.random() * 1.1 + 0.25,
        a:     Math.random() * 0.14 + 0.04,
      }));

      /* Light rays from surface */
      rays = Array.from({length:7}, (_, i) => ({
        baseX: (W/8) * (i + 0.65),
        w:     Math.random() * 75 + 32,
        alpha: Math.random() * 0.019 + 0.007,
        t:     Math.random() * Math.PI * 2,
        tSpeed:(Math.random() * 0.003 + 0.001) * (Math.random()>0.5?1:-1),
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
      dg.addColorStop(0,    'rgba(0, 32, 70, 0.22)');
      dg.addColorStop(0.38, 'rgba(0, 16, 42, 0.10)');
      dg.addColorStop(0.72, 'transparent');
      dg.addColorStop(1,    'rgba(0, 0, 12, 0.28)');
      ctx.fillStyle = dg; ctx.fillRect(0, 0, W, H);

      /* ── 2. Crepuscular rays ── */
      for (const r of rays) {
        r.t += r.tSpeed;
        const cx = r.baseX + Math.sin(r.t) * 52;
        const rg  = ctx.createLinearGradient(cx, 0, cx, H * 0.68);
        rg.addColorStop(0,   `rgba(80,195,255,${r.alpha})`);
        rg.addColorStop(0.4, `rgba(80,195,255,${r.alpha*0.28})`);
        rg.addColorStop(1,   'transparent');
        ctx.beginPath();
        ctx.moveTo(cx,            0);
        ctx.lineTo(cx + r.w,      0);
        ctx.lineTo(cx + r.w*2.1,  H*0.68);
        ctx.lineTo(cx - r.w*1.1,  H*0.68);
        ctx.closePath();
        ctx.fillStyle = rg; ctx.fill();
      }

      /* ── 3. Caustic light (additive screen blend) ── */
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (const c of caustics) {
        c.t  += c.tSpeed;
        c.x  += c.vx + Math.sin(c.t)*0.28;
        c.y  += c.vy + Math.cos(c.t*0.65)*0.18;
        if (c.x < -60)         c.x = W + 60;
        if (c.x > W + 60)      c.x = -60;
        if (c.y < -60)         c.y = H*0.65 + 60;
        if (c.y > H*0.65 + 60) c.y = -60;
        const a  = 0.038 + 0.025 * Math.sin(c.t);
        const cg = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        cg.addColorStop(0, `rgba(110,205,255,${a})`);
        cg.addColorStop(0.5, `rgba(70,175,220,${a*0.40})`);
        cg.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
        ctx.fillStyle = cg; ctx.fill();
      }
      ctx.restore();

      /* ── 4. Turbidity drift particles ── */
      for (const p of particles) {
        /* Steer toward ambient horizontal current */
        const target = Math.sin(p.x * 0.003 + frame * 0.004) * 0.45;
        p.angle += (target - p.angle) * 0.018;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed * 0.35 + 0.11;
        if (p.y > H + 4) { p.y = -4; p.x = Math.random()*W; }
        if (p.x < 0)       p.x = W;
        if (p.x > W)       p.x = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(200,232,255,${p.a})`; ctx.fill();
      }

      /* ── 5. Multi-layer animated surface waves ── */
      const SW = H * 0.28; /* surface band height */

      /* Layer A — deep base */
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 3) {
        const y = SW * (0.50 + wf(x, frame, 0.0));
        ctx.lineTo(x, Math.max(0, y));
      }
      ctx.closePath();
      const wA = ctx.createLinearGradient(0, 0, 0, SW);
      wA.addColorStop(0,   'rgba(4, 38, 78, 0.75)');
      wA.addColorStop(0.65,'rgba(4, 38, 78, 0.28)');
      wA.addColorStop(1,   'transparent');
      ctx.fillStyle = wA; ctx.fill();

      /* Layer B — mid teal */
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 3) {
        const y = SW * (0.41 + wf(x, frame, 0.9) * 0.82);
        ctx.lineTo(x, Math.max(0, y));
      }
      ctx.closePath();
      const wB = ctx.createLinearGradient(0, 0, 0, SW * 0.9);
      wB.addColorStop(0,   'rgba(0, 65, 115, 0.60)');
      wB.addColorStop(0.55,'rgba(0, 90, 145, 0.20)');
      wB.addColorStop(1,   'transparent');
      ctx.fillStyle = wB; ctx.fill();

      /* Layer C — lighter crest */
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(W, 0);
      for (let x = W; x >= 0; x -= 3) {
        const y = SW * (0.30 + wf(x, frame, 2.0) * 0.60);
        ctx.lineTo(x, Math.max(0, y));
      }
      ctx.closePath();
      const wC = ctx.createLinearGradient(0, 0, 0, SW * 0.72);
      wC.addColorStop(0,   'rgba(8, 105, 165, 0.50)');
      wC.addColorStop(0.50,'rgba(0, 120, 180, 0.16)');
      wC.addColorStop(1,   'transparent');
      ctx.fillStyle = wC; ctx.fill();

      /* Layer D — surface foam / highlight stroke */
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const y = SW * (0.30 + wf(x, frame, 2.0) * 0.60);
        x === 0 ? ctx.moveTo(x, Math.max(0, y)) : ctx.lineTo(x, Math.max(0, y));
      }
      ctx.strokeStyle = 'rgba(140, 215, 255, 0.25)';
      ctx.lineWidth = 1.2; ctx.stroke();

      /* Optional: secondary highlight on layer B crest */
      ctx.beginPath();
      for (let x = 0; x <= W; x += 4) {
        const y = SW * (0.41 + wf(x, frame, 0.9) * 0.82);
        x === 0 ? ctx.moveTo(x, Math.max(0, y)) : ctx.lineTo(x, Math.max(0, y));
      }
      ctx.strokeStyle = 'rgba(100, 190, 240, 0.14)';
      ctx.lineWidth = 0.8; ctx.stroke();
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
