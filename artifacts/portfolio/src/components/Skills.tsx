import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = [
  {
    icon: '◈',
    label: 'Data & Analytics',
    color: '#6366F1',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau', 'Power BI', 'Excel', 'Streamlit', 'Matplotlib'],
  },
  {
    icon: '◉',
    label: 'AI / ML & LLMs',
    color: '#818CF8',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'RAG Pipelines', 'Prompt Engineering', 'Claude API', 'Amazon Bedrock', 'Vertex AI'],
  },
  {
    icon: '◆',
    label: 'Web & Engineering',
    color: '#22D3EE',
    items: ['React', 'FastAPI', 'REST APIs', 'Firebase', 'PostgreSQL', 'MySQL', 'Docker', 'Git', 'GitHub'],
  },
  {
    icon: '◇',
    label: 'Cloud & DevOps',
    color: '#FBBF24',
    items: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Azure AI Services', 'ETL Pipelines', 'Data Modeling'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="skills" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">02</span>
          <span className="label-tag">Skills</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#F1F5F9', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Tools &amp; Technologies
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="card-glass" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: `${cat.color}12`,
                  border: `1px solid ${cat.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.9rem', color: cat.color }}>{cat.icon}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.92rem', color: '#F1F5F9' }}>{cat.label}</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'rgba(241,245,249,0.22)', marginTop: '2px' }}>
                    {cat.items.length} technologies
                  </div>
                </div>
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
