import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Exp {
  company: string;
  fnName: string;
  returnType: string;
  period: string;
  type: string;
  url?: string;
  accentColor: string;
  bullets: string[];
}

const experiences: Exp[] = [
  {
    company: 'Aethex',
    fnName: 'build_ai_medical_saas',
    returnType: 'LiveProduct',
    period: '2025 – Present',
    type: 'Founder · Remote',
    url: 'https://aethex.in',
    accentColor: '#4EC9B0',
    bullets: [
      'Founded and scaled a live AI-powered medical SaaS (React + FastAPI) serving 200+ registered users — Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub.',
      'Integrated Razorpay payments, Firebase auth, Brevo email, and GA4 analytics; owned all ETL pipelines, DNS infrastructure, cloud deployment, and product roadmap end-to-end.',
    ],
  },
  {
    company: 'Freelance AI/ML Developer',
    fnName: 'deliver_ai_solutions',
    returnType: 'MLProject[]',
    period: '2023 – Present',
    type: 'Freelance · Remote',
    accentColor: '#569CD6',
    bullets: [
      'Designed and delivered custom AI/ML solutions, data pipelines, and full-stack applications for clients across healthcare, finance, and business analytics domains.',
      'Built NLP models, RAG pipelines, and LLM-integrated tools using Python, FastAPI, and cloud platforms; developed BI dashboards and SQL reporting systems.',
    ],
  },
  {
    company: 'SND Technologies',
    fnName: 'automate_kpi_reporting',
    returnType: 'ETLResult',
    period: 'Jan 2026 – Feb 2026',
    type: 'Industry · Remote',
    accentColor: '#DCDCAA',
    bullets: [
      'Engineered automated Python ETL data pipelines for KPI extraction and reporting, eliminating ~30% of manual effort and saving 10+ hours per week.',
      'Designed SQL queries and Tableau dashboards surfacing actionable sales trends; built Excel workbooks using Pivot Tables, XLOOKUP, and Power Query.',
    ],
  },
  {
    company: 'Deloitte Australia',
    fnName: 'cybersecurity_analytics_sim',
    returnType: 'AnalyticsReport',
    period: '2026',
    type: 'Virtual · Forage',
    accentColor: '#CE9178',
    bullets: [
      'Performed end-to-end data cleaning, anomaly detection, and structured reporting in a Big-4 cybersecurity consulting context — mirroring real analyst deliverables.',
    ],
  },
  {
    company: 'JPMorgan Chase',
    fnName: 'investment_banking_sim',
    returnType: 'FinancialModel',
    period: '2026',
    type: 'Virtual · Forage',
    accentColor: '#C586C0',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">05</span>
          <span className="label-tag">experience</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em', marginBottom: '64px' }}>
          Professional History
        </h2>

        <div className="timeline-track" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative', paddingBottom: i < experiences.length - 1 ? '28px' : '0' }}>
              <div className="timeline-dot" style={{ background: exp.accentColor, boxShadow: `0 0 10px ${exp.accentColor}55` }} />

              <div className="code-block" style={{ marginLeft: '8px' }}>
                {/* Decorator header */}
                <div style={{
                  padding: '16px 22px',
                  borderBottom: `1px solid rgba(86,156,214,0.08)`,
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.76rem',
                  lineHeight: 1.8,
                }}>
                  <div>
                    <span className="t-deco">@company</span>
                    <span className="t-op">(</span>
                    <span className="t-str">"{exp.company}"</span>
                    {exp.url && (
                      <>
                        <span className="t-op">, url=</span>
                        <a href={exp.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: '#CE9178', textDecoration: 'none', fontFamily: 'JetBrains Mono' }}
                          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                        >"{exp.url.replace('https://','')}"</a>
                      </>
                    )}
                    <span className="t-op">)</span>
                  </div>
                  <div>
                    <span className="t-deco">@period</span>
                    <span className="t-op">(</span>
                    <span className="t-str">"{exp.period}"</span>
                    <span className="t-op">)  </span>
                    <span className="t-cmt"># {exp.type}</span>
                  </div>
                  <div>
                    <span className="t-kw">async def </span>
                    <span className="t-fn" style={{ color: exp.accentColor }}>{exp.fnName}</span>
                    <span className="t-op">() -&gt; </span>
                    <span className="t-type">{exp.returnType}</span>
                    <span className="t-op">:</span>
                  </div>
                </div>

                {/* Bullets as docstring */}
                <div style={{ padding: '16px 22px', fontFamily: 'JetBrains Mono', fontSize: '0.74rem', lineHeight: 1.85 }}>
                  <div style={{ marginLeft: 20 }}>
                    <span className="t-cmt">"""</span>
                  </div>
                  {exp.bullets.map((b, j) => (
                    <div key={j} style={{ marginLeft: 20, display: 'flex', gap: '8px' }}>
                      <span className="t-cmt">→ </span>
                      <span className="t-cmt">{b}</span>
                    </div>
                  ))}
                  <div style={{ marginLeft: 20 }}>
                    <span className="t-cmt">"""</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .timeline-track { padding-left: 18px !important; } }
      `}</style>
    </section>
  );
}
