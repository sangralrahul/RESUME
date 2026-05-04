import { useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════
   Professional Deep Sea — Sunlight Through Water
   Design rule: subtle atmosphere, rays are the hero.

   Layers:
   1. Transparent ocean tint (barely there)
   2. Surface shimmer (top glow)
   3. God rays — wide, soft, screen blend  ← HERO
   4. Caustic texture — very soft, normal blend
   5. Marine snow
   6. One clean surface wave
   7. Edge / depth vignette
═══════════════════════════════════════════════════════════ */

interface Ray    { baseX:number; x:number; w:number; t:number; tSpeed:number; brightness:number; }
interface Caustic{ x:number; y:number; vx:number; vy:number; r:number; t:number; tSpeed:number; }
interface Snow   { x:number; y:number; vy:number; r:number; a:number; t:number; }

const wf = (x: number, f: number, ph = 0) =>
  0.34 * Math.sin(x * 0.009 + f * 0.014 + ph)
+ 0.18 * Math.sin(x * 0.021 + f * 0.009 + ph + 1.3)
+ 0.10 * Math.sin(x * 0.040 + f * 0.018 + ph + 2.6);

export default function AnimatedBackground() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const raf   = useRef(0);

  useEffect(() => {
    const cv  = cvRef.current!;
    const ctx = cv.getContext('2d')!;
    let W = 0, H = 0, frame = 0;
    let rays: Ray[] = [], caustics: Caustic[] = [], snow: Snow[] = [];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;

      /* 8 god rays — spread across top */
      rays = Array.from({length:8}, (_, i) => ({
        baseX:      (W / 9) * (i + 0.7),
        x:          0,
        w:          Math.random() * 60 + 40,
        t:          Math.random() * Math.PI * 2,
        tSpeed:     (Math.random() * 0.005 + 0.002) * (Math.random()>0.5?1:-1),
        brightness: Math.random() * 0.12 + 0.07,
      }));

      /* 22 caustic blobs — full page, normal blend */
      caustics = Array.from({length:22}, () => ({
        x:      Math.random() * W,
        y:      Math.random() * H,
        vx:     (Math.random()-0.5) * 0.40,
        vy:     (Math.random()-0.5) * 0.25,
        r:      Math.random() * 55 + 28,
        t:      Math.random() * Math.PI * 2,
        tSpeed: Math.random() * 0.016 + 0.006,
      }));

      /* Marine snow */
      snow = Array.from({length:130}, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vy: Math.random() * 0.30 + 0.08,
        r:  Math.random() * 1.2 + 0.20,
        a:  Math.random() * 0.15 + 0.04,
        t:  Math.random() * 100,
      }));
    };

    init();
    window.addEventListener('resize', init);

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      frame++;

      /* ── 1. Transparent ocean tint ── */
      const ot = ctx.createLinearGradient(0, 0, 0, H);
      ot.addColorStop(0,    'rgba(0, 40, 95, 0.38)');
      ot.addColorStop(0.18, 'rgba(0, 24, 65, 0.18)');
      ot.addColorStop(0.45, 'rgba(0, 12, 38, 0.08)');
      ot.addColorStop(1,    'rgba(0, 2, 14, 0.18)');
      ctx.fillStyle = ot;
      ctx.fillRect(0, 0, W, H);

      /* ── 2. Surface brightness zone ── */
      const sg = ctx.createLinearGradient(0, 0, 0, H * 0.18);
      sg.addColorStop(0,   'rgba(80, 185, 255, 0.14)');
      sg.addColorStop(0.5, 'rgba(50, 150, 230, 0.06)');
      sg.addColorStop(1,   'transparent');
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, W, H * 0.18);

      /* ── 3. God rays — screen blend ── */
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (const r of rays) {
        r.t += r.tSpeed;
        r.x  = r.baseX + Math.sin(r.t) * 38;

        /* Ray gets 4× wider by the bottom */
        const halfW  = r.w / 2;
        const spread = r.w * 3.5;

        const rg = ctx.createLinearGradient(r.x + halfW, 0, r.x + halfW, H);
        rg.addColorStop(0,    `rgba(135, 218, 255, ${r.brightness})`);
        rg.addColorStop(0.12, `rgba(110, 200, 250, ${r.brightness * 0.70})`);
        rg.addColorStop(0.30, `rgba(80, 175, 240, ${r.brightness * 0.35})`);
        rg.addColorStop(0.55, `rgba(55, 148, 220, ${r.brightness * 0.12})`);
        rg.addColorStop(0.80, `rgba(30, 115, 195, ${r.brightness * 0.04})`);
        rg.addColorStop(1,    'transparent');

        ctx.beginPath();
        ctx.moveTo(r.x,               0);
        ctx.lineTo(r.x + r.w,         0);
        ctx.lineTo(r.x + halfW + spread, H);
        ctx.lineTo(r.x + halfW - spread, H);
        ctx.closePath();
        ctx.fillStyle = rg;
        ctx.fill();
      }
      ctx.restore();

      /* ── 4. Caustic shimmer — normal blend, very soft ── */
      for (const c of caustics) {
        c.t  += c.tSpeed;
        c.x  += c.vx + Math.sin(c.t) * 0.22;
        c.y  += c.vy + Math.cos(c.t * 0.65) * 0.14;
        if (c.x < -80) c.x = W + 80;  if (c.x > W+80) c.x = -80;
        if (c.y < -80) c.y = H + 80;  if (c.y > H+80) c.y = -80;

        const a  = (0.022 + 0.012 * Math.sin(c.t));
        const cg = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        cg.addColorStop(0,   `rgba(100, 200, 255, ${a})`);
        cg.addColorStop(0.55,`rgba(65, 165, 230, ${a * 0.35})`);
        cg.addColorStop(1,   'transparent');
        ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
        ctx.fillStyle = cg; ctx.fill();
      }

      /* ── 5. Marine snow ── */
      for (const s of snow) {
        s.t  += 0.015;
        s.y  += s.vy;
        s.x  += Math.sin(s.t) * 0.09;
        if (s.y > H+4) { s.y=-4; s.x=Math.random()*W; }
        if (s.x < 0)    s.x=W;
        if (s.x > W)    s.x=0;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle=`rgba(215,240,255,${s.a})`; ctx.fill();
      }

      /* ── 6. Single clean surface wave ── */
      const SW = H * 0.20;

      /* Back fill */
      ctx.beginPath();
      ctx.moveTo(0,0); ctx.lineTo(W,0);
      for (let x=W; x>=0; x-=4)
        ctx.lineTo(x, Math.max(0, SW * (0.50 + wf(x, frame, 0))));
      ctx.closePath();
      const wfA = ctx.createLinearGradient(0, 0, 0, SW);
      wfA.addColorStop(0,   'rgba(3, 44, 90, 0.82)');
      wfA.addColorStop(0.55,'rgba(2, 30, 65, 0.28)');
      wfA.addColorStop(1,   'transparent');
      ctx.fillStyle = wfA; ctx.fill();

      /* Front fill + highlight line */
      ctx.beginPath();
      ctx.moveTo(0,0); ctx.lineTo(W,0);
      for (let x=W; x>=0; x-=4)
        ctx.lineTo(x, Math.max(0, SW * (0.30 + wf(x, frame, 1.8) * 0.62)));
      ctx.closePath();
      const wfB = ctx.createLinearGradient(0, 0, 0, SW * 0.68);
      wfB.addColorStop(0,   'rgba(6, 100, 170, 0.52)');
      wfB.addColorStop(0.50,'rgba(4, 118, 185, 0.16)');
      wfB.addColorStop(1,   'transparent');
      ctx.fillStyle = wfB; ctx.fill();

      ctx.beginPath();
      for (let x=0; x<=W; x+=4) {
        const y = Math.max(0, SW * (0.30 + wf(x, frame, 1.8) * 0.62));
        x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
      }
      ctx.strokeStyle='rgba(150,228,255,0.32)';
      ctx.lineWidth=1.2; ctx.stroke();

      /* ── 7. Edge & depth vignette ── */
      const vig = ctx.createRadialGradient(W/2, H*0.5, H*0.15, W/2, H*0.5, H*0.95);
      vig.addColorStop(0,'transparent');
      vig.addColorStop(1,'rgba(0, 2, 12, 0.42)');
      ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);
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
