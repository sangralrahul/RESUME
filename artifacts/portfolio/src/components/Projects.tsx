import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl">// projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col h-full hover:border-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all group">
            <div className="mb-4">
              <span className="inline-block bg-[rgba(124,58,237,0.15)] text-[#C084FC] text-xs font-['DM_Sans'] px-3 py-1 rounded-full">
                Personal Project · 2025–2026
              </span>
            </div>
            
            <h3 className="font-['Syne'] font-bold text-2xl text-white mb-4">AI Data Insights Engine</h3>
            
            <p className="font-['DM_Sans'] text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-grow">
              LLM-powered analytics tool that auto-ingests CSV/Excel datasets and generates business summaries, trend charts, and anomaly alerts — cut manual analysis time by 60%.
            </p>
            
            <div className="mb-6">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7]">60% faster analysis</div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["Claude API", "Python", "Streamlit", "Pandas"].map(tag => (
                <span key={tag} className="font-['JetBrains_Mono'] text-xs text-[#9CA3AF] bg-[#12121A] border border-[#4C1D95] rounded-md px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            
            <button 
              disabled
              data-testid="btn-project-1"
              className="w-full py-3 rounded-lg font-['DM_Sans'] font-medium text-[#9CA3AF] bg-[#12121A] border border-[rgba(124,58,237,0.25)] cursor-not-allowed"
            >
              View Project →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] rounded-2xl p-6 flex flex-col h-full hover:border-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all group">
            <div className="mb-4">
              <span className="inline-block bg-[rgba(124,58,237,0.15)] text-[#C084FC] text-xs font-['DM_Sans'] px-3 py-1 rounded-full">
                Personal Project · 2025
              </span>
            </div>
            
            <h3 className="font-['Syne'] font-bold text-2xl text-white mb-4">KPI Performance Dashboard</h3>
            
            <p className="font-['DM_Sans'] text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-grow">
              Full BI pipeline pulling live SQL data into Tableau with dynamic filters — reduced ad-hoc reporting requests by ~40% and cut report generation time significantly.
            </p>
            
            <div className="mb-6">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7]">40% fewer requests</div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["SQL", "Tableau", "Power BI", "Python"].map(tag => (
                <span key={tag} className="font-['JetBrains_Mono'] text-xs text-[#9CA3AF] bg-[#12121A] border border-[#4C1D95] rounded-md px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            
            <button 
              disabled
              data-testid="btn-project-2"
              className="w-full py-3 rounded-lg font-['DM_Sans'] font-medium text-[#9CA3AF] bg-[#12121A] border border-[rgba(124,58,237,0.25)] cursor-not-allowed"
            >
              View Project →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1A28] border border-[#A855F7] rounded-2xl p-6 flex flex-col h-full shadow-[0_0_30px_rgba(168,85,247,0.3)] relative group">
            <div className="absolute top-6 right-6">
              <span className="bg-[#10B981] text-white text-xs font-bold font-['DM_Sans'] px-2 py-1 rounded-full">
                🚀 Active
              </span>
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-[rgba(124,58,237,0.15)] text-[#C084FC] text-xs font-['DM_Sans'] px-3 py-1 rounded-full">
                Startup · 2025–2026
              </span>
            </div>
            
            <h3 className="font-['Syne'] font-bold text-2xl text-white mb-4 pr-16">Aethex Platform</h3>
            
            <p className="font-['DM_Sans'] text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-grow">
              Role-based analytics dashboards and REST API integrations for an AI medical platform targeting Indian doctors and students. Seed round: ₹2 Crore ask.
            </p>
            
            <div className="mb-6">
              <div className="font-['Syne'] font-bold text-3xl text-[#A855F7]">₹2Cr Seed Round</div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "FastAPI", "Claude API", "Docker", "AWS"].map(tag => (
                <span key={tag} className="font-['JetBrains_Mono'] text-xs text-[#9CA3AF] bg-[#12121A] border border-[#4C1D95] rounded-md px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href="https://aethex.in"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-project-aethex"
              className="block w-full py-3 text-center rounded-lg font-['DM_Sans'] font-medium text-white bg-[#7C3AED] hover:bg-[#A855F7] transition-all"
            >
              Visit Aethex →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
