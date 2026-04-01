import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const certs = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    color: "#F59E0B"
  },
  {
    name: "Microsoft AI/ML Engineering Certificate",
    issuer: "Microsoft",
    color: "#06B6D4"
  },
  {
    name: "Building with Claude API",
    issuer: "Anthropic",
    color: "#A855F7"
  },
  {
    name: "Claude with Amazon Bedrock",
    issuer: "Anthropic",
    color: "#A855F7"
  },
  {
    name: "Claude with Google Cloud Vertex AI",
    issuer: "Anthropic",
    color: "#A855F7"
  }
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
        <div className="mb-12">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl">// certifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-[#1A1A28] border border-[#4C1D95] rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1"
              style={{
                boxShadow: `0 0 0 rgba(0,0,0,0)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cert.color;
                e.currentTarget.style.boxShadow = `0 0 20px ${cert.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#4C1D95';
                e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
              }}
            >
              <div className="mb-4">
                <span 
                  className="font-['DM_Sans'] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{ color: cert.color, backgroundColor: `${cert.color}1A` }}
                >
                  {cert.issuer}
                </span>
              </div>
              <h3 className="font-['Syne'] font-semibold text-lg text-white leading-tight">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
