import { useState, useEffect } from 'react';
import './App.css';
import Intro from './Components/introduction/intro';
import About from './Components/About/about';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Hobbies from './Components/Hobbies/Hobbies';
import NavBar from './Components/NavBar/nav';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const home = document.getElementById('Home').getBoundingClientRect();
    const about = document.getElementById('About').getBoundingClientRect();
    const education = document.getElementById('Education').getBoundingClientRect();
    const experience = document.getElementById('Experience').getBoundingClientRect();
    const projects = document.getElementById('Projects').getBoundingClientRect();
    const hobbies = document.getElementById('Hobbies').getBoundingClientRect();

    if (home.top >= 0 && home.bottom <= window.innerHeight) {
      setActiveSection('Home');
    } else if (about.top >= 0 && about.bottom <= window.innerHeight) {
      setActiveSection('About');
    } else if (education.top >= 0 && education.bottom <= window.innerHeight) {
      setActiveSection('Education');
    } else if (experience.top >= 0 && experience.bottom <= window.innerHeight) {
      setActiveSection('Experience');
    } else if (projects.top >= 0 && projects.bottom <= window.innerHeight) {
      setActiveSection('Projects');
    } else if (hobbies.top >= 0 && hobbies.bottom <= window.innerHeight) {
      setActiveSection('Hobbies');
    }
  };

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
      <div id="Home">
        <Intro />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Hobbies">
        <Hobbies />
      </div>
    </div>
  );
}

export default App;

