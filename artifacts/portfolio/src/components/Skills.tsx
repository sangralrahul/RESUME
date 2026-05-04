import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const pyLines = [
  <><span className="t-cmt"># skills.py — Python & Data stack</span></>,
  <></>,
  <><span className="t-kw">from </span><span className="t-var">analytics</span><span className="t-kw"> import </span><span className="t-op">(</span></>,
  <><span style={{marginLeft:20}}><span className="t-fn">pandas</span><span className="t-op">, </span><span className="t-fn">numpy</span><span className="t-op">, </span><span className="t-fn">scikit_learn</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-fn">tableau</span><span className="t-op">, </span><span className="t-fn">power_bi</span><span className="t-op">, </span><span className="t-fn">excel</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-fn">streamlit</span><span className="t-op">, </span><span className="t-fn">matplotlib</span><span className="t-op">, </span><span className="t-fn">sql</span></span></>,
  <><span className="t-op">)</span></>,
  <></>,
  <><span className="t-kw">from </span><span className="t-var">ai_ml</span><span className="t-kw"> import </span><span className="t-op">(</span></>,
  <><span style={{marginLeft:20}}><span className="t-fn">machine_learning</span><span className="t-op">, </span><span className="t-fn">deep_learning</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-fn">nlp</span><span className="t-op">, </span><span className="t-fn">rag_pipelines</span><span className="t-op">, </span><span className="t-fn">claude_api</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-fn">amazon_bedrock</span><span className="t-op">, </span><span className="t-fn">vertex_ai</span><span className="t-op">,</span></span></>,
  <><span style={{marginLeft:20}}><span className="t-fn">prompt_engineering</span></span></>,
  <><span className="t-op">)</span></>,
  <></>,
  <><span className="t-kw">from </span><span className="t-var">etl</span><span className="t-kw"> import </span><span className="t-fn">pipelines</span><span className="t-op">, </span><span className="t-fn">data_modeling</span></>,
];

const tsLines = [
  <><span className="t-cmt">// skills.ts — Web & Cloud stack</span></>,
  <></>,
  <><span className="t-kw">import </span><span className="t-op">{'{ '}</span><span className="t-fn">React</span><span className="t-op">, </span><span className="t-fn">FastAPI</span><span className="t-op">, </span><span className="t-fn">Firebase</span><span className="t-op"> {'}'}</span></>,
  <><span style={{marginLeft:20}}><span className="t-kw">from </span><span className="t-str">'@web/stack'</span><span className="t-op">;</span></span></>,
  <></>,
  <><span className="t-kw">import </span><span className="t-op">{'{ '}</span><span className="t-fn">PostgreSQL</span><span className="t-op">, </span><span className="t-fn">MySQL</span><span className="t-op">, </span><span className="t-fn">Docker</span><span className="t-op">, </span><span className="t-fn">Git</span><span className="t-op"> {'}'}</span></>,
  <><span style={{marginLeft:20}}><span className="t-kw">from </span><span className="t-str">'@infra/tools'</span><span className="t-op">;</span></span></>,
  <></>,
  <><span className="t-kw">import type </span><span className="t-op">{'{ '}</span><span className="t-type">AWS</span><span className="t-op">, </span><span className="t-type">GCP</span><span className="t-op">, </span><span className="t-type">Azure</span><span className="t-op"> {'}'}</span></>,
  <><span style={{marginLeft:20}}><span className="t-kw">from </span><span className="t-str">'@cloud/providers'</span><span className="t-op">;</span></span></>,
  <></>,
  <><span className="t-kw">import type </span><span className="t-op">{'{ '}</span><span className="t-type">AzureAI</span><span className="t-op">, </span><span className="t-type">RESTAPIs</span><span className="t-op"> {'}'}</span></>,
  <><span style={{marginLeft:20}}><span className="t-kw">from </span><span className="t-str">'@microsoft/azure-ai'</span><span className="t-op">;</span></span></>,
  <></>,
  <><span className="t-kw">export default </span><span className="t-kw">function </span><span className="t-fn">buildProducts</span><span className="t-op">()</span><span className="t-op"> {'{'}</span></>,
  <><span style={{marginLeft:20}}><span className="t-kw">return </span><span className="t-str">"ship"</span><span className="t-op">;</span></span></>,
  <><span className="t-op">{'}'}</span></>,
];

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
                {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                  <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                ))}
              </div>
              <div className="code-tab active">
                <div className="code-tab-dot" style={{ background: '#CE9178' }} />
                skills.py
              </div>
            </div>
            <div className="code-body">
              {pyLines.map((line, i) => (
                <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
                  <span className="ln">{i + 1}</span>
                  <span style={{ flex: 1 }}>{line}</span>
                </div>
              ))}
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
                {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                  <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                ))}
              </div>
              <div className="code-tab active">
                <div className="code-tab-dot" style={{ background: '#569CD6' }} />
                skills.ts
              </div>
            </div>
            <div className="code-body">
              {tsLines.map((line, i) => (
                <div key={i} style={{ display: 'flex', minHeight: '1.1em' }}>
                  <span className="ln">{i + 1}</span>
                  <span style={{ flex: 1 }}>{line}</span>
                </div>
              ))}
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
