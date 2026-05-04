import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const pySkillLines = [
  { type: 'file', text: 'skills.py  —  Data & AI stack' },
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
  { type: 'file', text: 'skills.ts  —  Engineering & Cloud' },
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

function SkillLines({ lines, lang }: { lines: typeof pySkillLines; lang: string }) {
  const cmt = 'rgba(212,212,212,0.28)';
  const txt = 'rgba(212,212,212,0.65)';
  const hdr = '#569CD6';

  return (
    <>
      {lines.map((line, i) => {
        if (line.type === 'empty') {
          return (
            <div key={i} style={{ display: 'flex', minHeight: '0.55em' }}>
              <span className="ln">{i + 1}</span>
            </div>
          );
        }
        if (line.type === 'file') {
          return (
            <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
              <span className="ln">{i + 1}</span>
              <span style={{ color: cmt, fontStyle: 'italic' }}>{lang === 'py' ? '# ' : '// '}{line.text}</span>
            </div>
          );
        }
        if (line.type === 'header') {
          return (
            <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
              <span className="ln">{i + 1}</span>
              <span><span style={{ color: cmt }}>{lang === 'py' ? '# ' : '// '}</span><span style={{ color: hdr }}>{line.text}</span></span>
            </div>
          );
        }
        if (line.type === 'skills') {
          return (
            <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
              <span className="ln">{i + 1}</span>
              <span style={{ color: cmt }}>{lang === 'py' ? '#  ' : '//  '}<span style={{ color: txt }}>{line.text}</span></span>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="skills" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">02</span>
          <span className="label-tag">skills</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Tools &amp; Technologies
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="skills-grid">
          {/* Python panel */}
          <div className="code-block">
            <div className="code-tab-bar">
              <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                  <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                ))}
              </div>
              <div className="code-tab active">
                <div className="code-tab-dot" style={{ background: '#CE9178' }} />
                skills.py
              </div>
            </div>
            <div className="code-body">
              <SkillLines lines={pySkillLines} lang="py" />
            </div>
            <div className="code-status-bar">
              <span style={{ color: '#6A9955' }}>Python 3.11</span>
              <span style={{ color: 'rgba(212,212,212,0.2)' }}>data + AI/ML</span>
            </div>
          </div>

          {/* TypeScript panel */}
          <div className="code-block">
            <div className="code-tab-bar">
              <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
                {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                  <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                ))}
              </div>
              <div className="code-tab active">
                <div className="code-tab-dot" style={{ background: '#569CD6' }} />
                skills.ts
              </div>
            </div>
            <div className="code-body">
              <SkillLines lines={tsSkillLines} lang="ts" />
            </div>
            <div className="code-status-bar">
              <span style={{ color: '#569CD6' }}>TypeScript 5.x</span>
              <span style={{ color: 'rgba(212,212,212,0.2)' }}>web + cloud</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
