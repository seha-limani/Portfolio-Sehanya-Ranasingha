import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BackgroundOrbs from "./components/common/BackgroundOrbs";
import ParticleBackground from "./components/common/ParticleBackground";
import Stats from "./components/sections/Stats";
import ScrollToTop from "./components/common/ScrollToTop";
import SmoothScroll from "./components/common/SmoothScroll";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-x-hidden">
        <ParticleBackground />
        <BackgroundOrbs />
        <div className="relative z-10">
          <Navbar />

          <main className="w-full">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
