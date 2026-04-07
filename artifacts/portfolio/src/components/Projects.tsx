import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'AI Data Insights Engine',
    badge: 'Open Source',
    year: '2025–2026',
    description: 'LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend charts, and anomaly alerts in seconds. Drag-and-drop UI — no code required.',
    result: '60% faster analysis',
    tags: ['Claude API', 'Python', 'Streamlit', 'Pandas'],
    link: '/ai-data-insights-engine.pdf',
    linkLabel: 'View Case Study',
    featured: false,
  },
  {
    title: 'RAG Document Intelligence',
    badge: 'Open Source',
    year: '2025–2026',
    description: 'Retrieval-Augmented Generation pipeline that lets you query any PDF or document set using natural language. Claude API backend — deployed on AWS EC2.',
    result: '< 2s query response',
    tags: ['Claude API', 'FastAPI', 'RAG', 'Python', 'AWS'],
    link: '/rag-document-intelligence.pdf',
    linkLabel: 'View Case Study',
    featured: false,
  },
  {
    title: 'SQL KPI Automator',
    badge: 'Open Source',
    year: '2025',
    description: 'Python CLI + dashboard that connects to any PostgreSQL or MySQL database, auto-detects key metrics, and generates ready-to-share reports. Saves 10+ hours of manual reporting weekly.',
    result: '10+ hrs/week saved',
    tags: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Streamlit'],
    link: '/sql-kpi-automator.pdf',
    linkLabel: 'View Case Study',
    featured: false,
  },
  {
    title: 'PromptLab — Prompt Engineering Toolkit',
    badge: 'Open Source',
    year: '2026',
    description: 'Developer toolkit for testing, comparing, and optimising LLM prompts across Claude, Bedrock, and Vertex AI. Version-control prompts, A/B test outputs, and track token costs in real time.',
    result: '3 AI providers supported',
    tags: ['Claude API', 'Vertex AI', 'Amazon Bedrock', 'React', 'FastAPI'],
    link: '/promptlab.pdf',
    linkLabel: 'View Case Study',
    featured: false,
  },
  {
    title: 'Aethex Platform',
    badge: 'Live Product',
    year: '2025–2026',
    description: 'Role-based analytics dashboards and REST API integrations for an AI medical platform targeting Indian doctors and students. Currently raising a ₹2 Crore seed round.',
    result: '₹2Cr seed round',
    tags: ['React', 'FastAPI', 'Claude API', 'Docker', 'AWS'],
    link: 'https://aethex.in',
    linkLabel: 'Visit Live Product',
    featured: true,
    isExternal: true,
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="projects" ref={ref} style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p className="label-tag" style={{ marginBottom: '12px' }}>Projects</p>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FAFAFA', letterSpacing: '-0.02em' }}>
              Work I've Shipped
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter', fontSize: '0.88rem', color: '#555', maxWidth: '300px', lineHeight: 1.6 }}>
            Open-source tools, AI experiments, and production products.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1E1E1E', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1E1E1E' }}>
          {projects.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: '#0F0F0F',
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'center',
                transition: 'background 0.2s ease',
              }}
              className="project-row"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#121212'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F0F0F'; }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span className="badge" style={{ background: p.featured ? '#1A2A3A' : '#1A1A1A', color: p.featured ? '#3B82F6' : '#666', border: `1px solid ${p.featured ? '#1E3A5F' : '#2A2A2A'}` }}>
                    {p.badge}
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#444' }}>{p.year}</span>
                  {p.featured && (
                    <span className="badge" style={{ background: '#162416', color: '#22C55E', border: '1px solid #1E3A1E' }}>
                      Live
                    </span>
                  )}
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '1rem', color: '#FAFAFA', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                  {p.title}
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#666', lineHeight: 1.65, marginBottom: '14px', maxWidth: '600px' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.82rem', color: '#3B82F6' }}>
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
                style={{ padding: '9px 18px', fontSize: '0.82rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
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
