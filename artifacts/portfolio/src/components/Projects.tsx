import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  badge: string;
  title: string;
  description: string;
  stat: string;
  statColor: string;
  tags: string[];
  pdf?: string;
  demo?: string;
  demoLabel?: string;
  featured?: boolean;
  activeBadge?: string;
}

const projects: Project[] = [
  {
    badge: 'Open Source · 2025–2026',
    title: 'AI Data Insights Engine',
    description:
      'LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend charts, and anomaly alerts in seconds. Drag-and-drop UI — no code required.',
    stat: '60% faster analysis',
    statColor: '#00D4FF',
    tags: ['Claude API', 'Python', 'Streamlit', 'Pandas'],
    pdf: '/ai-data-insights-engine.pdf',
  },
  {
    badge: 'Open Source · 2025–2026',
    title: 'RAG Document Intelligence',
    description:
      'Retrieval-Augmented Generation pipeline that lets you query any PDF or document set using natural language. Built with Claude API and a FastAPI backend — deployed on AWS EC2.',
    stat: '< 2s query response',
    statColor: '#10B981',
    tags: ['Claude API', 'FastAPI', 'RAG', 'Python', 'AWS'],
    pdf: '/rag-document-intelligence.pdf',
  },
  {
    badge: 'Open Source · 2025',
    title: 'SQL KPI Automator',
    description:
      'Python CLI + dashboard that connects to any PostgreSQL or MySQL database, auto-detects key metrics, and generates ready-to-share reports — saving 10+ hours of manual reporting weekly.',
    stat: '10+ hrs/week saved',
    statColor: '#F59E0B',
    tags: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Streamlit'],
    pdf: '/sql-kpi-automator.pdf',
  },
  {
    badge: 'Open Source · 2026',
    title: 'PromptLab',
    description:
      'Developer toolkit for testing, comparing, and optimising LLM prompts across Claude, Bedrock, and Vertex AI. Version-control your prompts, A/B test outputs, and track token costs in real time.',
    stat: '3 AI providers',
    statColor: '#00D4FF',
    tags: ['Claude API', 'Vertex AI', 'Amazon Bedrock', 'React', 'FastAPI'],
    pdf: '/promptlab.pdf',
  },
  {
    badge: 'Startup · 2025–2026',
    title: 'Aethex Platform',
    description:
      'Role-based analytics dashboards and REST API integrations for an AI medical platform targeting Indian doctors and students. Seed round: ₹2 Crore ask.',
    stat: '₹2Cr Seed Round',
    statColor: '#10B981',
    tags: ['React', 'FastAPI', 'Claude API', 'Docker', 'AWS'],
    demo: 'https://aethex.in',
    demoLabel: 'Visit Aethex →',
    featured: true,
    activeBadge: '🚀 Live',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-28 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
            04 — Projects
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.1)' }} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl leading-tight" style={{ color: '#FFFFFF' }}>
            Work I've
            <br />
            <span className="gradient-text">Shipped</span>
          </h2>
          <p className="font-['DM_Sans'] text-base max-w-sm" style={{ color: '#6B7280' }}>
            Open-source tools, AI experiments, and production products.
          </p>
        </div>

        {/* Featured project — full width */}
        {featured && (
          <div
            className="rounded-3xl p-8 sm:p-10 mb-6 border relative overflow-hidden"
            style={{
              background: 'rgba(13,13,24,0.9)',
              borderColor: 'rgba(0,212,255,0.3)',
              boxShadow: '0 0 40px rgba(0,212,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Big BG stat */}
            <div
              className="absolute right-8 top-1/2 -translate-y-1/2 font-['Syne'] font-bold hidden lg:block select-none pointer-events-none"
              style={{ fontSize: '10rem', color: 'rgba(0,212,255,0.04)', lineHeight: 1 }}
            >
              ₹2Cr
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-['DM_Sans'] text-xs px-3 py-1 rounded-full"
                    style={{ background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.25)' }}
                  >
                    {featured.badge}
                  </span>
                  {featured.activeBadge && (
                    <span
                      className="font-['DM_Sans'] font-bold text-xs px-3 py-1 rounded-full"
                      style={{ background: '#10B981', color: '#fff' }}
                    >
                      {featured.activeBadge}
                    </span>
                  )}
                </div>
                <h3
                  className="font-['Syne'] font-bold text-3xl sm:text-4xl mb-4"
                  style={{ color: '#FFFFFF' }}
                >
                  {featured.title}
                </h3>
                <p className="font-['DM_Sans'] text-base leading-relaxed" style={{ color: '#9CA3AF' }}>
                  {featured.description}
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div
                  className="font-['Syne'] font-bold text-4xl mb-6"
                  style={{ color: featured.statColor }}
                >
                  {featured.stat}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map(t => (
                      <span
                        key={t}
                        className="font-['JetBrains_Mono'] text-xs px-3 py-1.5 rounded-lg border"
                        style={{ background: 'rgba(0,212,255,0.06)', color: '#00D4FF', borderColor: 'rgba(0,212,255,0.2)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="btn-demo-featured"
                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-['DM_Sans'] font-bold"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    {featured.demoLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rest — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rest.map((project, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 flex flex-col border transition-all"
              style={{
                background: 'rgba(13,13,24,0.85)',
                borderColor: 'rgba(0,212,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.35)';
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.1)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-['DM_Sans'] text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(0,212,255,0.07)', color: '#6B7280', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  {project.badge}
                </span>
                <div className="font-['Syne'] font-bold text-lg" style={{ color: project.statColor }}>
                  {project.stat}
                </div>
              </div>

              <h3 className="font-['Syne'] font-bold text-xl mb-3" style={{ color: '#FFFFFF' }}>
                {project.title}
              </h3>

              <p className="font-['DM_Sans'] text-sm leading-relaxed flex-grow mb-5" style={{ color: '#6B7280' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(t => (
                  <span
                    key={t}
                    className="font-['JetBrains_Mono'] text-xs px-2.5 py-1 rounded-lg border"
                    style={{ background: 'rgba(0,0,0,0.3)', color: '#6B7280', borderColor: 'rgba(0,212,255,0.12)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`btn-view-${idx}`}
                className="flex items-center gap-2 w-full justify-center py-3 rounded-xl font-['DM_Sans'] font-medium text-sm border transition-all"
                style={{ borderColor: 'rgba(0,212,255,0.25)', color: '#00D4FF' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.07)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <FaExternalLinkAlt className="text-xs" />
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
