export default function AuroraBlobs() {
  return (
    <>
      <style>{`
        @keyframes aurora1 {
          0%   { transform: translate(0px, 0px)   scale(1);    opacity: 0.5; }
          25%  { transform: translate(-50px, 40px) scale(1.12); opacity: 0.7; }
          50%  { transform: translate(30px, -30px) scale(0.92); opacity: 0.4; }
          75%  { transform: translate(60px, 50px)  scale(1.08); opacity: 0.65; }
          100% { transform: translate(0px, 0px)   scale(1);    opacity: 0.5; }
        }
        @keyframes aurora2 {
          0%   { transform: translate(0px, 0px)    scale(1);    opacity: 0.4; }
          33%  { transform: translate(60px, -50px) scale(1.15); opacity: 0.6; }
          66%  { transform: translate(-40px, 40px) scale(0.9);  opacity: 0.35; }
          100% { transform: translate(0px, 0px)    scale(1);    opacity: 0.4; }
        }
        @keyframes aurora3 {
          0%   { transform: translate(0px, 0px)    scale(1);    opacity: 0.3; }
          40%  { transform: translate(-60px, -40px) scale(1.18); opacity: 0.5; }
          80%  { transform: translate(50px, 60px)  scale(0.88); opacity: 0.25; }
          100% { transform: translate(0px, 0px)    scale(1);    opacity: 0.3; }
        }
        @keyframes aurora4 {
          0%   { transform: translate(0px, 0px)   scale(1);    opacity: 0.25; }
          50%  { transform: translate(40px, -60px) scale(1.1); opacity: 0.4; }
          100% { transform: translate(0px, 0px)   scale(1);    opacity: 0.25; }
        }
      `}</style>

      {/* Top-right keyword blue blob */}
      <div style={{
        position: 'fixed', top: '-200px', right: '-150px',
        width: '700px', height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(86,156,214,0.18) 0%, rgba(86,156,214,0.06) 45%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'aurora1 22s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
        willChange: 'transform, opacity',
      }} />

      {/* Bottom-left teal blob */}
      <div style={{
        position: 'fixed', bottom: '-150px', left: '-100px',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(78,201,176,0.14) 0%, rgba(78,201,176,0.05) 45%, transparent 70%)',
        filter: 'blur(70px)',
        animation: 'aurora2 28s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
        willChange: 'transform, opacity',
      }} />

      {/* Center-left orange blob */}
      <div style={{
        position: 'fixed', top: '40%', left: '-200px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(206,145,120,0.1) 0%, rgba(206,145,120,0.03) 50%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'aurora3 34s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
        willChange: 'transform, opacity',
      }} />

      {/* Top-center mauve blob */}
      <div style={{
        position: 'fixed', top: '10%', left: '35%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,134,192,0.08) 0%, rgba(197,134,192,0.02) 50%, transparent 70%)',
        filter: 'blur(90px)',
        animation: 'aurora4 18s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
        willChange: 'transform, opacity',
      }} />

      {/* Bottom-right yellow blob */}
      <div style={{
        position: 'fixed', bottom: '5%', right: '-80px',
        width: '450px', height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,220,170,0.08) 0%, rgba(220,220,170,0.02) 50%, transparent 70%)',
        filter: 'blur(85px)',
        animation: 'aurora1 26s ease-in-out infinite reverse',
        pointerEvents: 'none', zIndex: 0,
        willChange: 'transform, opacity',
      }} />
    </>
  );
}
