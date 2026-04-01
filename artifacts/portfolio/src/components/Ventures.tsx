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
        <div className="mb-12">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl mb-4">// ventures & companies</h2>
          <h3 className="font-['Syne'] font-bold text-4xl text-white mb-4">Building the Future of AI in India</h3>
          <p className="font-['DM_Sans'] text-[#9CA3AF] text-lg max-w-3xl">Founder-led companies at the intersection of AI, healthcare, and enterprise technology.</p>
        </div>

        {/* CLAVIX TECHNOLOGIES - FULL WIDTH CARD */}
        <div className="bg-gradient-to-br from-[#1A1A28] to-[#1C1710] border border-[#F59E0B] shadow-[0_0_40px_rgba(245,158,11,0.2)] rounded-2xl p-8 md:p-12 mb-12 transition-all hover:shadow-[0_0_50px_rgba(245,158,11,0.3)] relative overflow-hidden">
          <div className="absolute top-8 right-8">
            <span className="bg-[rgba(245,158,11,0.2)] text-[#F59E0B] border border-[#F59E0B] font-['DM_Sans'] font-medium px-4 py-1.5 rounded-full text-sm">
              🏢 Parent Company
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 flex flex-col space-y-6">
              <div className="w-20 h-20 bg-[#0A0A0F] border border-[#F59E0B] rounded-2xl flex items-center justify-center">
                <span className="font-['Syne'] font-bold text-3xl text-[#F59E0B]">CX</span>
              </div>
              
              <div>
                <h4 className="font-['Syne'] font-bold text-3xl text-white mb-2">Clavix Technologies Pvt. Ltd.</h4>
                <p className="font-['DM_Sans'] text-[#9CA3AF] text-lg">The AI Holding Company Behind India's Next Wave</p>
              </div>
              
              <p className="font-['DM_Sans'] text-[#EDEDED] leading-relaxed">
                Clavix Technologies is the parent company and innovation engine behind Aethex and Cadus. 
                Founded by Rahul Sangral, Clavix is building a portfolio of AI-first products targeting 
                healthcare, productivity, and enterprise intelligence — headquartered in India, built for the world.
              </p>
              
              <div className="flex items-center gap-4">
                <span className="bg-[rgba(245,158,11,0.1)] text-[#F59E0B] font-['DM_Sans'] px-3 py-1 rounded-full text-sm">
                  📍 Founded 2025 · Samba, J&K, India
                </span>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://clavix.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="btn-clavix"
                  className="inline-block bg-[#F59E0B] text-[#0A0A0F] font-['DM_Sans'] font-bold px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
                >
                  Visit clavix.in →
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex flex-col space-y-4 justify-center mt-8 lg:mt-0">
              <div className="bg-[#12121A] border border-[#4C1D95] rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏥</span>
                    <div>
                      <h5 className="font-['Syne'] font-bold text-xl text-[#A855F7]">Aethex</h5>
                      <p className="font-['DM_Sans'] text-[#9CA3AF] text-xs">AI Medical Platform & Store</p>
                    </div>
                  </div>
                  <a href="https://aethex.in" target="_blank" rel="noopener noreferrer" data-testid="link-aethex-from-clavix" className="text-[#A855F7] hover:text-[#C084FC] text-sm">aethex.in ↗</a>
                </div>
                <p className="font-['DM_Sans'] text-[#EDEDED] text-sm leading-relaxed flex-grow">
                  Empowering doctors & medical students with AI-powered clinical tools, analytics dashboards, a smart medical store, and the Cadus AI assistant.
                </p>
              </div>

              <div className="bg-[#12121A] border border-[#4C1D95] rounded-xl p-5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <h5 className="font-['Syne'] font-bold text-xl text-[#06B6D4]">Cadus</h5>
                      <p className="font-['DM_Sans'] text-[#9CA3AF] text-xs">AI Assistant by Aethex</p>
                    </div>
                  </div>
                  <a href="https://aethex.in/ai-assistant" target="_blank" rel="noopener noreferrer" data-testid="link-cadus-from-clavix" className="text-[#06B6D4] hover:text-[#22d3ee] text-sm">aethex.in/ai-assistant ↗</a>
                </div>
                <p className="font-['DM_Sans'] text-[#EDEDED] text-sm leading-relaxed flex-grow">
                  Cadus is the intelligent AI assistant inside Aethex — answering clinical queries, guiding students, and powering smart decisions for healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TWO EQUAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#1A1A28] border border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.2)] rounded-2xl p-8 relative flex flex-col h-full">
            <div className="absolute top-6 right-6">
              <span className="bg-[#4C1D95] text-[#EDEDED] font-['DM_Sans'] text-xs px-3 py-1 rounded-full">
                🚀 Flagship Product
              </span>
            </div>
            
            <h4 className="font-['Syne'] font-bold text-2xl text-white mb-1 pr-24">Aethex — AI Medical Platform & Store</h4>
            <p className="font-['DM_Sans'] text-[#9CA3AF] text-sm mb-6">Founded by Rahul Sangral</p>
            
            <p className="font-['DM_Sans'] text-[#EDEDED] mb-6 leading-relaxed flex-grow">
              Aethex is an AI-powered SaaS platform built for Indian doctors and medical students. It combines role-based analytics dashboards, a smart medical store, REST API integrations, and Cadus — an embedded AI assistant — into one unified healthcare intelligence platform. Currently raising a ₹2 Crore seed round.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "AI-powered clinical analytics dashboards",
                "Smart medical store for doctors & students",
                "Cadus AI assistant — clinical Q&A and guidance",
                "Role-based access for doctors, students, admins",
                "REST API integrations for hospital workflows"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 font-['DM_Sans'] text-[#EDEDED] text-sm">
                  <span className="text-[#A855F7]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "FastAPI", "Claude API", "Docker", "AWS"].map(tag => (
                <span key={tag} className="font-['JetBrains_Mono'] text-xs bg-[rgba(124,58,237,0.15)] text-[#C084FC] border border-[#4C1D95] rounded-full px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href="https://aethex.in" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="btn-aethex-detail"
              className="mt-auto text-center w-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-['DM_Sans'] font-medium py-3 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
            >
              Visit Aethex →
            </a>
          </div>
          
          <div className="bg-[#1A1A28] border border-[#06B6D4] shadow-[0_0_30px_rgba(6,182,212,0.2)] rounded-2xl p-8 relative flex flex-col h-full">
            <div className="absolute top-6 right-6">
              <span className="bg-[rgba(6,182,212,0.2)] text-[#06B6D4] font-['DM_Sans'] text-xs px-3 py-1 rounded-full border border-[#06B6D4]">
                🤖 AI Assistant
              </span>
            </div>
            
            <h4 className="font-['Syne'] font-bold text-2xl text-white mb-1 pr-24">Cadus — The AI Brain of Aethex</h4>
            <p className="font-['DM_Sans'] text-[#9CA3AF] text-sm mb-6">Powered by Aethex · aethex.in/ai-assistant</p>
            
            <p className="font-['DM_Sans'] text-[#EDEDED] mb-6 leading-relaxed flex-grow">
              Cadus is the intelligent AI assistant embedded within Aethex. Designed for healthcare professionals and medical students, Cadus answers clinical questions, surfaces relevant medical data, and provides smart guidance — making AI genuinely useful in healthcare.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Clinical query answering for doctors",
                "Study assistance for medical students",
                "Integrated into Aethex dashboard",
                "Context-aware, role-specific responses",
                "Built on cutting-edge LLM infrastructure"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 font-['DM_Sans'] text-[#EDEDED] text-sm">
                  <span className="text-[#06B6D4]">✓</span>
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
                className="block text-center w-full border border-[#06B6D4] text-[#06B6D4] font-['DM_Sans'] font-medium py-3 rounded-lg hover:bg-[rgba(6,182,212,0.1)] transition-all"
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
