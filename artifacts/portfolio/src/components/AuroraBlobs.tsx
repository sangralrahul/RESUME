export default function AuroraBlobs() {
  return (
    <>
      <style>{`
        @keyframes orb1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-40px,35px) scale(1.08); }
          66%      { transform: translate(30px,-25px) scale(0.94); }
        }
        @keyframes orb2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(45px,-40px) scale(1.10); }
          80%     { transform: translate(-30px,35px) scale(0.92); }
        }
        @keyframes orb3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-35px,-30px) scale(1.06); }
        }
      `}</style>

      {/* Top-right blue orb */}
      <div style={{
        position: 'fixed', top: '-200px', right: '-150px',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(86,156,214,0.08) 0%, transparent 65%)',
        filter: 'blur(80px)',
        animation: 'orb1 30s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0, willChange: 'transform',
      }} />

      {/* Bottom-left teal orb */}
      <div style={{
        position: 'fixed', bottom: '-150px', left: '-100px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(78,201,176,0.06) 0%, transparent 65%)',
        filter: 'blur(90px)',
        animation: 'orb2 38s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0, willChange: 'transform',
      }} />

      {/* Center-left muted purple */}
      <div style={{
        position: 'fixed', top: '40%', left: '-160px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,134,192,0.05) 0%, transparent 65%)',
        filter: 'blur(100px)',
        animation: 'orb3 44s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0, willChange: 'transform',
      }} />
    </>
  );
}
