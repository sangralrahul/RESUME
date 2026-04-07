import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    company: 'SND Technologies',
    role: 'Business Development Executive Intern',
    period: 'Jan 2026 – Feb 2026',
    type: 'Industry',
    location: 'Remote',
    bullets: [
      'Automated KPI reporting by building Python data pipelines and Excel dashboards (Pivot Tables, XLOOKUP, Power Query) — eliminated ~30% of manual reporting effort, saving 10+ hrs/week.',
      'Designed and deployed SQL queries and Tableau dashboards surfacing actionable sales trends — directly informing weekly strategic decisions for cross-functional stakeholders.',
      'Contributed to API integrations and internal workflow automation scripts, reducing repetitive operational tasks and improving overall team turnaround time.',
    ],
  },
  {
    company: 'Deloitte Australia',
    role: 'Data Analytics & Cyber Simulation',
    period: '2026',
    type: 'Virtual Experience · Forage',
    bullets: [
      'Performed end-to-end data cleaning, anomaly detection, and structured reporting in a Big-4 cybersecurity consulting context — mirroring real analyst deliverables.',
    ],
  },
  {
    company: 'JPMorgan Chase',
    role: 'Investment Banking & Software Engineering Simulation',
    period: '2026',
    type: 'Virtual Experience · Forage',
    bullets: [
      'Completed financial data analysis and software engineering tasks replicating live investment-banking workflows, including data modeling and stakeholder reporting.',
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="experience" ref={ref} style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ marginBottom: '56px' }}>
          <p className="label-tag" style={{ marginBottom: '12px' }}>Experience</p>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FAFAFA', letterSpacing: '-0.02em' }}>
            Professional History
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1E1E1E', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1E1E1E' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                background: '#0F0F0F',
                padding: '36px 32px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#121212'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F0F0F'; }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', marginBottom: '20px' }} className="exp-header">
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.05rem', color: '#FAFAFA', letterSpacing: '-0.01em', marginBottom: '5px' }}>
                    {exp.company}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.88rem', color: '#3B82F6' }}>
                    {exp.role}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#555', marginBottom: '6px' }}>
                    {exp.period}
                  </div>
                  <span className="badge" style={{ background: '#1A1A1A', color: '#666', border: '1px solid #252525' }}>
                    {exp.type}
                  </span>
                  {exp.location && (
                    <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#444', marginTop: '5px' }}>
                      {exp.location}
                    </div>
                  )}
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ fontFamily: 'Inter', fontSize: '0.87rem', color: '#777', lineHeight: 1.7, display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#333', flexShrink: 0, marginTop: '2px' }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
