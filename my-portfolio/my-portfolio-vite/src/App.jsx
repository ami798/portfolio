import Navbar from './components/Navbar'; // ✅ Navbar on top
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Footer at the bottom

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
      <Footer /> {/* ✅ Footer included */}
    </div>
  );
}

export default App;
