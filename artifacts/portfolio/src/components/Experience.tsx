import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    company: 'Aethex',
    role: 'Founder — AI Medical SaaS Platform',
    period: '2025 – Present',
    type: 'Founder',
    url: 'https://aethex.in',
    accentColor: '#34D399',
    bullets: [
      'Founded and scaled a live AI-powered medical SaaS platform (React + FastAPI) serving 200+ registered users — Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub.',
      'Integrated Razorpay payments, Firebase auth, Brevo email, and GA4 analytics; owned all ETL pipelines, DNS infrastructure, cloud deployment, and product roadmap end-to-end.',
    ],
  },
  {
    company: 'Freelance AI/ML Developer',
    role: 'Independent Consultant',
    period: '2023 – Present',
    type: 'Freelance · Remote',
    accentColor: '#6366F1',
    bullets: [
      'Designed and delivered custom AI/ML solutions, data pipelines, and full-stack applications for clients across healthcare, finance, and business analytics domains.',
      'Built NLP models, RAG pipelines, and LLM-integrated tools using Python, FastAPI, and cloud platforms; developed BI dashboards and SQL reporting systems for data-driven decision making.',
    ],
  },
  {
    company: 'SND Technologies',
    role: 'Business Development Executive Intern',
    period: 'Jan 2026 – Feb 2026',
    type: 'Industry · Remote',
    accentColor: '#FBBF24',
    bullets: [
      'Engineered automated Python ETL data pipelines for KPI extraction and reporting, eliminating ~30% of manual effort and saving 10+ hours per week.',
      'Designed SQL queries and Tableau dashboards surfacing actionable sales trends; built Excel workbooks using Pivot Tables, XLOOKUP, and Power Query for real-time performance tracking.',
    ],
  },
  {
    company: 'Deloitte Australia',
    role: 'Data Analytics & Cybersecurity Simulation',
    period: '2026',
    type: 'Virtual · Forage',
    accentColor: '#22D3EE',
    bullets: [
      'Performed end-to-end data cleaning, anomaly detection, and structured reporting in a Big-4 cybersecurity consulting context — mirroring real analyst deliverables.',
    ],
  },
  {
    company: 'JPMorgan Chase',
    role: 'Investment Banking & Software Engineering Simulation',
    period: '2026',
    type: 'Virtual · Forage',
    accentColor: '#F472B6',
    bullets: [
      'Completed financial data modeling and software engineering tasks replicating live investment-banking workflows, including structured stakeholder deliverables.',
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="experience" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">05</span>
          <span className="label-tag">Experience</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#F1F5F9', letterSpacing: '-0.03em', marginBottom: '64px' }}>
          Professional History
        </h2>

        <div className="timeline-track" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative', paddingBottom: i < experiences.length - 1 ? '32px' : '0' }}>
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ background: exp.accentColor, boxShadow: `0 0 12px ${exp.accentColor}55` }} />

              {/* Card */}
              <div className="card-glass" style={{ padding: '0', overflow: 'hidden', marginLeft: '8px' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${exp.accentColor}35`;
                  (e.currentTarget as HTMLElement).style.background = `${exp.accentColor}06`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)';
                }}
              >
                <div style={{ height: '2px', background: `linear-gradient(90deg, ${exp.accentColor}, transparent)` }} />
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', marginBottom: '16px', alignItems: 'start' }} className="exp-header">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.05rem', color: '#F1F5F9', letterSpacing: '-0.01em' }}>
                          {exp.company}
                        </span>
                        {exp.url && (
                          <a href={exp.url} target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: exp.accentColor, textDecoration: 'none', opacity: 0.7 }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                          >
                            ↗ visit
                          </a>
                        )}
                      </div>
                      <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.85rem', color: exp.accentColor }}>
                        {exp.role}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.67rem', color: 'rgba(241,245,249,0.22)', marginBottom: '7px', whiteSpace: 'nowrap' }}>
                        {exp.period}
                      </div>
                      <span className="badge" style={{
                        background: `${exp.accentColor}10`,
                        color: exp.accentColor,
                        border: `1px solid ${exp.accentColor}25`,
                        whiteSpace: 'nowrap',
                      }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: '12px', fontFamily: 'Inter', fontSize: '0.85rem', color: 'rgba(241,245,249,0.38)', lineHeight: 1.75 }}>
                        <span style={{ color: exp.accentColor, flexShrink: 0, marginTop: '3px', fontSize: '0.6rem' }}>▶</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .exp-header { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .timeline-track { padding-left: 18px !important; } }
      `}</style>
    </section>
  );
}
