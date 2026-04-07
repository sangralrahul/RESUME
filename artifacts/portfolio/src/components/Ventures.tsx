import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Ventures() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="ventures" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">03</span>
          <span className="label-tag">Ventures</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Companies &amp; Products
        </h2>

        {/* Clavix — parent */}
        <div className="card-gradient-border" style={{ padding: '40px', marginBottom: '16px', backdropFilter: 'blur(12px)' }}>
          <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.15rem', color: '#FFFFFF' }}>Clavix Technologies Pvt. Ltd.</span>
                <span className="badge" style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.2)' }}>Parent</span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginBottom: '16px' }}>
                Founded 2026 · India
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: '580px' }}>
                The holding company and innovation engine behind Aethex and Cadus. Building a portfolio of AI-first products
                targeting healthcare, productivity, and enterprise intelligence.
              </p>
            </div>
            <a href="https://clavix.in" target="_blank" rel="noopener noreferrer"
              data-testid="btn-clavix" className="btn-ghost"
              style={{ padding: '9px 22px', fontSize: '0.84rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              clavix.in ↗
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="sub-grid">
            {[
              { name: 'Aethex', tag: 'AI Medical Platform', href: 'https://aethex.in', testId: 'link-aethex-from-clavix', desc: 'AI-powered SaaS for Indian doctors and medical students — clinical analytics, smart store, and Cadus AI assistant.' },
              { name: 'Cadus', tag: 'AI Assistant', href: 'https://aethex.in/ai-assistant', testId: 'link-cadus-from-clavix', desc: 'Intelligent AI assistant embedded inside Aethex — answers clinical queries and guides medical students in context.' },
            ].map((c) => (
              <div key={c.name}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '20px', transition: 'background 0.2s ease, border-color 0.2s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div>
                    <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>{c.name}</span>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginLeft: '10px' }}>{c.tag}</span>
                  </div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" data-testid={c.testId}
                    style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#60A5FA', textDecoration: 'none' }}>Visit ↗</a>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="ventures-grid">
          {[
            {
              name: 'Aethex — AI Medical Platform',
              badge: 'Flagship · Live',
              badgeColor: '#22C55E',
              sub: 'aethex.in',
              desc: 'An AI-powered SaaS platform for Indian doctors and medical students. Combines role-based analytics dashboards, a smart medical store, REST API integrations, and the embedded Cadus AI assistant. Currently raising a ₹2 Crore seed round.',
              features: ['AI clinical analytics dashboards', 'Smart medical store', 'Role-based access control', 'REST API integrations', 'Cadus AI embedded'],
              tags: ['React', 'FastAPI', 'Claude API', 'Docker', 'AWS'],
              cta: { label: 'Visit Aethex ↗', href: 'https://aethex.in', testId: 'btn-aethex-detail' },
              stat: '₹2Cr',
              statLabel: 'Seed Round',
            },
            {
              name: 'Cadus — AI Healthcare Assistant',
              badge: 'AI Product',
              badgeColor: '#8B5CF6',
              sub: 'aethex.in/ai-assistant',
              desc: 'The intelligent AI assistant embedded within Aethex. Designed for healthcare professionals and medical students — answers clinical questions, surfaces relevant data, and provides smart, context-aware guidance.',
              features: ['Clinical query answering', 'Medical student study aid', 'Context-aware responses', 'Integrated into Aethex', 'LLM infrastructure'],
              tags: ['Claude API', 'RAG Pipelines', 'FastAPI', 'React'],
              cta: { label: 'Explore Cadus ↗', href: 'https://aethex.in/ai-assistant', testId: 'btn-cadus-detail' },
              stat: 'LLM',
              statLabel: 'Powered',
            },
          ].map((p) => (
            <div key={p.name} className="card-glass" style={{ padding: '36px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '6px' }}>
                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', lineHeight: 1.3, flexGrow: 1, marginRight: '12px' }}>
                  {p.name}
                </div>
                <span className="badge" style={{ background: `${p.badgeColor}15`, color: p.badgeColor, border: `1px solid ${p.badgeColor}30`, flexShrink: 0 }}>
                  {p.badge}
                </span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', marginBottom: '18px' }}>{p.sub}</div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.86rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: '20px', flexGrow: 1 }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: '10px', fontFamily: 'Inter', fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)' }}>
                    <span style={{ color: '#3B82F6', flexShrink: 0 }}>–</span>{f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={p.cta.href} target="_blank" rel="noopener noreferrer"
                data-testid={p.cta.testId} className="btn-blue"
                style={{ textDecoration: 'none', textAlign: 'center', padding: '11px', fontSize: '0.86rem' }}>
                {p.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ventures-grid { grid-template-columns: 1fr !important; }
          .sub-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
