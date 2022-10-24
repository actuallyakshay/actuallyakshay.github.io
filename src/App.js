import { Box, transition, useColorMode } from "@chakra-ui/react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/EducationAndExp";
import WorkProjects from "./pages/Skills";
import Backgroung from "./pages/Backgroung";
import Project from "./pages/Project";
import ContactMe from "./pages/ContactMe";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  
  return (
    <div
      className="App"
      style={{ backgroundColor: colorMode === "light" ? "#F5F5F5" : "#1a202c" }}
    >
      <Header />
      {/* <Hero colorMode={colorMode} /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Backgroung /> */}
      {/* <Project colorMode={colorMode} /> */}
      <ContactMe />
    </div>
  );
}
//hel

export default App;
