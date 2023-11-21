import "../css/Contact.css";
// import "../css/Social.css"
import linkedin from "../svg/linkedin1.svg"
import twitter from "../svg/twitter1.svg"
import instagram from "../svg/instagram.svg"
import github from "../svg/github1.svg"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Loader.js'
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bwnknw5', 'template_5gaa79d', form.current, 'vwSrJ918OllPQ-NVX')
      .then((result) => {
          console.log(result.text);
          alert("form submitted");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <div classNmae="mymainpage">
    <div className="CPage">
        <div className="mysocial">
        <div className="social">
           <h1>Contact Information</h1>
           <p>Phone No:+91 9346574656<br/> Mail ID:ananyashenoy62@gmail.com <br/>
           </p>
           <div className="all">
            <a href="https://www.linkedin.com/in/ananya-k-7607b4228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><img src={linkedin} alt=""></img></a>
            <a href="https://github.com/ananyashenoy16"><img src={github} alt="" class="github1"></img></a>
             <img src={twitter} alt=""></img>
             <a href="https://instagram.com/anany_a16?igshid=YTQwZjQ0NmI0OA=="><img src={instagram} alt="" class="instagram"></img></a>
           </div>
        </div>
    </div>
        <div className="ct">
      <h1>Drop a Message! </h1>
      <div className="contact">
        <div class="cdiv">
        <form ref={form} onSubmit={sendEmail}>
          {/* https://formspree.io/f/mvojnweq */}
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
                
                <textarea name="msg"
                  placeholder="enter your Message here.."
                  rows="4"
                  cols="50"
                  required
                ></textarea>
              </label>
            </div>

            <button class="btn" value="submit" id="but">
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
