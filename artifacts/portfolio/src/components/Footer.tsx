export default function Footer() {
  return (
    <footer className="bg-[#12121A] border-t border-[rgba(124,58,237,0.25)] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="text-center md:text-left text-[#9CA3AF] font-['DM_Sans'] text-sm">
            © 2026 Rahul Sangral · Clavix Technologies Pvt. Ltd.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://aethex.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#A855F7] font-['DM_Sans'] text-sm transition-colors"
            >
              aethex.in
            </a>
            <a 
              href="https://clavix.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#A855F7] font-['DM_Sans'] text-sm transition-colors"
            >
              clavix.in
            </a>
          </div>
          
          <div className="text-center md:text-right text-[#9CA3AF] font-['DM_Sans'] text-sm">
            Built with React · Designed with purpose
          </div>
          
        </div>
      </div>
    </footer>
  );
}
