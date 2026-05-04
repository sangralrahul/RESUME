export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', width: '100%' }}>

        {/* Status pill */}
        <div className="hero-line-1" style={{ marginBottom: '52px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(34,197,94,0.06)',
            border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: '99px',
            padding: '7px 16px 7px 12px',
          }}>
            <span className="pulse-green" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', display: 'block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#4ADE80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Available Immediately · U.S. Time Zone
            </span>
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-line-2" style={{
          fontFamily: 'Inter', fontWeight: 900,
          fontSize: 'clamp(4rem, 9vw, 8.5rem)',
          lineHeight: 0.92, letterSpacing: '-0.04em',
          color: '#FFFFFF', marginBottom: '40px',
        }}>
          Rahul<br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Sangral</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-line-3" style={{
          fontFamily: 'Inter', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          fontWeight: 400, color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.7, maxWidth: '560px', marginBottom: '48px',
        }}>
          AI/ML Engineer · Data Analyst · Full-Stack Developer · Founder of{' '}
          <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
            className="link-draw" style={{ color: '#60A5FA', fontWeight: 500 }}>
            Aethex
          </a>
          . I build ML pipelines, RAG systems, and AI products that work in production.
        </p>

        {/* CTAs */}
        <div className="hero-line-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '88px' }}>
          <a href="#projects" data-testid="btn-view-work" className="btn-blue"
            style={{ padding: '13px 32px', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            View Work <span style={{ opacity: 0.7 }}>→</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            data-testid="btn-download-resume" className="btn-ghost"
            style={{ padding: '13px 32px', fontSize: '0.88rem', textDecoration: 'none' }}>
            Resume ↗
          </a>
          <a href="https://linkedin.com/in/rahulsangral" target="_blank" rel="noopener noreferrer"
            className="btn-ghost" style={{ padding: '13px 32px', fontSize: '0.88rem', textDecoration: 'none' }}>
            LinkedIn ↗
          </a>
        </div>

        {/* Stats — glass grid */}
        <div className="hero-line-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', maxWidth: '900px' }}>
          {[
            { value: '200+', label: 'Registered users', note: 'Aethex SaaS' },
            { value: '60%', label: 'Faster data analysis', note: 'AI Insights Engine' },
            { value: '10 h+', label: 'Weekly time saved', note: 'SND Technologies' },
            { value: '2+', label: 'Years experience', note: 'AI/ML · Full-Stack' },
          ].map((s) => (
            <div key={s.label} className="stat-card"
              style={{
                background: 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '26px 20px',
                transition: 'background 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.13)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              <div className="stat-val" style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.7rem', color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '6px' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '5px' }}>
                {s.label}
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'rgba(255,255,255,0.18)' }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
