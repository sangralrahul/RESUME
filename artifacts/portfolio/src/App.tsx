import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnimatedBackground from "@/components/AnimatedBackground";
import AuroraBlobs from "@/components/AuroraBlobs";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
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
      <div style={{ background: '#0C0C17', color: '#D4D4D4', minHeight: '100vh', fontFamily: 'Inter, sans-serif', cursor: 'none', position: 'relative' }}>
        <AuroraBlobs />
        <AnimatedBackground />
        <CustomCursor />
        <ScrollProgress />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Navbar />
          <main>
            <Hero />
            <div className="divider" />
            <About />
            <div className="divider" />
            <Skills />
            <div className="divider" />
            <Ventures />
            <div className="divider" />
            <Projects />
            <div className="divider" />
            <Experience />
            <div className="divider" />
            <Certifications />
            <div className="divider" />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
