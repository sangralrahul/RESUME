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
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(15,15,15,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid #1E1E1E' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            
            <a href="#" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.1rem', color: '#FAFAFA', letterSpacing: '-0.01em' }}>
                Rahul Sangral
              </span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#AAA',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FAFAFA';
                    e.currentTarget.style.background = '#1A1A1A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#AAA';
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
                style={{ padding: '8px 20px', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                Get in Touch
              </a>
              <button
                data-testid="hamburger-menu"
                onClick={() => setOpen(!open)}
                className="md:hidden"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  color: '#FAFAFA',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                }}
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
            background: 'rgba(15,15,15,0.98)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '1.5rem',
                color: '#FAFAFA',
                textDecoration: 'none',
              }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-blue" style={{ marginTop: '8px', padding: '12px 32px', textDecoration: 'none', fontSize: '1rem' }}>
            Get in Touch
          </a>
        </div>
      )}
    </>
  );
}
