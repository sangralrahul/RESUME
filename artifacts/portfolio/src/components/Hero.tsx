import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-screen flex items-center pt-20 relative overflow-hidden section-enter ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col space-y-6">
            <div className="inline-block">
              <span className="font-['JetBrains_Mono'] text-[#A855F7] text-sm">&lt;available for work /&gt;</span>
            </div>

            
            <h1 className="font-['Syne'] font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight">
              Rahul Sangral
            </h1>
            
            <h2 className="font-['Syne'] font-semibold text-xl sm:text-2xl text-[#EDEDED]">
              Data Analyst · AI Developer · Builder
            </h2>
            
            <p className="font-['Syne'] text-[#C084FC] text-lg">
              Founder — Clavix Technologies · Aethex · Cadus
            </p>
            
            <p className="font-['DM_Sans'] text-[#9CA3AF] text-base max-w-xl leading-relaxed">
              I turn messy data into decisions. I build AI tools that actually ship.
              I'm the founder of Clavix Technologies and building Aethex — an AI medical SaaS platform —
              and Cadus, an intelligent AI assistant for healthcare professionals.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                data-testid="btn-view-work"
                className="px-8 py-3 rounded-lg font-['DM_Sans'] font-medium text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="btn-download-resume"
                className="px-8 py-3 rounded-lg font-['DM_Sans'] font-medium text-[#7C3AED] border border-[#7C3AED] hover:bg-[rgba(124,58,237,0.1)] transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col space-y-6 items-end justify-center w-full">
            <div className="w-80 bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 hover:border-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all animate-float delay-0">
              <div className="font-['Syne'] font-bold text-3xl text-white">60% faster analysis</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] mt-2">AI Data Engine</div>
            </div>
            
            <div className="w-80 bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 hover:border-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all animate-float delay-400 mr-12">
              <div className="font-['Syne'] font-bold text-3xl text-white">40% fewer ad-hoc requests</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] mt-2">KPI Dashboard</div>
            </div>
            
            <div className="w-80 bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 hover:border-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all animate-float delay-800">
              <div className="font-['Syne'] font-bold text-3xl text-white">10+ hrs/week saved</div>
              <div className="font-['DM_Sans'] text-[#9CA3AF] mt-2">SND Technologies</div>
            </div>
          </div>
          
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            data-testid="scroll-arrow"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(124,58,237,0.25)] text-[#7C3AED] hover:bg-[rgba(124,58,237,0.1)] transition-all animate-bounce"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
}
