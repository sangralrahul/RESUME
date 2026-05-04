import { useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════
   DEEP SEA — Sunlight Through Water
   You are submerged. The sun shines from the surface above.

   Layers (back → front):
   1. Ocean water body gradient (full blue fill)
   2. Surface brightness zone
   3. Animated surface waves (looking up from below)
   4. Strong sunlight crepuscular rays (screen blend)
   5. Caustic light dance across full page (screen blend)
   6. Marine snow gently drifting down
   7. Deep radial vignette
═══════════════════════════════════════════════════════════ */

interface Ray    { x: number; baseX: number; w: number; t: number; tSpeed: number; brightness: number; }
interface Caustic{ x: number; y: number; vx: number; vy: number; r: number; t: number; tSpeed: number; }
interface Snow   { x: number; y: number; vy: number; r: number; a: number; t: number; }

const wf = (x: number, f: number, ph = 0) =>
  0.36 * Math.sin(x * 0.010 + f * 0.015 + ph)
+ 0.20 * Math.sin(x * 0.022 + f * 0.010 + ph + 1.2)
+ 0.11 * Math.sin(x * 0.042 + f * 0.019 + ph + 2.5)
+ 0.05 * Math.sin(x * 0.074 + f * 0.027 + ph + 0.7);

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

      /* Sun rays — 9 beams spread across the top */
      rays = Array.from({length: 9}, (_, i) => ({
        baseX:      (W / 10) * (i + 0.65) + (Math.random()-0.5) * W * 0.04,
        x:          0,
        w:          Math.random() * 90 + 55,
        t:          Math.random() * Math.PI * 2,
        tSpeed:     (Math.random() * 0.006 + 0.002) * (Math.random()>0.5?1:-1),
        brightness: Math.random() * 0.14 + 0.09,
      }));

      /* Caustics — full page distribution */
      caustics = Array.from({length: 38}, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random()-0.5) * 0.48,
        vy:    (Math.random()-0.5) * 0.30,
        r:     Math.random() * 36 + 14,
        t:     Math.random() * Math.PI * 2,
        tSpeed:Math.random() * 0.024 + 0.008,
      }));

      /* Marine snow */
      snow = Array.from({length: 160}, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vy: Math.random() * 0.34 + 0.09,
        r:  Math.random() * 1.3 + 0.22,
        a:  Math.random() * 0.17 + 0.04,
        t:  Math.random() * 100,
      }));
    };

    init();
    window.addEventListener('resize', init);

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      frame++;

      /* ── 1. Ocean water gradient (full canvas fill) ── */
      const ocean = ctx.createLinearGradient(0, 0, 0, H);
      ocean.addColorStop(0,    'rgba(0, 55, 120, 0.88)');
      ocean.addColorStop(0.10, 'rgba(0, 38, 90, 0.72)');
      ocean.addColorStop(0.30, 'rgba(0, 20, 58, 0.55)');
      ocean.addColorStop(0.60, 'rgba(0, 10, 32, 0.42)');
      ocean.addColorStop(1,    'rgba(0, 2, 14, 0.62)');
      ctx.fillStyle = ocean;
      ctx.fillRect(0, 0, W, H);

      /* ── 2. Surface brightness zone (light pouring from above) ── */
      const sg = ctx.createLinearGradient(0, 0, 0, H * 0.25);
      sg.addColorStop(0,   'rgba(90, 190, 255, 0.22)');
      sg.addColorStop(0.4, 'rgba(50, 150, 230, 0.10)');
      sg.addColorStop(1,   'transparent');
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, W, H * 0.25);

      /* ── 3. Sunlight rays (strong, screen blend) ── */
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (const r of rays) {
        r.t += r.tSpeed;
        r.x  = r.baseX + Math.sin(r.t) * 42;
        const spread = r.w * 4.2;

        const rg = ctx.createLinearGradient(r.x + r.w * 0.5, 0, r.x + r.w * 0.5, H);
        rg.addColorStop(0,    `rgba(130, 215, 255, ${r.brightness})`);
        rg.addColorStop(0.18, `rgba(105, 198, 248, ${r.brightness * 0.62})`);
        rg.addColorStop(0.42, `rgba(75, 175, 235, ${r.brightness * 0.25})`);
        rg.addColorStop(0.70, `rgba(45, 140, 210, ${r.brightness * 0.08})`);
        rg.addColorStop(1,    'transparent');

        ctx.beginPath();
        ctx.moveTo(r.x,           0);
        ctx.lineTo(r.x + r.w,     0);
        ctx.lineTo(r.x + r.w + spread, H);
        ctx.lineTo(r.x - spread,       H);
        ctx.closePath();
        ctx.fillStyle = rg;
        ctx.fill();
      }
      ctx.restore();

      /* ── 4. Caustic dance (screen blend, full page) ── */
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (const c of caustics) {
        c.t  += c.tSpeed;
        c.x  += c.vx + Math.sin(c.t) * 0.26;
        c.y  += c.vy + Math.cos(c.t * 0.65) * 0.18;
        if (c.x < -70) c.x = W + 70;
        if (c.x > W+70) c.x = -70;
        if (c.y < -70) c.y = H + 70;
        if (c.y > H+70) c.y = -70;
        const a  = 0.048 + 0.028 * Math.sin(c.t);
        const cg = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        cg.addColorStop(0,   `rgba(120, 210, 255, ${a})`);
        cg.addColorStop(0.5, `rgba(80, 175, 230, ${a * 0.38})`);
        cg.addColorStop(1,   'transparent');
        ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
        ctx.fillStyle = cg; ctx.fill();
      }
      ctx.restore();

      /* ── 5. Marine snow (drifts down) ── */
      for (const s of snow) {
        s.t  += 0.016;
        s.y  += s.vy;
        s.x  += Math.sin(s.t) * 0.10;
        if (s.y > H+4) { s.y=-4; s.x=Math.random()*W; }
        if (s.x < 0)    s.x=W;
        if (s.x > W)    s.x=0;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(220,242,255,${s.a})`; ctx.fill();
      }

      /* ── 6. Animated surface (you're looking UP at it) ── */
      const SW = H * 0.24;

      /* Back wave — dark base */
      ctx.beginPath();
      ctx.moveTo(0,0); ctx.lineTo(W,0);
      for (let x=W; x>=0; x-=3)
        ctx.lineTo(x, Math.max(0, SW*(0.52+wf(x,frame,0))));
      ctx.closePath();
      const wA=ctx.createLinearGradient(0,0,0,SW);
      wA.addColorStop(0,'rgba(4,48,98,0.88)');
      wA.addColorStop(0.65,'rgba(3,32,72,0.32)');
      wA.addColorStop(1,'transparent');
      ctx.fillStyle=wA; ctx.fill();

      /* Mid wave */
      ctx.beginPath();
      ctx.moveTo(0,0); ctx.lineTo(W,0);
      for (let x=W; x>=0; x-=3)
        ctx.lineTo(x, Math.max(0, SW*(0.39+wf(x,frame,1.1)*0.80)));
      ctx.closePath();
      const wB=ctx.createLinearGradient(0,0,0,SW*0.88);
      wB.addColorStop(0,'rgba(0,72,140,0.68)');
      wB.addColorStop(0.55,'rgba(0,92,158,0.22)');
      wB.addColorStop(1,'transparent');
      ctx.fillStyle=wB; ctx.fill();

      /* Front wave crest */
      ctx.beginPath();
      ctx.moveTo(0,0); ctx.lineTo(W,0);
      for (let x=W; x>=0; x-=3)
        ctx.lineTo(x, Math.max(0, SW*(0.27+wf(x,frame,2.4)*0.58)));
      ctx.closePath();
      const wC=ctx.createLinearGradient(0,0,0,SW*0.66);
      wC.addColorStop(0,'rgba(10,115,182,0.58)');
      wC.addColorStop(0.5,'rgba(5,132,198,0.18)');
      wC.addColorStop(1,'transparent');
      ctx.fillStyle=wC; ctx.fill();

      /* Crest sparkle line */
      ctx.beginPath();
      for (let x=0; x<=W; x+=3) {
        const y=Math.max(0,SW*(0.27+wf(x,frame,2.4)*0.58));
        x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
      }
      ctx.strokeStyle='rgba(160,230,255,0.38)';
      ctx.lineWidth=1.5; ctx.stroke();

      /* ── 7. Deep radial vignette ── */
      const vig=ctx.createRadialGradient(W/2,H*0.55,H*0.18,W/2,H*0.55,H*0.95);
      vig.addColorStop(0,'transparent');
      vig.addColorStop(1,'rgba(0,1,10,0.45)');
      ctx.fillStyle=vig; ctx.fillRect(0,0,W,H);
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
