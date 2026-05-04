import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="about" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
          className="about-grid">

          {/* Left: bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span className="section-num">01</span>
              <span className="label-tag">About</span>
            </div>

            <h2 style={{
              fontFamily: 'Inter', fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#F1F5F9', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '28px',
            }}>
              AI/ML Engineer.<br />
              <span style={{ color: 'rgba(241,245,249,0.25)' }}>Data analyst.</span><br />
              Founder.
            </h2>

            <p style={{ fontFamily: 'Inter', fontSize: '0.93rem', color: 'rgba(241,245,249,0.42)', lineHeight: 1.85, marginBottom: '18px' }}>
              I'm Rahul Sangral — 2+ years of independent development experience building ML pipelines,
              RAG systems, ETL workflows, REST APIs, SQL/BI dashboards, and full-stack applications.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: '0.93rem', color: 'rgba(241,245,249,0.42)', lineHeight: 1.85, marginBottom: '36px' }}>
              I founded{' '}
              <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
                className="link-draw" style={{ color: '#818CF8', fontWeight: 500, textDecoration: 'none' }}>
                Aethex
              </a>
              {' '}— a live AI-powered medical SaaS with 200+ registered users, featuring a Cadus AI clinical
              assistant, drug reference database, NEET-PG MCQ engine, and CME hub.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Available Immediately', 'Open to Remote', 'U.S. Time Zone', 'Jammu, India'].map((t) => (
                <span key={t} style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.67rem',
                  color: 'rgba(241,245,249,0.38)',
                  background: 'rgba(99,102,241,0.06)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  padding: '6px 14px', borderRadius: '8px',
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right: stat grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { value: '200+', label: 'Platform Users', icon: '◈', color: '#34D399' },
              { value: '5+', label: 'Certifications', icon: '◉', color: '#818CF8' },
              { value: '2', label: 'Forage Simulations', icon: '◆', color: '#22D3EE' },
              { value: '2+', label: 'Years Building', icon: '◇', color: '#FBBF24' },
            ].map((s) => (
              <div key={s.label} className="card-glass stagger-1"
                style={{ padding: '32px 24px', textAlign: 'left' }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.9rem', color: s.color, marginBottom: '18px', opacity: 0.8 }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2.2rem', color: '#F1F5F9', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: 'rgba(241,245,249,0.32)' }}>
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
