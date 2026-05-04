export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(99,102,241,0.08)',
      padding: '36px 0',
      background: 'rgba(5,6,13,0.6)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366F1, #818CF8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '0.78rem', color: '#fff' }}>R</span>
            </div>
            <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.88rem', color: 'rgba(241,245,249,0.7)', letterSpacing: '-0.01em' }}>
              Rahul Sangral
            </span>
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { href: 'https://aethex.in', label: 'Aethex' },
              { href: 'https://linkedin.com/in/rahulsangral', label: 'LinkedIn' },
              { href: 'https://github.com/sangralrahul', label: 'GitHub' },
            ].map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="link-draw"
                style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: 'rgba(241,245,249,0.28)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(241,245,249,0.65)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(241,245,249,0.28)'; }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'rgba(241,245,249,0.16)' }}>
            © 2026 Rahul Sangral
          </span>
        </div>
      </div>
    </footer>
  );
}
