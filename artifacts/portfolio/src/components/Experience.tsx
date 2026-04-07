import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    company: 'SND Technologies',
    role: 'Business Development Executive Intern',
    period: 'Jan 2026 – Feb 2026',
    type: 'Industry · Remote',
    accentColor: '#3B82F6',
    bullets: [
      'Automated KPI reporting with Python pipelines and Excel dashboards — eliminated ~30% manual effort, saving 10+ hrs/week.',
      'Designed SQL queries and Tableau dashboards surfacing sales trends — directly informing weekly strategic decisions.',
      'Contributed to API integrations and internal workflow automation scripts.',
    ],
  },
  {
    company: 'Deloitte Australia',
    role: 'Data Analytics & Cyber Simulation',
    period: '2026',
    type: 'Virtual Experience · Forage',
    accentColor: '#06B6D4',
    bullets: [
      'Performed end-to-end data cleaning, anomaly detection, and structured reporting in a Big-4 cybersecurity consulting context — mirroring real analyst deliverables.',
    ],
  },
  {
    company: 'JPMorgan Chase',
    role: 'Investment Banking & Software Engineering Simulation',
    period: '2026',
    type: 'Virtual Experience · Forage',
    accentColor: '#F59E0B',
    bullets: [
      'Completed financial data analysis and software engineering tasks replicating live investment-banking workflows, including data modeling and stakeholder reporting.',
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="experience" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">05</span>
          <span className="label-tag">Experience</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Professional History
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experiences.map((exp, i) => (
            <div key={i} className="card-glass" style={{ padding: '0', overflow: 'hidden' }}>
              {/* Top accent bar */}
              <div style={{ height: '2px', background: `linear-gradient(90deg, ${exp.accentColor}, transparent)` }} />
              <div style={{ padding: '32px 36px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', marginBottom: '20px', alignItems: 'start' }} className="exp-header">
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                      {exp.company}
                    </div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.88rem', color: exp.accentColor }}>
                      {exp.role}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', marginBottom: '8px' }}>
                      {exp.period}
                    </div>
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', fontFamily: 'Inter', fontSize: '0.87rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>
                      <span style={{ color: exp.accentColor, flexShrink: 0, marginTop: '2px', opacity: 0.7 }}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .exp-header { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
