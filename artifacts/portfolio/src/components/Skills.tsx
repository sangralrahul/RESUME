import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skills = [
  {
    category: "🗄️ Data & Analytics",
    items: ["SQL", "Python", "Pandas", "NumPy", "R", "Excel (Pivot Tables / Power Query / XLOOKUP)", "Tableau", "Power BI"]
  },
  {
    category: "🤖 AI / ML",
    items: ["Scikit-learn", "Claude API", "Amazon Bedrock", "Vertex AI", "Azure AI", "RAG Pipelines", "Prompt Engineering"]
  },
  {
    category: "🛠️ Engineering",
    items: ["FastAPI", "React", "Docker", "Git/GitHub", "REST APIs", "Streamlit", "PostgreSQL", "MySQL"]
  },
  {
    category: "☁️ Cloud",
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
        <div className="mb-12">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl">// tech stack</h2>
        </div>

        <div className="space-y-12">
          {skills.map((group, groupIdx) => (
            <div key={group.category} className="flex flex-col space-y-4">
              <h3 className="font-['Syne'] text-xl text-white">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, itemIdx) => (
                  <span
                    key={item}
                    className={`font-['JetBrains_Mono'] text-sm bg-[rgba(124,58,237,0.15)] border border-[#4C1D95] text-[#C084FC] rounded-[20px] px-4 py-1.5 transition-all hover:bg-[#7C3AED] hover:text-white section-enter ${isVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${(groupIdx * 100) + (itemIdx * 50)}ms` }}
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
