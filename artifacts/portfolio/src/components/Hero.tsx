import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="hero"
      ref={ref}
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
          <span style={{ fontFamily: 'Inter', fontSize: '0.82rem', fontWeight: 500, color: '#888', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Available for New Opportunities
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Inter',
          fontWeight: 800,
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#FAFAFA',
          marginBottom: '28px',
        }}>
          Rahul Sangral
        </h1>

        <p style={{
          fontFamily: 'Inter',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          fontWeight: 400,
          color: '#888',
          lineHeight: 1.6,
          maxWidth: '580px',
          marginBottom: '40px',
        }}>
          Data Analyst · AI Developer · Founder of{' '}
          <a href="https://clavix.in" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: 500 }}>
            Clavix Technologies
          </a>
          . I turn complex data into clear decisions and ship AI tools that work in production.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '80px' }}>
          <a href="#projects" data-testid="btn-view-work" className="btn-blue" style={{ padding: '12px 28px', fontSize: '0.9rem', textDecoration: 'none' }}>
            View My Work
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-testid="btn-download-resume" className="btn-ghost" style={{ padding: '12px 28px', fontSize: '0.9rem', textDecoration: 'none' }}>
            Download Resume
          </a>
          <a href="https://linkedin.com/in/rahulsangral" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '12px 28px', fontSize: '0.9rem', textDecoration: 'none' }}>
            LinkedIn ↗
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          maxWidth: '700px',
          background: '#1E1E1E',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #1E1E1E',
        }}>
          {[
            { value: '60%', label: 'Faster data analysis delivered', sub: 'AI Data Insights Engine' },
            { value: '₹2 Crore', label: 'Seed round currently raising', sub: 'Aethex · Clavix Technologies' },
            { value: '10+ hrs', label: 'Weekly time savings automated', sub: 'SND Technologies' },
            { value: '3', label: 'AI companies founded', sub: 'Clavix · Aethex · Cadus' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: '#0F0F0F',
                padding: '28px 24px',
              }}
            >
              <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.75rem', color: '#FAFAFA', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#888', lineHeight: 1.5 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#555', marginTop: '6px' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
