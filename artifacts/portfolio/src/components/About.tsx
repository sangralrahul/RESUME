import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const pyClassLines = [
  <><span className="t-cmt"># profile.py</span></>,
  <></>,
  <><span className="t-kw">class </span><span className="t-fn">RahulSangral</span><span className="t-op">:</span></>,
  <><span style={{marginLeft:20}}><span className="t-cmt">"""</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-cmt">AI/ML Engineer | Data Analyst | Founder.</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-cmt">Building production-grade ML systems since 2023.</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-cmt">"""</span></span></>,
  <></>,
  <><span style={{marginLeft:20}}><span className="t-var">role</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"AI/ML Engineer"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">experience</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"2+ years"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">location</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"Jammu, India"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">timezone</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"US Compatible"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">building</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"Aethex"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">users</span><span className="t-op">: </span><span className="t-type">int</span><span className="t-op"> = </span><span className="t-num">200</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">stack</span><span className="t-op">: </span><span className="t-type">list</span><span className="t-op"> = [</span><span className="t-str">"Python"</span><span className="t-op">, </span><span className="t-str">"React"</span><span className="t-op">, </span><span className="t-str">"FastAPI"</span><span className="t-op">]</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">status</span><span className="t-op">: </span><span className="t-type">Literal</span><span className="t-op">["</span><span className="t-str">available</span><span className="t-op">"] = </span><span className="t-str">"available"</span><span style={{color:'#4EC9B0', marginLeft:6}}>●</span></span></>,
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="about" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}
          className="about-grid">

          {/* Left: bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span className="section-num">01</span>
              <span className="label-tag">about</span>
            </div>

            <h2 style={{
              fontFamily: 'Inter', fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#D4D4D4', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '28px',
            }}>
              AI/ML Engineer.<br />
              <span style={{ color: 'rgba(212,212,212,0.25)' }}>Data analyst.</span><br />
              Founder.
            </h2>

            <p style={{ fontFamily: 'Inter', fontSize: '0.92rem', color: 'rgba(212,212,212,0.42)', lineHeight: 1.85, marginBottom: '18px' }}>
              2+ years of independent development experience building ML pipelines,
              RAG systems, ETL workflows, REST APIs, SQL/BI dashboards, and full-stack applications.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: '0.92rem', color: 'rgba(212,212,212,0.42)', lineHeight: 1.85, marginBottom: '36px' }}>
              Founder of{' '}
              <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
                className="link-draw" style={{ color: '#569CD6', fontWeight: 500, textDecoration: 'none' }}>
                Aethex
              </a>
              {' '}— a live AI-powered medical SaaS with 200+ registered users, featuring Cadus AI,
              drug reference database, NEET-PG MCQ engine, and CME hub.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { value: '200+', label: 'users', color: '#4EC9B0' },
                { value: '5+', label: 'certifications', color: '#569CD6' },
                { value: '2', label: 'forage_sims', color: '#CE9178' },
                { value: '2+', label: 'years_active', color: '#DCDCAA' },
              ].map((s) => (
                <div key={s.label} className="card-glass stagger-1"
                  style={{ padding: '22px 20px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, fontSize: '1.6rem', color: s.color, letterSpacing: '-0.02em', marginBottom: '5px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'rgba(212,212,212,0.35)' }}>
                    <span style={{ color: '#6A9955' }}># </span>{s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Python class code block */}
          <div>
            <div className="code-block">
              <div className="code-tab-bar">
                <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                  {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                    <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                  ))}
                </div>
                <div className="code-tab active">
                  <div className="code-tab-dot" style={{ background: '#CE9178' }} />
                  profile.py
                </div>
              </div>
              <div className="code-body">
                {pyClassLines.map((line, i) => (
                  <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
                    <span className="ln">{i + 1}</span>
                    <span style={{ flex: 1 }}>{line}</span>
                  </div>
                ))}
              </div>
              <div className="code-status-bar">
                <span style={{ color: '#6A9955' }}>Python 3.11</span>
                <span style={{ color: 'rgba(212,212,212,0.2)' }}>profile.py</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
