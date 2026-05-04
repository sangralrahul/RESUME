import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'Aethex Platform',
    badge: 'Live Product',
    badgeColor: '#34D399',
    year: '2025–Present',
    description: 'AI-powered medical SaaS serving 200+ registered users. Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub. Integrated Razorpay, Firebase auth, Brevo, and GA4.',
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
    badgeColor: '#6366F1',
    year: '2025–2026',
    description: 'LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend visualizations, and anomaly alerts. Claude API for natural-language querying — no SQL required.',
    result: '60% faster analysis',
    tags: ['Claude API', 'Python', 'Streamlit', 'Pandas'],
    link: '/ai-data-insights-engine.pdf',
    linkLabel: 'Case Study',
    featured: false,
  },
  {
    title: 'SQLFixEnv v2.0',
    badge: 'Hackathon',
    badgeColor: '#818CF8',
    year: '2025',
    description: 'AI-powered SQL debugging and pipeline orchestration environment built for the Meta × HuggingFace PyTorch Hackathon. Live on HuggingFace Spaces.',
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
    badgeColor: '#FBBF24',
    year: '2025',
    description: 'Full BI pipeline orchestrating live SQL data into Tableau with dynamic drill-down filters and KPI visualizations. Reduced ad-hoc reporting requests by ~40%.',
    result: '~40% fewer requests',
    tags: ['SQL', 'Tableau', 'Python', 'ETL', 'Power Query'],
    link: '/kpi-dashboard.pdf',
    linkLabel: 'Case Study',
    featured: false,
  },
  {
    title: 'RAG Document Intelligence',
    badge: 'Open Source',
    badgeColor: '#6366F1',
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
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">04</span>
          <span className="label-tag">Projects</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#F1F5F9', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Work I've Shipped
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="card-glass-flat"
              style={{
                padding: '26px 30px',
                borderRadius: '14px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '28px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '9px', flexWrap: 'wrap' }}>
                  <span className="badge" style={{
                    background: `${p.badgeColor}10`,
                    color: p.badgeColor,
                    border: `1px solid ${p.badgeColor}22`,
                  }}>
                    {p.badge}
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'rgba(241,245,249,0.18)' }}>{p.year}</span>
                </div>

                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.98rem', color: '#F1F5F9', marginBottom: '9px', letterSpacing: '-0.01em' }}>
                  {p.title}
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.83rem', color: 'rgba(241,245,249,0.35)', lineHeight: 1.75, marginBottom: '13px', maxWidth: '600px' }}>
                  {p.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.78rem', color: '#818CF8' }}>
                    → {p.result}
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
                style={{ padding: '9px 20px', fontSize: '0.8rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
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
