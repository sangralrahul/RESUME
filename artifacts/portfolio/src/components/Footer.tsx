export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '32px 0',
      background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>

          <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Rahul Sangral
          </span>

          <div style={{ display: 'flex', gap: '28px' }}>
            {[
              { href: 'https://clavix.in', label: 'Clavix Technologies' },
              { href: 'https://aethex.in', label: 'Aethex' },
            ].map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="link-draw"
                style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)' }}>
            © 2026 Clavix Technologies Pvt. Ltd.
          </span>
        </div>
      </div>
    </footer>
  );
}
