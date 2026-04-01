import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-32 relative section-enter ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6">
          <h2 className="font-['JetBrains_Mono'] text-[#A855F7] text-xl">// let's connect</h2>
        </div>

        <h3 className="font-['Syne'] font-bold text-4xl sm:text-5xl text-white mb-6">
          Open to Opportunities
        </h3>

        <p className="font-['DM_Sans'] text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-16">
          Whether it's a data role, AI project, collaboration, or just a great conversation — reach out.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-12">
          <a
            href="mailto:rahul.rishusangral@gmail.com"
            data-testid="link-email"
            className="w-full sm:w-auto bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all rounded-xl px-6 py-4 flex items-center justify-center space-x-3 text-white font-['DM_Sans'] group"
          >
            <SiGmail className="text-2xl text-[#EA4335] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>rahul.rishusangral@gmail.com</span>
          </a>

          <a
            href="tel:+919682394363"
            data-testid="link-phone"
            className="w-full sm:w-auto bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all rounded-xl px-6 py-4 flex items-center justify-center space-x-3 text-white font-['DM_Sans'] group"
          >
            <FaPhone className="text-xl text-[#22c55e] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>+91 9682394363</span>
          </a>

          <a
            href="https://linkedin.com/in/rahulsangral"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-linkedin"
            className="w-full sm:w-auto bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all rounded-xl px-6 py-4 flex items-center justify-center space-x-3 text-white font-['DM_Sans'] group"
          >
            <FaLinkedin className="text-2xl text-[#0A66C2] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>linkedin.com/in/rahulsangral</span>
          </a>

          <a
            href="https://github.com/sangralrahul"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github"
            className="w-full sm:w-auto bg-[#1A1A28] border border-[rgba(124,58,237,0.25)] hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all rounded-xl px-6 py-4 flex items-center justify-center space-x-3 text-white font-['DM_Sans'] group"
          >
            <FaGithub className="text-2xl text-white group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>github.com/sangralrahul</span>
          </a>
        </div>

        <p className="font-['DM_Sans'] text-[#9CA3AF] text-sm">
          Available immediately — Remote or On-Site 🇮🇳
        </p>
      </div>
    </section>
  );
}
