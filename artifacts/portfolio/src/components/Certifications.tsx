import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SiGoogle, SiCoursera, SiGooglecloud, SiAnthropic } from 'react-icons/si';
import { FaMicrosoft, FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Cert {
  typeName: string;
  name: string;
  issuer: string;
  year: string;
  detail?: string;
  accentColor: string;
  icons: { Icon: IconType; color: string }[];
}

const certs: Cert[] = [
  {
    typeName: 'GoogleDataAnalytics',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2025',
    accentColor: '#4285F4',
    detail: 'SQL, Tableau, data cleaning, spreadsheet analysis, dashboard-driven decision making.',
    icons: [{ Icon: SiGoogle, color: '#4285F4' }, { Icon: SiCoursera, color: '#0056D2' }],
  },
  {
    typeName: 'MicrosoftAIMLEng',
    name: 'Microsoft AI/ML Engineering Certificate',
    issuer: 'Microsoft',
    year: '2025',
    accentColor: '#00A4EF',
    detail: 'ML pipelines, Azure AI services, model deployment, responsible AI.',
    icons: [{ Icon: FaMicrosoft, color: '#00A4EF' }],
  },
  {
    typeName: 'AnthropicClaudeAPI',
    name: 'Claude API / LLM Integration',
    issuer: 'Anthropic',
    year: '2026',
    accentColor: '#D4A27F',
    detail: 'LLM integration, prompt engineering, RAG pipeline design, cloud AI deployment.',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }],
  },
  {
    typeName: 'ClaudeAmazonBedrock',
    name: 'Claude with Amazon Bedrock',
    issuer: 'Anthropic × AWS',
    year: '2026',
    accentColor: '#FF9900',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }, { Icon: FaAws, color: '#FF9900' }],
  },
  {
    typeName: 'ClaudeVertexAI',
    name: 'Claude with Google Cloud Vertex AI',
    issuer: 'Anthropic × Google Cloud',
    year: '2026',
    accentColor: '#4285F4',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }, { Icon: SiGooglecloud, color: '#4285F4' }],
  },
  {
    typeName: 'ForageSimulations',
    name: 'Investment Banking & Data Analytics Simulations',
    issuer: 'JPMorgan Chase & Deloitte (Forage)',
    year: '2026',
    accentColor: '#C586C0',
    detail: 'Financial data modeling, cybersecurity reporting, Big-4 stakeholder deliverables.',
    icons: [{ Icon: FaMicrosoft, color: '#6366F1' }],
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

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
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'rgba(212,212,212,0.18)' }}>
            <span className="t-cmt"># </span>{certs.length} certifications
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="cert-grid">
          {certs.map((cert, idx) => (
            <div key={idx} className="code-block" style={{ borderRadius: '14px' }}>
              {/* Mini tab bar */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 14px',
                background: 'rgba(255,255,255,0.02)',
                borderBottom: '1px solid rgba(86,156,214,0.08)',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {cert.icons.map(({ Icon, color }, i) => (
                    <div key={i} style={{
                      width: '30px', height: '30px', borderRadius: '8px',
                      background: `${color}12`, border: `1px solid ${color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon style={{ color, fontSize: '0.85rem' }} />
                    </div>
                  ))}
                </div>
                <span style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.6rem',
                  background: `${cert.accentColor}10`,
                  color: cert.accentColor,
                  border: `1px solid ${cert.accentColor}22`,
                  padding: '2px 8px', borderRadius: '4px',
                }}>
                  {cert.year}
                </span>
              </div>

              {/* Code-style cert display */}
              <div style={{ padding: '16px 16px', fontFamily: 'JetBrains Mono', fontSize: '0.71rem', lineHeight: 1.8 }}>
                <div>
                  <span className="t-kw">type </span>
                  <span className="t-type">{cert.typeName}</span>
                  <span className="t-op"> = {'{'}</span>
                </div>
                <div style={{ marginLeft: 16 }}>
                  <span className="t-var">issuer</span>
                  <span className="t-op">: </span>
                  <span className="t-str">"{cert.issuer}"</span>
                  <span className="t-op">;</span>
                </div>
                <div style={{ marginLeft: 16 }}>
                  <span className="t-var">name</span>
                  <span className="t-op">: </span>
                  <span style={{ color: 'rgba(212,212,212,0.75)', fontFamily: 'Inter', fontSize: '0.76rem' }}>{cert.name}</span>
                </div>
                {cert.detail && (
                  <div style={{ marginLeft: 16, marginTop: 4 }}>
                    <span className="t-cmt">// {cert.detail}</span>
                  </div>
                )}
                <div><span className="t-op">{'}'}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
