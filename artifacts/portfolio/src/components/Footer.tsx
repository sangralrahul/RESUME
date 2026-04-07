export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{
        background: 'rgba(5,5,8,0.98)',
        borderTopColor: 'rgba(0,212,255,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-['Syne'] font-bold text-sm"
              style={{ background: '#00D4FF', color: '#050508' }}
            >
              R
            </div>
            <span className="font-['Syne'] font-bold text-lg" style={{ color: '#FFFFFF' }}>
              rahul<span style={{ color: '#00D4FF' }}>.</span>
            </span>
          </a>

          <div className="font-['JetBrains_Mono'] text-xs text-center" style={{ color: '#6B7280' }}>
            © 2026 Rahul Sangral · Clavix Technologies Pvt. Ltd.
          </div>

          <div className="flex items-center gap-6">
            {[
              { href: 'https://aethex.in', label: 'Aethex' },
              { href: 'https://clavix.in', label: 'Clavix' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['DM_Sans'] text-sm transition-all"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4FF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTopColor: 'rgba(0,212,255,0.06)' }}>
          <span className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>
            Built with React + Vite · Designed with purpose
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10B981' }} />
            <span className="font-['JetBrains_Mono'] text-xs" style={{ color: '#10B981' }}>
              All systems live
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
