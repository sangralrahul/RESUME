import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="about" ref={ref} style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="grid-responsive">
          
          <div>
            <p className="label-tag" style={{ marginBottom: '16px' }}>About</p>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FAFAFA', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Data analyst and AI developer based in India.
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#888', lineHeight: 1.75, marginBottom: '20px' }}>
              I'm Rahul Sangral — a data analyst and AI developer with hands-on experience across SQL, Python,
              Tableau, Power BI, and LLM-powered tooling. I've built production analytics systems and completed
              simulations at Deloitte and JPMorgan.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#888', lineHeight: 1.75, marginBottom: '32px' }}>
              I'm the founder of Clavix Technologies Pvt. Ltd. — the parent company behind Aethex, an AI medical
              SaaS platform, and Cadus, an intelligent AI assistant for healthcare professionals. Currently
              targeting a ₹2 Crore seed round.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Immediate Availability', 'Remote · On-Site', 'Based in India'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: '#AAA',
                    background: '#171717',
                    border: '1px solid #252525',
                    padding: '6px 14px',
                    borderRadius: '6px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#1E1E1E', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1E1E1E' }}>
            {[
              { value: '3+', label: 'Projects shipped' },
              { value: '5+', label: 'Certifications earned' },
              { value: '2', label: 'Forage simulations' },
              { value: '3', label: 'Companies founded' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: '#0F0F0F',
                  padding: '32px 24px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#141414'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F0F0F'; }}
              >
                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '2rem', color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#666' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
