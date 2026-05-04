export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(86,156,214,0.08)',
      padding: '36px 0',
      background: 'rgba(6,6,12,0.75)',
      backdropFilter: 'blur(16px)',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(86,156,214,0.25), transparent)', filter: 'blur(1px)' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>

          <div style={{
            fontFamily: 'JetBrains Mono', fontSize: '0.73rem',
            background: 'rgba(86,156,214,0.06)',
            border: '1px solid rgba(86,156,214,0.15)',
            borderRadius: '7px', padding: '6px 16px',
            color: 'rgba(212,212,212,0.5)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(86,156,214,0.35)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(86,156,214,0.14)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(86,156,214,0.15)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <span style={{ color: '#569CD6' }}>const </span>
            <span style={{ color: '#9CDCFE' }}>rahul</span>
            <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 6px' }}>=</span>
            <span style={{ color: '#CE9178' }}>"Sangral"</span>
          </div>

          <div style={{ display: 'flex', gap: '22px' }}>
            {[
              { href: 'https://aethex.in',                       label: 'aethex.in' },
              { href: 'https://linkedin.com/in/rahulsangral',    label: 'linkedin' },
              { href: 'https://github.com/sangralrahul',         label: 'github' },
            ].map(l => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="link-draw"
                style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'rgba(212,212,212,0.22)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#569CD6'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(212,212,212,0.22)'; }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'rgba(212,212,212,0.13)' }}>
            <span style={{ color: '#6A9955' }}># </span>© 2026 Rahul Sangral
          </span>
        </div>
      </div>
    </footer>
  );
}
