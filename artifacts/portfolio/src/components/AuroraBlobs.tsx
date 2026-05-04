/* Deep ocean ambient — very large, very slow, pure navy/cobalt */
export default function AuroraBlobs() {
  return (
    <>
      <style>{`
        @keyframes ob1{0%,100%{transform:translate(0,0) scale(1);}45%{transform:translate(-60px,50px) scale(1.12);}}
        @keyframes ob2{0%,100%{transform:translate(0,0) scale(1);}55%{transform:translate(65px,-55px) scale(1.14);}}
        @keyframes ob3{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-30px,-40px) scale(1.10);}}
      `}</style>
      <div style={{
        position:'fixed',top:'-220px',right:'-180px',
        width:'900px',height:'900px',borderRadius:'50%',
        background:'radial-gradient(circle,rgba(0,70,160,0.10) 0%,transparent 60%)',
        filter:'blur(120px)',animation:'ob1 42s ease-in-out infinite',
        pointerEvents:'none',zIndex:0,willChange:'transform',
      }}/>
      <div style={{
        position:'fixed',bottom:'-180px',left:'-120px',
        width:'720px',height:'720px',borderRadius:'50%',
        background:'radial-gradient(circle,rgba(0,55,140,0.09) 0%,transparent 62%)',
        filter:'blur(130px)',animation:'ob2 52s ease-in-out infinite',
        pointerEvents:'none',zIndex:0,willChange:'transform',
      }}/>
      <div style={{
        position:'fixed',top:'38%',left:'-160px',
        width:'580px',height:'580px',borderRadius:'50%',
        background:'radial-gradient(circle,rgba(0,40,110,0.07) 0%,transparent 65%)',
        filter:'blur(140px)',animation:'ob3 60s ease-in-out infinite',
        pointerEvents:'none',zIndex:0,willChange:'transform',
      }}/>
    </>
  );
}
