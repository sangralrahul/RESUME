import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="about" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
          className="about-grid">

          {/* Left: bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span className="section-num">01</span>
              <span className="label-tag">About</span>
            </div>

            <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '28px' }}>
              AI/ML Engineer.<br />
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>Data analyst.</span><br />
              Founder.
            </h2>

            <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '18px' }}>
              I'm Rahul Sangral — 2+ years of independent development experience building ML pipelines, RAG systems, ETL workflows, REST APIs, SQL/BI dashboards, and full-stack applications.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '36px' }}>
              I'm the founder of Aethex — a live AI-powered medical SaaS platform serving 200+ registered users, featuring a Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Available Immediately', 'Open to Remote', 'U.S. Time Zone Available', 'Jammu, India'].map((t) => (
                <span key={t} style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.4)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '6px 14px', borderRadius: '8px',
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right: stat grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { value: '200+', label: 'Platform Users', icon: '◈' },
              { value: '5+', label: 'Certifications', icon: '◉' },
              { value: '2', label: 'Forage Simulations', icon: '◆' },
              { value: '2+', label: 'Years Building', icon: '◇' },
            ].map((s) => (
              <div key={s.label} className="card-glass stagger-1"
                style={{ padding: '32px 24px', textAlign: 'left' }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#3B82F6', marginBottom: '16px' }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2.2rem', color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
