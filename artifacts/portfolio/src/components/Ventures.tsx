import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Ventures() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="ventures" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">03</span>
          <span className="label-tag">Ventures</span>
        </div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#F1F5F9', letterSpacing: '-0.03em', marginBottom: '56px' }}>
          Companies &amp; Products
        </h2>

        {/* Aethex — flagship */}
        <div className="card-gradient-border" style={{ padding: '44px', marginBottom: '16px', backdropFilter: 'blur(16px)' }}>
          <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.2rem', color: '#F1F5F9' }}>Aethex</span>
                <span className="badge" style={{ background: 'rgba(52,211,153,0.1)', color: '#34D399', border: '1px solid rgba(52,211,153,0.22)' }}>
                  Flagship · Live
                </span>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'rgba(241,245,249,0.22)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '3px 10px', borderRadius: '5px' }}>
                  200+ users
                </span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'rgba(241,245,249,0.22)', marginBottom: '16px' }}>
                Founded 2025 · aethex.in · AI Medical SaaS
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'rgba(241,245,249,0.42)', lineHeight: 1.8, maxWidth: '580px' }}>
                A live AI-powered medical SaaS platform built with React + FastAPI. Integrated Razorpay payments,
                Firebase auth, Brevo email, and GA4 analytics. All ETL pipelines, DNS infrastructure, cloud
                deployment, and product roadmap owned end-to-end.
              </p>
            </div>
            <a href="https://aethex.in" target="_blank" rel="noopener noreferrer"
              data-testid="btn-aethex" className="btn-blue"
              style={{ padding: '10px 24px', fontSize: '0.84rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              aethex.in ↗
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="sub-grid">
            {[
              {
                name: 'Cadus AI',
                tag: 'Clinical Assistant',
                href: 'https://aethex.in/ai-assistant',
                testId: 'link-cadus',
                color: '#818CF8',
                desc: 'Intelligent AI assistant for healthcare professionals — answers clinical queries and guides medical students with context-aware LLM-powered responses.',
              },
              {
                name: 'NEET-PG MCQ Engine',
                tag: 'Exam Prep + CME',
                href: 'https://aethex.in',
                testId: 'link-neetpg',
                color: '#22D3EE',
                desc: 'Adaptive MCQ engine for NEET-PG aspirants with an integrated drug reference database and CME hub for continuous medical education.',
              },
            ].map((c) => (
              <div key={c.name}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: '12px', padding: '22px',
                  transition: 'background 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${c.color}06`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.color}28`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div>
                    <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.92rem', color: '#F1F5F9' }}>{c.name}</span>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: c.color, marginLeft: '10px', opacity: 0.7 }}>{c.tag}</span>
                  </div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" data-testid={c.testId}
                    style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: c.color, textDecoration: 'none', opacity: 0.8 }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                  >
                    Visit ↗
                  </a>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'rgba(241,245,249,0.33)', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product detail cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="ventures-grid">
          {[
            {
              name: 'Aethex — AI Medical Platform',
              badge: 'Flagship · Live',
              badgeColor: '#34D399',
              sub: 'aethex.in',
              desc: 'An AI-powered SaaS for Indian doctors and medical students. Combines role-based analytics dashboards, drug reference database, NEET-PG MCQ engine, CME hub, and the embedded Cadus AI assistant.',
              features: ['Cadus AI clinical assistant', 'Drug reference database', 'NEET-PG MCQ engine', 'CME hub', 'Razorpay · Firebase · GA4'],
              tags: ['React', 'FastAPI', 'Claude API', 'Firebase', 'Docker', 'AWS'],
              cta: { label: 'Visit Aethex ↗', href: 'https://aethex.in', testId: 'btn-aethex-detail' },
              stat: '200+', statLabel: 'Registered Users',
            },
            {
              name: 'Cadus — AI Healthcare Assistant',
              badge: 'AI Product',
              badgeColor: '#818CF8',
              sub: 'aethex.in/ai-assistant',
              desc: 'The intelligent AI assistant embedded within Aethex. Designed for healthcare professionals and medical students — answers clinical questions and provides smart, context-aware guidance.',
              features: ['Clinical query answering', 'Medical student study aid', 'Context-aware responses', 'Integrated into Aethex platform', 'LLM + RAG infrastructure'],
              tags: ['Claude API', 'RAG Pipelines', 'FastAPI', 'React'],
              cta: { label: 'Explore Cadus ↗', href: 'https://aethex.in/ai-assistant', testId: 'btn-cadus-detail' },
              stat: 'LLM', statLabel: 'Powered',
            },
          ].map((p) => (
            <div key={p.name} className="card-glass" style={{ padding: '36px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '6px' }}>
                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#F1F5F9', lineHeight: 1.3, flexGrow: 1, marginRight: '12px' }}>
                  {p.name}
                </div>
                <span className="badge" style={{ background: `${p.badgeColor}12`, color: p.badgeColor, border: `1px solid ${p.badgeColor}28`, flexShrink: 0 }}>
                  {p.badge}
                </span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'rgba(241,245,249,0.22)', marginBottom: '18px' }}>{p.sub}</div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: 'rgba(241,245,249,0.38)', lineHeight: 1.8, marginBottom: '20px', flexGrow: 1 }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: '10px', fontFamily: 'Inter', fontSize: '0.82rem', color: 'rgba(241,245,249,0.38)' }}>
                    <span style={{ color: p.badgeColor, flexShrink: 0, fontSize: '0.6rem', marginTop: '3px' }}>▶</span>{f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={p.cta.href} target="_blank" rel="noopener noreferrer"
                data-testid={p.cta.testId} className="btn-blue"
                style={{ textDecoration: 'none', textAlign: 'center', padding: '12px', fontSize: '0.86rem' }}>
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
