import { useState } from 'react';

// Each line: { type: 'file'|'empty'|'header'|'kv'|'desc'|'bullet', ... }
interface Line {
  type: 'file' | 'empty' | 'header' | 'kv' | 'desc' | 'bullet';
  content?: string;
  key?: string;
  value?: string;
  green?: boolean;
}

const pyLines: Line[] = [
  { type: 'file', content: 'rahul.profile.py' },
  { type: 'empty' },
  { type: 'header', content: '── Identity ───────────────────────────' },
  { type: 'kv', key: 'Role',          value: 'AI / ML Developer' },
  { type: 'kv', key: 'Experience',    value: '2+ years' },
  { type: 'kv', key: 'Location',      value: 'Jammu, India' },
  { type: 'kv', key: 'Timezone',      value: 'US Compatible' },
  { type: 'empty' },
  { type: 'header', content: '── Currently Building ─────────────────' },
  { type: 'kv', key: 'Product',       value: 'Aethex (aethex.in)' },
  { type: 'kv', key: 'Active Users',  value: '200+ registered' },
  { type: 'kv', key: 'Stack',         value: 'Python · React · FastAPI' },
  { type: 'empty' },
  { type: 'header', content: '── Availability ───────────────────────' },
  { type: 'kv', key: 'Status',        value: 'available immediately', green: true },
  { type: 'kv', key: 'Open to',       value: 'Remote · On-site · U.S. hours' },
];

const tsLines: Line[] = [
  { type: 'file', content: 'rahul.contact.ts' },
  { type: 'empty' },
  { type: 'header', content: '── Contact ─────────────────────────────' },
  { type: 'kv', key: 'Email',         value: 'rahul.rishusangral@gmail.com' },
  { type: 'kv', key: 'Phone',         value: '+91 9682394363' },
  { type: 'kv', key: 'LinkedIn',      value: 'linkedin.com/in/rahulsangral' },
  { type: 'kv', key: 'GitHub',        value: 'github.com/sangralrahul' },
  { type: 'empty' },
  { type: 'header', content: '── Looking For ─────────────────────────' },
  { type: 'kv', key: 'Roles',         value: 'AI/ML Developer, Data Analyst' },
  { type: 'kv', key: 'Projects',      value: 'AI products, data pipelines' },
  { type: 'kv', key: 'Collab',        value: 'Open to investment & building' },
  { type: 'empty' },
  { type: 'kv', key: 'Status',        value: 'available immediately', green: true },
];

function CodeLine({ line, num }: { line: Line; num: number }) {
  const cmt = 'rgba(212,212,212,0.28)';
  const val = 'rgba(212,212,212,0.72)';
  const hdr = '#569CD6';
  const key = '#9CDCFE';
  const grn = '#4EC9B0';

  if (line.type === 'empty') {
    return (
      <div style={{ display: 'flex', minHeight: '0.6em' }}>
        <span className="ln">{num}</span>
      </div>
    );
  }
  if (line.type === 'file') {
    return (
      <div style={{ display: 'flex', minHeight: '1.1em' }}>
        <span className="ln">{num}</span>
        <span style={{ color: cmt, fontStyle: 'italic' }}># {line.content}</span>
      </div>
    );
  }
  if (line.type === 'header') {
    return (
      <div style={{ display: 'flex', minHeight: '1.1em' }}>
        <span className="ln">{num}</span>
        <span><span style={{ color: cmt }}>{'# '}</span><span style={{ color: hdr }}>{line.content}</span></span>
      </div>
    );
  }
  if (line.type === 'kv') {
    return (
      <div style={{ display: 'flex', minHeight: '1.1em' }}>
        <span className="ln">{num}</span>
        <span>
          <span style={{ color: cmt }}>#  </span>
          <span style={{ color: key, display: 'inline-block', minWidth: '100px' }}>{line.key}</span>
          <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 8px' }}>→</span>
          <span style={{ color: line.green ? grn : val }}>{line.value}</span>
          {line.green && <span style={{ color: grn, marginLeft: 5 }}>●</span>}
        </span>
      </div>
    );
  }
  return null;
}

