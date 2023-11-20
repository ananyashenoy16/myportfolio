import "../css/Contact.css";
// import "../css/Social.css"
import linkedin from "../svg/linkedin1.svg"
import twitter from "../svg/twitter1.svg"
import instagram from "../svg/instagram.svg"
import github from "../svg/github1.svg"
function Contact() {
  return (
    <div classNmae="mymainpage">
    <div className="CPage">
        <div className="mysocial">
        <div className="social">
           <h1>Contact Information</h1>
           <p><br/>Phone No:+91 9346574656<br/> Mail ID:ananyashenoy62@gmail.com <br/>
           </p>
           <div className="all">
             <img src={linkedin} alt=""></img>
             <img src={github} alt="" class="github1"></img>
             <img src={twitter} alt=""></img>
             <img src={instagram} alt="" class="instagram"></img>
           </div>
        </div>
    </div>
        <div className="ct">
      <h1>Drop a Message! </h1>
      <div className="contact">
        <div class="cdiv">
          <form action="https://formspree.io/f/mvojnweq" method="POST">
            <div class="input-box">
              <label for="">
                <input type="text" placeholder="Name" name="name" required />
              </label>
            </div>
            <div class="input-box">
              <label for="">
                <input type="email" placeholder="email" name="email" required />
              </label>
            </div>
            <div class="input-box">
              <label for="">
                <input
                  type="phone number"
                  placeholder="Phone Number"
                  name="phno"
                  required
                />
              </label>
            </div>
            <div class="input-box">
              <label>
                
                <textarea
                  placeholder="enter your Message here.."
                  rows="4"
                  cols="50"
                  required
                ></textarea>
              </label>
            </div>

            <button class="btn" id="but">
              Send
            </button>
          </form>
          </div>
        </div>
      </div>
     
    </div>
     <div className="footer">
     <p> &#169; This Page is Owned by <span> Ananya K</span>| All Rights Reserved | </p>
   </div>
   </div>
  );
}
export default Contact;
