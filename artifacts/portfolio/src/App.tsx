import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Ventures from "@/components/Ventures";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-[100dvh] w-full relative overflow-x-hidden" style={{ background: '#050508', color: '#EDEDED' }}>

        {/* Animated particle canvas */}
        <AnimatedBackground />

        {/* Aurora orbs */}
        <div className="fixed pointer-events-none overflow-hidden inset-0" style={{ zIndex: 0 }}>
          <div
            className="absolute animate-aurora"
            style={{
              top: '-20%',
              right: '-15%',
              width: '55%',
              height: '55%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(5,5,8,0) 70%)',
              filter: 'blur(70px)',
            }}
          />
          <div
            className="absolute animate-aurora2"
            style={{
              bottom: '10%',
              left: '-10%',
              width: '50%',
              height: '50%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(5,5,8,0) 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute"
            style={{
              top: '40%',
              left: '40%',
              width: '35%',
              height: '35%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, rgba(5,5,8,0) 70%)',
              filter: 'blur(90px)',
              animation: 'aurora 30s linear infinite reverse',
            }}
          />
        </div>

        <Navbar />
        
        <div className="relative flex flex-col" style={{ zIndex: 10 }}>
          <Hero />
          <About />
          <Skills />
          <Ventures />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </div>

        <Footer />
      </main>
    </QueryClientProvider>
  );
}

export default App;
