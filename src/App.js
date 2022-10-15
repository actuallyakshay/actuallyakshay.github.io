import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      {/* Header  */}
      <Header />

      {/* Hero */}

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* about */}

      {/* experience  */}

      {/* skills */}


      {/* contact me */}

    </div>
  );
}

export default App;
