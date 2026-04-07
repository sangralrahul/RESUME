import { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = [
  {
    id: 'data',
    label: '🗄️ Data & Analytics',
    color: '#00D4FF',
    items: [
      { name: 'SQL', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'Pandas', level: 88 },
      { name: 'Tableau', level: 85 },
      { name: 'Power BI', level: 82 },
      { name: 'NumPy', level: 85 },
      { name: 'R', level: 70 },
      { name: 'Excel (Power Query)', level: 88 },
    ],
  },
  {
    id: 'ai',
    label: '🤖 AI / ML',
    color: '#10B981',
    items: [
      { name: 'Claude API', level: 92 },
      { name: 'RAG Pipelines', level: 88 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Amazon Bedrock', level: 80 },
      { name: 'Vertex AI', level: 78 },
      { name: 'Azure AI', level: 75 },
      { name: 'Scikit-learn', level: 80 },
    ],
  },
  {
    id: 'engineering',
    label: '🛠️ Engineering',
    color: '#F59E0B',
    items: [
      { name: 'FastAPI', level: 88 },
      { name: 'React', level: 82 },
      { name: 'Docker', level: 78 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Streamlit', level: 88 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    id: 'cloud',
    label: '☁️ Cloud',
    color: '#00D4FF',
    items: [
      { name: 'AWS', level: 78 },
      { name: 'Google Cloud', level: 72 },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const [activeTab, setActiveTab] = useState('data');

  const active = categories.find(c => c.id === activeTab)!;

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-28 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
            02 — Skills
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.1)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading + tabs */}
          <div>
            <h2
              className="font-['Syne'] font-bold text-4xl sm:text-5xl mb-4 leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              Tools &
              <br />
              <span className="gradient-text">Technologies</span>
            </h2>
            <p className="font-['DM_Sans'] text-base mb-10" style={{ color: '#6B7280' }}>
              A curated stack for data analytics, AI/ML engineering,
              and full-stack product development.
            </p>

            {/* Category tabs */}
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="text-left px-5 py-4 rounded-2xl border transition-all flex items-center justify-between"
                  style={{
                    background: activeTab === cat.id ? `${cat.color}10` : 'rgba(13,13,24,0.6)',
                    borderColor: activeTab === cat.id ? `${cat.color}40` : 'rgba(0,212,255,0.08)',
                    color: activeTab === cat.id ? cat.color : '#9CA3AF',
                  }}
                >
                  <span className="font-['Syne'] font-semibold text-base">{cat.label}</span>
                  <span
                    className="text-xs font-['JetBrains_Mono'] px-2 py-0.5 rounded-full"
                    style={{
                      background: activeTab === cat.id ? `${cat.color}20` : 'rgba(0,212,255,0.05)',
                      color: activeTab === cat.id ? cat.color : '#6B7280',
                    }}
                  >
                    {cat.items.length} skills
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: skill bars */}
          <div
            className="rounded-3xl p-7 border"
            style={{
              background: 'rgba(13,13,24,0.85)',
              borderColor: `${active.color}20`,
              backdropFilter: 'blur(12px)',
              boxShadow: `0 0 40px ${active.color}08`,
            }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-2 h-6 rounded-full" style={{ background: active.color }} />
              <h3 className="font-['Syne'] font-bold text-xl" style={{ color: '#FFFFFF' }}>
                {active.label}
              </h3>
            </div>

            <div className="space-y-5">
              {active.items.map((item, i) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-['JetBrains_Mono'] text-sm" style={{ color: '#EDEDED' }}>
                      {item.name}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs" style={{ color: active.color }}>
                      {item.level}%
                    </span>
                  </div>
                  <div
                    className="w-full h-1.5 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: isVisible ? `${item.level}%` : '0%',
                        background: `linear-gradient(90deg, ${active.color} 0%, ${active.color}AA 100%)`,
                        boxShadow: `0 0 8px ${active.color}60`,
                        transition: `width 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
