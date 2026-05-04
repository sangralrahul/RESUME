import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const contactLines = [
  { type: 'file',   text: 'contact.py' },
  { type: 'empty' },
  { type: 'header', text: '── About me ──────────────────────────────────────' },
  { type: 'desc',   text: 'Open to AI/ML roles, data projects, collaborations,' },
  { type: 'desc',   text: 'and investment discussions. Available immediately.' },
  { type: 'desc',   text: 'Remote or on-site. U.S. time zone compatible.' },
  { type: 'empty' },
  { type: 'header', text: '── Let\'s connect ─────────────────────────────────' },
  { type: 'kv', key: 'Email', value: 'rahul.rishusangral@gmail.com' },
  { type: 'empty' },
  { type: 'header', text: '── Availability ──────────────────────────────────' },
  { type: 'kv', key: 'Status',   value: 'available immediately', green: true },
  { type: 'kv', key: 'Notice',   value: 'no notice period required' },
  { type: 'kv', key: 'Timezone', value: 'U.S. hours — IST overlap' },
];

export default function Contact() {
  const ref       = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  const cmt = 'rgba(212,212,212,0.26)';
  const txt = 'rgba(212,212,212,0.65)';
  const hdr = '#569CD6';
  const key = '#9CDCFE';
  const grn = '#4EC9B0';

  return (
    <section id="contact" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">07</span>
          <span className="label-tag">contact</span>
        </div>

        <div className="code-block shimmer-card" style={{ marginBottom: '12px', boxShadow: '0 28px 70px rgba(0,0,0,0.45)' }}>
          <div className="code-tab-bar">
            <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
              {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
              ))}
            </div>
            <div className="code-tab active">
              <div className="code-tab-dot" style={{ background: '#CE9178' }} />
              contact.py
            </div>
          </div>

          <div style={{ padding: '44px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '56px', alignItems: 'center' }} className="contact-main">
            {/* Left */}
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.77rem', lineHeight: 2.05 }}>
              {contactLines.map((line, i) => {
                if (line.type === 'empty') return <div key={i} style={{ height: '0.6em' }} />;
                if (line.type === 'file')  return (
                  <div key={i}><span style={{ color: cmt, fontStyle: 'italic' }}># {line.text}</span></div>
                );
                if (line.type === 'header') return (
                  <div key={i}>
                    <span style={{ color: cmt }}># </span>
                    <span style={{ color: hdr }}>{line.text}</span>
                  </div>
                );
                if (line.type === 'desc') return (
                  <div key={i}>
                    <span style={{ color: cmt }}>#  </span>
                    <span style={{ color: txt }}>{line.text}</span>
                  </div>
                );
                if (line.type === 'kv') {
                  const l = line as typeof line & { key?: string; value?: string; green?: boolean };
                  return (
                    <div key={i}>
                      <span style={{ color: cmt }}>#  </span>
                      <span style={{ color: key, display: 'inline-block', minWidth: '76px' }}>{l.key}</span>
                      <span style={{ color: 'rgba(212,212,212,0.28)', margin: '0 10px' }}>→</span>
                      <span style={{ color: l.green ? grn : txt }}>{l.value}</span>
                      {l.green && <span style={{ color: grn, marginLeft: 6 }}>●</span>}
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Right: CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', flexShrink: 0 }}>
              <div style={{ textAlign: 'center', marginBottom: '4px' }}>
                <div style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '2rem', color: '#D4D4D4', letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '8px' }}>
                  Let's build<br />
                  <span className="text-gradient">together.</span>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.63rem', color: '#6A9955' }}>
                  # usually replies within 24h
                </div>
              </div>
              <a href="mailto:rahul.rishusangral@gmail.com" data-testid="link-email"
                className="btn-blue"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 32px', textDecoration: 'none', fontSize: '0.88rem',
                  fontFamily: 'Inter', fontWeight: 600, whiteSpace: 'nowrap',
                }}>
                <SiGmail style={{ fontSize: '1.05rem' }} />
                Send Email →
              </a>
            </div>
          </div>

          <div className="code-status-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4EC9B0', boxShadow: '0 0 6px rgba(78,201,176,0.8)' }} />
              <span style={{ color: '#4EC9B0' }}>status: available immediately</span>
            </div>
            <span style={{ color: 'rgba(212,212,212,0.18)' }}>contact.py</span>
          </div>
        </div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }} className="contact-cards">
          {[
            { href: 'tel:+919682394363', testId: 'link-phone', Icon: FaPhone, label: '+91 9682394363', sub: '# phone', color: '#4EC9B0', external: false },
            { href: 'https://linkedin.com/in/rahulsangral', testId: 'link-linkedin', Icon: FaLinkedin, label: 'linkedin.com/in/rahulsangral', sub: '# linkedin', color: '#0A66C2', external: true },
            { href: 'https://github.com/sangralrahul', testId: 'link-github', Icon: FaGithub, label: 'github.com/sangralrahul', sub: '# github', color: '#D4D4D4', external: true },
          ].map(c => (
            <a key={c.testId} href={c.href} data-testid={c.testId}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="code-block"
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px 22px', textDecoration: 'none', borderRadius: '13px',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 40px rgba(0,0,0,0.4), 0 0 24px ${c.color}18`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '11px',
                background: `${c.color}10`, border: `1px solid ${c.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <c.Icon style={{ color: c.color, fontSize: '1.1rem' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.58rem', color: '#6A9955', marginBottom: '5px' }}>{c.sub}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'rgba(212,212,212,0.6)' }}>{c.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-cards { grid-template-columns: 1fr !important; }
          .contact-main  { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
