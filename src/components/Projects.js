import cec from "../Images/cec-clone.png";
import food from "../Images/food-menu.png";
import '../css/Projects.css';
import link from '../svg/link.png'
import play from '../Images/playlist.jpg'
function Projects(){
    return (
        <div id="courses">
        <div class="contain">
            <h1 class="sub-title">Projects</h1>
            <div class="card-list">
                <div class="card"  data-aos="flip-right">
                    <img src={cec } alt="" class="img"/>
                    <h2>CEC Website Clone</h2>
                    <div class="layer">
                        <h2>CEC Website Clone</h2>
                        <a href="https://college-website-gray.vercel.app/" target="_blank"><img src={link} alt=""></img></a>
                    </div>
                    </div>
                 <div class="card" data-aos="flip-right">
                 <img src={food} alt="" class="img"/>
                    <h2>Food-Menu</h2>
                    <div class="layer">
                        <h2>Food-Menu</h2>
                        <a href="https://larky-laces.000webhostapp.com/" target="_blank"><img src={link} alt=""></img></a>
                    </div>
    
                </div>
                <div class="card" data-aos="flip-right">
                <img src={play } alt="" class="img"/>
                    <h2>My Playlist</h2>
                    <div class="layer">
                        <h2>My Playlist</h2>
                        <a href="https://spotifyclone-pi-ecru.vercel.app/" target="_blank"><img src={link} alt=""></img></a>
                    </div>
    
                </div>
                {/* <div class="card"> <img src={pj } alt="" class="img"/>
                    <h2>Artificial Intelligence and Machine Learning</h2>
                    <div class="layer">
                        <h2>Artificial Intelligence and Machine Learning</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
                </div> */}
                {/* <div class="card">
                <img src={pj } alt="" class="img"/>
                    <h2>Computer Science and design</h2>
                    <div class="layer">
                        <h2>Computer Science and design</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
    
                </div>
                <div class="card">
                <img src={pj } alt="" class="img"/>
                    <h2>Computer Science and business Systems</h2>
                    <div class="layer">
                        <h2>Computer Science and business Systems</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
                </div>
                <div class="card">
                <img src={pj } alt="" class="img"/>
                    <h2>Mechanical Engineering</h2>
                    <div class="layer">
                        <h2>Mechanical Engineering</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
                </div> */}
    
           
        </div>
        {/* <div id="load-more" onclick="loadmore(this)">Load More</div> */}
     </div>
 </div>



    );
}
export default Projects;