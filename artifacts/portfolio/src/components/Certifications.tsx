import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SiGoogle, SiCoursera, SiGooglecloud, SiAnthropic } from 'react-icons/si';
import { FaMicrosoft, FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Cert {
  name: string;
  issuer: string;
  year: string;
  icons: { Icon: IconType; color: string }[];
}

const certs: Cert[] = [
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2025',
    icons: [
      { Icon: SiGoogle, color: '#4285F4' },
      { Icon: SiCoursera, color: '#0056D2' },
    ],
  },
  {
    name: 'Microsoft AI/ML Engineering Certificate',
    issuer: 'Microsoft',
    year: '2025',
    icons: [{ Icon: FaMicrosoft, color: '#00A4EF' }],
  },
  {
    name: 'Building with Claude API',
    issuer: 'Anthropic',
    year: '2026',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }],
  },
  {
    name: 'Claude with Amazon Bedrock',
    issuer: 'Anthropic × AWS',
    year: '2026',
    icons: [
      { Icon: SiAnthropic, color: '#D4A27F' },
      { Icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    name: 'Claude with Google Cloud Vertex AI',
    issuer: 'Anthropic × Google Cloud',
    year: '2026',
    icons: [
      { Icon: SiAnthropic, color: '#D4A27F' },
      { Icon: SiGooglecloud, color: '#4285F4' },
    ],
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="certifications" ref={ref} style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p className="label-tag" style={{ marginBottom: '12px' }}>Certifications</p>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FAFAFA', letterSpacing: '-0.02em' }}>
              Verified Credentials
            </h2>
          </div>
          <span style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#555' }}>
            {certs.length} certifications earned
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1E1E1E', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1E1E1E' }} className="cert-grid">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              style={{
                background: '#0F0F0F',
                padding: '28px 26px',
                transition: 'background 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#121212'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F0F0F'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {cert.icons.map(({ Icon, color }, i) => (
                    <div
                      key={i}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        background: `${color}15`,
                        border: `1px solid ${color}25`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon style={{ color, fontSize: '0.9rem' }} />
                    </div>
                  ))}
                </div>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#444' }}>
                  {cert.year}
                </span>
              </div>

              <div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.7rem', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  {cert.issuer}
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.88rem', color: '#FAFAFA', lineHeight: 1.5 }}>
                  {cert.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
