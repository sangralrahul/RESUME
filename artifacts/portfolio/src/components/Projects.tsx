import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'Aethex Platform',
    badge: 'Live Product',
    badgeColor: '#22C55E',
    year: '2025–Present',
    description: 'AI-powered medical SaaS platform serving 200+ registered users. Includes Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub. Integrated Razorpay, Firebase auth, Brevo email, and GA4 analytics.',
    result: '200+ users',
    tags: ['React', 'FastAPI', 'Claude API', 'Firebase', 'Docker', 'AWS'],
    link: 'https://aethex.in',
    linkLabel: 'Visit Live ↗',
    featured: true,
    isExternal: true,
  },
  {
    title: 'AI Data Insights Engine',
    badge: 'Open Source',
    badgeColor: '#3B82F6',
    year: '2025–2026',
    description: 'LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend visualizations, and anomaly alerts. Integrated Claude API for natural-language querying — no SQL required.',
    result: '60% faster analysis',
    tags: ['Claude API', 'Python', 'Streamlit', 'Pandas'],
    link: '/ai-data-insights-engine.pdf',
    linkLabel: 'Case Study',
    featured: false,
  },
  {
    title: 'SQLFixEnv v2.0',
    badge: 'Hackathon',
    badgeColor: '#8B5CF6',
    year: '2025',
    description: 'AI-powered SQL debugging and pipeline orchestration environment. Built and deployed for the Meta × HuggingFace PyTorch Hackathon. Live on HuggingFace Spaces.',
    result: 'Live on HuggingFace',
    tags: ['Python', 'SQL', 'PyTorch', 'HuggingFace'],
    link: 'https://huggingface.co/spaces/SANGRALRAHUL/SQLFixEnv',
    linkLabel: 'View Live ↗',
    featured: false,
    isExternal: true,
  },
  {
    title: 'KPI Performance Dashboard',
    badge: 'BI Project',
    badgeColor: '#F59E0B',
    year: '2025',
    description: 'Full BI pipeline orchestrating live SQL data into Tableau with dynamic drill-down filters and KPI visualizations. Reduced ad-hoc reporting requests by ~40%.',
    result: '~40% fewer ad-hoc requests',
    tags: ['SQL', 'Tableau', 'Python', 'ETL', 'Power Query'],
    link: '/kpi-dashboard.pdf',
    linkLabel: 'Case Study',
    featured: false,
  },
  {
    title: 'RAG Document Intelligence',
    badge: 'Open Source',
    badgeColor: '#3B82F6',
    year: '2025–2026',
    description: 'RAG pipeline that lets you query any PDF or document set using natural language. Claude API backend deployed on AWS EC2.',
    result: '< 2s query response',
    tags: ['Claude API', 'FastAPI', 'RAG', 'Python', 'AWS'],
    link: '/rag-document-intelligence.pdf',
    linkLabel: 'Case Study',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="projects" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">04</span>
          <span className="label-tag">Projects</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Work I've Shipped
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="card-glass-flat"
              style={{
                padding: '28px 32px',
                borderRadius: '12px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span className="badge" style={{
                    background: `${p.badgeColor}12`,
                    color: p.badgeColor,
                    border: `1px solid ${p.badgeColor}25`,
                  }}>
                    {p.badge}
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>{p.year}</span>
                </div>

                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                  {p.title}
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: '14px', maxWidth: '620px' }}>
                  {p.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.8rem', color: '#60A5FA' }}>
                    → {p.result}
                  </span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
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
                style={{ padding: '9px 20px', fontSize: '0.8rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {p.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
