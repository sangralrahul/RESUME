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

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">07</span>
          <span className="label-tag">contact</span>
        </div>

        {/* CTA code block */}
        <div className="code-block" style={{ marginBottom: '16px', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
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

          <div style={{ padding: '48px 40px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.76rem', lineHeight: 2, marginBottom: '32px' }}>
              <div>
                <span className="t-kw">async def </span>
                <span className="t-fn">collaborate</span>
                <span className="t-op">(</span>
                <span className="t-var">project</span>
                <span className="t-op">: </span>
                <span className="t-type">str</span>
                <span className="t-op">) -&gt; </span>
                <span className="t-type">Partnership</span>
                <span className="t-op">:</span>
              </div>
              <div style={{ marginLeft: 24 }}>
                <span className="t-cmt">"""</span>
              </div>
              <div style={{ marginLeft: 24 }}>
                <span className="t-cmt">Open to AI/ML roles, data projects, and investment discussions.</span>
              </div>
              <div style={{ marginLeft: 24 }}>
                <span className="t-cmt">Available immediately — remote or on-site. U.S. time zone compatible.</span>
              </div>
              <div style={{ marginLeft: 24 }}>
                <span className="t-cmt">"""</span>
              </div>
              <div style={{ marginLeft: 24 }}>
                <span className="t-kw">return await </span>
                <span className="t-fn">send_email</span>
                <span className="t-op">(</span>
                <span className="t-str">"rahul.rishusangral@gmail.com"</span>
                <span className="t-op">)</span>
              </div>
            </div>

            <a
              href="mailto:rahul.rishusangral@gmail.com"
              data-testid="link-email"
              className="btn-blue"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 32px', textDecoration: 'none', fontSize: '0.82rem',
              }}
            >
              <SiGmail style={{ fontSize: '1rem' }} />
              send_email() →
            </a>
          </div>

          <div className="code-status-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4EC9B0' }} />
              <span style={{ color: '#4EC9B0' }}>status: "available immediately"</span>
            </div>
            <span style={{ color: 'rgba(212,212,212,0.2)' }}>contact.py</span>
          </div>
        </div>

        {/* Contact method cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }} className="contact-cards">
          {[
            { href: 'tel:+919682394363', testId: 'link-phone', Icon: FaPhone, label: '+91 9682394363', sub: 'phone', color: '#4EC9B0' },
            { href: 'https://linkedin.com/in/rahulsangral', testId: 'link-linkedin', Icon: FaLinkedin, label: 'linkedin.com/in/rahulsangral', sub: 'linkedin', color: '#0A66C2', external: true },
            { href: 'https://github.com/sangralrahul', testId: 'link-github', Icon: FaGithub, label: 'github.com/sangralrahul', sub: 'github', color: '#D4D4D4', external: true },
          ].map((c) => (
            <a
              key={c.testId}
              href={c.href}
              data-testid={c.testId}
              target={(c as any).external ? '_blank' : undefined}
              rel={(c as any).external ? 'noopener noreferrer' : undefined}
              className="code-block"
              style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 20px', textDecoration: 'none', borderRadius: '12px' }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: `${c.color}10`, border: `1px solid ${c.color}22`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <c.Icon style={{ color: c.color, fontSize: '1rem' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.58rem', color: '#6A9955', marginBottom: '4px' }}>
                  # {c.sub}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'rgba(212,212,212,0.65)' }}>
                  {c.label}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-cards { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .code-block > div:nth-child(2) { padding: 32px 20px !important; } }
      `}</style>
    </section>
  );
}
