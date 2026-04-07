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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        data-testid="navbar"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
          transition: 'all 0.35s ease',
          background: scrolled ? 'rgba(10,10,10,0.75)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

            <a href="#" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.88rem', color: '#FFFFFF', letterSpacing: '0.22em' }}>
                RAHUL
              </span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href="#contact"
                className="hidden md:inline-flex btn-blue"
                style={{ padding: '8px 20px', fontSize: '0.84rem', textDecoration: 'none' }}
              >
                Get in Touch
              </a>
              <button
                data-testid="hamburger-menu"
                onClick={() => setOpen(!open)}
                className="md:hidden"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#FFFFFF',
                  width: '36px', height: '36px',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
              >
                {open ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            top: '64px',
            zIndex: 99,
            background: 'rgba(5,5,5,0.96)',
            backdropFilter: 'blur(24px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '28px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.6rem', color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-blue"
            style={{ marginTop: '8px', padding: '13px 40px', textDecoration: 'none', fontSize: '1rem' }}>
            Get in Touch
          </a>
        </div>
      )}
    </>
  );
}
