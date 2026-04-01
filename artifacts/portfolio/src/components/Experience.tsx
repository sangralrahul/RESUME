import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    id: 1,
    company: "SND Technologies",
    role: "Business Development Executive Intern",
    location: "Remote",
    dates: "Jan 2026 – Feb 2026",
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
        <div className="mb-16">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl">// experience</h2>
        </div>

        <div className="relative border-l-2 border-transparent space-y-12 before:absolute before:inset-y-0 before:left-[-1px] before:w-[2px] before:bg-gradient-to-b before:from-[#7C3AED] before:to-[#A855F7]">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Glowing dot */}
              <div className="absolute w-3 h-3 bg-[#A855F7] rounded-full left-[-7px] top-2 shadow-[0_0_12px_rgba(168,85,247,0.6)]"></div>
              
              <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] p-6 rounded-2xl hover:border-[#A855F7] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-2xl text-white">{exp.company}</h3>
                    <p className="font-['Syne'] font-semibold text-[#A855F7] text-lg">{exp.role}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-right">
                    <span className="block font-['DM_Sans'] text-[#9CA3AF] text-sm whitespace-nowrap">{exp.dates}</span>
                    {exp.location && (
                      <span className="block font-['DM_Sans'] text-[#9CA3AF] text-sm whitespace-nowrap">{exp.location}</span>
                    )}
                    {exp.badge && (
                      <span className="inline-block mt-1 bg-[rgba(124,58,237,0.15)] text-[#C084FC] text-xs px-2 py-1 rounded">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 font-['DM_Sans'] text-[#EDEDED] text-sm md:text-base leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex">
                      <span className="mr-2 mt-1 text-[#A855F7] text-xs">●</span>
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
