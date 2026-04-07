import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = [
  {
    label: 'Data & Analytics',
    items: ['SQL', 'Python', 'Pandas', 'NumPy', 'Tableau', 'Power BI', 'Excel (Power Query / Pivot Tables)', 'R'],
  },
  {
    label: 'AI / Machine Learning',
    items: ['Claude API', 'RAG Pipelines', 'Prompt Engineering', 'Amazon Bedrock', 'Vertex AI', 'Azure AI', 'Scikit-learn'],
  },
  {
    label: 'Engineering',
    items: ['FastAPI', 'React', 'Docker', 'PostgreSQL', 'MySQL', 'REST APIs', 'Streamlit', 'Git / GitHub'],
  },
  {
    label: 'Cloud & Infrastructure',
    items: ['AWS (EC2, S3)', 'Google Cloud Platform'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="skills" ref={ref} style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>
        
        <div style={{ marginBottom: '56px' }}>
          <p className="label-tag" style={{ marginBottom: '12px' }}>Skills</p>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Tools & Technologies
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#666', maxWidth: '520px', lineHeight: 1.7 }}>
            A full-stack capability set — from raw data to production AI.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#1E1E1E', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1E1E1E' }} className="skills-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              style={{
                background: '#0F0F0F',
                padding: '36px 32px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#121212'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F0F0F'; }}
            >
              <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem', color: '#FAFAFA', marginBottom: '20px', letterSpacing: '-0.01em' }}>
                {cat.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
