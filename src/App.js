import { Box, transition, useColorMode } from '@chakra-ui/react';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/EducationAndExp';
import WorkProjects from './pages/Skills';




function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className='App'>
      <Header />
      <Hero colorMode={colorMode} />

      <About />

      <Projects />
      <WorkProjects />

    </div>
  );
}

export default App;
