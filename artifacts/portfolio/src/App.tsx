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
      <div style={{ background: '#0F0F0F', color: '#FAFAFA', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
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
    </QueryClientProvider>
  );
}

export default App;
