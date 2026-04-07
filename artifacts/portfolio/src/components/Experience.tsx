import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    id: 1,
    company: "SND Technologies",
    role: "Business Development Executive Intern",
    location: "Remote",
    dates: "Jan 2026 – Feb 2026",
    color: '#00D4FF',
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
    badge: "Virtual Experience · Forage",
    dates: "2026",
    color: '#10B981',
    bullets: [
      "Performed end-to-end data cleaning, anomaly detection, and structured reporting in a Big-4 cybersecurity consulting context — mirroring real analyst deliverables."
    ]
  },
  {
    id: 3,
    company: "JPMorgan Chase",
    role: "Investment Banking & Software Engineering Simulation",
    badge: "Virtual Experience · Forage",
    dates: "2026",
    color: '#F59E0B',
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
      className={`py-24 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="font-['JetBrains_Mono'] text-sm mb-3" style={{ color: '#00D4FF' }}>// experience</p>
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl" style={{ color: '#FFFFFF' }}>
            Work History
          </h2>
        </div>

        <div className="relative space-y-10">
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, #00D4FF, #10B981, #F59E0B)',
              marginLeft: '-1px',
            }}
          />

          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              <div
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: exp.color,
                  left: '-6px',
                  top: '10px',
                  boxShadow: `0 0 10px ${exp.color}80`,
                }}
              />
              
              <div
                className="border rounded-2xl p-6 card-glow"
                style={{
                  background: 'rgba(13,13,24,0.85)',
                  borderColor: 'rgba(0,212,255,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-2xl" style={{ color: '#FFFFFF' }}>
                      {exp.company}
                    </h3>
                    <p className="font-['Syne'] font-semibold text-lg mt-0.5" style={{ color: exp.color }}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 text-right flex flex-col items-end gap-1">
                    <span className="font-['DM_Sans'] text-sm whitespace-nowrap" style={{ color: '#6B7280' }}>
                      {exp.dates}
                    </span>
                    {exp.location && (
                      <span className="font-['DM_Sans'] text-sm" style={{ color: '#6B7280' }}>
                        {exp.location}
                      </span>
                    )}
                    {exp.badge && (
                      <span
                        className="inline-block text-xs px-3 py-1 rounded-full"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        {exp.badge}
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 font-['DM_Sans'] text-sm md:text-base leading-relaxed" style={{ color: '#9CA3AF' }}>
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
