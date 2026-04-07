export default function Footer() {
  return (
    <footer
      className="py-8 relative z-10 border-t"
      style={{
        background: 'rgba(5,5,8,0.95)',
        borderTopColor: 'rgba(0,212,255,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="text-center md:text-left font-['DM_Sans'] text-sm" style={{ color: '#6B7280' }}>
            © 2026 Rahul Sangral · Clavix Technologies Pvt. Ltd.
          </div>
          
          <div className="flex space-x-6">
            {[
              { href: 'https://aethex.in', label: 'aethex.in' },
              { href: 'https://clavix.in', label: 'clavix.in' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['DM_Sans'] text-sm transition-colors"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4FF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; }}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right font-['DM_Sans'] text-sm" style={{ color: '#6B7280' }}>
            Built with React · Designed with purpose
          </div>
          
        </div>
      </div>
    </footer>
  );
}
