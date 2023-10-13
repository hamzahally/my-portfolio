import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Footer from './components/Footer';


const App = () => {
  return (
    <div id="app" className="App">
        <Header />
        <Body />
        <About />
        <Projects />
        <Skills />
        <Footer />
    </div>
  );
}

export default App;