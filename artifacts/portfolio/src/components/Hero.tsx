export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>

        <div className="hero-line-1" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '48px' }}>
          <div className="pulse-green" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', fontWeight: 500, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Available for New Opportunities
          </span>
        </div>

        <h1
          className="hero-line-2"
          style={{
            fontFamily: 'Inter',
            fontWeight: 900,
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: '#FAFAFA',
            marginBottom: '36px',
          }}
        >
          Rahul<br />Sangral
        </h1>

        <p
          className="hero-line-3"
          style={{
            fontFamily: 'Inter',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 400,
            color: '#666',
            lineHeight: 1.65,
            maxWidth: '540px',
            marginBottom: '44px',
          }}
        >
          Data Analyst · AI Developer · Founder of{' '}
          <a
            href="https://clavix.in"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw"
            style={{ color: '#3B82F6', fontWeight: 500 }}
          >
            Clavix Technologies
          </a>
          . I turn complex data into clear decisions and ship AI products that work.
        </p>

        <div className="hero-line-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '88px' }}>
          <a href="#projects" data-testid="btn-view-work" className="btn-blue" style={{ padding: '13px 30px', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            View My Work →
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-testid="btn-download-resume" className="btn-ghost" style={{ padding: '13px 30px', fontSize: '0.88rem', textDecoration: 'none' }}>
            Download Resume
          </a>
          <a href="https://linkedin.com/in/rahulsangral" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '13px 30px', fontSize: '0.88rem', textDecoration: 'none' }}>
            LinkedIn ↗
          </a>
        </div>

        {/* Stats */}
        <div
          className="hero-line-5"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: '#1A1A1A',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #1A1A1A',
            maxWidth: '860px',
          }}
        >
          {[
            { value: '60%', label: 'Faster analysis', sub: 'AI Insights Engine' },
            { value: '₹2Cr', label: 'Seed round', sub: 'Aethex · Clavix' },
            { value: '10+hrs', label: 'Saved weekly', sub: 'SND Technologies' },
            { value: '3', label: 'AI companies', sub: 'Clavix · Aethex · Cadus' },
          ].map((s) => (
            <div
              key={s.label}
              className="stat-card"
              style={{
                background: '#0A0A0A',
                padding: '24px 20px',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#101010'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0A0A0A'; }}
            >
              <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.5rem', color: '#FAFAFA', letterSpacing: '-0.03em', marginBottom: '5px' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: '#666', lineHeight: 1.4, marginBottom: '4px' }}>
                {s.label}
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: '#383838' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
