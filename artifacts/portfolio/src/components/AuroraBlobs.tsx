/* Deep ocean ambient light — large slow blobs, very low opacity */
export default function AuroraBlobs() {
  return (
    <>
      <style>{`
        @keyframes oc1 {
          0%,100%{ transform:translate(0,0) scale(1);      }
          33%    { transform:translate(-60px,50px) scale(1.12); }
          66%    { transform:translate(40px,-40px) scale(0.90); }
        }
        @keyframes oc2 {
          0%,100%{ transform:translate(0,0) scale(1);      }
          40%    { transform:translate(65px,-55px) scale(1.14);}
          80%    { transform:translate(-45px,50px) scale(0.88);}
        }
        @keyframes oc3 {
          0%,100%{ transform:translate(0,0) scale(1);      }
          50%    { transform:translate(-35px,-40px) scale(1.10);}
        }
      `}</style>

      {/* Top-right — deep ocean teal */}
      <div style={{
        position:'fixed', top:'-200px', right:'-160px',
        width:'800px', height:'800px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,190,220,0.07) 0%, transparent 60%)',
        filter:'blur(100px)',
        animation:'oc1 38s ease-in-out infinite',
        pointerEvents:'none', zIndex:0, willChange:'transform',
      }}/>

      {/* Bottom-left — aqua */}
      <div style={{
        position:'fixed', bottom:'-160px', left:'-100px',
        width:'650px', height:'650px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,210,200,0.06) 0%, transparent 62%)',
        filter:'blur(110px)',
        animation:'oc2 48s ease-in-out infinite',
        pointerEvents:'none', zIndex:0, willChange:'transform',
      }}/>

      {/* Mid-left — deep navy */}
      <div style={{
        position:'fixed', top:'40%', left:'-150px',
        width:'520px', height:'520px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,80,160,0.08) 0%, transparent 65%)',
        filter:'blur(120px)',
        animation:'oc3 55s ease-in-out infinite',
        pointerEvents:'none', zIndex:0, willChange:'transform',
      }}/>
    </>
  );
}
