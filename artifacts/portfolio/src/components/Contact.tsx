import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="contact" ref={ref} style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="contact-grid">
          
          <div>
            <p className="label-tag" style={{ marginBottom: '16px' }}>Contact</p>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '20px', lineHeight: 1.2 }}>
              Open to New Opportunities
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#666', lineHeight: 1.75, marginBottom: '32px', maxWidth: '400px' }}>
              Whether it's a data role, AI project, collaboration, or investment discussion — I'd like to hear from you. Currently available immediately.
            </p>

            <a
              href="mailto:rahul.rishusangral@gmail.com"
              data-testid="link-email"
              className="btn-blue"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '13px 28px',
                fontSize: '0.9rem',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              <SiGmail style={{ fontSize: '1rem' }} />
              Send an Email
            </a>

            <div style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#444', marginTop: '12px' }}>
              rahul.rishusangral@gmail.com
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              {
                href: 'tel:+919682394363',
                testId: 'link-phone',
                icon: <FaPhone style={{ fontSize: '0.9rem', color: '#888' }} />,
                label: '+91 9682394363',
                sub: 'Phone',
              },
              {
                href: 'https://linkedin.com/in/rahulsangral',
                testId: 'link-linkedin',
                icon: <FaLinkedin style={{ fontSize: '0.9rem', color: '#888' }} />,
                label: 'linkedin.com/in/rahulsangral',
                sub: 'LinkedIn',
                external: true,
              },
              {
                href: 'https://github.com/sangralrahul',
                testId: 'link-github',
                icon: <FaGithub style={{ fontSize: '0.9rem', color: '#888' }} />,
                label: 'github.com/sangralrahul',
                sub: 'GitHub',
                external: true,
              },
            ].map((c) => (
              <a
                key={c.testId}
                href={c.href}
                data-testid={c.testId}
                target={(c as any).external ? '_blank' : undefined}
                rel={(c as any).external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 18px',
                  background: '#171717',
                  border: '1px solid #222',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#333';
                  (e.currentTarget as HTMLElement).style.background = '#1C1C1C';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#222';
                  (e.currentTarget as HTMLElement).style.background = '#171717';
                }}
              >
                <div style={{ width: '34px', height: '34px', background: '#1E1E1E', border: '1px solid #2A2A2A', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#555', marginBottom: '3px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.sub}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#CCC', fontWeight: 500 }}>{c.label}</div>
                </div>
              </a>
            ))}

            <div style={{ marginTop: '8px', padding: '14px 18px', background: '#0A0A0A', border: '1px solid #1A1A1A', borderRadius: '10px' }}>
              <span style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#444' }}>
                📍 India · Available immediately · Remote or On-Site
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
