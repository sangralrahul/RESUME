import { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const pySkillLines = [
  { type: 'file',   text: 'skills.py  —  Data & AI stack' },
  { type: 'empty' },
  { type: 'header', text: '── Data & Analytics ───────────────────────' },
  { type: 'skills', text: 'Python · SQL · Pandas · NumPy · Scikit-learn' },
  { type: 'skills', text: 'Tableau · Power BI · Excel · Streamlit' },
  { type: 'skills', text: 'Matplotlib · Data Cleaning · Reporting' },
  { type: 'empty' },
  { type: 'header', text: '── AI / Machine Learning ──────────────────' },
  { type: 'skills', text: 'Machine Learning · Deep Learning · NLP' },
  { type: 'skills', text: 'RAG Pipelines · Prompt Engineering' },
  { type: 'skills', text: 'Claude API · Amazon Bedrock · Vertex AI' },
  { type: 'empty' },
  { type: 'header', text: '── Data Engineering ───────────────────────' },
  { type: 'skills', text: 'ETL Pipelines · Data Modeling · SQL Reporting' },
  { type: 'skills', text: 'Power Query · Anomaly Detection' },
];

const tsSkillLines = [
  { type: 'file',   text: 'skills.ts  —  Engineering & Cloud' },
  { type: 'empty' },
  { type: 'header', text: '── Web & Full-Stack ────────────────────────' },
  { type: 'skills', text: 'React · FastAPI · Firebase · REST APIs' },
  { type: 'skills', text: 'PostgreSQL · MySQL · Docker · Git · GitHub' },
  { type: 'empty' },
  { type: 'header', text: '── Cloud Platforms ─────────────────────────' },
  { type: 'skills', text: 'Amazon Web Services (AWS) · Google Cloud' },
  { type: 'skills', text: 'Microsoft Azure · Azure AI Services' },
  { type: 'empty' },
  { type: 'header', text: '── Languages ───────────────────────────────' },
  { type: 'skills', text: 'Python  ·  TypeScript  ·  SQL  ·  Bash' },
  { type: 'empty' },
  { type: 'header', text: '── Tools & Workflow ────────────────────────' },
  { type: 'skills', text: 'VS Code · Jupyter · Postman · Figma' },
];

const skillChips = [
  { label: 'Python',       color: '#CE9178' },
  { label: 'Machine Learning', color: '#569CD6' },
  { label: 'RAG Pipelines', color: '#4EC9B0' },
  { label: 'Claude API',   color: '#D4A27F' },
  { label: 'SQL',          color: '#DCDCAA' },
  { label: 'React',        color: '#61DAFB' },
  { label: 'FastAPI',      color: '#009688' },
  { label: 'AWS',          color: '#FF9900' },
  { label: 'Tableau',      color: '#E97627' },
  { label: 'Azure',        color: '#0078D4' },
  { label: 'Docker',       color: '#2496ED' },
  { label: 'Streamlit',    color: '#FF4B4B' },
];

function SkillLines({ lines, lang }: { lines: typeof pySkillLines; lang: string }) {
  const cmt = 'rgba(212,212,212,0.26)';
  const txt = 'rgba(212,212,212,0.65)';
  const hdr = '#569CD6';
  const pfx = lang === 'py' ? '# ' : '// ';
  const pfx2 = lang === 'py' ? '#  ' : '//  ';

  return (
    <>
      {lines.map((line, i) => {
        if (line.type === 'empty') return (
          <div key={i} style={{ display: 'flex', minHeight: '0.55em' }}>
            <span className="ln">{i + 1}</span>
          </div>
        );
        if (line.type === 'file') return (
          <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
            <span className="ln">{i + 1}</span>
            <span style={{ color: cmt, fontStyle: 'italic' }}>{pfx}{line.text}</span>
          </div>
        );
        if (line.type === 'header') return (
          <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
            <span className="ln">{i + 1}</span>
            <span><span style={{ color: cmt }}>{pfx}</span><span style={{ color: hdr }}>{line.text}</span></span>
          </div>
        );
        if (line.type === 'skills') return (
          <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
            <span className="ln">{i + 1}</span>
            <span style={{ color: cmt }}>{pfx2}<span style={{ color: txt }}>{line.text}</span></span>
          </div>
        );
        return null;
      })}
    </>
  );
}

export default function Skills() {
  const ref       = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">02</span>
          <span className="label-tag">skills</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em', marginBottom: '44px' }}>
          Tools &amp; Technologies
        </h2>

        {/* Code panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '36px' }} className="skills-grid">
          {/* Python */}
          <div className="code-block card-accent-top" style={{ '--accent': '#CE9178' } as React.CSSProperties}>
            <div className="code-tab-bar">
              <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                  <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                ))}
              </div>
              <div className="code-tab active">
                <div className="code-tab-dot" style={{ background: '#CE9178' }} />
                skills.py
              </div>
            </div>
            <div className="code-body"><SkillLines lines={pySkillLines} lang="py" /></div>
            <div className="code-status-bar">
              <span style={{ color: '#6A9955' }}>Python 3.11</span>
              <span style={{ color: 'rgba(212,212,212,0.18)' }}>data + AI/ML</span>
            </div>
          </div>

          {/* TypeScript */}
          <div className="code-block card-accent-top" style={{ '--accent': '#569CD6' } as React.CSSProperties}>
            <div className="code-tab-bar">
              <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                  <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                ))}
              </div>
              <div className="code-tab active">
                <div className="code-tab-dot" style={{ background: '#569CD6' }} />
                skills.ts
              </div>
            </div>
            <div className="code-body"><SkillLines lines={tsSkillLines} lang="ts" /></div>
            <div className="code-status-bar">
              <span style={{ color: '#569CD6' }}>TypeScript 5.x</span>
              <span style={{ color: 'rgba(212,212,212,0.18)' }}>web + cloud</span>
            </div>
          </div>
        </div>

        {/* Skill chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '20px 24px', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(86,156,214,0.08)', borderRadius: '12px' }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: '#6A9955', marginRight: '4px', alignSelf: 'center' }}>
            # key skills →
          </span>
          {skillChips.map(c => (
            <span key={c.label}
              style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.65rem',
                padding: '4px 11px', borderRadius: '5px',
                background: hovered === c.label ? `${c.color}18` : `${c.color}0c`,
                border: `1px solid ${hovered === c.label ? c.color + '45' : c.color + '22'}`,
                color: c.color,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={() => setHovered(c.label)}
              onMouseLeave={() => setHovered(null)}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
