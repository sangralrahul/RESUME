import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Ventures() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="ventures" ref={ref} style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ marginBottom: '56px' }}>
          <p className="label-tag" style={{ marginBottom: '12px' }}>Ventures</p>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Companies & Products
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#666', maxWidth: '520px', lineHeight: 1.7 }}>
            Building AI-first companies at the intersection of healthcare and enterprise technology.
          </p>
        </div>

        {/* Clavix — parent company */}
        <div
          className="card-pro"
          style={{ padding: '40px', marginBottom: '16px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'start', marginBottom: '28px' }} className="card-header-responsive">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.1rem', color: '#FAFAFA', letterSpacing: '-0.01em' }}>
                  Clavix Technologies Pvt. Ltd.
                </div>
                <span className="badge" style={{ background: '#1C1C1C', color: '#888', border: '1px solid #2A2A2A' }}>
                  Parent Company
                </span>
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#666', marginBottom: '16px' }}>
                Founded 2026 · Headquarters: India
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.92rem', color: '#888', lineHeight: 1.75, maxWidth: '600px' }}>
                The holding company and innovation engine behind Aethex and Cadus. Building a portfolio of 
                AI-first products targeting healthcare, productivity, and enterprise intelligence.
              </p>
            </div>
            <a
              href="https://clavix.in"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-clavix"
              className="btn-ghost"
              style={{ padding: '9px 20px', fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              clavix.in ↗
            </a>
          </div>

          <div style={{ borderTop: '1px solid #1E1E1E', paddingTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="sub-grid">
            {[
              {
                name: 'Aethex',
                tag: 'AI Medical Platform',
                href: 'https://aethex.in',
                testId: 'link-aethex-from-clavix',
                desc: 'AI-powered SaaS for Indian doctors and medical students — clinical analytics dashboards, smart medical store, and the Cadus AI assistant.',
              },
              {
                name: 'Cadus',
                tag: 'AI Assistant',
                href: 'https://aethex.in/ai-assistant',
                testId: 'link-cadus-from-clavix',
                desc: 'Intelligent AI assistant embedded inside Aethex — answers clinical queries, guides students, and surfaces relevant medical data in context.',
              },
            ].map((c) => (
              <div
                key={c.name}
                style={{ background: '#1A1A1A', border: '1px solid #222', borderRadius: '8px', padding: '20px 22px', transition: 'border-color 0.2s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#333'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#222'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div>
                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem', color: '#FAFAFA' }}>{c.name}</span>
                    <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#555', marginLeft: '10px' }}>{c.tag}</span>
                  </div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" data-testid={c.testId} style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: '#3B82F6', textDecoration: 'none' }}>
                    Visit ↗
                  </a>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#666', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aethex + Cadus full cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="cards-responsive">
          {[
            {
              name: 'Aethex — AI Medical Platform',
              badge: 'Flagship Product',
              sub: 'Founded by Rahul Sangral · aethex.in',
              desc: 'An AI-powered SaaS platform for Indian doctors and medical students. Combines role-based analytics dashboards, a smart medical store, REST API integrations, and the embedded Cadus AI assistant. Currently raising a ₹2 Crore seed round.',
              features: [
                'AI-powered clinical analytics dashboards',
                'Smart medical store for doctors & students',
                'Role-based access: doctors, students, admins',
                'REST API integrations for hospital workflows',
                'Cadus AI assistant embedded',
              ],
              tags: ['React', 'FastAPI', 'Claude API', 'Docker', 'AWS'],
              cta: { label: 'Visit Aethex ↗', href: 'https://aethex.in', testId: 'btn-aethex-detail' },
              stat: '₹2Cr',
              statLabel: 'Seed round',
            },
            {
              name: 'Cadus — AI Healthcare Assistant',
              badge: 'AI Product',
              sub: 'Powered by Aethex · aethex.in/ai-assistant',
              desc: 'The intelligent AI assistant embedded within Aethex. Designed for healthcare professionals and medical students — Cadus answers clinical questions, surfaces relevant medical data, and provides smart, context-aware guidance.',
              features: [
                'Clinical query answering for doctors',
                'Study assistance for medical students',
                'Context-aware, role-specific responses',
                'Integrated into Aethex dashboard',
                'Built on cutting-edge LLM infrastructure',
              ],
              tags: ['Claude API', 'RAG Pipelines', 'FastAPI', 'React'],
              cta: { label: 'Explore Cadus ↗', href: 'https://aethex.in/ai-assistant', testId: 'btn-cadus-detail' },
              stat: 'LLM',
              statLabel: 'Powered',
            },
          ].map((p) => (
            <div key={p.name} className="card-pro" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#FAFAFA', lineHeight: 1.3 }}>
                  {p.name}
                </div>
                <span className="badge" style={{ background: '#1C1C1C', color: '#666', border: '1px solid #2A2A2A', flexShrink: 0, marginLeft: '12px' }}>
                  {p.badge}
                </span>
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: '#555', marginBottom: '16px' }}>{p.sub}</div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#777', lineHeight: 1.7, marginBottom: '20px', flexGrow: 1 }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {p.features.map((f) => (
                  <li key={f} style={{ fontFamily: 'Inter', fontSize: '0.83rem', color: '#888', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#3B82F6', flexShrink: 0 }}>–</span> {f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <a
                href={p.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={p.cta.testId}
                className="btn-blue"
                style={{ textDecoration: 'none', textAlign: 'center', padding: '10px 20px', fontSize: '0.85rem' }}
              >
                {p.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cards-responsive { grid-template-columns: 1fr !important; }
          .sub-grid { grid-template-columns: 1fr !important; }
          .card-header-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