export default function Hero() {
  const [tab, setTab] = useState<'py' | 'ts'>('py');
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
                background: 'rgba(78,201,176,0.06)', border: '1px solid rgba(78,201,176,0.18)',
                borderRadius: '6px', padding: '7px 16px 7px 12px',
                fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
              }}>
                <span className="pulse-green" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4EC9B0', display: 'block', flexShrink: 0 }} />
                <span style={{ color: '#4EC9B0' }}>Available immediately — remote or on-site</span>
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
                { label: 'AI / ML Developer', color: '#569CD6' },
                { label: 'Data Analyst', color: '#4EC9B0' },
                { label: 'Full-Stack Dev', color: '#CE9178' },
                { label: 'Founder', color: '#DCDCAA' },
              ].map((r) => (
                <span key={r.label} style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.67rem',
                  padding: '4px 12px', borderRadius: '5px',
                  background: `${r.color}10`, border: `1px solid ${r.color}28`,
                  color: r.color,
                }}>
                  {r.label}
                </span>
              ))}
            </div>

            <p className="hero-line-3" style={{
              fontFamily: 'Inter', fontSize: '0.98rem',
              color: 'rgba(212,212,212,0.42)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '40px',
            }}>
              Building ML pipelines, RAG systems, and AI-powered products.
              Founder of{' '}
              <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
                className="link-draw" style={{ color: '#569CD6', fontWeight: 500 }}>
                Aethex
              </a>
              {' '}— a live medical SaaS with 200+ users.
            </p>

            <div className="hero-line-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '68px' }}>
              <a href="#projects" data-testid="btn-view-work" className="btn-blue"
                style={{ padding: '11px 26px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter', fontWeight: 600 }}>
                View Work <span style={{ opacity: 0.6 }}>→</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                data-testid="btn-download-resume" className="btn-ghost"
                style={{ padding: '11px 26px', textDecoration: 'none', fontFamily: 'Inter' }}>
                Resume ↗
              </a>
              <a href="https://linkedin.com/in/rahulsangral" target="_blank" rel="noopener noreferrer"
                className="btn-ghost" style={{ padding: '11px 26px', textDecoration: 'none', fontFamily: 'Inter' }}>
                LinkedIn ↗
              </a>
            </div>

            <div className="hero-line-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', maxWidth: '800px' }}>
              {[
                { value: '200+', label: 'Platform Users', note: '# Aethex' },
                { value: '60%', label: 'Faster Analysis', note: '# AI Engine' },
                { value: '10h+', label: 'Saved Weekly', note: '# SND Tech' },
                { value: '2+', label: 'Years Building', note: '# AI / ML' },
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
                  <div className="stat-val" style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, fontSize: '1.4rem', color: '#D4D4D4', letterSpacing: '-0.02em', marginBottom: '5px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.72rem', color: 'rgba(212,212,212,0.45)', marginBottom: '3px' }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.56rem', color: '#6A9955' }}>
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dual-tab code card */}
          <div className="hero-code-card">
            <div className="code-block" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <div className="code-tab-bar">
                <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                  {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                    <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                  ))}
                </div>
                {([['py', 'profile.py', '#CE9178'], ['ts', 'contact.ts', '#569CD6']] as const).map(([id, label, color]) => (
                  <button key={id} onClick={() => setTab(id)} style={{
                    background: 'none', border: 'none', padding: '0 14px', height: '100%',
                    fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
                    color: tab === id ? '#D4D4D4' : 'rgba(212,212,212,0.3)',
                    borderBottom: tab === id ? `2px solid ${color}` : '2px solid transparent',
                    cursor: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                    display: 'flex', alignItems: 'center', gap: '7px',
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, opacity: tab === id ? 0.8 : 0.3 }} />
                    {label}
                  </button>
                ))}
              </div>

              <div className="code-body">
                {lines.map((line, i) => (
                  <CodeLine key={`${tab}-${i}`} line={line} num={i + 1} />
                ))}
              </div>

              <div className="code-status-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4EC9B0' }} />
                  <span style={{ color: '#4EC9B0' }}>open to work</span>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ color: 'rgba(212,212,212,0.2)' }}>{tab === 'py' ? 'Python' : 'TypeScript'}</span>
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
                  style={{ padding: '5px 13px', fontSize: '0.63rem', textDecoration: 'none', fontFamily: 'JetBrains Mono' }}>
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
