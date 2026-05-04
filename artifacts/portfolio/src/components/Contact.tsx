import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="contact" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">07</span>
          <span className="label-tag">Contact</span>
        </div>

        {/* Big CTA card */}
        <div className="card-gradient-border" style={{ padding: '72px 56px', marginBottom: '20px', backdropFilter: 'blur(16px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px', height: '200px',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', padding: '6px 16px', borderRadius: '99px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399' }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.67rem', color: '#34D399', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Open to opportunities
              </span>
            </div>

            <h2 style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#F1F5F9', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '20px' }}>
              Let's build something<br />
              <span style={{ color: 'rgba(241,245,249,0.22)' }}>together.</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: '0.98rem', color: 'rgba(241,245,249,0.38)', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto 40px' }}>
              Open to AI/ML roles, data projects, collaborations, and investment discussions.
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
              color: '#34D399',
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
              color: '#F1F5F9',
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
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '22px 24px', textDecoration: 'none', borderRadius: '14px',
              }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px',
                background: `${c.color}10`, border: `1px solid ${c.color}22`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <c.Icon style={{ color: c.color, fontSize: '1.05rem' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'rgba(241,245,249,0.22)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {c.sub}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'rgba(241,245,249,0.72)', fontWeight: 500 }}>
                  {c.label}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-cards { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .card-gradient-border { padding: 44px 28px !important; } }
      `}</style>
    </section>
  );
}
