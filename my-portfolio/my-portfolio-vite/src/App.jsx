import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume'; // ✅ Added for resume download

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Resume /> {/* ✅ Resume section */}
    </div>
  );
}

export default App;
