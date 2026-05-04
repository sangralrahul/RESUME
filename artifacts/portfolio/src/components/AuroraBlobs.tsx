/* Deep water ambient — very slow, very subtle */
export default function AuroraBlobs() {
  return (
    <>
      <style>{`
        @keyframes w1 { 0%,100%{transform:translate(0,0) scale(1);}   45%{transform:translate(-55px,45px) scale(1.10);} }
        @keyframes w2 { 0%,100%{transform:translate(0,0) scale(1);}   55%{transform:translate(60px,-50px) scale(1.12);} }
        @keyframes w3 { 0%,100%{transform:translate(0,0) scale(1);}   50%{transform:translate(-30px,-35px) scale(1.08);} }
      `}</style>
      <div style={{
        position:'fixed', top:'-200px', right:'-160px',
        width:'820px', height:'820px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,80,160,0.08) 0%, transparent 60%)',
        filter:'blur(110px)',
        animation:'w1 40s ease-in-out infinite',
        pointerEvents:'none', zIndex:0, willChange:'transform',
      }}/>
      <div style={{
        position:'fixed', bottom:'-160px', left:'-100px',
        width:'680px', height:'680px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,100,180,0.07) 0%, transparent 62%)',
        filter:'blur(120px)',
        animation:'w2 50s ease-in-out infinite',
        pointerEvents:'none', zIndex:0, willChange:'transform',
      }}/>
      <div style={{
        position:'fixed', top:'38%', left:'-150px',
        width:'540px', height:'540px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,60,120,0.06) 0%, transparent 65%)',
        filter:'blur(130px)',
        animation:'w3 58s ease-in-out infinite',
        pointerEvents:'none', zIndex:0, willChange:'transform',
      }}/>
    </>
  );
}
