import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const bioLines = [
  { type: 'file', text: 'profile.py' },
  { type: 'empty' },
  { type: 'header', text: '── Who I Am ──────────────────────────────────' },
  { type: 'desc', text: 'AI/ML Developer with 2+ years of independent' },
  { type: 'desc', text: 'development experience. I build ML pipelines,' },
  { type: 'desc', text: 'RAG systems, ETL workflows, REST APIs, SQL' },
  { type: 'desc', text: 'dashboards, and full-stack applications.' },
  { type: 'empty' },
  { type: 'header', text: '── What I Built ──────────────────────────────' },
  { type: 'desc', text: 'Founded Aethex — a live AI medical SaaS with' },
  { type: 'desc', text: '200+ registered users. Features include Cadus AI' },
  { type: 'desc', text: 'clinical assistant, drug reference database,' },
  { type: 'desc', text: 'NEET-PG MCQ engine, and CME hub.' },
  { type: 'empty' },
  { type: 'header', text: '── Currently ─────────────────────────────────' },
  { type: 'bullet', text: 'Available immediately — remote or on-site' },
  { type: 'bullet', text: 'Open to AI/ML roles, data projects, collab' },
  { type: 'bullet', text: 'U.S. time zone compatible' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  const cmt = 'rgba(212,212,212,0.28)';
  const txt = 'rgba(212,212,212,0.62)';
  const hdr = '#569CD6';
  const org = '#CE9178';

  return (
    <section id="about" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="about-grid">

          {/* Left: bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span className="section-num">01</span>
              <span className="label-tag">about</span>
            </div>

            <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '28px' }}>
              AI/ML Developer.<br />
              <span style={{ color: 'rgba(212,212,212,0.22)' }}>Data Analyst.</span><br />
              Founder.
            </h2>

            <p style={{ fontFamily: 'Inter', fontSize: '0.92rem', color: 'rgba(212,212,212,0.42)', lineHeight: 1.85, marginBottom: '18px' }}>
              2+ years building ML pipelines, RAG systems, ETL workflows,
              REST APIs, SQL dashboards, and full-stack applications.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: '0.92rem', color: 'rgba(212,212,212,0.42)', lineHeight: 1.85, marginBottom: '36px' }}>
              Founder of{' '}
              <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
                className="link-draw" style={{ color: '#569CD6', fontWeight: 500, textDecoration: 'none' }}>
                Aethex
              </a>
              {' '}— a live AI medical SaaS with 200+ registered users.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { value: '200+', label: 'Platform Users', color: '#4EC9B0' },
                { value: '5+', label: 'Certifications', color: '#569CD6' },
                { value: '2', label: 'Forage Simulations', color: '#CE9178' },
                { value: '2+', label: 'Years Active', color: '#DCDCAA' },
              ].map((s) => (
                <div key={s.label} className="card-glass stagger-1" style={{ padding: '22px 20px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, fontSize: '1.6rem', color: s.color, letterSpacing: '-0.02em', marginBottom: '6px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: 'rgba(212,212,212,0.38)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: English comment-format code panel */}
          <div>
            <div className="code-block">
              <div className="code-tab-bar">
                <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                  {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                    <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                  ))}
                </div>
                <div className="code-tab active">
                  <div className="code-tab-dot" style={{ background: '#CE9178' }} />
                  profile.py
                </div>
              </div>

              <div className="code-body">
                {bioLines.map((line, i) => {
                  if (line.type === 'empty') {
                    return (
                      <div key={i} style={{ display: 'flex', minHeight: '0.55em' }}>
                        <span className="ln">{i + 1}</span>
                      </div>
                    );
                  }
                  if (line.type === 'file') {
                    return (
                      <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
                        <span className="ln">{i + 1}</span>
                        <span style={{ color: cmt, fontStyle: 'italic' }}># {line.text}</span>
                      </div>
                    );
                  }
                  if (line.type === 'header') {
                    return (
                      <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
                        <span className="ln">{i + 1}</span>
                        <span><span style={{ color: cmt }}># </span><span style={{ color: hdr }}>{line.text}</span></span>
                      </div>
                    );
                  }
                  if (line.type === 'desc') {
                    return (
                      <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
                        <span className="ln">{i + 1}</span>
                        <span style={{ color: cmt }}>#  <span style={{ color: txt }}>{line.text}</span></span>
                      </div>
                    );
                  }
                  if (line.type === 'bullet') {
                    return (
                      <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
                        <span className="ln">{i + 1}</span>
                        <span><span style={{ color: cmt }}>#  </span><span style={{ color: org }}>→  </span><span style={{ color: txt }}>{line.text}</span></span>
                      </div>
                    );
                  }
                  return null;
                })}
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
