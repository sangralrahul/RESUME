import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  fnName: string;
  returnType: string;
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
    fnName: 'aethex_platform',
    returnType: "Promise<{ users: 200 }>",
    badge: 'Live Product',
    badgeColor: '#4EC9B0',
    year: '2025–Present',
    description: 'AI-powered medical SaaS serving 200+ registered users. Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, CME hub. Integrated Razorpay, Firebase, Brevo, and GA4.',
    result: '200+ users',
    tags: ['React', 'FastAPI', 'ClaudeAPI', 'Firebase', 'Docker', 'AWS'],
    link: 'https://aethex.in',
    linkLabel: 'visit_live() ↗',
    featured: true,
    isExternal: true,
  },
  {
    fnName: 'ai_data_insights_engine',
    returnType: "Promise<{ speedup: '60%' }>",
    badge: 'Open Source',
    badgeColor: '#569CD6',
    year: '2025–2026',
    description: 'LLM-powered analytics tool that auto-ingests CSV/Excel and generates summaries, trend charts, and anomaly alerts. Claude API for natural-language querying.',
    result: '60% faster analysis',
    tags: ['ClaudeAPI', 'Python', 'Streamlit', 'Pandas'],
    link: '/ai-data-insights-engine.pdf',
    linkLabel: 'case_study()',
  },
  {
    fnName: 'sql_fix_env_v2',
    returnType: "Promise<HuggingFaceSpace>",
    badge: 'Hackathon',
    badgeColor: '#C586C0',
    year: '2025',
    description: 'AI-powered SQL debugging and pipeline orchestration env. Built for Meta × HuggingFace PyTorch Hackathon. Live on HuggingFace Spaces.',
    result: 'Live on HuggingFace',
    tags: ['Python', 'SQL', 'PyTorch', 'HuggingFace'],
    link: 'https://huggingface.co/spaces/SANGRALRAHUL/SQLFixEnv',
    linkLabel: 'view_live() ↗',
    isExternal: true,
  },
  {
    fnName: 'kpi_performance_dashboard',
    returnType: "Promise<{ req_reduction: '40%' }>",
    badge: 'BI Project',
    badgeColor: '#DCDCAA',
    year: '2025',
    description: 'Full BI pipeline orchestrating live SQL data into Tableau with dynamic drill-down filters. Reduced ad-hoc reporting requests by ~40%.',
    result: '~40% fewer requests',
    tags: ['SQL', 'Tableau', 'Python', 'ETL'],
    link: '/kpi-dashboard.pdf',
    linkLabel: 'case_study()',
  },
  {
    fnName: 'rag_document_intelligence',
    returnType: "Promise<{ latency: '<2s' }>",
    badge: 'Open Source',
    badgeColor: '#569CD6',
    year: '2025–2026',
    description: 'RAG pipeline for natural-language querying of any PDF or document set. Claude API backend deployed on AWS EC2.',
    result: '< 2s query response',
    tags: ['ClaudeAPI', 'FastAPI', 'RAG', 'Python', 'AWS'],
    link: '/rag-document-intelligence.pdf',
    linkLabel: 'case_study()',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

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
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="card-glass-flat"
              style={{ padding: '22px 26px', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center' }}
            >
              <div>
                {/* Function signature line */}
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.74rem', marginBottom: '10px', lineHeight: 1.5, flexWrap: 'wrap', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="badge" style={{ background: `${p.badgeColor}10`, color: p.badgeColor, border: `1px solid ${p.badgeColor}22`, marginRight: '6px' }}>
                    {p.badge}
                  </span>
                  <span className="t-kw">async function </span>
                  <span className="t-fn" style={{ color: p.badgeColor }}>{p.fnName}</span>
                  <span className="t-op">(): </span>
                  <span className="t-type">{p.returnType}</span>
                  <span className="t-cmt" style={{ marginLeft: '8px' }}>// {p.year}</span>
                </div>

                <p style={{ fontFamily: 'Inter', fontSize: '0.83rem', color: 'rgba(212,212,212,0.38)', lineHeight: 1.75, marginBottom: '12px', maxWidth: '580px' }}>
                  {p.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#569CD6' }}>
                    return <span style={{ color: '#CE9178' }}>"{p.result}"</span>;
                  </span>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>

              <a
                href={p.link}
                target={p.isExternal ? '_blank' : undefined}
                rel={p.isExternal ? 'noopener noreferrer' : undefined}
                data-testid={`btn-view-${idx}`}
                className={p.featured ? 'btn-blue' : 'btn-ghost'}
                style={{ padding: '9px 18px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {p.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
