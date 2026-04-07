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
    title: 'PromptLab — Prompt Engineering Toolkit',
    description:
      'A developer toolkit for testing, comparing, and optimising LLM prompts across Claude, Bedrock, and Vertex AI. Version-control your prompts, A/B test outputs, and track token costs in real time.',
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

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="font-['JetBrains_Mono'] text-sm mb-3" style={{ color: '#00D4FF' }}>// projects</p>
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl mb-3" style={{ color: '#FFFFFF' }}>
            Work I've Shipped
          </h2>
          <p className="font-['DM_Sans'] text-lg" style={{ color: '#6B7280' }}>
            Open-source tools, AI experiments, and shipped products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 flex flex-col h-full border transition-all group relative"
              style={{
                background: 'rgba(13,13,24,0.85)',
                borderColor: project.featured ? 'rgba(0,212,255,0.4)' : 'rgba(0,212,255,0.12)',
                boxShadow: project.featured ? '0 0 30px rgba(0,212,255,0.1)' : 'none',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.5)';
                el.style.boxShadow = '0 0 40px rgba(0,212,255,0.12), 0 8px 32px rgba(0,0,0,0.4)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = project.featured ? 'rgba(0,212,255,0.4)' : 'rgba(0,212,255,0.12)';
                el.style.boxShadow = project.featured ? '0 0 30px rgba(0,212,255,0.1)' : 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {project.activeBadge && (
                <div className="absolute top-5 right-5">
                  <span
                    className="text-xs font-bold font-['DM_Sans'] px-2 py-1 rounded-full"
                    style={{ background: '#10B981', color: '#fff' }}
                  >
                    {project.activeBadge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span
                  className="inline-block text-xs font-['DM_Sans'] px-3 py-1 rounded-full"
                  style={{ background: 'rgba(0,212,255,0.08)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  {project.badge}
                </span>
              </div>

              <h3
                className={`font-['Syne'] font-bold text-xl mb-3 ${project.activeBadge ? 'pr-16' : ''}`}
                style={{ color: '#FFFFFF' }}
              >
                {project.title}
              </h3>

              <p className="font-['DM_Sans'] text-sm leading-relaxed mb-5 flex-grow" style={{ color: '#6B7280' }}>
                {project.description}
              </p>

              <div className="font-['Syne'] font-bold text-2xl mb-5" style={{ color: project.statColor }}>
                {project.stat}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-['JetBrains_Mono'] text-xs rounded-md px-2 py-1 border"
                    style={{ background: 'rgba(0,0,0,0.3)', color: '#6B7280', borderColor: 'rgba(0,212,255,0.15)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`btn-demo-${idx}`}
                    className="btn-primary flex items-center gap-2 w-full justify-center py-3 rounded-xl font-['DM_Sans'] font-bold text-sm"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    {project.demoLabel ?? 'Live Demo'}
                  </a>
                ) : (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`btn-view-${idx}`}
                    className="flex items-center gap-2 w-full justify-center py-3 rounded-xl font-['DM_Sans'] font-medium text-sm border transition-all"
                    style={{ borderColor: 'rgba(0,212,255,0.3)', color: '#00D4FF' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.08)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
