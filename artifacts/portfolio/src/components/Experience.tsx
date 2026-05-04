import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Exp {
  fileName: string;
  company: string;
  role: string;
  period: string;
  type: string;
  url?: string;
  accentColor: string;
  bullets: string[];
}

const experiences: Exp[] = [
  {
    fileName: 'aethex.py',
    company: 'Aethex',
    role: 'Founder — AI Medical SaaS Platform',
    period: '2025 – Present',
    type: 'Founder · Remote',
    url: 'aethex.in',
    accentColor: '#4EC9B0',
    bullets: [
      'Founded and scaled a live AI-powered medical SaaS platform (React + FastAPI) serving 200+ registered users — Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub.',
      'Integrated Razorpay payments, Firebase auth, Brevo email, and GA4 analytics. Owned all ETL pipelines, cloud deployment, DNS infrastructure, and product roadmap.',
    ],
  },
  {
    fileName: 'freelance.py',
    company: 'Freelance AI/ML Developer',
    role: 'Independent Consultant',
    period: '2023 – Present',
    type: 'Freelance · Remote',
    accentColor: '#569CD6',
    bullets: [
      'Designed and delivered custom AI/ML solutions, data pipelines, and full-stack applications for clients across healthcare, finance, and business analytics.',
      'Built NLP models, RAG pipelines, and LLM-integrated tools using Python, FastAPI, and cloud platforms. Developed BI dashboards and SQL reporting systems.',
    ],
  },
  {
    fileName: 'snd_tech.py',
    company: 'SND Technologies',
    role: 'Business Development Executive Intern',
    period: 'Jan 2026 – Feb 2026',
    type: 'Industry · Remote',
    accentColor: '#DCDCAA',
    bullets: [
      'Engineered automated Python ETL data pipelines for KPI extraction and reporting — eliminated ~30% of manual effort, saving 10+ hours per week.',
      'Designed SQL queries and Tableau dashboards surfacing actionable sales trends. Built Excel workbooks using Pivot Tables, XLOOKUP, and Power Query.',
    ],
  },
  {
    fileName: 'deloitte.py',
    company: 'Deloitte Australia',
    role: 'Data Analytics & Cybersecurity Simulation',
    period: '2026',
    type: 'Virtual · Forage',
    accentColor: '#CE9178',
    bullets: [
      'Performed end-to-end data cleaning, anomaly detection, and structured reporting in a Big-4 cybersecurity context — mirroring real analyst deliverables.',
    ],
  },
  {
    fileName: 'jpmorgan.ts',
    company: 'JPMorgan Chase',
    role: 'Investment Banking & Software Engineering Simulation',
    period: '2026',
    type: 'Virtual · Forage',
    accentColor: '#C586C0',
    bullets: [
      'Completed financial data modeling and software engineering tasks replicating live investment-banking workflows, with structured stakeholder deliverables.',
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  const cmt = 'rgba(212,212,212,0.28)';
  const txt = 'rgba(212,212,212,0.62)';
  const hdr = '#569CD6';
  const key = '#9CDCFE';
  const org = '#CE9178';

  return (
    <section id="experience" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">05</span>
          <span className="label-tag">experience</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em', marginBottom: '64px' }}>
          Professional History
        </h2>

        <div className="timeline-track" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => {
            const isPy = exp.fileName.endsWith('.py');
            const pfx = isPy ? '#' : '//';
            return (
              <div key={i} style={{ position: 'relative', paddingBottom: i < experiences.length - 1 ? '20px' : '0' }}>
                <div className="timeline-dot" style={{ background: exp.accentColor, boxShadow: `0 0 10px ${exp.accentColor}55` }} />

                <div className="code-block" style={{ marginLeft: '8px' }}>
                  {/* Header tab bar */}
                  <div className="code-tab-bar">
                    <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                      {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                        <div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, opacity: 0.55 }} />
                      ))}
                    </div>
                    <div className="code-tab active">
                      <div className="code-tab-dot" style={{ background: exp.accentColor }} />
                      {exp.fileName}
                    </div>
                    <div style={{ marginLeft: 'auto', paddingRight: '8px' }}>
                      <span className="badge" style={{
                        background: `${exp.accentColor}10`,
                        color: exp.accentColor,
                        border: `1px solid ${exp.accentColor}25`,
                      }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Comment body */}
                  <div className="code-body" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                    {/* Company + role header */}
                    <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                      <span className="ln">1</span>
                      <span><span style={{ color: cmt }}>{pfx} </span><span style={{ color: hdr }}>── {exp.company} — {exp.role} ──</span></span>
                    </div>
                    {/* Period */}
                    <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                      <span className="ln">2</span>
                      <span>
                        <span style={{ color: cmt }}>{pfx}  </span>
                        <span style={{ color: key, display: 'inline-block', minWidth: '56px' }}>Period</span>
                        <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 8px' }}>→</span>
                        <span style={{ color: txt }}>{exp.period}</span>
                      </span>
                    </div>
                    {/* URL if available */}
                    {exp.url && (
                      <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                        <span className="ln">3</span>
                        <span>
                          <span style={{ color: cmt }}>{pfx}  </span>
                          <span style={{ color: key, display: 'inline-block', minWidth: '56px' }}>Website</span>
                          <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 8px' }}>→</span>
                          <a href={`https://${exp.url}`} target="_blank" rel="noopener noreferrer"
                            style={{ color: org, textDecoration: 'none', fontFamily: 'JetBrains Mono' }}
                            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                          >{exp.url}</a>
                        </span>
                      </div>
                    )}
                    {/* Blank line */}
                    <div style={{ display: 'flex', minHeight: '0.6em' }}>
                      <span className="ln">{exp.url ? 4 : 3}</span>
                    </div>
                    {/* Bullets */}
                    {exp.bullets.map((b, j) => (
                      <div key={j} style={{ display: 'flex', minHeight: '1.1em', marginBottom: j < exp.bullets.length - 1 ? '4px' : '0' }}>
                        <span className="ln">{(exp.url ? 5 : 4) + j}</span>
                        <span style={{ display: 'flex', gap: '8px', flex: 1 }}>
                          <span style={{ color: cmt }}>{pfx}  </span>
                          <span style={{ color: org, flexShrink: 0 }}>→</span>
                          <span style={{ color: txt, lineHeight: 1.7 }}>{b}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .timeline-track { padding-left: 18px !important; } }
      `}</style>
    </section>
  );
}
