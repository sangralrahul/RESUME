import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="contact" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">07</span>
          <span className="label-tag">Contact</span>
        </div>

        {/* Big CTA card */}
        <div className="card-gradient-border" style={{ padding: '64px 56px', marginBottom: '24px', backdropFilter: 'blur(12px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '20px' }}>
            Let's build something<br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>together.</span>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 40px' }}>
            Open to data roles, AI projects, collaborations, and investment discussions.
            Available immediately — remote or on-site.
          </p>
          <a
            href="mailto:rahul.rishusangral@gmail.com"
            data-testid="link-email"
            className="btn-blue"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 36px', fontSize: '0.95rem', textDecoration: 'none',
            }}
          >
            <SiGmail style={{ fontSize: '1rem' }} />
            rahul.rishusangral@gmail.com
          </a>
        </div>

        {/* Contact method cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="contact-cards">
          {[
            {
              href: 'tel:+919682394363',
              testId: 'link-phone',
              Icon: FaPhone,
              label: '+91 9682394363',
              sub: 'Phone',
              color: '#22C55E',
            },
            {
              href: 'https://linkedin.com/in/rahulsangral',
              testId: 'link-linkedin',
              Icon: FaLinkedin,
              label: 'linkedin.com/in/rahulsangral',
              sub: 'LinkedIn',
              color: '#0A66C2',
              external: true,
            },
            {
              href: 'https://github.com/sangralrahul',
              testId: 'link-github',
              Icon: FaGithub,
              label: 'github.com/sangralrahul',
              sub: 'GitHub',
              color: '#FFFFFF',
              external: true,
            },
          ].map((c) => (
            <a
              key={c.testId}
              href={c.href}
              data-testid={c.testId}
              target={(c as any).external ? '_blank' : undefined}
              rel={(c as any).external ? 'noopener noreferrer' : undefined}
              className="card-glass"
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '20px 22px', textDecoration: 'none', borderRadius: '12px',
              }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: `${c.color}12`, border: `1px solid ${c.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <c.Icon style={{ color: c.color, fontSize: '1rem' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  {c.sub}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                  {c.label}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
