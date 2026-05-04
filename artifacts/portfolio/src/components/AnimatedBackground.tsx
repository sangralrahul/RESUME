import { useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════
   Deep Ocean Live Animation
   Layers (back → front):
   1.  Water-depth gradient tint
   2.  Animated surface shimmer (top)
   3.  Sunlight crepuscular rays
   4.  Marine snow
   5.  Bioluminescent drifting orbs
   6.  Jellyfish — pulsing domes + flowing tentacles
   7.  Occasional bioluminescent bloom
═══════════════════════════════════════════════════════════ */

const BIOLUM: string[] = ['#00CED1','#4EC9B0','#7FFFD4','#48CAE4','#00B4D8','#52C5B5','#38BDF8'];
const JELLY_COLORS:  string[] = ['#00CED1','#7FFFD4','#4EC9B0','#90E0EF','#48CAE4','#52E3C2'];

function ca(hex: string, a: number) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

interface Snow { x:number; y:number; vy:number; vx:number; r:number; a:number; t:number; }
interface Orb  { x:number; y:number; angle:number; speed:number; r:number; color:string; pulseT:number; pulseSpeed:number; turnSpeed:number; }
interface Ray  { baseX:number; w:number; alpha:number; t:number; tSpeed:number; }
interface Jelly{ x:number; y:number; r:number; color:string; pulseT:number; pulseSpeed:number; vy:number; vx:number; swayT:number; tentPhase:number; }

function drawJelly(ctx: CanvasRenderingContext2D, jf: Jelly, frame: number) {
  const pulse = 0.80 + 0.20 * Math.sin(jf.pulseT);
  const rp    = jf.r * pulse;
  const { x, y, color } = jf;

  /* — Outer diffuse glow — */
  const og = ctx.createRadialGradient(x, y, 0, x, y, rp * 5);
  og.addColorStop(0, ca(color, 0.08));
  og.addColorStop(1, 'transparent');
  ctx.beginPath(); ctx.arc(x, y, rp * 5, 0, Math.PI*2);
  ctx.fillStyle = og; ctx.fill();

  /* — Bell body (dome, flat bottom) — */
  const bg = ctx.createRadialGradient(x, y - rp*0.3, 0, x, y, rp);
  bg.addColorStop(0,   ca(color, 0.55));
  bg.addColorStop(0.65,ca(color, 0.28));
  bg.addColorStop(1,   ca(color, 0.04));
  ctx.beginPath();
  ctx.arc(x, y, rp, Math.PI, 0, false);
  ctx.closePath();
  ctx.fillStyle = bg; ctx.fill();

  /* — Bell rim glow — */
  const rimAlpha = 0.30 + 0.20 * Math.sin(jf.pulseT);
  ctx.beginPath();
  ctx.arc(x, y, rp, Math.PI, 0, false);
  ctx.closePath();
  ctx.strokeStyle = ca(color, rimAlpha);
  ctx.lineWidth = 1.8;
  ctx.stroke();

  /* — Inner highlight — */
  const ig = ctx.createRadialGradient(x, y - rp*0.45, 0, x, y, rp*0.75);
  ig.addColorStop(0, 'rgba(255,255,255,0.10)');
  ig.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(x, y, rp*0.75, Math.PI, 0, false);
  ctx.closePath();
  ctx.fillStyle = ig; ctx.fill();

  /* — Oral arms (thick inner fringe) — */
  const armCount = 4;
  for (let i = 0; i < armCount; i++) {
    const tx    = x - rp*0.55 + (rp*1.1/(armCount-1))*i;
    const phase = frame*0.018 + i*1.4 + jf.tentPhase;
    ctx.beginPath();
    ctx.moveTo(tx, y);
    for (let s = 1; s <= 7; s++) {
      const nx = tx + Math.sin(phase + s*0.55) * (rp*0.22 * (s/7));
      const ny = y  + rp * 0.9 * (s/7);
      ctx.lineTo(nx, ny);
    }
    ctx.strokeStyle = ca(color, 0.28 + 0.10*Math.sin(jf.pulseT+i));
    ctx.lineWidth   = 1.8;
    ctx.stroke();
  }

  /* — Thin trailing tentacles — */
  const tentCount = 8;
  for (let i = 0; i < tentCount; i++) {
    const tx    = x - rp*0.85 + (rp*1.70/(tentCount-1))*i;
    const phase = frame*0.022 + i*0.80 + jf.swayT;
    ctx.beginPath();
    ctx.moveTo(tx, y);
    for (let s = 1; s <= 12; s++) {
      const nx = tx + Math.sin(phase + s*0.45) * (rp*0.25*(s/12));
      const ny = y  + rp * 1.9 * (s/12);
      ctx.lineTo(nx, ny);
    }
    const ta = 0.14 + 0.08*Math.sin(jf.pulseT + i*0.5);
    ctx.strokeStyle = ca(color, ta);
    ctx.lineWidth   = 0.7;
    ctx.stroke();
  }
}

function makeJelly(W: number, H: number, startBelow = false): Jelly {
  return {
    x:          Math.random() * W,
    y:          startBelow ? H + Math.random()*H*0.4 : Math.random()*H,
    r:          Math.random()*40 + 18,
    color:      JELLY_COLORS[Math.floor(Math.random()*JELLY_COLORS.length)],
    pulseT:     Math.random()*Math.PI*2,
    pulseSpeed: Math.random()*0.028 + 0.012,
    vy:         -(Math.random()*0.32 + 0.10),
    vx:         (Math.random()-0.5)*0.12,
    swayT:      Math.random()*Math.PI*2,
    tentPhase:  Math.random()*Math.PI*2,
  };
}

export default function AnimatedBackground() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const raf   = useRef(0);

  useEffect(() => {
    const cv  = cvRef.current!;
    const ctx = cv.getContext('2d')!;
    let W = 0, H = 0, frame = 0;
    let snows: Snow[] = [], orbs: Orb[] = [], rays: Ray[] = [], jellies: Jelly[] = [];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;

      snows = Array.from({length:160}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vy: Math.random()*0.36+0.10,
        vx: (Math.random()-0.5)*0.08,
        r:  Math.random()*1.4+0.30,
        a:  Math.random()*0.20+0.05,
        t:  Math.random()*100,
      }));

      orbs = Array.from({length:20}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        angle: Math.random()*Math.PI*2,
        speed: Math.random()*0.40+0.13,
        r: Math.random()*2.8+1.2,
        color: BIOLUM[Math.floor(Math.random()*BIOLUM.length)],
        pulseT: Math.random()*Math.PI*2,
        pulseSpeed: Math.random()*0.018+0.006,
        turnSpeed: (Math.random()-0.5)*0.013,
      }));

      rays = Array.from({length:6}, (_,i) => ({
        baseX: (W/7)*(i+0.7),
        w:     Math.random()*85+40,
        alpha: Math.random()*0.020+0.008,
        t:     Math.random()*Math.PI*2,
        tSpeed:(Math.random()*0.003+0.001)*(Math.random()>0.5?1:-1),
      }));

      jellies = Array.from({length:5}, () => makeJelly(W, H, false));
    };

    init();
    window.addEventListener('resize', init);

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      frame++;

      /* ── 1. Depth gradient tint ── */
      const dg = ctx.createLinearGradient(0, 0, 0, H);
      dg.addColorStop(0,   'rgba(0,28,62,0.20)');
      dg.addColorStop(0.35,'rgba(0,14,38,0.08)');
      dg.addColorStop(0.70,'transparent');
      dg.addColorStop(1,   'rgba(0,0,10,0.28)');
      ctx.fillStyle = dg; ctx.fillRect(0,0,W,H);

      /* ── 2. Animated surface shimmer ── */
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(W, 0);
      for (let sx = W; sx >= 0; sx -= 3) {
        const wy = 70 + Math.sin(sx*0.014 + frame*0.017)*14
                      + Math.sin(sx*0.030 + frame*0.011)*6;
        ctx.lineTo(sx, wy);
      }
      ctx.closePath();
      const sg = ctx.createLinearGradient(0, 0, 0, 90);
      sg.addColorStop(0, 'rgba(55,165,230,0.13)');
      sg.addColorStop(1, 'transparent');
      ctx.fillStyle = sg; ctx.fill();

      /* ── 3. Crepuscular rays ── */
      for (const r of rays) {
        r.t += r.tSpeed;
        const cx = r.baseX + Math.sin(r.t)*55;
        const rg  = ctx.createLinearGradient(cx, 0, cx, H*0.70);
        rg.addColorStop(0,   `rgba(75,190,255,${r.alpha})`);
        rg.addColorStop(0.4, `rgba(75,190,255,${r.alpha*0.30})`);
        rg.addColorStop(1,   'transparent');
        ctx.beginPath();
        ctx.moveTo(cx,             0);
        ctx.lineTo(cx+r.w,         0);
        ctx.lineTo(cx+r.w*2.0,     H*0.70);
        ctx.lineTo(cx-r.w*1.0,     H*0.70);
        ctx.closePath();
        ctx.fillStyle = rg; ctx.fill();
      }

      /* ── 4. Marine snow ── */
      for (const s of snows) {
        s.t  += 0.017;
        s.y  += s.vy;
        s.x  += s.vx + Math.sin(s.t)*0.10;
        if (s.y > H+4)  { s.y=-4; s.x=Math.random()*W; }
        if (s.x < 0)      s.x=W;
        if (s.x > W)      s.x=0;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(200,232,255,${s.a})`; ctx.fill();
      }

      /* ── 5. Bioluminescent orbs ── */
      for (const o of orbs) {
        o.angle += o.turnSpeed + Math.sin(frame*0.005+o.pulseT)*0.004;
        o.x += Math.cos(o.angle)*o.speed;
        o.y += Math.sin(o.angle)*o.speed;
        if (o.x<-40)    o.x=W+40;
        if (o.x>W+40)   o.x=-40;
        if (o.y<-40)    o.y=H+40;
        if (o.y>H+40)   o.y=-40;
        o.pulseT += o.pulseSpeed;
        const pa   = 0.28 + (0.5+0.5*Math.sin(o.pulseT))*0.50;
        const g1   = ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r*10);
        g1.addColorStop(0,ca(o.color,pa*0.17)); g1.addColorStop(1,'transparent');
        ctx.beginPath(); ctx.arc(o.x,o.y,o.r*10,0,Math.PI*2); ctx.fillStyle=g1; ctx.fill();
        const g2   = ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r*3.5);
        g2.addColorStop(0,ca(o.color,pa*0.65)); g2.addColorStop(1,'transparent');
        ctx.beginPath(); ctx.arc(o.x,o.y,o.r*3.5,0,Math.PI*2); ctx.fillStyle=g2; ctx.fill();
        ctx.beginPath(); ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
        ctx.fillStyle=ca(o.color,Math.min(1,pa+0.25)); ctx.fill();
      }

      /* ── 6. Jellyfish ── */
      for (const jf of jellies) {
        jf.pulseT  += jf.pulseSpeed;
        jf.swayT   += 0.011;
        jf.tentPhase += 0.008;
        jf.y += jf.vy;
        jf.x += jf.vx + Math.sin(jf.swayT)*0.16;
        /* Wrap: when floated above top, respawn at bottom */
        if (jf.y < -jf.r*4) {
          const nj = makeJelly(W, H, true);
          jf.x=nj.x; jf.y=nj.y; jf.r=nj.r; jf.color=nj.color;
          jf.vy=nj.vy; jf.vx=nj.vx; jf.swayT=nj.swayT;
        }
        drawJelly(ctx, jf, frame);
      }

      /* ── 7. Bioluminescent bloom ── */
      if (frame % 360 === 0) {
        const bx=Math.random()*W, by=Math.random()*H;
        const bc=BIOLUM[Math.floor(Math.random()*BIOLUM.length)];
        const bg=ctx.createRadialGradient(bx,by,0,bx,by,120);
        bg.addColorStop(0,ca(bc,0.26)); bg.addColorStop(1,'transparent');
        ctx.beginPath(); ctx.arc(bx,by,120,0,Math.PI*2);
        ctx.fillStyle=bg; ctx.fill();
      }
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
