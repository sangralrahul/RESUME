import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  fileName: string; title: string; badge: string; badgeColor: string;
  year: string; description: string; result: string; tags: string[];
  link: string; linkLabel: string; featured?: boolean; isExternal?: boolean;
}

const projects: Project[] = [
  {
    fileName: 'aethex_platform.py', title: 'Aethex Platform',
    badge: 'Live Product', badgeColor: '#4EC9B0', year: '2025 – Present',
    description: 'AI-powered medical SaaS serving 200+ registered users. Features Cadus AI clinical assistant, drug reference database, NEET-PG MCQ engine, and CME hub. Integrated Razorpay, Firebase, Brevo, and GA4.',
    result: '200+ registered users',
    tags: ['React', 'FastAPI', 'Claude API', 'Firebase', 'Docker', 'AWS'],
    link: 'https://aethex.in', linkLabel: 'Visit Live ↗', featured: true, isExternal: true,
  },
  {
    fileName: 'ai_insights_engine.py', title: 'AI Data Insights Engine',
    badge: 'Open Source', badgeColor: '#569CD6', year: '2025 – 2026',
    description: 'LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend charts, and anomaly alerts. Natural-language querying — no SQL needed.',
    result: '60% faster analysis',
    tags: ['Claude API', 'Python', 'Streamlit', 'Pandas'],
    link: '/ai-data-insights-engine.pdf', linkLabel: 'Case Study',
  },
  {
    fileName: 'sql_fix_env.ts', title: 'SQLFixEnv v2.0',
    badge: 'Hackathon', badgeColor: '#C586C0', year: '2025',
    description: 'AI-powered SQL debugging and pipeline orchestration environment. Built for the Meta × HuggingFace PyTorch Hackathon. Live on HuggingFace Spaces.',
    result: 'Live on HuggingFace',
    tags: ['Python', 'SQL', 'PyTorch', 'HuggingFace'],
    link: 'https://huggingface.co/spaces/SANGRALRAHUL/SQLFixEnv', linkLabel: 'View Live ↗', isExternal: true,
  },
  {
    fileName: 'kpi_dashboard.py', title: 'KPI Performance Dashboard',
    badge: 'BI Project', badgeColor: '#DCDCAA', year: '2025',
    description: 'Full BI pipeline orchestrating live SQL data into Tableau with dynamic drill-down filters and KPI visualizations. Reduced ad-hoc reporting requests by ~40%.',
    result: '~40% fewer requests',
    tags: ['SQL', 'Tableau', 'Python', 'ETL', 'Power Query'],
    link: '/kpi-dashboard.pdf', linkLabel: 'Case Study',
  },
  {
    fileName: 'rag_intelligence.ts', title: 'RAG Document Intelligence',
    badge: 'Open Source', badgeColor: '#569CD6', year: '2025 – 2026',
    description: 'RAG pipeline for natural-language querying of any PDF or document set. Claude API backend deployed on AWS EC2. Responds in under 2 seconds.',
    result: 'Under 2s response',
    tags: ['Claude API', 'FastAPI', 'RAG', 'Python', 'AWS'],
    link: '/rag-document-intelligence.pdf', linkLabel: 'Case Study',
  },
];

