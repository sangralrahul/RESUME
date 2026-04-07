import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SiGoogle, SiCoursera, SiGooglecloud, SiAnthropic } from 'react-icons/si';
import { FaMicrosoft, FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Cert {
  name: string;
  issuer: string;
  color: string;
  icons: { Icon: IconType; color: string }[];
  year: string;
}

const certs: Cert[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    color: "#F59E0B",
    year: "2025",
    icons: [
      { Icon: SiGoogle, color: "#4285F4" },
      { Icon: SiCoursera, color: "#0056D2" },
    ],
  },
  {
    name: "Microsoft AI/ML Engineering Certificate",
    issuer: "Microsoft",
    color: "#00D4FF",
    year: "2025",
    icons: [{ Icon: FaMicrosoft, color: "#00A4EF" }],
  },
  {
    name: "Building with Claude API",
    issuer: "Anthropic",
    color: "#10B981",
    year: "2026",
    icons: [{ Icon: SiAnthropic, color: "#D4A27F" }],
  },
  {
    name: "Claude with Amazon Bedrock",
    issuer: "Anthropic × AWS",
    color: "#10B981",
    year: "2026",
    icons: [
      { Icon: SiAnthropic, color: "#D4A27F" },
      { Icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    name: "Claude with Google Cloud Vertex AI",
    issuer: "Anthropic × Google Cloud",
    color: "#00D4FF",
    year: "2026",
    icons: [
      { Icon: SiAnthropic, color: "#D4A27F" },
      { Icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-28 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase" style={{ color: '#6B7280' }}>
            06 — Certifications
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.1)' }} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2
            className="font-['Syne'] font-bold text-4xl sm:text-5xl leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            Verified
            <br />
            <span className="gradient-text">Credentials</span>
          </h2>
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-2xl border self-start sm:self-auto"
            style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.25)' }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: '#10B981' }} />
            <span className="font-['JetBrains_Mono'] text-sm" style={{ color: '#10B981' }}>
              {certs.length} Certifications Earned
            </span>
          </div>
        </div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 flex flex-col border transition-all hover:-translate-y-1.5 group"
              style={{
                background: 'rgba(13,13,24,0.88)',
                borderColor: 'rgba(0,212,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${cert.color}45`;
                el.style.boxShadow = `0 0 30px ${cert.color}15, 0 12px 30px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.1)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Top row: icons + year */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  {cert.icons.map(({ Icon, color }, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon style={{ color, fontSize: '1.1rem' }} />
                    </div>
                  ))}
                </div>
                <span
                  className="font-['JetBrains_Mono'] text-xs px-3 py-1 rounded-full"
                  style={{
                    background: `${cert.color}10`,
                    color: cert.color,
                    border: `1px solid ${cert.color}25`,
                  }}
                >
                  {cert.year}
                </span>
              </div>

              {/* Issuer badge */}
              <div className="mb-3">
                <span
                  className="font-['DM_Sans'] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{ color: cert.color, background: `${cert.color}12` }}
                >
                  {cert.issuer}
                </span>
              </div>

              <h3
                className="font-['Syne'] font-semibold text-lg leading-snug flex-grow"
                style={{ color: '#FFFFFF' }}
              >
                {cert.name}
              </h3>

              {/* Bottom accent line */}
              <div
                className="mt-5 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
