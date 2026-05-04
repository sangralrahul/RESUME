import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About',          href: '#about' },
  { name: 'Skills',         href: '#skills' },
  { name: 'Ventures',       href: '#ventures' },
  { name: 'Projects',       href: '#projects' },
  { name: 'Experience',     href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [open, setOpen]               = useState(false);
  const [activeSection, setActive]    = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-38% 0px -62% 0px' }
    );
    sections.forEach(s => obs.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        data-testid="navbar"
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 100,
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          background: scrolled ? 'rgba(8,8,16,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(86,156,214,0.1)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(28px)' : 'none',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

            <a href="#" style={{ textDecoration: 'none' }}>
              <div style={{
                height: '32px', padding: '0 12px',
                background: 'rgba(86,156,214,0.07)',
                border: '1px solid rgba(86,156,214,0.2)',
                borderRadius: '7px',
                display: 'flex', alignItems: 'center', gap: '1px',
                fontFamily: 'JetBrains Mono', fontSize: '0.73rem',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(86,156,214,0.5)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(86,156,214,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(86,156,214,0.2)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <span style={{ color: '#569CD6' }}>const </span>
                <span style={{ color: '#9CDCFE', margin: '0 5px' }}>rahul</span>
                <span style={{ color: 'rgba(212,212,212,0.28)', marginRight: '5px' }}>=</span>
                <span style={{ color: '#CE9178' }}>"dev"</span>
              </div>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }} className="hidden md:flex">
              {navLinks.map((link) => {
                const isActive = link.href === `#${activeSection}`;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                    className={`nav-link${isActive ? ' active' : ''}`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a href="#contact"
                className="hidden md:inline-flex btn-blue"
                style={{ padding: '8px 22px', textDecoration: 'none', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.84rem' }}>
                Get in Touch
              </a>
              <button
                data-testid="hamburger-menu"
                onClick={() => setOpen(!open)}
                className="md:hidden"
                style={{
                  background: 'rgba(86,156,214,0.07)', border: '1px solid rgba(86,156,214,0.2)',
                  color: '#D4D4D4', width: '38px', height: '38px', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem',
                  transition: 'background 0.2s, border-color 0.2s',
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
          background: 'rgba(6,6,14,0.97)', backdropFilter: 'blur(32px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '24px',
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Inter', fontWeight: 700, fontSize: '1.6rem',
                color: link.href === `#${activeSection}` ? '#569CD6' : 'rgba(212,212,212,0.55)',
                textDecoration: 'none', transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#569CD6'; }}
              onMouseLeave={e => { e.currentTarget.style.color = link.href === `#${activeSection}` ? '#569CD6' : 'rgba(212,212,212,0.55)'; }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-blue"
            style={{ marginTop: '12px', padding: '14px 48px', textDecoration: 'none', fontFamily: 'Inter', fontWeight: 600, fontSize: '1rem' }}>
            Get in Touch
          </a>
        </div>
      )}
    </>
  );
}
