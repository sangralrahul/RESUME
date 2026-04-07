import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
            01 — About
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.1)' }} />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Big bio card */}
          <div
            className="lg:col-span-2 rounded-3xl p-8 sm:p-10 border flex flex-col justify-between min-h-[280px]"
            style={{
              background: 'rgba(13,13,24,0.85)',
              borderColor: 'rgba(0,212,255,0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div>
              <h2
                className="font-['Syne'] font-bold text-3xl sm:text-4xl mb-6 leading-tight"
                style={{ color: '#FFFFFF' }}
              >
                Building AI at the<br />
                <span className="gradient-text">intersection of data</span><br />
                and healthcare.
              </h2>
              <p className="font-['DM_Sans'] text-base leading-relaxed" style={{ color: '#9CA3AF' }}>
                Based in India. Data analyst and AI developer with hands-on experience across SQL, Python,
                Tableau, Power BI, and LLM-powered tooling. Founder of Clavix Technologies Pvt. Ltd. —
                the parent company behind Aethex (AI medical SaaS) and Cadus (AI assistant for healthcare).
                Currently targeting a ₹2 Crore seed round.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: '🎯', text: 'Immediate Availability' },
                { icon: '🌐', text: 'Remote · On-Site' },
                { icon: '🇮🇳', text: 'India' },
              ].map((tag) => (
                <span
                  key={tag.text}
                  className="font-['DM_Sans'] text-sm px-4 py-2 rounded-full border"
                  style={{
                    background: 'rgba(0,212,255,0.05)',
                    borderColor: 'rgba(0,212,255,0.2)',
                    color: '#EDEDED',
                  }}
                >
                  {tag.icon} {tag.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: two stacked cards */}
          <div className="flex flex-col gap-4">

            {/* Founder card */}
            <div
              className="rounded-3xl p-6 border flex-1 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(13,13,24,0.9) 60%)',
                borderColor: 'rgba(245,158,11,0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="text-3xl mb-3">🏢</div>
              <div>
                <div className="font-['Syne'] font-bold text-2xl mb-1" style={{ color: '#F59E0B' }}>
                  Founder
                </div>
                <div className="font-['DM_Sans'] text-sm" style={{ color: '#9CA3AF' }}>
                  Clavix Technologies · Aethex · Cadus
                </div>
              </div>
            </div>

            {/* Seed round card */}
            <div
              className="rounded-3xl p-6 border flex-1 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(13,13,24,0.9) 60%)',
                borderColor: 'rgba(0,212,255,0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="text-3xl mb-3">🚀</div>
              <div>
                <div className="font-['Syne'] font-bold text-2xl mb-1" style={{ color: '#00D4FF' }}>
                  ₹2 Crore
                </div>
                <div className="font-['DM_Sans'] text-sm" style={{ color: '#9CA3AF' }}>
                  Seed round currently raising
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          {[
            { value: '3+', label: 'Projects Shipped', color: '#00D4FF', icon: '⚡' },
            { value: '5+', label: 'Certifications', color: '#10B981', icon: '🎓' },
            { value: '2', label: 'Forage Simulations', color: '#F59E0B', icon: '📊' },
            { value: '3', label: 'Companies Founded', color: '#00D4FF', icon: '🌐' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl p-6 border flex items-center gap-4 card-glow"
              style={{
                background: 'rgba(13,13,24,0.85)',
                borderColor: 'rgba(0,212,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="text-2xl">{stat.icon}</div>
              <div>
                <div className="font-['Syne'] font-bold text-2xl" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
