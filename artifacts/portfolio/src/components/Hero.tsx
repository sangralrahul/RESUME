const codeLines = [
  { tokens: [{ t: 'comment', v: '// rahul.profile.ts' }] },
  { tokens: [] },
  { tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'profile' }, { t: 'op', v: ' = {' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'role' }, { t: 'op', v: ': ' }, { t: 'str', v: '"AI/ML Engineer"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'experience' }, { t: 'op', v: ': ' }, { t: 'str', v: '"2+ years"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'location' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Jammu, India"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'timezone' }, { t: 'op', v: ': ' }, { t: 'str', v: '"US Compatible"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'building' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Aethex Platform"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'users' }, { t: 'op', v: ': ' }, { t: 'num', v: '200' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'stack' }, { t: 'op', v: ': ' }, { t: 'op', v: '[' }, { t: 'str', v: '"Python"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"React"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"FastAPI"' }, { t: 'op', v: '],' }] },
  { tokens: [{ t: 'indent', v: '  ' }, { t: 'prop', v: 'status' }, { t: 'op', v: ': ' }, { t: 'str', v: '"available"' }, { t: 'available', v: ' ●' }] },
  { tokens: [{ t: 'op', v: '}' }] },
];

const tokenColor: Record<string, string> = {
  comment: 'rgba(241,245,249,0.28)',
  keyword: '#818CF8',
  var: '#38BDF8',
  prop: '#94A3B8',
  str: '#34D399',
  num: '#FBBF24',
  op: 'rgba(241,245,249,0.38)',
  indent: 'transparent',
  available: '#34D399',
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px', position: 'relative', overflow: 'hidden' }}
    >
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 28px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }} className="hero-grid">

          {/* Left: content */}
          <div>
            {/* Status pill */}
            <div className="hero-line-1" style={{ marginBottom: '48px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'rgba(52,211,153,0.06)',
                border: '1px solid rgba(52,211,153,0.18)',
                borderRadius: '99px',
                padding: '7px 18px 7px 12px',
              }}>
                <span className="pulse-green" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34D399', display: 'block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#34D399', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Available Immediately · U.S. Time Zone
                </span>
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-line-2" style={{
              fontFamily: 'Inter', fontWeight: 900,
              fontSize: 'clamp(3.6rem, 8vw, 8rem)',
              lineHeight: 0.92, letterSpacing: '-0.04em',
              color: '#F1F5F9', marginBottom: '36px',
            }}>
              Rahul<br />
              <span style={{ color: 'rgba(241,245,249,0.22)' }}>Sangral</span>
            </h1>

            {/* Role chips */}
            <div className="hero-line-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {['AI/ML Engineer', 'Data Analyst', 'Full-Stack Dev', 'Founder'].map((r) => (
                <span key={r} style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.68rem',
                  padding: '5px 12px', borderRadius: '7px',
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  color: '#818CF8',
                  letterSpacing: '0.04em',
                }}>{r}</span>
              ))}
            </div>

            {/* Subtitle */}
            <p className="hero-line-3" style={{
              fontFamily: 'Inter', fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              fontWeight: 400, color: 'rgba(241,245,249,0.42)',
              lineHeight: 1.75, maxWidth: '480px', marginBottom: '44px',
            }}>
              Building ML pipelines, RAG systems, and AI-powered products.
              Founder of{' '}
              <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
                className="link-draw" style={{ color: '#818CF8', fontWeight: 500 }}>
                Aethex
              </a>
              {' '}— a live medical SaaS platform with 200+ users.
            </p>

            {/* CTAs */}
            <div className="hero-line-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '72px' }}>
              <a href="#projects" data-testid="btn-view-work" className="btn-blue"
                style={{ padding: '12px 28px', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                View Work <span style={{ opacity: 0.7 }}>→</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                data-testid="btn-download-resume" className="btn-ghost"
                style={{ padding: '12px 28px', fontSize: '0.88rem', textDecoration: 'none' }}>
                Resume ↗
              </a>
              <a href="https://linkedin.com/in/rahulsangral" target="_blank" rel="noopener noreferrer"
                className="btn-ghost" style={{ padding: '12px 28px', fontSize: '0.88rem', textDecoration: 'none' }}>
                LinkedIn ↗
              </a>
            </div>

            {/* Stats */}
            <div className="hero-line-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', maxWidth: '820px' }}>
              {[
                { value: '200+', label: 'Platform Users', note: 'Aethex' },
                { value: '60%', label: 'Analysis faster', note: 'AI Insights Engine' },
                { value: '10h+', label: 'Saved weekly', note: 'SND Technologies' },
                { value: '2+', label: 'Years building', note: 'AI/ML · Full-Stack' },
              ].map((s) => (
                <div key={s.label} className="stat-card"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    padding: '22px 18px',
                    transition: 'background 0.25s ease, border-color 0.25s ease',
                    borderRadius: '0',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.06)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <div className="stat-val" style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.55rem', color: '#F1F5F9', letterSpacing: '-0.03em', marginBottom: '5px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.74rem', color: 'rgba(241,245,249,0.38)', marginBottom: '4px' }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.58rem', color: 'rgba(241,245,249,0.15)' }}>
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: profile code card */}
          <div className="hero-code-card" style={{ display: 'block' }}>
            <div style={{
              background: 'rgba(13,15,28,0.9)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}>
              {/* Terminal header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.025)',
                borderBottom: '1px solid rgba(99,102,241,0.1)',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#FF5F57', '#FFBD2E', '#28CA41'].map((c) => (
                    <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.7 }} />
                  ))}
                </div>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'rgba(241,245,249,0.25)', marginLeft: '8px' }}>
                  rahul.profile.ts
                </span>
              </div>

              {/* Code body */}
              <div style={{ padding: '24px 22px', fontFamily: 'JetBrains Mono', fontSize: '0.78rem', lineHeight: 1.9 }}>
                {codeLines.map((line, i) => (
                  <div key={i} style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {line.tokens.length === 0 ? (
                      <span style={{ display: 'block', height: '0.6em' }} />
                    ) : (
                      line.tokens.map((tok, j) => (
                        <span key={j} style={{
                          color: tokenColor[tok.t],
                          fontWeight: tok.t === 'keyword' ? 600 : 400,
                        }}>
                          {tok.v}
                        </span>
                      ))
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom status bar */}
              <div style={{
                padding: '10px 18px',
                background: 'rgba(99,102,241,0.06)',
                borderTop: '1px solid rgba(99,102,241,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399' }} />
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.63rem', color: '#34D399' }}>open to work</span>
                </div>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'rgba(241,245,249,0.2)' }}>TypeScript</span>
              </div>
            </div>

            {/* Floating badge below card */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'github.com/sangralrahul', href: 'https://github.com/sangralrahul' },
                { label: 'aethex.in', href: 'https://aethex.in' },
              ].map((b) => (
                <a key={b.href} href={b.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    fontFamily: 'JetBrains Mono', fontSize: '0.63rem', color: 'rgba(241,245,249,0.35)',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                    padding: '5px 12px', borderRadius: '7px', textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#818CF8'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(241,245,249,0.35)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
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
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
