import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProductSection from './components/ProductSection';
import ToolsSection from './components/ToolsSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-primary selection:bg-brand-green selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ProductSection />
        <ToolsSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
