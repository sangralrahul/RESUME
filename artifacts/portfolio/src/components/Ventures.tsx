import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Ventures() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="ventures"
      ref={ref}
      className={`py-24 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <p className="font-['JetBrains_Mono'] text-sm mb-3" style={{ color: '#00D4FF' }}>// ventures & companies</p>
          <h2 className="font-['Syne'] font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#FFFFFF' }}>
            Building the Future of AI in India
          </h2>
          <p className="font-['DM_Sans'] text-lg max-w-3xl" style={{ color: '#9CA3AF' }}>
            Founder-led companies at the intersection of AI, healthcare, and enterprise technology.
          </p>
        </div>

        {/* CLAVIX TECHNOLOGIES */}
        <div
          className="rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden transition-all hover:shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(13,13,24,0.95) 0%, rgba(20,15,5,0.95) 100%)',
            border: '1px solid rgba(245,158,11,0.4)',
            boxShadow: '0 0 40px rgba(245,158,11,0.1)',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 60px rgba(245,158,11,0.2)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(245,158,11,0.1)'; }}
        >
          <div className="absolute top-8 right-8">
            <span
              className="font-['DM_Sans'] font-medium px-4 py-1.5 rounded-full text-sm border"
              style={{
                background: 'rgba(245,158,11,0.1)',
                color: '#F59E0B',
                borderColor: 'rgba(245,158,11,0.4)',
              }}
            >
              🏢 Parent Company
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 flex flex-col space-y-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: '#000',
                  border: '1px solid rgba(245,158,11,0.5)',
                  boxShadow: '0 0 20px rgba(245,158,11,0.15)',
                }}
              >
                <span className="font-['Syne'] font-bold text-4xl" style={{ color: '#F59E0B' }}>C</span>
              </div>
              
              <div>
                <h4 className="font-['Syne'] font-bold text-3xl mb-2" style={{ color: '#FFFFFF' }}>
                  Clavix Technologies Pvt. Ltd.
                </h4>
                <p className="font-['DM_Sans'] text-lg" style={{ color: '#9CA3AF' }}>
                  The AI Holding Company Behind India's Next Wave
                </p>
              </div>
              
              <p className="font-['DM_Sans'] leading-relaxed" style={{ color: '#EDEDED' }}>
                Clavix Technologies is the parent company and innovation engine behind Aethex and Cadus. 
                Founded by Rahul Sangral, Clavix is building a portfolio of AI-first products targeting 
                healthcare, productivity, and enterprise intelligence — headquartered in India, built for the world.
              </p>
              
              <span
                className="self-start font-['DM_Sans'] px-3 py-1 rounded-full text-sm"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B' }}
              >
                📍 Founded 2026 · India
              </span>
              
              <div className="pt-2">
                <a 
                  href="https://clavix.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="btn-clavix"
                  className="inline-block font-['DM_Sans'] font-bold px-6 py-3 rounded-xl transition-all"
                  style={{
                    background: '#F59E0B',
                    color: '#050508',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(245,158,11,0.5)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  Visit clavix.in →
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex flex-col space-y-4 justify-center">
              {[
                {
                  emoji: '🏥',
                  name: 'Aethex',
                  sub: 'AI Medical Platform & Store',
                  href: 'https://aethex.in',
                  linkText: 'aethex.in ↗',
                  color: '#00D4FF',
                  desc: 'Empowering doctors & medical students with AI-powered clinical tools, analytics dashboards, a smart medical store, and the Cadus AI assistant.',
                },
                {
                  emoji: '🤖',
                  name: 'Cadus',
                  sub: 'AI Assistant by Aethex',
                  href: 'https://aethex.in/ai-assistant',
                  linkText: 'aethex.in/ai-assistant ↗',
                  color: '#10B981',
                  desc: 'The intelligent AI assistant inside Aethex — answering clinical queries, guiding students, and powering smart decisions for healthcare professionals.',
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl p-5 flex flex-col h-full border transition-all hover:-translate-y-1"
                  style={{
                    background: 'rgba(5,5,8,0.6)',
                    borderColor: `${item.color}25`,
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.color}20`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}25`;
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h5 className="font-['Syne'] font-bold text-xl" style={{ color: item.color }}>{item.name}</h5>
                        <p className="font-['DM_Sans'] text-xs" style={{ color: '#6B7280' }}>{item.sub}</p>
                      </div>
                    </div>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm transition-opacity hover:opacity-80" style={{ color: item.color }}>
                      {item.linkText}
                    </a>
                  </div>
                  <p className="font-['DM_Sans'] text-sm leading-relaxed flex-grow" style={{ color: '#9CA3AF' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TWO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8 relative flex flex-col h-full border"
            style={{
              background: 'rgba(13,13,24,0.85)',
              borderColor: 'rgba(0,212,255,0.3)',
              boxShadow: '0 0 30px rgba(0,212,255,0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="absolute top-6 right-6">
              <span
                className="font-['DM_Sans'] text-xs px-3 py-1 rounded-full"
                style={{ background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.3)' }}
              >
                🚀 Flagship Product
              </span>
            </div>
            
            <h4 className="font-['Syne'] font-bold text-2xl mb-1 pr-24" style={{ color: '#FFFFFF' }}>
              Aethex — AI Medical Platform & Store
            </h4>
            <p className="font-['DM_Sans'] text-sm mb-6" style={{ color: '#6B7280' }}>Founded by Rahul Sangral</p>
            
            <p className="font-['DM_Sans'] mb-6 leading-relaxed flex-grow" style={{ color: '#EDEDED' }}>
              Aethex is an AI-powered SaaS platform built for Indian doctors and medical students. It combines
              role-based analytics dashboards, a smart medical store, REST API integrations, and Cadus — an
              embedded AI assistant — into one unified healthcare intelligence platform. Currently raising a ₹2 Crore seed round.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "AI-powered clinical analytics dashboards",
                "Smart medical store for doctors & students",
                "Cadus AI assistant — clinical Q&A and guidance",
                "Role-based access for doctors, students, admins",
                "REST API integrations for hospital workflows"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 font-['DM_Sans'] text-sm" style={{ color: '#EDEDED' }}>
                  <span style={{ color: '#00D4FF' }}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "FastAPI", "Claude API", "Docker", "AWS"].map(tag => (
                <span
                  key={tag}
                  className="font-['JetBrains_Mono'] text-xs rounded-full px-3 py-1 border"
                  style={{ background: 'rgba(0,212,255,0.08)', color: '#00D4FF', borderColor: 'rgba(0,212,255,0.25)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href="https://aethex.in" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="btn-aethex-detail"
              className="btn-primary mt-auto text-center w-full py-3 rounded-xl font-['DM_Sans'] font-bold"
            >
              Visit Aethex →
            </a>
          </div>
          
          <div
            className="rounded-2xl p-8 relative flex flex-col h-full border"
            style={{
              background: 'rgba(13,13,24,0.85)',
              borderColor: 'rgba(16,185,129,0.3)',
              boxShadow: '0 0 30px rgba(16,185,129,0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="absolute top-6 right-6">
              <span
                className="font-['DM_Sans'] text-xs px-3 py-1 rounded-full border"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', borderColor: 'rgba(16,185,129,0.3)' }}
              >
                🤖 AI Assistant
              </span>
            </div>
            
            <h4 className="font-['Syne'] font-bold text-2xl mb-1 pr-24" style={{ color: '#FFFFFF' }}>
              Cadus — The AI Brain of Aethex
            </h4>
            <p className="font-['DM_Sans'] text-sm mb-6" style={{ color: '#6B7280' }}>
              Powered by Aethex · aethex.in/ai-assistant
            </p>
            
            <p className="font-['DM_Sans'] mb-6 leading-relaxed flex-grow" style={{ color: '#EDEDED' }}>
              Cadus is the intelligent AI assistant embedded within Aethex. Designed for healthcare professionals and
              medical students, Cadus answers clinical questions, surfaces relevant medical data, and provides smart
              guidance — making AI genuinely useful in healthcare.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Clinical query answering for doctors",
                "Study assistance for medical students",
                "Integrated into Aethex dashboard",
                "Context-aware, role-specific responses",
                "Built on cutting-edge LLM infrastructure"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 font-['DM_Sans'] text-sm" style={{ color: '#EDEDED' }}>
                  <span style={{ color: '#10B981' }}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto">
              <a 
                href="https://aethex.in/ai-assistant" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="btn-cadus-detail"
                className="block text-center w-full py-3 rounded-xl font-['DM_Sans'] font-medium border transition-all"
                style={{ borderColor: '#10B981', color: '#10B981' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(16,185,129,0.1)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                Explore Cadus →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
