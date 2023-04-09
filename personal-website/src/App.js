import logo from './logo.svg';
import './App.css';
import Intro from './Components/introduction/intro';
import About from './Components/About/about';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Hobbies from './Components/Hobbies/Hobbies';
import NavBar from './Components/NavBar/nav';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Hobbies></Hobbies>
    </div>
  );
}

export default App;
