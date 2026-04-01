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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-bg-primary min-h-[100dvh] w-full text-text-primary relative font-sans overflow-x-hidden">
        {/* Background Mesh */}
        <div 
          className="fixed top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, rgba(10,10,15,0) 70%)',
            opacity: 0.15,
            filter: 'blur(60px)'
          }}
        />

        <Navbar />
        
        <div className="relative z-10 flex flex-col">
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
