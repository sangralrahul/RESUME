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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        data-testid="navbar"
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 100,
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          background: scrolled ? 'rgba(12,12,23,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(86,156,214,0.1)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

            {/* Logo */}
            <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                height: '30px', padding: '0 10px',
                background: 'rgba(86,156,214,0.1)',
                border: '1px solid rgba(86,156,214,0.22)',
                borderRadius: '6px',
                display: 'flex', alignItems: 'center',
                fontFamily: 'JetBrains Mono', fontSize: '0.72rem',
                color: '#D4D4D4',
              }}>
                <span style={{ color: '#569CD6' }}>const </span>
                <span style={{ color: '#9CDCFE', marginLeft: 6 }}>rahul</span>
                <span style={{ color: 'rgba(212,212,212,0.4)', margin: '0 5px' }}>=</span>
                <span style={{ color: '#CE9178' }}>"dev"</span>
              </div>
            </a>

            {/* Nav links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden md:flex">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} data-testid={`nav-link-${link.name.toLowerCase()}`} className="nav-link">
                  {link.name.toLowerCase()}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a href="#contact" className="hidden md:inline-flex btn-blue"
                style={{ padding: '8px 18px', textDecoration: 'none' }}>
                get_in_touch()
              </a>
              <button
                data-testid="hamburger-menu"
                onClick={() => setOpen(!open)}
                className="md:hidden"
                style={{
                  background: 'rgba(86,156,214,0.08)', border: '1px solid rgba(86,156,214,0.2)',
                  color: '#D4D4D4', width: '36px', height: '36px', borderRadius: '7px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem', transition: 'background 0.2s ease',
                }}
              >
                {open ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden" style={{
          position: 'fixed', inset: 0, top: '64px', zIndex: 99,
          background: 'rgba(8,8,18,0.97)', backdropFilter: 'blur(28px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '22px',
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setOpen(false)}
              style={{
                fontFamily: 'JetBrains Mono', fontWeight: 600, fontSize: '1.4rem',
                color: 'rgba(212,212,212,0.6)', textDecoration: 'none', transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#569CD6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(212,212,212,0.6)'; }}
            >
              <span style={{ color: '#6A9955', marginRight: 8 }}>//</span>{link.name.toLowerCase()}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-blue"
            style={{ marginTop: '12px', padding: '13px 44px', textDecoration: 'none' }}>
            get_in_touch()
          </a>
        </div>
      )}
    </>
  );
}
