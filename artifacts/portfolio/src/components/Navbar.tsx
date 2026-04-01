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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[rgba(124,58,237,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-['Syne'] font-bold text-sm text-white tracking-[0.25em]">r a h u l</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className="text-[#EDEDED] hover:text-[#A855F7] transition-colors font-['DM_Sans'] text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="hamburger-menu"
              className="text-[#EDEDED] hover:text-[#A855F7] focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#0A0A0F] z-40 flex flex-col items-center pt-10 space-y-8 h-screen border-t border-[rgba(124,58,237,0.25)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#EDEDED] hover:text-[#A855F7] transition-colors font-['Syne'] text-2xl"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
