export default function AuroraBlobs() {
  return (
    <>
      <style>{`
        @keyframes aurora1 {
          0%   { transform: translate(0px,0px)    scale(1);    opacity: 0.65; }
          25%  { transform: translate(-60px,50px) scale(1.14); opacity: 0.85; }
          50%  { transform: translate(40px,-35px) scale(0.90); opacity: 0.55; }
          75%  { transform: translate(70px,60px)  scale(1.10); opacity: 0.80; }
          100% { transform: translate(0px,0px)    scale(1);    opacity: 0.65; }
        }
        @keyframes aurora2 {
          0%   { transform: translate(0px,0px)     scale(1);    opacity: 0.55; }
          33%  { transform: translate(70px,-60px)  scale(1.18); opacity: 0.75; }
          66%  { transform: translate(-50px,50px)  scale(0.88); opacity: 0.45; }
          100% { transform: translate(0px,0px)     scale(1);    opacity: 0.55; }
        }
        @keyframes aurora3 {
          0%   { transform: translate(0px,0px)     scale(1);    opacity: 0.45; }
          40%  { transform: translate(-70px,-50px) scale(1.20); opacity: 0.65; }
          80%  { transform: translate(60px,70px)   scale(0.86); opacity: 0.38; }
          100% { transform: translate(0px,0px)     scale(1);    opacity: 0.45; }
        }
        @keyframes aurora4 {
          0%   { transform: translate(0px,0px)    scale(1);    opacity: 0.35; }
          50%  { transform: translate(50px,-70px) scale(1.12); opacity: 0.55; }
          100% { transform: translate(0px,0px)    scale(1);    opacity: 0.35; }
        }
      `}</style>

      <div style={{ position: 'fixed', top: '-180px', right: '-120px', width: '780px', height: '780px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,156,214,0.22) 0%, rgba(86,156,214,0.08) 45%, transparent 70%)', filter: 'blur(55px)', animation: 'aurora1 22s ease-in-out infinite', pointerEvents: 'none', zIndex: 0, willChange: 'transform, opacity' }} />
      <div style={{ position: 'fixed', bottom: '-130px', left: '-80px', width: '680px', height: '680px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,201,176,0.18) 0%, rgba(78,201,176,0.06) 45%, transparent 70%)', filter: 'blur(65px)', animation: 'aurora2 28s ease-in-out infinite', pointerEvents: 'none', zIndex: 0, willChange: 'transform, opacity' }} />
      <div style={{ position: 'fixed', top: '38%', left: '-180px', width: '560px', height: '560px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(206,145,120,0.14) 0%, rgba(206,145,120,0.04) 50%, transparent 70%)', filter: 'blur(75px)', animation: 'aurora3 34s ease-in-out infinite', pointerEvents: 'none', zIndex: 0, willChange: 'transform, opacity' }} />
      <div style={{ position: 'fixed', top: '8%', left: '32%', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197,134,192,0.11) 0%, rgba(197,134,192,0.03) 50%, transparent 70%)', filter: 'blur(85px)', animation: 'aurora4 19s ease-in-out infinite', pointerEvents: 'none', zIndex: 0, willChange: 'transform, opacity' }} />
      <div style={{ position: 'fixed', bottom: '3%', right: '-60px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,220,170,0.10) 0%, rgba(220,220,170,0.03) 50%, transparent 70%)', filter: 'blur(80px)', animation: 'aurora1 26s ease-in-out infinite reverse', pointerEvents: 'none', zIndex: 0, willChange: 'transform, opacity' }} />
    </>
  );
}
