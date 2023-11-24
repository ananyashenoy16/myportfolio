import character from "../svg/mygif.jpg";
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
        <img src={character} alt="character" class="char"  data-aos="zoom-out" />
        <img src={m3} alt="char" class="m2" />
      </div>
      <div  data-aos="slide-right" class="header-text">
        <h1>
          Hello, I am <br />
          <span contenteditable="true">Ananya K</span>
        </h1>
        <a href="../Images/myCV.pdf" download="Ananya.pdf"><button class="cv">Download CV</button></a>
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
