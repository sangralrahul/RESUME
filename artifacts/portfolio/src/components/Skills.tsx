import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = [
  {
    icon: '◈',
    label: 'Data & Analytics',
    color: '#3B82F6',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau', 'Power BI', 'Excel', 'Streamlit', 'Matplotlib'],
  },
  {
    icon: '◉',
    label: 'AI / ML & LLMs',
    color: '#8B5CF6',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'RAG Pipelines', 'Prompt Engineering', 'Claude API', 'Amazon Bedrock', 'Vertex AI'],
  },
  {
    icon: '◆',
    label: 'Web & Engineering',
    color: '#06B6D4',
    items: ['React', 'FastAPI', 'REST APIs', 'Firebase', 'PostgreSQL', 'MySQL', 'Docker', 'Git', 'GitHub'],
  },
  {
    icon: '◇',
    label: 'Cloud & DevOps',
    color: '#F59E0B',
    items: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Azure AI Services', 'ETL Pipelines', 'Data Modeling'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="skills" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">02</span>
          <span className="label-tag">Skills</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Tools &amp; Technologies
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="card-glass" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${cat.color}18`,
                  border: `1px solid ${cat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.85rem', color: cat.color }}>{cat.icon}</span>
                </div>
                <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.92rem', color: '#FFFFFF' }}>{cat.label}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {cat.items.map((item) => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
