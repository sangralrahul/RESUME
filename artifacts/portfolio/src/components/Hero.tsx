import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const roles = ['Data Analyst', 'AI Developer', 'Founder', 'Builder'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-screen flex flex-col justify-center relative overflow-hidden section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Big BG text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <span
          className="font-['Syne'] font-bold text-[20vw] leading-none tracking-tighter whitespace-nowrap"
          style={{ color: 'rgba(0,212,255,0.025)', letterSpacing: '-0.05em' }}
        >
          RAHUL
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full" style={{ zIndex: 10 }}>

        {/* Top badge row */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10B981' }} />
          <span className="font-['JetBrains_Mono'] text-sm" style={{ color: '#10B981' }}>
            Available for work
          </span>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: 'rgba(0,212,255,0.2)' }} />
          <span className="font-['JetBrains_Mono'] text-xs" style={{ color: '#6B7280' }}>
            India · Remote
          </span>
        </div>

        {/* Name */}
        <div className="mb-6">
          <h1
            className="font-['Syne'] font-bold leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#FFFFFF' }}
          >
            Rahul
            <br />
            <span className="shimmer-text">Sangral</span>
          </h1>
        </div>

        {/* Typed role */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px" style={{ background: '#00D4FF' }} />
          <div className="font-['JetBrains_Mono'] text-xl sm:text-2xl" style={{ color: '#9CA3AF' }}>
            <span style={{ color: '#00D4FF' }}>{displayed}</span>
            <span
              style={{
                color: '#00D4FF',
                animation: 'typing-cursor 1s steps(1) infinite',
                display: 'inline-block',
              }}
            >
              |
            </span>
          </div>
        </div>

        {/* Bio */}
        <p
          className="font-['DM_Sans'] text-lg max-w-2xl leading-relaxed mb-12"
          style={{ color: '#6B7280' }}
        >
          I turn messy data into decisions and build AI tools that actually ship.
          Founder of{' '}
          <span style={{ color: '#F59E0B' }}>Clavix Technologies</span> — parent company behind{' '}
          <span style={{ color: '#00D4FF' }}>Aethex</span> and{' '}
          <span style={{ color: '#10B981' }}>Cadus</span>.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#projects"
            className="btn-primary px-8 py-4 rounded-2xl font-['DM_Sans'] font-bold text-[#050508] text-base"
          >
            View My Work →
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-4 rounded-2xl font-['DM_Sans'] font-medium text-base"
          >
            Download Resume
          </a>
          <a
            href="https://aethex.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl font-['DM_Sans'] font-medium text-base border transition-all"
            style={{ borderColor: 'rgba(245,158,11,0.4)', color: '#F59E0B' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.08)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            Visit Aethex
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px border rounded-2xl overflow-hidden"
          style={{ borderColor: 'rgba(0,212,255,0.12)', background: 'rgba(0,212,255,0.08)' }}
        >
          {[
            { value: '60%', label: 'Faster Analysis', color: '#00D4FF' },
            { value: '₹2Cr', label: 'Seed Round', color: '#F59E0B' },
            { value: '3+', label: 'AI Products', color: '#10B981' },
            { value: '10+', label: 'Hrs/Week Saved', color: '#00D4FF' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{ background: 'rgba(5,5,8,0.9)' }}
            >
              <div
                className="font-['Syne'] font-bold text-2xl sm:text-3xl mb-1"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 10 }}>
        <span className="font-['JetBrains_Mono'] text-xs" style={{ color: '#6B7280' }}>scroll</span>
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(0,212,255,0.3)' }}
        >
          <div
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ background: '#00D4FF' }}
          />
        </div>
      </div>
    </section>
  );
}
