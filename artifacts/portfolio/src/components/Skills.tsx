import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skills = [
  {
    category: "🗄️ Data & Analytics",
    color: '#00D4FF',
    items: ["SQL", "Python", "Pandas", "NumPy", "R", "Excel (Pivot / Power Query / XLOOKUP)", "Tableau", "Power BI"]
  },
  {
    category: "🤖 AI / ML",
    color: '#10B981',
    items: ["Scikit-learn", "Claude API", "Amazon Bedrock", "Vertex AI", "Azure AI", "RAG Pipelines", "Prompt Engineering"]
  },
  {
    category: "🛠️ Engineering",
    color: '#F59E0B',
    items: ["FastAPI", "React", "Docker", "Git/GitHub", "REST APIs", "Streamlit", "PostgreSQL", "MySQL"]
  },
  {
    category: "☁️ Cloud",
    color: '#00D4FF',
    items: ["AWS", "Google Cloud"]
  }
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="font-['JetBrains_Mono'] text-sm mb-3" style={{ color: '#00D4FF' }}>// tech stack</p>
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl" style={{ color: '#FFFFFF' }}>
            Tools & Technologies
          </h2>
        </div>

        <div className="space-y-10">
          {skills.map((group, groupIdx) => (
            <div key={group.category} className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 rounded-full" style={{ background: group.color }} />
                <h3 className="font-['Syne'] text-xl font-semibold" style={{ color: '#EDEDED' }}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, itemIdx) => (
                  <span
                    key={item}
                    className={`font-['JetBrains_Mono'] text-sm rounded-xl px-4 py-2 border cursor-default transition-all hover:-translate-y-0.5 section-enter ${isVisible ? 'is-visible' : ''}`}
                    style={{
                      background: `${group.color}10`,
                      borderColor: `${group.color}30`,
                      color: group.color,
                      transitionDelay: `${(groupIdx * 80) + (itemIdx * 40)}ms`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${group.color}20`;
                      e.currentTarget.style.borderColor = `${group.color}60`;
                      e.currentTarget.style.boxShadow = `0 0 15px ${group.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${group.color}10`;
                      e.currentTarget.style.borderColor = `${group.color}30`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
