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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b'
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        background: 'rgba(5, 5, 8, 0.85)',
        borderBottomColor: 'rgba(0, 212, 255, 0.15)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="font-['Syne'] font-bold text-xl tracking-[0.25em]"
              style={{ color: '#00D4FF' }}
            >
              r a h u l
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className="font-['DM_Sans'] text-sm transition-all duration-200 hover:scale-105"
                style={{ color: '#EDEDED' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4FF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#EDEDED'; }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="hamburger-menu"
              className="text-2xl focus:outline-none transition-colors"
              style={{ color: '#00D4FF' }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 z-40 flex flex-col items-center pt-10 space-y-8 h-screen border-t backdrop-blur-xl"
          style={{ background: 'rgba(5,5,8,0.97)', borderTopColor: 'rgba(0,212,255,0.15)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-['Syne'] text-2xl transition-colors"
              style={{ color: '#EDEDED' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4FF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#EDEDED'; }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
