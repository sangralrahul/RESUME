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
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          background: scrolled ? 'rgba(7,9,16,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(99,102,241,0.1)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '9px',
                background: 'linear-gradient(135deg, #6366F1, #818CF8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
              }}>
                <span style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '0.85rem', color: '#fff', letterSpacing: '-0.03em' }}>R</span>
              </div>
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.92rem', color: '#F1F5F9', letterSpacing: '-0.01em' }}>
                Rahul Sangral
              </span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', background: scrolled ? 'rgba(255,255,255,0.03)' : 'transparent', borderRadius: '12px', padding: scrolled ? '4px' : '0', transition: 'all 0.35s ease' }} className="hidden md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  className="nav-link"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href="#contact"
                className="hidden md:inline-flex btn-blue"
                style={{ padding: '8px 20px', fontSize: '0.83rem', textDecoration: 'none' }}
              >
                Get in Touch
              </a>
              <button
                data-testid="hamburger-menu"
                onClick={() => setOpen(!open)}
                className="md:hidden"
                style={{
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  color: '#F1F5F9',
                  width: '38px', height: '38px',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.95rem',
                  transition: 'background 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.16)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.2)';
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
            top: '68px',
            zIndex: 99,
            background: 'rgba(5,6,14,0.97)',
            backdropFilter: 'blur(28px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '24px',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Inter', fontWeight: 800, fontSize: '1.8rem',
                color: 'rgba(241,245,249,0.7)', textDecoration: 'none',
                transition: 'color 0.2s ease',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#818CF8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(241,245,249,0.7)'; }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-blue"
            style={{ marginTop: '12px', padding: '14px 44px', textDecoration: 'none', fontSize: '1rem' }}>
            Get in Touch
          </a>
        </div>
      )}
    </>
  );
}
