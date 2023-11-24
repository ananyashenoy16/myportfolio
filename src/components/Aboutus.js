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
             I am Ananya Shenoy,a Passionate Full Stack Web Deveoloper.<br/>I am currently studying in 3rd Year
            Computer Science and Engineering.I believe that <span> 'You can
            achieve Everything with Hardwork'</span> , I have also done Projects Like Shopping App and College Website Clone using HTML, CSS , JavaScript , PHP ,mySql
            My hobbies are Digital illustration and Mandala Arts..</p>
           
            <div class="education" data-aos="zoom-out">
                <h1>Education</h1>
              <ul>
                <div class="e1" >
                <li type="square">Engineering
                 <p>I am studying CSE Department at Canara Engineering College, Benjanapadavu.  </p>
                 </li>
                 <button>Know More</button></div>
                 <div class="e1">
                 <li type="square" >PUC
                 <p>I have Completed my PUC at Viveka PU College,Kota</p>
                </li>
                <button>Know More</button></div>
                <div class="e1">
                 <li type="square">SSLC
                 <p>I have Completed my SSLC at Viveka High School,Kota </p>
                </li>
                <button>Know More</button></div>
               
              </ul>

            </div>
            </div>
       
      </div>
    </div>
  );
}
export default Aboutus;
