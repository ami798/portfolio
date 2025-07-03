import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates'; // Import the Certificates component

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />  {/* Add the Certificates component here */}
    </div>
  );
}

export default App;
