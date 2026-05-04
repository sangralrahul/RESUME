import { useState } from 'react';

interface Line {
  type: 'file'|'empty'|'header'|'kv'|'desc'|'bullet';
  content?: string; key?: string; value?: string; green?: boolean;
}

const pyLines: Line[] = [
  { type: 'file',   content: 'rahul.profile.py' },
  { type: 'empty' },
  { type: 'header', content: '── Identity ───────────────────────────' },
  { type: 'kv', key: 'Role',         value: 'AI / ML Developer' },
  { type: 'kv', key: 'Experience',   value: '2+ years' },
  { type: 'kv', key: 'Location',     value: 'Jammu, India' },
  { type: 'kv', key: 'Timezone',     value: 'US Compatible' },
  { type: 'empty' },
  { type: 'header', content: '── Currently Building ─────────────────' },
  { type: 'kv', key: 'Product',      value: 'Aethex (aethex.in)' },
  { type: 'kv', key: 'Active Users', value: '200+ registered' },
  { type: 'kv', key: 'Stack',        value: 'Python · React · FastAPI' },
  { type: 'empty' },
  { type: 'header', content: '── Availability ───────────────────────' },
  { type: 'kv', key: 'Status',       value: 'available immediately', green: true },
  { type: 'kv', key: 'Open to',      value: 'Remote · On-site · U.S. hours' },
];

const tsLines: Line[] = [
  { type: 'file',   content: 'rahul.contact.ts' },
  { type: 'empty' },
  { type: 'header', content: '── Contact ─────────────────────────────' },
  { type: 'kv', key: 'Email',    value: 'rahul.rishusangral@gmail.com' },
  { type: 'kv', key: 'Phone',    value: '+91 9682394363' },
  { type: 'kv', key: 'LinkedIn', value: 'linkedin.com/in/rahulsangral' },
  { type: 'kv', key: 'GitHub',   value: 'github.com/sangralrahul' },
  { type: 'empty' },
  { type: 'header', content: '── Looking For ─────────────────────────' },
  { type: 'kv', key: 'Roles',    value: 'AI/ML Developer, Data Analyst' },
  { type: 'kv', key: 'Projects', value: 'AI products, data pipelines' },
  { type: 'kv', key: 'Collab',   value: 'Open to investment & building' },
  { type: 'empty' },
  { type: 'kv', key: 'Status',   value: 'available immediately', green: true },
];

function CodeLine({ line, num }: { line: Line; num: number }) {
  const cmt = 'rgba(212,212,212,0.26)';
  const val = 'rgba(212,212,212,0.72)';
  const hdr = '#569CD6';
  const key = '#9CDCFE';
  const grn = '#4EC9B0';

  if (line.type === 'empty') return (
    <div style={{ display: 'flex', minHeight: '0.6em' }}>
      <span className="ln">{num}</span>
    </div>
  );
  if (line.type === 'file') return (
    <div style={{ display: 'flex', minHeight: '1.15em' }}>
      <span className="ln">{num}</span>
      <span style={{ color: cmt, fontStyle: 'italic' }}># {line.content}</span>
    </div>
  );
  if (line.type === 'header') return (
    <div style={{ display: 'flex', minHeight: '1.15em' }}>
      <span className="ln">{num}</span>
      <span><span style={{ color: cmt }}># </span><span style={{ color: hdr }}>{line.content}</span></span>
    </div>
  );
  if (line.type === 'kv') return (
    <div style={{ display: 'flex', minHeight: '1.15em' }}>
      <span className="ln">{num}</span>
      <span>
        <span style={{ color: cmt }}>#  </span>
        <span style={{ color: key, display: 'inline-block', minWidth: '104px' }}>{line.key}</span>
        <span style={{ color: 'rgba(212,212,212,0.28)', margin: '0 8px' }}>→</span>
        <span style={{ color: line.green ? grn : val }}>{line.value}</span>
        {line.green && (
          <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: grn, boxShadow: '0 0 6px rgba(78,201,176,0.8)', marginLeft: '8px', verticalAlign: 'middle' }} />
        )}
      </span>
    </div>
  );
  return null;
}

const stats = [
  { value: '200+', label: 'Platform Users',  sub: '# Aethex' },
  { value: '60%',  label: 'Faster Analysis', sub: '# AI Engine' },
  { value: '10h+', label: 'Saved Weekly',    sub: '# SND Tech' },
  { value: '2+',   label: 'Years Building',  sub: '# AI / ML' },
];

