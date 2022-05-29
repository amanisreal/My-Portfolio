
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Project/Projects';

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Aboutme/>
      <Skills/>
      
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
