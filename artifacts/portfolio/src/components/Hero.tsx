import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-screen flex items-center pt-20 relative overflow-hidden section-enter ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col space-y-7">
            <div className="inline-block">
              <span
                className="font-['JetBrains_Mono'] text-sm px-4 py-2 rounded-full border"
                style={{
                  color: '#00D4FF',
                  borderColor: 'rgba(0,212,255,0.3)',
                  background: 'rgba(0,212,255,0.06)',
                }}
              >
                &lt;available for work /&gt;
              </span>
            </div>

            <div>
              <h1
                className="font-['Syne'] font-bold text-5xl sm:text-6xl md:text-7xl leading-tight"
                style={{ color: '#FFFFFF' }}
              >
                Rahul{' '}
                <span className="shimmer-text">Sangral</span>
              </h1>
            </div>
            
            <h2 className="font-['Syne'] font-semibold text-xl sm:text-2xl" style={{ color: '#EDEDED' }}>
              Data Analyst · AI Developer · Builder
            </h2>
            
            <p className="font-['DM_Sans'] text-lg" style={{ color: '#00D4FF' }}>
              Founder — Clavix Technologies · Aethex · Cadus
            </p>
            
            <p className="font-['DM_Sans'] text-base max-w-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              I turn messy data into decisions. I build AI tools that actually ship.
              Founder of Clavix Technologies — building Aethex, an AI medical SaaS platform,
              and Cadus, an intelligent AI assistant for healthcare professionals.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                data-testid="btn-view-work"
                className="btn-primary px-8 py-3 rounded-xl font-['DM_Sans'] font-bold text-[#050508]"
              >
                View My Work →
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="btn-download-resume"
                className="btn-outline px-8 py-3 rounded-xl font-['DM_Sans'] font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col space-y-5 items-end justify-center w-full">
            {[
              { value: '60% faster', label: 'AI Data Engine', delay: '0s', color: '#00D4FF' },
              { value: '40% fewer', label: 'Ad-hoc Requests · KPI Dashboard', delay: '0.15s', color: '#10B981' },
              { value: '10+ hrs/week', label: 'Saved · SND Technologies', delay: '0.3s', color: '#F59E0B' },
            ].map((stat, i) => (
              <div
                key={i}
                className="w-80 rounded-2xl p-6 border animate-float card-glow"
                style={{
                  background: 'rgba(13,13,24,0.8)',
                  borderColor: 'rgba(0,212,255,0.15)',
                  animationDelay: stat.delay,
                  marginRight: i === 1 ? '3rem' : '0',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="font-['Syne'] font-bold text-3xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="font-['DM_Sans'] text-sm" style={{ color: '#9CA3AF' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            data-testid="scroll-arrow"
            className="flex items-center justify-center w-12 h-12 rounded-full border transition-all animate-bounce"
            style={{
              borderColor: 'rgba(0,212,255,0.3)',
              color: '#00D4FF',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.1)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
}
