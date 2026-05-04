import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SiGoogle, SiCoursera, SiGooglecloud, SiAnthropic } from 'react-icons/si';
import { FaMicrosoft, FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Cert {
  name: string;
  issuer: string;
  year: string;
  detail?: string;
  icons: { Icon: IconType; color: string }[];
}

const certs: Cert[] = [
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2025',
    detail: 'Data cleaning, SQL querying, Tableau, spreadsheet analysis, and dashboard-driven business decision making.',
    icons: [{ Icon: SiGoogle, color: '#4285F4' }, { Icon: SiCoursera, color: '#0056D2' }],
  },
  {
    name: 'Microsoft AI/ML Engineering Certificate',
    issuer: 'Microsoft',
    year: '2025',
    detail: 'ML pipelines, Azure AI services, model deployment, and responsible AI development practices.',
    icons: [{ Icon: FaMicrosoft, color: '#00A4EF' }],
  },
  {
    name: 'Claude API / LLM Integration',
    issuer: 'Anthropic',
    year: '2026',
    detail: 'LLM integration, prompt engineering, RAG pipeline design, and deploying AI models on cloud infrastructure.',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }],
  },
  {
    name: 'Claude with Amazon Bedrock',
    issuer: 'Anthropic × AWS',
    year: '2026',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }, { Icon: FaAws, color: '#FF9900' }],
  },
  {
    name: 'Claude with Google Cloud Vertex AI',
    issuer: 'Anthropic × Google Cloud',
    year: '2026',
    icons: [{ Icon: SiAnthropic, color: '#D4A27F' }, { Icon: SiGooglecloud, color: '#4285F4' }],
  },
  {
    name: 'Investment Banking & Data Analytics Simulations',
    issuer: 'JPMorgan Chase & Deloitte (Forage)',
    year: '2026',
    detail: 'Financial data modeling, cybersecurity reporting, and structured stakeholder deliverables in Big-4 context.',
    icons: [{ Icon: FaMicrosoft, color: '#6366F1' }],
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section id="certifications" ref={ref} style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className={`section-enter ${isVisible ? 'is-visible' : ''}`}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="section-num">06</span>
          <span className="label-tag">Certifications</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', letterSpacing: '-0.03em' }}>
            Verified Credentials
          </h2>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)' }}>
            {certs.length} certifications
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="cert-grid">
          {certs.map((cert, idx) => (
            <div key={idx} className="card-glass" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {cert.icons.map(({ Icon, color }, i) => (
                    <div key={i} style={{
                      width: '34px', height: '34px', borderRadius: '8px',
                      background: `${color}15`, border: `1px solid ${color}28`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon style={{ color, fontSize: '0.88rem' }} />
                    </div>
                  ))}
                </div>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>
                  {cert.year}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  {cert.issuer}
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginBottom: cert.detail ? '10px' : '0' }}>
                  {cert.name}
                </div>
                {cert.detail && (
                  <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
                    {cert.detail}
                  </div>
                )}
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
