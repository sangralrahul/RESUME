import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-28 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
            07 — Contact
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.1)' }} />
        </div>

        {/* Big CTA card */}
        <div
          className="rounded-3xl p-10 sm:p-16 mb-8 relative overflow-hidden"
          style={{
            background: 'rgba(13,13,24,0.9)',
            border: '1px solid rgba(0,212,255,0.2)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 font-['JetBrains_Mono'] text-sm"
              style={{ borderColor: 'rgba(16,185,129,0.35)', color: '#10B981', background: 'rgba(16,185,129,0.08)' }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10B981' }} />
              Available immediately
            </div>

            <h2
              className="font-['Syne'] font-bold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FFFFFF' }}
            >
              Let's build something
              <br />
              <span className="shimmer-text">great together</span>
            </h2>

            <p className="font-['DM_Sans'] text-lg mb-10" style={{ color: '#9CA3AF' }}>
              Open to data roles, AI project collaborations, startup partnerships,
              or just a great conversation.
            </p>

            <a
              href="mailto:rahul.rishusangral@gmail.com"
              data-testid="link-email"
              className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-['DM_Sans'] font-bold text-lg"
            >
              <SiGmail className="text-xl" style={{ color: 'inherit' }} />
              rahul.rishusangral@gmail.com
            </a>
          </div>
        </div>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: 'tel:+919682394363',
              testId: 'link-phone',
              icon: <FaPhone style={{ fontSize: '1.2rem', color: '#10B981' }} />,
              label: '+91 9682394363',
              sublabel: 'Call me',
              color: '#10B981',
            },
            {
              href: 'https://linkedin.com/in/rahulsangral',
              testId: 'link-linkedin',
              icon: <FaLinkedin style={{ fontSize: '1.3rem', color: '#0A66C2' }} />,
              label: 'rahulsangral',
              sublabel: 'LinkedIn',
              color: '#0A66C2',
              external: true,
            },
            {
              href: 'https://github.com/sangralrahul',
              testId: 'link-github',
              icon: <FaGithub style={{ fontSize: '1.3rem', color: '#EDEDED' }} />,
              label: 'sangralrahul',
              sublabel: 'GitHub',
              color: '#EDEDED',
              external: true,
            },
          ].map((c) => (
            <a
              key={c.testId}
              href={c.href}
              data-testid={c.testId}
              target={(c as any).external ? '_blank' : undefined}
              rel={(c as any).external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 rounded-2xl p-5 border transition-all group"
              style={{
                background: 'rgba(13,13,24,0.85)',
                borderColor: 'rgba(0,212,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${c.color}40`;
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = `0 0 20px ${c.color}12`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.1)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: `${c.color}12`, border: `1px solid ${c.color}25` }}
              >
                {c.icon}
              </div>
              <div>
                <div className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>{c.sublabel}</div>
                <div className="font-['Syne'] font-semibold text-sm" style={{ color: '#EDEDED' }}>{c.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
