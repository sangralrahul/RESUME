/* Deep-ocean ambient light blobs */
export default function AuroraBlobs() {
  return (
    <>
      <style>{`
        @keyframes deepsea1 {
          0%,100% { transform: translate(0,0) scale(1); }
          30%      { transform: translate(-50px,40px) scale(1.10); }
          70%      { transform: translate(35px,-30px) scale(0.92); }
        }
        @keyframes deepsea2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(55px,-50px) scale(1.12); }
          75%      { transform: translate(-40px,45px) scale(0.90); }
        }
        @keyframes deepsea3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-40px,-35px) scale(1.08); }
        }
      `}</style>

      {/* Top-right — deep ocean teal */}
      <div style={{
        position: 'fixed', top: '-220px', right: '-180px',
        width: '900px', height: '900px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 62%)',
        filter: 'blur(90px)',
        animation: 'deepsea1 32s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0, willChange: 'transform',
      }} />

      {/* Bottom-left — aqua */}
      <div style={{
        position: 'fixed', bottom: '-180px', left: '-120px',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,206,209,0.06) 0%, transparent 62%)',
        filter: 'blur(100px)',
        animation: 'deepsea2 42s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0, willChange: 'transform',
      }} />

      {/* Mid-left — deep navy accent */}
      <div style={{
        position: 'fixed', top: '35%', left: '-180px',
        width: '560px', height: '560px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,77,143,0.08) 0%, transparent 65%)',
        filter: 'blur(110px)',
        animation: 'deepsea3 50s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0, willChange: 'transform',
      }} />
    </>
  );
}
