import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { value: '3+', label: 'Projects Shipped', color: '#00D4FF' },
  { value: '5+', label: 'Certifications', color: '#10B981' },
  { value: '2', label: 'Forage Simulations', color: '#F59E0B' },
  { value: '3', label: 'Companies Founded', color: '#00D4FF' },
  { value: '₹2Cr', label: 'Seed Round Target', color: '#10B981' },
  { value: 'Now', label: 'Available', color: '#F59E0B' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="font-['JetBrains_Mono'] text-sm mb-3" style={{ color: '#00D4FF' }}>// about me</p>
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl" style={{ color: '#FFFFFF' }}>
            Who I Am
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col space-y-8">
            <p className="font-['DM_Sans'] text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>
              Based in India. I'm a data analyst and AI developer with hands-on experience
              across SQL, Python, Tableau, Power BI, and LLM-powered tooling. I've built production
              analytics systems, completed simulations at Deloitte and JPMorgan, and I'm the founder
              of Clavix Technologies Pvt. Ltd. — the parent company behind Aethex, an AI medical SaaS
              platform, and Cadus, an AI assistant for healthcare professionals. Currently targeting a
              ₹2 Crore seed round.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🎯', text: 'Immediate Availability' },
                { icon: '🌐', text: 'Remote or On-Site' },
                { icon: '🇮🇳', text: 'Based in India' },
              ].map((tag) => (
                <span
                  key={tag.text}
                  className="font-['DM_Sans'] px-4 py-2 rounded-full text-sm border"
                  style={{
                    background: 'rgba(0,212,255,0.06)',
                    borderColor: 'rgba(0,212,255,0.2)',
                    color: '#EDEDED',
                  }}
                >
                  {tag.icon} {tag.text}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 flex flex-col justify-center items-center text-center border card-glow"
                style={{
                  background: 'rgba(13,13,24,0.8)',
                  borderColor: 'rgba(0,212,255,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="font-['Syne'] font-bold text-3xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="font-['DM_Sans'] text-sm" style={{ color: '#6B7280' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
