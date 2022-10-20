
import { Box, useColorMode } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';




function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    // <div className='h-screen snap-y snap-mandatory overflow-scroll z-0'>
    <div>
      <Header />

      <section id="hero" className="snap-center">
        <Hero colorMode={colorMode} />
      </section>

      {/* about */}

      {/* experience  */}

      {/* skills */}


      {/* contact me */}

    </div>
  );
}

export default App;
