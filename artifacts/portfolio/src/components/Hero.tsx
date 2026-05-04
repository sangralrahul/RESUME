import { useState } from 'react';

const pyLines = [
  <><span className="t-cmt"># rahul.profile.py</span></>,
  <></>,
  <><span className="t-kw">class </span><span className="t-fn">RahulSangral</span><span className="t-op">:</span></>,
  <><span style={{marginLeft:20}}><span className="t-cmt">"""AI/ML Engineer | Data Analyst | Founder"""</span></span></>,
  <></>,
  <><span style={{marginLeft:20}}><span className="t-var">role</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"AI/ML Engineer"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">experience</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"2+ years"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">location</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"Jammu, India"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">timezone</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"US Compatible"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">building</span><span className="t-op">: </span><span className="t-type">str</span><span className="t-op"> = </span><span className="t-str">"Aethex"</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">users</span><span className="t-op">: </span><span className="t-type">int</span><span className="t-op"> = </span><span className="t-num">200</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">status</span><span className="t-op">: </span><span className="t-type">Literal</span><span className="t-op">["</span><span className="t-str">available</span><span className="t-op">"] = </span><span className="t-str">"available"</span><span style={{color:'#4EC9B0', marginLeft: 4}}>●</span></span></>,
];

const tsLines = [
  <><span className="t-cmt">// rahul.profile.ts</span></>,
  <></>,
  <><span className="t-kw">interface </span><span className="t-type">Profile</span><span className="t-op"> {'{'}</span></>,
  <><span style={{marginLeft:20}}><span className="t-var">role</span><span className="t-op">: </span><span className="t-type">string</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">experience</span><span className="t-op">: </span><span className="t-type">string</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">location</span><span className="t-op">: </span><span className="t-type">string</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">building</span><span className="t-op">: </span><span className="t-type">string</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">users</span><span className="t-op">: </span><span className="t-type">number</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">status</span><span className="t-op">: </span><span className="t-str">"available"</span></span></>,
  <><span className="t-op">{'}'}</span></>,
  <></>,
  <><span className="t-kw">const </span><span className="t-var">profile</span><span className="t-op">: </span><span className="t-type">Profile</span><span className="t-op"> = {'{'}</span></>,
  <><span style={{marginLeft:20}}><span className="t-var">role</span><span className="t-op">: </span><span className="t-str">"AI/ML Engineer"</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">experience</span><span className="t-op">: </span><span className="t-str">"2+ years"</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">users</span><span className="t-op">: </span><span className="t-num">200</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-var">status</span><span className="t-op">: </span><span className="t-str">"available"</span><span style={{color:'#4EC9B0', marginLeft: 4}}>●</span></span></>,
  <><span className="t-op">{'}'}</span></>,
];