export default function Projects() {
  const ref       = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  const cmt = 'rgba(212,212,212,0.26)';
  const txt = 'rgba(212,212,212,0.62)';
  const hdr = '#569CD6';
  const key = '#9CDCFE';
  const org = '#CE9178';

  const [featured, ...rest] = projects;

  const renderCodeBody = (p: Project) => {
    const pfx = p.fileName.endsWith('.py') ? '#' : '//';
    return (
      <div className="code-body" style={{ padding: '16px 22px' }}>
        <div style={{ display: 'flex', minHeight: '1.15em', marginBottom: '2px' }}>
          <span className="ln">1</span>
          <span><span style={{ color: cmt }}>{pfx} </span><span style={{ color: hdr }}>── {p.title} ──</span></span>
        </div>
        <div style={{ display: 'flex', minHeight: '1.15em', marginBottom: '2px' }}>
          <span className="ln">2</span>
          <span>
            <span style={{ color: cmt }}>{pfx}  </span>
            <span style={{ color: key, display: 'inline-block', minWidth: '52px' }}>Result</span>
            <span style={{ color: 'rgba(212,212,212,0.28)', margin: '0 8px' }}>→</span>
            <span style={{ color: org, fontWeight: 500 }}>{p.result}</span>
          </span>
        </div>
        <div style={{ display: 'flex', minHeight: '1.15em', marginBottom: '8px' }}>
          <span className="ln">3</span>
          <span>
            <span style={{ color: cmt }}>{pfx}  </span>
            <span style={{ color: key, display: 'inline-block', minWidth: '52px' }}>Stack</span>
            <span style={{ color: 'rgba(212,212,212,0.28)', margin: '0 8px' }}>→</span>
            <span style={{ color: 'rgba(212,212,212,0.38)', fontFamily: 'Inter', fontSize: '0.8rem' }}>{p.tags.join(' · ')}</span>
          </span>
        </div>
        <div style={{ display: 'flex', minHeight: '0.5em' }}>
          <span className="ln">4</span>
        </div>
        <div style={{ display: 'flex', minHeight: '1.15em' }}>
          <span className="ln">5</span>
          <span style={{ color: cmt }}>{pfx}  <span style={{ color: txt, fontFamily: 'Inter', fontSize: '0.82rem', lineHeight: 1.75 }}>{p.description}</span></span>
        </div>
      </div>
    );
  };

  const renderTabBar = (p: Project, large?: boolean) => {
    const pfx = p.fileName.endsWith('.py') ? '#' : '//';
    return (
      <div className="code-tab-bar" style={large ? { height: '44px' } : {}}>
        <div style={{ display: 'flex', gap: '5px', marginRight: '12px' }}>
          {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
            <div key={c} style={{ width: large ? '10px' : '8px', height: large ? '10px' : '8px', borderRadius: '50%', background: c, opacity: 0.6 }} />
          ))}
        </div>
        <div className="code-tab active">
          <div className="code-tab-dot" style={{ background: p.badgeColor }} />
          {p.fileName}
        </div>
        <span className="badge" style={{ background: `${p.badgeColor}10`, color: p.badgeColor, border: `1px solid ${p.badgeColor}22`, marginLeft: '8px' }}>
          {p.badge}
        </span>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: cmt, marginLeft: '8px' }}>
          {pfx} {p.year}
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <a href={p.link} target={p.isExternal ? '_blank' : undefined}
            rel={p.isExternal ? 'noopener noreferrer' : undefined}
            className={p.featured ? 'btn-blue' : 'btn-ghost'}
            style={{ padding: large ? '7px 18px' : '5px 14px', textDecoration: 'none', fontSize: '0.7rem', fontFamily: 'Inter', fontWeight: 500 }}>
            {p.linkLabel}
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">04</span>
          <span className="label-tag">projects</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em', marginBottom: '48px' }}>
          Work I've Shipped
        </h2>

        {/* ── Featured ── */}
        <div className="code-block shimmer-card card-accent-top" style={{ borderRadius: '16px', marginBottom: '14px', '--accent': featured.badgeColor } as React.CSSProperties}>
          {renderTabBar(featured, true)}
          <div className="code-body" style={{ padding: '24px 28px' }}>
            <div style={{ display: 'flex', minHeight: '1.2em', marginBottom: '3px' }}>
              <span className="ln">1</span>
              <span><span style={{ color: cmt }}># </span><span style={{ color: hdr, fontSize: '0.85rem' }}>── {featured.title} ──</span></span>
            </div>
            <div style={{ display: 'flex', minHeight: '1.2em', marginBottom: '3px' }}>
              <span className="ln">2</span>
              <span>
                <span style={{ color: cmt }}>#  </span>
                <span style={{ color: key, display: 'inline-block', minWidth: '52px' }}>Result</span>
                <span style={{ color: 'rgba(212,212,212,0.28)', margin: '0 8px' }}>→</span>
                <span style={{ color: org, fontWeight: 600, fontSize: '0.82rem' }}>{featured.result}</span>
              </span>
            </div>
            <div style={{ display: 'flex', minHeight: '1.2em', marginBottom: '12px' }}>
              <span className="ln">3</span>
              <span>
                <span style={{ color: cmt }}>#  </span>
                <span style={{ color: key, display: 'inline-block', minWidth: '52px' }}>Stack</span>
                <span style={{ color: 'rgba(212,212,212,0.28)', margin: '0 8px' }}>→</span>
                <span style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '5px' }}>
                  {featured.tags.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.62rem' }}>{t}</span>
                  ))}
                </span>
              </span>
            </div>
            <div style={{ display: 'flex', minHeight: '0.5em' }}><span className="ln">4</span></div>
            <div style={{ display: 'flex', minHeight: '1.2em' }}>
              <span className="ln">5</span>
              <span style={{ color: cmt }}>#  <span style={{ color: txt, fontFamily: 'Inter', fontSize: '0.88rem', lineHeight: 1.8 }}>{featured.description}</span></span>
            </div>
          </div>
        </div>

        {/* ── 2×2 Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="projects-grid">
          {rest.map((p, idx) => (
            <div key={idx} className="code-block card-accent-top"
              style={{ borderRadius: '13px', '--accent': p.badgeColor } as React.CSSProperties}>
              {renderTabBar(p)}
              {renderCodeBody(p)}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
