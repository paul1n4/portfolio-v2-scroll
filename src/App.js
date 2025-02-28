import './App.scss';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <div className='container'>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App;