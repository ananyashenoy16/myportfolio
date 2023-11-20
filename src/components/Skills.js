import "../css/Skills.css";
import html from "../svg/html5.svg";
import css from "../svg/CSS.svg";
import js from "../svg/js.svg";
import bootstrap from "../svg/bootstrap.svg";
import react from "../svg/react.svg";
import php from "../svg/php.svg";
import mysql from "../svg/mysql.svg";
import c from "../svg/c.svg";
import cpp from "../svg/cpp.svg";
import py from "../svg/python.svg";
import java from "../svg/java.svg";
import git from "../svg/git.svg";
import github from "../svg/github1.svg";
import vscode from "../svg/vscode.svg";
import figma from "../svg/figma.svg";

function Skills() {
  return (
    <div class="myskills">
      <h1 class="head"> Skills</h1>
      <div class="skills">
        <div class="web">
          <div class="heading">
            <h1>Web Development</h1>
          </div>
          <div class="skm">
            <div class="sk">
              <img src={html} alt="" class="html"></img>
              <p>HTML5</p>
            </div>
            <div class="sk">
              <img src={css} alt="" class="css"></img>
              <p>CSS</p>
            </div>
            <div class="sk">
              <img src={js} alt="" class="js"></img>
              <p>JavaScript</p>
            </div>
            <div class="sk">
              <img src={bootstrap} alt="" class="bt"></img>
              <p>Bootstrap</p>
            </div>
            <div class="sk">
              <img src={react} alt="" class="react"></img>
              <p>React</p>
            </div>
            <div class="sk">
              <img src={php} alt="" class="php"></img>
              <p>php</p>
            </div>
            <div class="sk">
              <img src={mysql} alt="" class="mysql"></img>
              <p>mySql</p>
            </div>
          </div>
        </div>
        <div class="prgm">
          <div class="heading">
            <h1>Programming</h1>
          </div>
          <div class="skm">
            <div class="sk">
              <img src={c} alt="" class="mysql"></img>
              <p>C</p>
            </div>
            <div class="sk">
              <img src={cpp} alt="" class="mysql"></img>
              <p>C++</p>
            </div>
            <div class="sk">
              <img src={py} alt="" class="mysql"></img>
              <p>Python</p>
            </div>
            <div class="sk">
              <img src={java} alt="" class="mysql"></img>
              <p>Java</p>
            </div>
          </div>
        </div>
        <div class="tools">
          <div class="heading">
            <h1>Tools</h1>
          </div>
          <div class="skm">
            <div class="sk">
              <img src={git} alt="" class="mysql"></img>
              <p>git</p>
            </div>
            <div class="sk">
              <img src={github} alt="" class="github"></img>
              <p>Github</p>
            </div>
            <div class="sk">
              <img src={vscode} alt="" class="mysql"></img>
              <p>VS Code</p>
            </div>
            <div class="sk">
              <img src={figma} alt="" class="mysql"></img>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
