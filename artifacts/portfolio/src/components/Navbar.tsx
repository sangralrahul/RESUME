import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500`}
        style={scrolled ? {
          background: 'rgba(5,5,8,0.9)',
          borderBottom: '1px solid rgba(0,212,255,0.1)',
          backdropFilter: 'blur(20px)',
        } : { background: 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-18 py-5">

            <a href="#" className="flex items-center gap-3 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-['Syne'] font-bold text-sm transition-all"
                style={{ background: '#00D4FF', color: '#050508' }}
              >
                R
              </div>
              <span
                className="font-['Syne'] font-bold text-lg tracking-wider hidden sm:block"
                style={{ color: '#FFFFFF' }}
              >
                rahul<span style={{ color: '#00D4FF' }}>.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                    className="font-['DM_Sans'] text-sm px-4 py-2 rounded-xl transition-all"
                    style={{
                      color: isActive ? '#00D4FF' : '#9CA3AF',
                      background: isActive ? 'rgba(0,212,255,0.08)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#EDEDED';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#9CA3AF';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex btn-primary px-5 py-2.5 rounded-xl font-['DM_Sans'] font-bold text-sm"
              >
                Let's Talk
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="hamburger-menu"
                className="md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all border"
                style={{ borderColor: 'rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.05)' }}
              >
                <span className="w-4 h-0.5 rounded transition-all" style={{ background: '#00D4FF', transform: mobileMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
                <span className="w-4 h-0.5 rounded transition-all" style={{ background: '#00D4FF', opacity: mobileMenuOpen ? 0 : 1 }} />
                <span className="w-4 h-0.5 rounded transition-all" style={{ background: '#00D4FF', transform: mobileMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          opacity: mobileMenuOpen ? 1 : 0,
          background: 'rgba(5,5,8,0.97)',
          backdropFilter: 'blur(20px)',
          paddingTop: '5rem',
        }}
      >
        <div className="flex flex-col items-center gap-6 pt-12">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-['Syne'] font-bold text-3xl transition-all"
              style={{
                color: '#EDEDED',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 50}ms`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4FF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#EDEDED'; }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary mt-4 px-8 py-3 rounded-xl font-['DM_Sans'] font-bold">
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