export default function Hero() {
  const [tab, setTab] = useState<'py'|'ts'>('py');
  const lines = tab === 'py' ? pyLines : tsLines;

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 28px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '60px', alignItems: 'center' }} className="hero-grid">

          {/* ── Left ── */}
          <div>
            {/* Status badge */}
            <div className="hero-line-1" style={{ marginBottom: '44px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                background: 'rgba(78,201,176,0.05)',
                border: '1px solid rgba(78,201,176,0.18)',
                borderRadius: '6px', padding: '7px 16px',
                fontFamily: 'JetBrains Mono', fontSize: '0.68rem',
              }}>
                <span className="pulse-green" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4EC9B0', display: 'block', flexShrink: 0 }} />
                <span style={{ color: 'rgba(78,201,176,0.85)' }}>Available immediately — remote or on-site</span>
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-line-2" style={{
              fontFamily: 'Inter', fontWeight: 900,
              fontSize: 'clamp(3.6rem, 8vw, 8.8rem)',
              lineHeight: 0.88, letterSpacing: '-0.05em',
              marginBottom: '40px',
            }}>
              <span style={{ color: '#E8ECF4' }}>Rahul</span><br />
              <span style={{ color: 'rgba(232,236,244,0.1)', WebkitTextStroke: '1px rgba(232,236,244,0.12)' }}>Sangral</span>
            </h1>

            {/* Role */}
            <div className="hero-line-3" style={{ marginBottom: '28px' }}>
              <span style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.72rem', letterSpacing: '0.08em',
                color: 'rgba(86,156,214,0.7)', textTransform: 'uppercase',
              }}>
                # AI / ML Developer · Data Analyst · Full-Stack Dev · Founder
              </span>
            </div>

            {/* Description */}
            <p className="hero-line-3" style={{
              fontFamily: 'Inter', fontSize: '1rem',
              color: 'rgba(212,212,212,0.38)', lineHeight: 1.85,
              maxWidth: '480px', marginBottom: '44px',
            }}>
              Building ML pipelines, RAG systems, and AI-powered products.
              Founder of{' '}
              <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
                className="link-draw" style={{ color: '#569CD6', fontWeight: 500 }}>
                Aethex
              </a>
              {' '}— a live medical SaaS platform with 200+ registered users.
            </p>

            {/* CTAs */}
            <div className="hero-line-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '64px' }}>
              <a href="#projects" data-testid="btn-view-work" className="btn-primary"
                style={{ textDecoration: 'none' }}>
                View Work →
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                data-testid="btn-download-resume" className="btn-secondary"
                style={{ textDecoration: 'none' }}>
                Resume ↗
              </a>
              <a href="https://linkedin.com/in/rahulsangral" target="_blank" rel="noopener noreferrer"
                className="btn-secondary" style={{ textDecoration: 'none' }}>
                LinkedIn ↗
              </a>
            </div>

            {/* Stats */}
            <div className="hero-line-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', maxWidth: '760px' }}>
              {stats.map((s, i) => (
                <div key={s.label}
                  style={{
                    padding: '22px 16px',
                    borderRight: i < 3 ? '1px solid rgba(86,156,214,0.08)' : 'none',
                    borderTop: '1px solid rgba(86,156,214,0.08)',
                  }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, fontSize: '1.45rem', color: '#569CD6', letterSpacing: '-0.02em', marginBottom: '5px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'rgba(212,212,212,0.38)', marginBottom: '3px' }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.55rem', color: 'rgba(106,153,85,0.7)' }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: code card (static) ── */}
          <div>
            <div className="code-block" style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(86,156,214,0.07)' }}>
              <div className="code-tab-bar">
                <div style={{ display: 'flex', gap: '6px', marginRight: '14px' }}>
                  {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                    <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                  ))}
                </div>
                {(['py','ts'] as const).map((id) => {
                  const meta = id === 'py'
                    ? { label: 'profile.py',  dot: '#CE9178' }
                    : { label: 'contact.ts', dot: '#569CD6' };
                  return (
                    <button key={id} onClick={() => setTab(id)} style={{
                      background: 'none', border: 'none', padding: '0 15px', height: '100%',
                      fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
                      color: tab === id ? '#D4D4D4' : 'rgba(212,212,212,0.28)',
                      borderBottom: tab === id ? `2px solid ${meta.dot}` : '2px solid transparent',
                      cursor: 'none',
                      display: 'flex', alignItems: 'center', gap: '7px',
                      transition: 'color 0.2s',
                    }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: meta.dot, opacity: tab === id ? 0.85 : 0.3 }} />
                      {meta.label}
                    </button>
                  );
                })}
              </div>

              <div className="code-body">
                {lines.map((line, i) => (
                  <CodeLine key={`${tab}-${i}`} line={line} num={i + 1} />
                ))}
              </div>

              <div className="code-status-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4EC9B0', boxShadow: '0 0 6px rgba(78,201,176,0.6)' }} />
                  <span style={{ color: 'rgba(78,201,176,0.7)' }}>open to work</span>
                </div>
                <span style={{ color: 'rgba(212,212,212,0.18)' }}>{tab === 'py' ? 'Python' : 'TypeScript'}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'github.com/sangralrahul', href: 'https://github.com/sangralrahul' },
                { label: 'aethex.in',               href: 'https://aethex.in' },
              ].map(b => (
                <a key={b.href} href={b.href} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '5px 14px', fontSize: '0.62rem', textDecoration: 'none', fontFamily: 'JetBrains Mono' }}>
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
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
