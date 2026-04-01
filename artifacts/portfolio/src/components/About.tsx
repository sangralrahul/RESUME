import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
        <div className="mb-12">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl">// about me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col space-y-8">
            <p className="font-['DM_Sans'] text-[#9CA3AF] text-lg leading-relaxed">
              Based in Samba, J&K, India. I'm a data analyst and AI developer with hands-on experience
              across SQL, Python, Tableau, Power BI, and LLM-powered tooling. I've built production
              analytics systems, completed simulations at Deloitte and JPMorgan, and I'm the founder
              of Clavix Technologies Pvt. Ltd. — the parent company behind Aethex, an AI medical SaaS
              platform, and Cadus, an AI assistant for healthcare professionals. Currently targeting a
              ₹2 Crore seed round.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] text-[#EDEDED] font-['DM_Sans'] px-4 py-2 rounded-full text-sm">
                🎯 Immediate Availability
              </span>
              <span className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] text-[#EDEDED] font-['DM_Sans'] px-4 py-2 rounded-full text-sm">
                🌐 Remote or On-Site
              </span>
              <span className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] text-[#EDEDED] font-['DM_Sans'] px-4 py-2 rounded-full text-sm">
                🇮🇳 Samba, J&K, India
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#A855F7] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7] mb-2">3+</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] text-sm">Projects Shipped</div>
            </div>
            
            <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#A855F7] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7] mb-2">5+</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] text-sm">Certifications</div>
            </div>
            
            <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#A855F7] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7] mb-2">2</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] text-sm">Forage Simulations</div>
            </div>
            
            <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#A855F7] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7] mb-2">3</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] text-sm">Companies Founded</div>
            </div>
            
            <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#A855F7] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7] mb-2">₹2Cr</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] text-sm">Seed Round</div>
            </div>
            
            <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#A855F7] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="font-['Syne'] font-bold text-2xl text-[#A855F7] mb-2">Immediate</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] text-sm">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
