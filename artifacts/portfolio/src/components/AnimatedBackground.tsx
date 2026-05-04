import { useEffect, useRef } from 'react';

const PALETTE = ['#569CD6', '#4EC9B0', '#6A9955', '#9CDCFE', '#B5CEA8', '#C586C0'];
const CHARS = '#/{}→=[]()·01;,:|_<>!?';

function h2r(hex: string, a: number) {
  return `rgba(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)},${a})`;
}

interface Col    { x: number; y: number; spd: number; len: number; color: string; }
interface Node   { x: number; y: number; vx: number; vy: number; color: string; r: number; }
interface Ring   { x: number; y: number; r: number; mr: number; spd: number; color: string; a: number; }
interface Streak { x: number; y: number; vx: number; len: number; color: string; a: number; life: number; max: number; }

export default function AnimatedBackground() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const raf   = useRef(0);

  useEffect(() => {
    const cv  = cvRef.current!;
    const ctx = cv.getContext('2d')!;

    let cols: Col[] = [], nodes: Node[] = [], rings: Ring[] = [], streaks: Streak[] = [];
    let W = 0, H = 0, frame = 0;

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;

      /* ── Code-rain columns ── */
      cols = [];
      for (let x = 18; x < W; x += 40) {
        cols.push({
          x,
          y: Math.random() * H * 1.5 - H * 0.3,
          spd: Math.random() * 1.1 + 0.35,
          len: Math.floor(Math.random() * 14 + 6),
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        });
      }

      /* ── Particle nodes ── */
      nodes = Array.from({ length: 20 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.55, vy: (Math.random() - 0.5) * 0.55,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        r: Math.random() * 2.2 + 1.2,
      }));
    };

    const spawnRing = () => rings.push({
      x: Math.random() * W, y: Math.random() * H,
      r: 0, mr: Math.random() * 130 + 60,
      spd: Math.random() * 0.9 + 0.5,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      a: Math.random() * 0.3 + 0.15,
    });

    const spawnStreak = () => {
      const d = Math.random() > 0.5 ? 1 : -1;
      const spd = Math.random() * 3.5 + 2;
      streaks.push({
        x: d > 0 ? -60 : W + 60,
        y: Math.random() * H,
        vx: d * spd,
        len: Math.random() * 160 + 90,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        a: Math.random() * 0.4 + 0.2,
        life: 0,
        max: Math.ceil((W + 120) / spd),
      });
    };

    for (let i = 0; i < 3; i++) { spawnRing(); spawnStreak(); }
    init();
    window.addEventListener('resize', init);

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, W, H);
      frame++;

      if (frame % 180 === 0) spawnRing();
      if (frame % 100 === 0 && streaks.length < 8) spawnStreak();

      /* ── Matrix code rain ── */
      ctx.font = `12px 'JetBrains Mono', monospace`;
      for (const col of cols) {
        col.y += col.spd;
        if (col.y - col.len * 14 > H) {
          col.y = -10;
          col.spd  = Math.random() * 1.1 + 0.35;
          col.len  = Math.floor(Math.random() * 14 + 6);
          col.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        }
        for (let i = 0; i < col.len; i++) {
          const cy = col.y - i * 14;
          if (cy < -14 || cy > H + 14) continue;
          const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
          const fade = 1 - i / col.len;
          if (i === 0)       ctx.fillStyle = 'rgba(215,228,255,0.88)';
          else if (i < 3)    ctx.fillStyle = h2r(col.color, fade * 0.72);
          else               ctx.fillStyle = h2r(col.color, fade * 0.32);
          ctx.fillText(ch, col.x, cy);
        }
      }

      /* ── Particle nodes + connections ── */
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = h2r(n.color, 0.6); ctx.fill();
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = h2r(n.color, 0.07); ctx.fill();
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 230) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(86,156,214,${(1 - d / 230) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      /* ── Pulse rings ── */
      rings = rings.filter(r => r.r < r.mr);
      for (const r of rings) {
        r.r += r.spd;
        const a = r.a * (1 - r.r / r.mr);
        ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = h2r(r.color, a); ctx.lineWidth = 1.2; ctx.stroke();
        if (r.r > 28) {
          ctx.beginPath(); ctx.arc(r.x, r.y, r.r * 0.5, 0, Math.PI * 2);
          ctx.strokeStyle = h2r(r.color, a * 0.4); ctx.lineWidth = 0.5; ctx.stroke();
        }
      }

      /* ── Shooting streaks ── */
      streaks = streaks.filter(s => s.life < s.max);
      for (const s of streaks) {
        s.x += s.vx; s.life++;
        const a = s.a * Math.sin((s.life / s.max) * Math.PI);
        const x0 = s.vx > 0 ? s.x - s.len : s.x + s.len;
        const g  = ctx.createLinearGradient(x0, s.y, s.x, s.y);
        g.addColorStop(0, 'transparent');
        g.addColorStop(0.5, h2r(s.color, a * 0.45));
        g.addColorStop(1,   h2r(s.color, a));
        ctx.beginPath(); ctx.moveTo(x0, s.y); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.stroke();
        ctx.beginPath(); ctx.arc(s.x, s.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = h2r(s.color, a); ctx.fill();
      }

      /* ── Scan line ── */
      const sy = ((frame * 0.38) % H);
      const sg = ctx.createLinearGradient(0, sy - 70, 0, sy + 70);
      sg.addColorStop(0, 'transparent');
      sg.addColorStop(0.5, 'rgba(86,156,214,0.04)');
      sg.addColorStop(1, 'transparent');
      ctx.fillStyle = sg; ctx.fillRect(0, sy - 70, W, 140);
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
