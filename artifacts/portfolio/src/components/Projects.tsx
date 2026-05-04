import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  fileName: string;
  title: string;
  badge: string;
  badgeColor: string;
  year: string;
  description: string;
  result: string;
  tags: string[];
  link: string;
  linkLabel: string;
  featured?: boolean;
  isExternal?: boolean;
}

const projects: Project[] = [
  {
    fileName: 'aethex_platform.py',
    title: 'Aethex Platform',
    badge: 'Live Product',
    badgeColor: '#4EC9B0',
    year: '2025 – Present',
    description: 'AI-powered medical SaaS serving 200+ registered users. Features Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub. Integrated Razorpay, Firebase, Brevo, and GA4.',
    result: '200+ registered users',
    tags: ['React', 'FastAPI', 'Claude API', 'Firebase', 'Docker', 'AWS'],
    link: 'https://aethex.in',
    linkLabel: 'Visit Live ↗',
    featured: true,
    isExternal: true,
  },
  {
    fileName: 'ai_insights_engine.py',
    title: 'AI Data Insights Engine',
    badge: 'Open Source',
    badgeColor: '#569CD6',
    year: '2025 – 2026',
    description: 'LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend charts, and anomaly alerts. Uses Claude API for natural-language querying — no SQL needed.',
    result: '60% faster analysis',
    tags: ['Claude API', 'Python', 'Streamlit', 'Pandas'],
    link: '/ai-data-insights-engine.pdf',
    linkLabel: 'Case Study',
  },
  {
    fileName: 'sql_fix_env.ts',
    title: 'SQLFixEnv v2.0',
    badge: 'Hackathon',
    badgeColor: '#C586C0',
    year: '2025',
    description: 'AI-powered SQL debugging and pipeline orchestration environment. Built for the Meta × HuggingFace PyTorch Hackathon. Currently live on HuggingFace Spaces.',
    result: 'Live on HuggingFace',
    tags: ['Python', 'SQL', 'PyTorch', 'HuggingFace'],
    link: 'https://huggingface.co/spaces/SANGRALRAHUL/SQLFixEnv',
    linkLabel: 'View Live ↗',
    isExternal: true,
  },
  {
    fileName: 'kpi_dashboard.py',
    title: 'KPI Performance Dashboard',
    badge: 'BI Project',
    badgeColor: '#DCDCAA',
    year: '2025',
    description: 'Full BI pipeline orchestrating live SQL data into Tableau with dynamic drill-down filters and KPI visualizations. Reduced ad-hoc reporting requests by approximately 40%.',
    result: '~40% fewer requests',
    tags: ['SQL', 'Tableau', 'Python', 'ETL', 'Power Query'],
    link: '/kpi-dashboard.pdf',
    linkLabel: 'Case Study',
  },
  {
    fileName: 'rag_intelligence.ts',
    title: 'RAG Document Intelligence',
    badge: 'Open Source',
    badgeColor: '#569CD6',
    year: '2025 – 2026',
    description: 'RAG pipeline for natural-language querying of any PDF or document set. Claude API backend deployed on AWS EC2. Responds in under 2 seconds.',
    result: 'Under 2s response',
    tags: ['Claude API', 'FastAPI', 'RAG', 'Python', 'AWS'],
    link: '/rag-document-intelligence.pdf',
    linkLabel: 'Case Study',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  const cmt = 'rgba(212,212,212,0.28)';
  const txt = 'rgba(212,212,212,0.62)';
  const hdr = '#569CD6';
  const key = '#9CDCFE';
  const org = '#CE9178';

  return (
    <section id="projects" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">04</span>
          <span className="label-tag">projects</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Work I've Shipped
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {projects.map((p, idx) => {
            const isPy = p.fileName.endsWith('.py');
            const pfx = isPy ? '#' : '//';
            return (
              <div key={idx} className="code-block" style={{ borderRadius: '12px' }}>
                <div className="code-tab-bar">
                  <div style={{ display: 'flex', gap: '5px', marginRight: '12px' }}>
                    {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                      <div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, opacity: 0.55 }} />
                    ))}
                  </div>
                  <div className="code-tab active">
                    <div className="code-tab-dot" style={{ background: p.badgeColor }} />
                    {p.fileName}
                  </div>
                  <span className="badge" style={{
                    background: `${p.badgeColor}10`, color: p.badgeColor,
                    border: `1px solid ${p.badgeColor}22`, marginLeft: '8px',
                  }}>{p.badge}</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: cmt, marginLeft: '8px' }}>
                    {pfx} {p.year}
                  </span>
                  <div style={{ marginLeft: 'auto' }}>
                    <a
                      href={p.link}
                      target={p.isExternal ? '_blank' : undefined}
                      rel={p.isExternal ? 'noopener noreferrer' : undefined}
                      data-testid={`btn-view-${idx}`}
                      className={p.featured ? 'btn-blue' : 'btn-ghost'}
                      style={{ padding: '5px 14px', textDecoration: 'none', fontSize: '0.7rem', fontFamily: 'Inter', fontWeight: 500 }}
                    >
                      {p.linkLabel}
                    </a>
                  </div>
                </div>

                <div className="code-body" style={{ padding: '14px 22px' }}>
                  {/* Title line */}
                  <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                    <span className="ln">1</span>
                    <span><span style={{ color: cmt }}>{pfx} </span><span style={{ color: hdr }}>── {p.title} ──</span></span>
                  </div>
                  {/* Result line */}
                  <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                    <span className="ln">2</span>
                    <span>
                      <span style={{ color: cmt }}>{pfx}  </span>
                      <span style={{ color: key, display: 'inline-block', minWidth: '56px' }}>Result</span>
                      <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 8px' }}>→</span>
                      <span style={{ color: org }}>{p.result}</span>
                    </span>
                  </div>
                  {/* Tags line */}
                  <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '6px' }}>
                    <span className="ln">3</span>
                    <span>
                      <span style={{ color: cmt }}>{pfx}  </span>
                      <span style={{ color: key, display: 'inline-block', minWidth: '56px' }}>Stack</span>
                      <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 8px' }}>→</span>
                      <span style={{ color: 'rgba(212,212,212,0.45)' }}>{p.tags.join(' · ')}</span>
                    </span>
                  </div>
                  {/* Empty */}
                  <div style={{ display: 'flex', minHeight: '0.5em' }}>
                    <span className="ln">4</span>
                  </div>
                  {/* Description */}
                  <div style={{ display: 'flex', minHeight: '1.1em' }}>
                    <span className="ln">5</span>
                    <span style={{ color: cmt }}>{pfx}  <span style={{ color: txt, fontFamily: 'Inter', fontSize: '0.82rem' }}>{p.description}</span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
