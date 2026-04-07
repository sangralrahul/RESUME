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
}

const certs: Cert[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    color: "#F59E0B",
    icons: [
      { Icon: SiGoogle, color: "#4285F4" },
      { Icon: SiCoursera, color: "#0056D2" },
    ],
  },
  {
    name: "Microsoft AI/ML Engineering Certificate",
    issuer: "Microsoft",
    color: "#00D4FF",
    icons: [
      { Icon: FaMicrosoft, color: "#00A4EF" },
    ],
  },
  {
    name: "Building with Claude API",
    issuer: "Anthropic",
    color: "#10B981",
    icons: [
      { Icon: SiAnthropic, color: "#D4A27F" },
    ],
  },
  {
    name: "Claude with Amazon Bedrock",
    issuer: "Anthropic × AWS",
    color: "#10B981",
    icons: [
      { Icon: SiAnthropic, color: "#D4A27F" },
      { Icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    name: "Claude with Google Cloud Vertex AI",
    issuer: "Anthropic × Google Cloud",
    color: "#00D4FF",
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
      className={`py-24 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="font-['JetBrains_Mono'] text-sm mb-3" style={{ color: '#00D4FF' }}>// certifications</p>
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl" style={{ color: '#FFFFFF' }}>
            Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 flex flex-col border transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(13,13,24,0.85)',
                borderColor: 'rgba(0,212,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${cert.color}50`;
                el.style.boxShadow = `0 0 25px ${cert.color}20`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,212,255,0.12)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                {cert.icons.map(({ Icon, color }, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${color}18`,
                      border: `1px solid ${color}35`,
                    }}
                  >
                    <Icon style={{ color, fontSize: '1.1rem' }} />
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <span
                  className="font-['DM_Sans'] font-bold text-xs px-2 py-0.5 rounded-full uppercase tracking-wider"
                  style={{ color: cert.color, backgroundColor: `${cert.color}15` }}
                >
                  {cert.issuer}
                </span>
              </div>

              <h3 className="font-['Syne'] font-semibold text-lg leading-tight" style={{ color: '#FFFFFF' }}>
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