export default function Hero() {
  const [tab, setTab] = useState<'py'|'ts'>('py');
  const lines = tab === 'py' ? pyLines : tsLines;

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px', position: 'relative', overflow: 'hidden' }}
    >
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 28px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 430px', gap: '60px', alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div>
            <div className="hero-line-1" style={{ marginBottom: '44px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'rgba(78,201,176,0.06)',
                border: '1px solid rgba(78,201,176,0.18)',
                borderRadius: '6px', padding: '6px 14px 6px 12px',
                fontFamily: 'JetBrains Mono', fontSize: '0.68rem',
              }}>
                <span className="pulse-green" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4EC9B0', display: 'block', flexShrink: 0 }} />
                <span style={{ color: '#4EC9B0', letterSpacing: '0.06em' }}>
                  <span style={{ color: 'rgba(78,201,176,0.5)' }}>status: </span>
                  "available immediately"
                </span>
              </span>
            </div>

            <h1 className="hero-line-2" style={{
              fontFamily: 'Inter', fontWeight: 900,
              fontSize: 'clamp(3.4rem, 7.5vw, 7.5rem)',
              lineHeight: 0.92, letterSpacing: '-0.04em',
              color: '#D4D4D4', marginBottom: '32px',
            }}>
              Rahul<br />
              <span style={{ color: 'rgba(212,212,212,0.18)' }}>Sangral</span>
            </h1>

            <div className="hero-line-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
              {[
                { label: 'AI/ML Engineer', color: '#569CD6' },
                { label: 'Data Analyst', color: '#4EC9B0' },
                { label: 'Full-Stack Dev', color: '#CE9178' },
                { label: 'Founder', color: '#DCDCAA' },
              ].map((r) => (
                <span key={r.label} style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.67rem',
                  padding: '4px 11px', borderRadius: '5px',
                  background: `${r.color}10`,
                  border: `1px solid ${r.color}28`,
                  color: r.color,
                }}>
                  <span style={{ opacity: 0.5 }}>@</span>{r.label}
                </span>
              ))}
            </div>

            <p className="hero-line-3" style={{
              fontFamily: 'Inter', fontSize: '0.98rem',
              color: 'rgba(212,212,212,0.4)',
              lineHeight: 1.8, maxWidth: '480px', marginBottom: '40px',
            }}>
              Building ML pipelines, RAG systems, and AI products.
              Founder of{' '}
              <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
                className="link-draw" style={{ color: '#569CD6', fontWeight: 500 }}>
                Aethex
              </a>
              {' '}— a live medical SaaS with 200+ users.
            </p>

            <div className="hero-line-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '68px' }}>
              <a href="#projects" data-testid="btn-view-work" className="btn-blue"
                style={{ padding: '11px 26px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                view_work() <span style={{ opacity: 0.5 }}>→</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                data-testid="btn-download-resume" className="btn-ghost"
                style={{ padding: '11px 26px', textDecoration: 'none' }}>
                resume.pdf ↗
              </a>
              <a href="https://linkedin.com/in/rahulsangral" target="_blank" rel="noopener noreferrer"
                className="btn-ghost" style={{ padding: '11px 26px', textDecoration: 'none' }}>
                linkedin ↗
              </a>
            </div>

            <div className="hero-line-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', maxWidth: '800px' }}>
              {[
                { value: '200+', label: 'users', note: 'Aethex' },
                { value: '60%', label: 'faster_analysis', note: 'AI engine' },
                { value: '10h+', label: 'saved_weekly', note: 'SND tech' },
                { value: '2+', label: 'years_building', note: 'AI/ML' },
              ].map((s) => (
                <div key={s.label} className="stat-card"
                  style={{
                    background: 'rgba(255,255,255,0.018)',
                    border: '1px solid rgba(86,156,214,0.08)',
                    padding: '20px 16px',
                    transition: 'background 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(86,156,214,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(86,156,214,0.22)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.018)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(86,156,214,0.08)';
                  }}
                >
                  <div className="stat-val" style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, fontSize: '1.4rem', color: '#D4D4D4', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: '#9CDCFE', marginBottom: '3px' }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.56rem', color: 'rgba(212,212,212,0.18)' }}>
                    <span style={{ color: '#6A9955' }}># </span>{s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dual-tab code card */}
          <div className="hero-code-card">
            <div className="code-block" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              {/* Tab bar */}
              <div className="code-tab-bar" style={{ gap: 0 }}>
                <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                  {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                    <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                  ))}
                </div>
                {([['py', 'profile.py', '#CE9178'], ['ts', 'profile.ts', '#569CD6']] as const).map(([id, label, color]) => (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    style={{
                      background: 'none', border: 'none', padding: '0 14px', height: '100%',
                      fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
                      color: tab === id ? '#D4D4D4' : 'rgba(212,212,212,0.3)',
                      borderBottom: tab === id ? `2px solid ${color}` : '2px solid transparent',
                      cursor: 'none',
                      transition: 'color 0.2s, border-color 0.2s',
                      display: 'flex', alignItems: 'center', gap: '7px',
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, opacity: tab === id ? 0.8 : 0.3 }} />
                    {label}
                  </button>
                ))}
              </div>

              {/* Code body */}
              <div className="code-body">
                {lines.map((line, i) => (
                  <div key={`${tab}-${i}`} style={{ display: 'flex', minHeight: '1.2em' }}>
                    <span className="ln">{i + 1}</span>
                    <span style={{ flex: 1 }}>{line}</span>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="code-status-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4EC9B0' }} />
                  <span style={{ color: '#4EC9B0' }}>open to work</span>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ color: 'rgba(212,212,212,0.2)' }}>{tab === 'py' ? 'Python' : 'TypeScript'}</span>
                  <span style={{ color: 'rgba(212,212,212,0.2)' }}>UTF-8</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '7px', marginTop: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'github.com/sangralrahul', href: 'https://github.com/sangralrahul' },
                { label: 'aethex.in', href: 'https://aethex.in' },
              ].map((b) => (
                <a key={b.href} href={b.href} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '5px 13px', fontSize: '0.63rem', textDecoration: 'none' }}
                >
                  {b.label} ↗
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-code-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}
