import myimage from "../Images/picture1.jpg";
import "../css/Aboutus.css";

function Aboutus() {
  return (
    <div id="about">
      <div class="row">
        <div class="about-col1" data-aos="fade-up-right" >
          <img src={myimage} alt="myimage" class="myph" />
        </div>
        <div class="about-col2" data-aos="zoom-in">
          <h1 class="subtitle">About Me</h1>
          <p>
            Hello World!<br/>
             I am Ananaya Shenoy,a Passionate Full Stack Web Deveoloper.<br/>I am currently studying in 3rd Year
            Computer Science and Engineering.I believe that <span> 'You can
            achieve Everything with Hardwork'</span> , I have also done Projects Like Shopping App and College Website Clone using HTML, CSS , JavaScript , PHP ,mySql.</p>
            My hobbies are Digital illustration and Mandala Arts.
            <div class="education">
                <h1>Education</h1>
              <ul>
                <li type="square">Computer Science and Engineering
                 <p>I am studying at Canara Engineering College, Benjanapadavu.  </p>
                 <li type="square">PUC
                 <p>I have Completed my PUC at Viveka PU College,Kota</p>
                </li>
                 <li type="square">SSLC
                 <p>I have Completed my SSLC at Viveka English Medium High School,Kota </p>
                </li>
                </li>
              </ul>

            </div>
         
        </div>
      </div>
    </div>
  );
}
export default Aboutus;
