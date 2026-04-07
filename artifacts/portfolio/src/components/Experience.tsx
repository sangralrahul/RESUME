import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    id: 1,
    company: "SND Technologies",
    role: "Business Development Executive Intern",
    type: "Industry",
    location: "Remote",
    dates: "Jan 2026 – Feb 2026",
    color: '#00D4FF',
    icon: '💼',
    bullets: [
      "Automated KPI reporting by building Python data pipelines and Excel dashboards (Pivot Tables, XLOOKUP, Power Query) — eliminated ~30% of manual reporting effort, saving 10+ hrs/week.",
      "Designed and deployed SQL queries and Tableau dashboards surfacing actionable sales trends — directly informing weekly strategic decisions for cross-functional stakeholders.",
      "Contributed to API integrations and internal workflow automation scripts, reducing repetitive operational tasks and improving overall team turnaround time."
    ]
  },
  {
    id: 2,
    company: "Deloitte Australia",
    role: "Data Analytics & Cyber Simulation",
    type: "Virtual Experience · Forage",
    dates: "2026",
    color: '#10B981',
    icon: '🔒',
    bullets: [
      "Performed end-to-end data cleaning, anomaly detection, and structured reporting in a Big-4 cybersecurity consulting context — mirroring real analyst deliverables."
    ]
  },
  {
    id: 3,
    company: "JPMorgan Chase",
    role: "Investment Banking & Software Engineering Simulation",
    type: "Virtual Experience · Forage",
    dates: "2026",
    color: '#F59E0B',
    icon: '🏦',
    bullets: [
      "Completed financial data analysis and software engineering tasks replicating live investment-banking workflows, including data modeling and stakeholder reporting."
    ]
  }
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-28 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
            05 — Experience
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.1)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-1">
            <h2
              className="font-['Syne'] font-bold text-4xl sm:text-5xl leading-tight sticky top-28"
              style={{ color: '#FFFFFF' }}
            >
              Work
              <br />
              <span className="gradient-text">History</span>
            </h2>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="rounded-3xl border overflow-hidden transition-all"
                style={{
                  background: 'rgba(13,13,24,0.88)',
                  borderColor: `${exp.color}20`,
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${exp.color}40`;
                  el.style.boxShadow = `0 0 30px ${exp.color}0A`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${exp.color}20`;
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Top bar */}
                <div
                  className="px-7 py-5 flex items-center justify-between border-b"
                  style={{ borderColor: `${exp.color}15`, background: `${exp.color}05` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{exp.icon}</span>
                    <div>
                      <div className="font-['Syne'] font-bold text-xl" style={{ color: '#FFFFFF' }}>
                        {exp.company}
                      </div>
                      <div className="font-['DM_Sans'] text-sm font-semibold" style={{ color: exp.color }}>
                        {exp.role}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="font-['JetBrains_Mono'] text-xs mb-1" style={{ color: '#6B7280' }}>
                      {exp.dates}
                    </div>
                    <span
                      className="font-['DM_Sans'] text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${exp.color}12`,
                        color: exp.color,
                        border: `1px solid ${exp.color}25`,
                      }}
                    >
                      {exp.type}
                    </span>
                    {exp.location && (
                      <div className="font-['DM_Sans'] text-xs mt-1" style={{ color: '#6B7280' }}>
                        📍 {exp.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <div className="px-7 py-5">
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="font-['DM_Sans'] text-sm leading-relaxed flex gap-3"
                        style={{ color: '#9CA3AF' }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
