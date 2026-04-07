export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid #1A1A1A', padding: '32px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          
          <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.9rem', color: '#FAFAFA', letterSpacing: '-0.01em' }}>
            Rahul Sangral
          </span>

          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { href: 'https://clavix.in', label: 'Clavix Technologies' },
              { href: 'https://aethex.in', label: 'Aethex' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#555', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#AAA'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          <span style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: '#444' }}>
            © 2026 Clavix Technologies Pvt. Ltd.
          </span>
        </div>
      </div>
    </footer>
  );
}
