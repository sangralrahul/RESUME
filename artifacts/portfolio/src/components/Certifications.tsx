import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SiGoogle, SiCoursera, SiGooglecloud, SiAnthropic } from 'react-icons/si';
import { FaMicrosoft, FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Cert {
  fileName: string;
  name: string;
  issuer: string;
  year: string;
  detail?: string;
  accentColor: string;
  icons: { Icon: IconType; color: string }[];
}

const certs: Cert[] = [
  {
    fileName: 'google_analytics.py',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2025',
    accentColor: '#4285F4',
    detail: 'SQL, Tableau, data cleaning, spreadsheet analysis, dashboard-driven decisions.',
    icons: [{ Icon: SiGoogle, color: '#4285F4' }, { Icon: SiCoursera, color: '#0056D2' }],
  },
  {
    fileName: 'microsoft_ai_ml.ts',
    name: 'Microsoft AI/ML Development Certificate',
    issuer: 'Microsoft',
    year: '2025',
    accentColor: '#00A4EF',
    detail: 'ML pipelines, Azure AI services, model deployment, responsible AI.',
    icons: [{ Icon: FaMicrosoft, color: '#00A4EF' }],
  },
  {
    fileName: 'anthropic_claude.py',
    name: 'Claude API / LLM Integration',
    issuer: 'Anthropic',
    year: '2026',
    accentColor: '#D4A27F',
    detail: 'LLM integration, prompt engineering, RAG pipelines, cloud AI deployment.',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }],
  },
  {
    fileName: 'claude_bedrock.ts',
    name: 'Claude with Amazon Bedrock',
    issuer: 'Anthropic × AWS',
    year: '2026',
    accentColor: '#FF9900',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }, { Icon: FaAws, color: '#FF9900' }],
  },
  {
    fileName: 'claude_vertex.ts',
    name: 'Claude with Google Cloud Vertex AI',
    issuer: 'Anthropic × Google Cloud',
    year: '2026',
    accentColor: '#4285F4',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }, { Icon: SiGooglecloud, color: '#4285F4' }],
  },
  {
    fileName: 'forage_sims.py',
    name: 'Investment Banking & Data Analytics Simulations',
    issuer: 'JPMorgan Chase & Deloitte (Forage)',
    year: '2026',
    accentColor: '#C586C0',
    detail: 'Financial modeling, cybersecurity reporting, Big-4 stakeholder deliverables.',
    icons: [{ Icon: FaMicrosoft, color: '#6366F1' }],
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  const cmt = 'rgba(212,212,212,0.28)';
  const txt = 'rgba(212,212,212,0.62)';
  const hdr = '#569CD6';
  const key = '#9CDCFE';

  return (
    <section id="certifications" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="section-num">06</span>
          <span className="label-tag">certifications</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#D4D4D4', letterSpacing: '-0.03em' }}>
            Verified Credentials
          </h2>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#6A9955' }}>
            # {certs.length} certifications
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="cert-grid">
          {certs.map((cert, idx) => {
            const isPy = cert.fileName.endsWith('.py');
            const pfx = isPy ? '#' : '//';
            return (
              <div key={idx} className="code-block" style={{ borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                {/* Mini tab bar */}
                <div className="code-tab-bar" style={{ height: '36px' }}>
                  <div style={{ display: 'flex', gap: '5px', marginRight: '10px' }}>
                    {cert.icons.map(({ Icon, color }, i) => (
                      <div key={i} style={{
                        width: '26px', height: '26px', borderRadius: '7px',
                        background: `${color}12`, border: `1px solid ${color}22`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon style={{ color, fontSize: '0.75rem' }} />
                      </div>
                    ))}
                  </div>
                  <div className="code-tab active" style={{ fontSize: '0.62rem' }}>
                    <div className="code-tab-dot" style={{ background: cert.accentColor, width: '6px', height: '6px' }} />
                    {cert.fileName}
                  </div>
                </div>

                {/* Comment-format cert content */}
                <div className="code-body" style={{ padding: '14px 16px', flex: 1 }}>
                  {/* Year */}
                  <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                    <span className="ln">1</span>
                    <span>
                      <span style={{ color: cmt }}>{pfx}  </span>
                      <span style={{ color: key, display: 'inline-block', minWidth: '48px' }}>Year</span>
                      <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 6px' }}>→</span>
                      <span style={{ color: cert.accentColor }}>{cert.year}</span>
                    </span>
                  </div>
                  {/* Issuer */}
                  <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                    <span className="ln">2</span>
                    <span>
                      <span style={{ color: cmt }}>{pfx}  </span>
                      <span style={{ color: key, display: 'inline-block', minWidth: '48px' }}>Issuer</span>
                      <span style={{ color: 'rgba(212,212,212,0.3)', margin: '0 6px' }}>→</span>
                      <span style={{ color: txt, fontFamily: 'Inter', fontSize: '0.74rem' }}>{cert.issuer}</span>
                    </span>
                  </div>
                  {/* Empty */}
                  <div style={{ display: 'flex', minHeight: '0.5em' }}>
                    <span className="ln">3</span>
                  </div>
                  {/* Name */}
                  <div style={{ display: 'flex', minHeight: '1.1em', marginBottom: '2px' }}>
                    <span className="ln">4</span>
                    <span>
                      <span style={{ color: cmt }}>{pfx} </span>
                      <span style={{ color: hdr, fontFamily: 'Inter', fontSize: '0.78rem', lineHeight: 1.5 }}>{cert.name}</span>
                    </span>
                  </div>
                  {cert.detail && (
                    <div style={{ display: 'flex', minHeight: '1.1em' }}>
                      <span className="ln">5</span>
                      <span style={{ color: cmt }}>{pfx}  <span style={{ color: 'rgba(212,212,212,0.38)', fontFamily: 'Inter', fontSize: '0.74rem', lineHeight: 1.6 }}>{cert.detail}</span></span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
