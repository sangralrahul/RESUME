import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const contacts = [
  {
    href: 'mailto:rahul.rishusangral@gmail.com',
    testId: 'link-email',
    icon: <SiGmail style={{ fontSize: '1.4rem', color: '#EA4335' }} />,
    label: 'rahul.rishusangral@gmail.com',
  },
  {
    href: 'tel:+919682394363',
    testId: 'link-phone',
    icon: <FaPhone style={{ fontSize: '1.2rem', color: '#10B981' }} />,
    label: '+91 9682394363',
  },
  {
    href: 'https://linkedin.com/in/rahulsangral',
    testId: 'link-linkedin',
    icon: <FaLinkedin style={{ fontSize: '1.4rem', color: '#0A66C2' }} />,
    label: 'linkedin.com/in/rahulsangral',
    external: true,
  },
  {
    href: 'https://github.com/sangralrahul',
    testId: 'link-github',
    icon: <FaGithub style={{ fontSize: '1.4rem', color: '#EDEDED' }} />,
    label: 'github.com/sangralrahul',
    external: true,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-32 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6">
          <p className="font-['JetBrains_Mono'] text-sm mb-3" style={{ color: '#00D4FF' }}>// let's connect</p>
        </div>

        <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#FFFFFF' }}>
          Open to{' '}
          <span className="gradient-text">Opportunities</span>
        </h2>

        <p className="font-['DM_Sans'] text-lg max-w-2xl mx-auto mb-16" style={{ color: '#9CA3AF' }}>
          Whether it's a data role, AI project, collaboration, or just a great conversation — reach out.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-14">
          {contacts.map((c) => (
            <a
              key={c.testId}
              href={c.href}
              data-testid={c.testId}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="w-full sm:w-auto rounded-xl px-6 py-4 flex items-center justify-center gap-3 border transition-all group"
              style={{
                background: 'rgba(13,13,24,0.85)',
                borderColor: 'rgba(0,212,255,0.15)',
                color: '#EDEDED',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.45)';
                el.style.boxShadow = '0 0 20px rgba(0,212,255,0.12)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.15)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              <span className="flex-shrink-0 transition-transform group-hover:scale-110">{c.icon}</span>
              <span className="font-['DM_Sans']">{c.label}</span>
            </a>
          ))}
        </div>

        <p className="font-['DM_Sans'] text-sm" style={{ color: '#6B7280' }}>
          Available immediately — Remote or On-Site 🇮🇳
        </p>
      </div>
    </section>
  );
}
