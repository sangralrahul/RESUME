import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  badge: string;
  title: string;
  description: string;
  stat: string;
  tags: string[];
  pdf?: string;
  demo?: string;
  demoLabel?: string;
  glow?: boolean;
  activeBadge?: string;
}

const projects: Project[] = [
  {
    badge: 'Open Source · 2025–2026',
    title: 'AI Data Insights Engine',
    description:
      'LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend charts, and anomaly alerts in seconds. Drag-and-drop UI — no code required.',
    stat: '60% faster analysis',
    tags: ['Claude API', 'Python', 'Streamlit', 'Pandas'],
    pdf: '/ai-data-insights-engine.pdf',
  },
  {
    badge: 'Open Source · 2025–2026',
    title: 'RAG Document Intelligence',
    description:
      'Retrieval-Augmented Generation pipeline that lets you query any PDF or document set using natural language. Built with Claude API and a FastAPI backend — deployed on AWS EC2.',
    stat: '< 2s query response',
    tags: ['Claude API', 'FastAPI', 'RAG', 'Python', 'AWS'],
    pdf: '/rag-document-intelligence.pdf',
  },
  {
    badge: 'Open Source · 2025',
    title: 'SQL KPI Automator',
    description:
      'Python CLI + dashboard that connects to any PostgreSQL or MySQL database, auto-detects key metrics, and generates ready-to-share reports — saving 10+ hours of manual reporting weekly.',
    stat: '10+ hrs/week saved',
    tags: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Streamlit'],
    pdf: '/sql-kpi-automator.pdf',
  },
  {
    badge: 'Open Source · 2026',
    title: 'PromptLab — Prompt Engineering Toolkit',
    description:
      'A developer toolkit for testing, comparing, and optimising LLM prompts across Claude, Bedrock, and Vertex AI. Version-control your prompts, A/B test outputs, and track token costs in real time.',
    stat: '3 AI providers supported',
    tags: ['Claude API', 'Vertex AI', 'Amazon Bedrock', 'React', 'FastAPI'],
    pdf: '/promptlab.pdf',
  },
  {
    badge: 'Startup · 2025–2026',
    title: 'Aethex Platform',
    description:
      'Role-based analytics dashboards and REST API integrations for an AI medical platform targeting Indian doctors and students. Seed round: ₹2 Crore ask.',
    stat: '₹2Cr Seed Round',
    tags: ['React', 'FastAPI', 'Claude API', 'Docker', 'AWS'],
    demo: 'https://aethex.in',
    demoLabel: 'Visit Aethex →',
    glow: true,
    activeBadge: '🚀 Active',
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
        <div className="mb-12">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl mb-2">// projects</h2>
          <p className="font-['DM_Sans'] text-[#9CA3AF]">Open-source tools, AI experiments, and shipped products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-[#1A1A28] rounded-2xl p-6 flex flex-col h-full transition-all group relative ${
                project.glow
                  ? 'border border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.45)]'
                  : 'border border-[rgba(124,58,237,0.25)] hover:border-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]'
              }`}
            >
              {project.activeBadge && (
                <div className="absolute top-6 right-6">
                  <span className="bg-[#10B981] text-white text-xs font-bold font-['DM_Sans'] px-2 py-1 rounded-full">
                    {project.activeBadge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className="inline-block bg-[rgba(124,58,237,0.15)] text-[#C084FC] text-xs font-['DM_Sans'] px-3 py-1 rounded-full">
                  {project.badge}
                </span>
              </div>

              <h3 className={`font-['Syne'] font-bold text-xl text-white mb-3 ${project.activeBadge ? 'pr-16' : ''}`}>
                {project.title}
              </h3>

              <p className="font-['DM_Sans'] text-[#9CA3AF] text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="font-['Syne'] font-bold text-2xl text-[#A855F7] mb-5">
                {project.stat}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-['JetBrains_Mono'] text-xs text-[#9CA3AF] bg-[#12121A] border border-[#4C1D95] rounded-md px-2 py-1"
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
                    className="flex items-center gap-2 w-full justify-center py-3 rounded-lg font-['DM_Sans'] font-medium text-sm text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
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
                    className="flex items-center gap-2 w-full justify-center py-3 rounded-lg font-['DM_Sans'] font-medium text-sm text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
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
