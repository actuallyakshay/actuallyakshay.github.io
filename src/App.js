import { Box, transition, useColorMode } from '@chakra-ui/react';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';




function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className='App' style={{
      scrollSnapType: 'y mandatory', height: '100vh', overflowY: 'scroll'
    }}>

      <section id="hero" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
        <Header />
        <Hero colorMode={colorMode} />
      </section>

      {/* about */}
      <section>
        <About />
      </section>

      {/* experience  */}
      <section>
        <Projects />
      </section>

      {/* skills */}


      {/* contact me */}

    </div>
  );
}

export default App;
