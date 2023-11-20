import character from "../Images/main.gif";
import "../css/Home.css";
import Aboutus from './Aboutus';
import Contact from "./Contact";
import Skills from './Skills';

import Projects from "./Projects";
import m3 from "../Images/girll.jpg";
function Home() {
  return (
    <div class="allcomp">
    
   
    <div class="home">
      <div class="photo">
        <img src={character} alt="character" class="char" />
        <img src={m3} alt="char" class="m2" />
      </div>
      <div class="header-text">
        <h1>
          Hello, I am <br />
          <span contenteditable="true">Ananya K</span>
        </h1>
        <button class="cv">Download CV</button>
      </div>
    </div>
    <Aboutus/>
    <Skills/>
    <Projects/>
    
    <Contact/>
    </div>
  );
}
export default Home;
