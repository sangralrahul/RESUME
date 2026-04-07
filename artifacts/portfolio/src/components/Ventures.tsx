import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Ventures() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="ventures"
      ref={ref}
      className={`py-28 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
            03 — Ventures
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.1)' }} />
        </div>

        <div className="mb-12">
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl leading-tight" style={{ color: '#FFFFFF' }}>
            Building India's<br />
            <span className="gradient-text-warm">AI Future</span>
          </h2>
        </div>

        {/* Clavix — hero card */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 mb-6 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(13,13,24,0.98) 0%, rgba(18,12,2,0.98) 100%)',
            border: '1px solid rgba(245,158,11,0.35)',
            boxShadow: '0 0 50px rgba(245,158,11,0.08)',
          }}
        >
          {/* BG letter */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 font-['Syne'] font-bold select-none pointer-events-none hidden lg:block"
            style={{ fontSize: '16rem', color: 'rgba(245,158,11,0.04)', lineHeight: 1 }}
          >
            C
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-['Syne'] font-bold text-2xl"
                  style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', color: '#F59E0B' }}
                >
                  C
                </div>
                <div>
                  <div
                    className="font-['DM_Sans'] text-xs px-3 py-1 rounded-full"
                    style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}
                  >
                    🏢 Parent Company
                  </div>
                </div>
              </div>

              <h3
                className="font-['Syne'] font-bold text-3xl sm:text-4xl mb-3"
                style={{ color: '#FFFFFF' }}
              >
                Clavix Technologies
                <span style={{ color: '#F59E0B' }}>.</span>
              </h3>
              <p className="font-['DM_Sans'] mb-6" style={{ color: '#9CA3AF' }}>
                The AI Holding Company Behind India's Next Wave
              </p>
              <p className="font-['DM_Sans'] leading-relaxed mb-8" style={{ color: '#EDEDED', maxWidth: '540px' }}>
                Clavix Technologies is the parent company and innovation engine behind Aethex and Cadus.
                Founded by Rahul Sangral, Clavix is building a portfolio of AI-first products targeting
                healthcare, productivity, and enterprise intelligence — headquartered in India, built for the world.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://clavix.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="btn-clavix"
                  className="px-6 py-3 rounded-xl font-['DM_Sans'] font-bold transition-all"
                  style={{ background: '#F59E0B', color: '#050508' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(245,158,11,0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  Visit clavix.in →
                </a>
                <span
                  className="px-4 py-3 rounded-xl font-['DM_Sans'] text-sm flex items-center"
                  style={{ background: 'rgba(245,158,11,0.08)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' }}
                >
                  📍 Founded 2026 · India
                </span>
              </div>
            </div>

            {/* Mini company cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: '🏥', name: 'Aethex', tag: 'AI Medical Platform', color: '#00D4FF',
                  href: 'https://aethex.in', linkLabel: 'aethex.in ↗',
                  desc: 'AI-powered clinical tools, analytics dashboards, smart medical store, and the Cadus AI assistant.',
                  testId: 'link-aethex-from-clavix',
                },
                {
                  emoji: '🤖', name: 'Cadus', tag: 'AI Assistant', color: '#10B981',
                  href: 'https://aethex.in/ai-assistant', linkLabel: 'aethex.in/ai-assistant ↗',
                  desc: 'The intelligent AI assistant inside Aethex — answering clinical queries and guiding healthcare professionals.',
                  testId: 'link-cadus-from-clavix',
                },
              ].map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl p-5 border flex flex-col gap-3 transition-all hover:-translate-y-1"
                  style={{
                    background: 'rgba(5,5,8,0.7)',
                    borderColor: `${c.color}20`,
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${c.color}45`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${c.color}12`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${c.color}20`;
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{c.emoji}</span>
                      <div>
                        <div className="font-['Syne'] font-bold text-base" style={{ color: c.color }}>{c.name}</div>
                        <div className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>{c.tag}</div>
                      </div>
                    </div>
                    <a href={c.href} target="_blank" rel="noopener noreferrer" data-testid={c.testId} className="text-xs transition-opacity hover:opacity-70" style={{ color: c.color }}>
                      {c.linkLabel}
                    </a>
                  </div>
                  <p className="font-['DM_Sans'] text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Aethex */}
          <div
            className="rounded-3xl p-8 border flex flex-col"
            style={{
              background: 'rgba(13,13,24,0.88)',
              borderColor: 'rgba(0,212,255,0.25)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏥</span>
                <div>
                  <h4 className="font-['Syne'] font-bold text-xl" style={{ color: '#FFFFFF' }}>Aethex</h4>
                  <p className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>AI Medical Platform & Store</p>
                </div>
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full font-['DM_Sans']"
                style={{ background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.25)' }}
              >
                🚀 Flagship
              </span>
            </div>

            <p className="font-['DM_Sans'] text-sm leading-relaxed mb-6 flex-grow" style={{ color: '#9CA3AF' }}>
              An AI-powered SaaS platform for Indian doctors and medical students — role-based analytics,
              a smart medical store, REST API integrations, and the embedded Cadus AI assistant.
              Currently raising a ₹2 Crore seed round.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                'AI-powered clinical analytics dashboards',
                'Smart medical store for doctors & students',
                'Role-based access: doctors, students, admins',
                'Cadus AI assistant built in',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 font-['DM_Sans'] text-sm" style={{ color: '#EDEDED' }}>
                  <span style={{ color: '#00D4FF', fontSize: '0.65rem' }}>◆</span> {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'FastAPI', 'Claude API', 'Docker', 'AWS'].map(t => (
                <span key={t} className="font-['JetBrains_Mono'] text-xs px-2.5 py-1 rounded-lg border" style={{ background: 'rgba(0,212,255,0.06)', color: '#00D4FF', borderColor: 'rgba(0,212,255,0.2)' }}>{t}</span>
              ))}
            </div>

            <a
              href="https://aethex.in"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-aethex-detail"
              className="btn-primary text-center py-3 rounded-xl font-['DM_Sans'] font-bold"
            >
              Visit Aethex →
            </a>
          </div>

          {/* Cadus */}
          <div
            className="rounded-3xl p-8 border flex flex-col"
            style={{
              background: 'rgba(13,13,24,0.88)',
              borderColor: 'rgba(16,185,129,0.25)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🤖</span>
                <div>
                  <h4 className="font-['Syne'] font-bold text-xl" style={{ color: '#FFFFFF' }}>Cadus</h4>
                  <p className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>AI Assistant by Aethex</p>
                </div>
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full font-['DM_Sans']"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                🤖 AI-Powered
              </span>
            </div>

            <p className="font-['DM_Sans'] text-sm leading-relaxed mb-6 flex-grow" style={{ color: '#9CA3AF' }}>
              The intelligent AI assistant embedded within Aethex. Designed for healthcare professionals
              and medical students, Cadus answers clinical questions, surfaces medical data, and provides
              smart, context-aware guidance.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                'Clinical query answering for doctors',
                'Study assistance for medical students',
                'Context-aware, role-specific responses',
                'Built on cutting-edge LLM infrastructure',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 font-['DM_Sans'] text-sm" style={{ color: '#EDEDED' }}>
                  <span style={{ color: '#10B981', fontSize: '0.65rem' }}>◆</span> {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Claude API', 'RAG', 'FastAPI', 'React'].map(t => (
                <span key={t} className="font-['JetBrains_Mono'] text-xs px-2.5 py-1 rounded-lg border" style={{ background: 'rgba(16,185,129,0.06)', color: '#10B981', borderColor: 'rgba(16,185,129,0.2)' }}>{t}</span>
              ))}
            </div>

            <a
              href="https://aethex.in/ai-assistant"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-cadus-detail"
              className="text-center py-3 rounded-xl font-['DM_Sans'] font-medium border transition-all"
              style={{ borderColor: '#10B981', color: '#10B981' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(16,185,129,0.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Explore Cadus →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
