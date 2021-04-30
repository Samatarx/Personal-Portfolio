import { AiFillGithub } from "react-icons/ai";
import { DiCss3, DiDatabase, DiHtml5 } from "react-icons/di";
import {
  SiJavascript,
  SiBootstrap,
  SiRedux,
  SiFirebase,
  SiCsharp,
  SiNetlify,
  SiDotNet,
  SiPython,
  SiGit,
  SiGatsby,
  SiMaterialUi,
  SiJest,
  SiUnity,SiNextDotJs
} from "react-icons/si";
import { FaReact, FaAws } from "react-icons/fa";
function TechStack({ colour }) {
 
  return (
    <summary className="tech-summary">
      <h2 className="sub-heading">Tech Stack</h2>
      <p className="tech-exp">
        I have experience with the following technologies:
      </p>
      <div className="tech-icons main-area">
        <div className="tech-icon">
          <DiHtml5 className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">HTML5</p>
        </div>
        <div className="tech-icon">
          <DiCss3 className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">CSS3</p>
        </div>
        <div className="tech-icon">
          <SiJavascript className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">JavaScript</p>
        </div>
        <div className="tech-icon">
          <FaReact className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">React</p>
        </div>
        <div className="tech-icon">
          <SiRedux className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Redux</p>
        </div>
        <div className="tech-icon">
          <SiBootstrap className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Bootstrap</p>
        </div>
        <div className="tech-icon">
          <SiMaterialUi className={`tech-icon-logo ${colour}`}/>
          <p className="tech-icon-name">Material-Ui</p>
        </div>
        <div className="tech-icon">
          <FaAws className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">AWS</p>
        </div>
        <div className="tech-icon">
          <SiFirebase className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Firebase</p>
        </div>
        <div className="tech-icon">
          <SiNetlify className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Netlify</p>
        </div>
        <div className="tech-icon">
          <SiGit className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Git</p>
        </div>
        <div className="tech-icon">
          <AiFillGithub className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Github</p>
        </div>
      </div>
      <p className="tech-future">
        Over the next few weeks and months I plan on learning the following
        technologies in order to build full stack applications and to gain a better
        understanding of test driven development (TDD).
      </p>

      <div className="tech-icons ">
        <div className="tech-icon">
          <SiJest className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Jest</p>
        </div>
        <div className="tech-icon">
          <SiGatsby className={`tech-icon-logo ${colour}`}/>
          <p className="tech-icon-name">Gatsby</p>
        </div>
        <div className="tech-icon">
          <SiCsharp className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">C#</p>
        </div>
        <div className="tech-icon">
          <SiDotNet className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">ASP.NET</p>
        </div>
        <div className="tech-icon">
          <DiDatabase className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">SQL</p>
        </div>
        <div className="tech-icon">
          <SiNextDotJs className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Next JS</p>
        </div>
      </div>
      <p className="tech-future">
        If I have time in the future I would like to try and build the
        following:
        <br /><br />A web scrapper with Python, AR/VR applications using Unity and
        Mobile apps with React Native
      </p>
      <div className="tech-icons">
        <div className="tech-icon">
          <SiPython className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Python</p>
        </div>
        <div className="tech-icon">
          <SiUnity className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">Unity</p>
        </div>
        <div className="tech-icon">
          <FaReact className={`tech-icon-logo ${colour}`} />
          <p className="tech-icon-name">React Native</p>
        </div>
      </div>
    </summary>
  );
}

export default TechStack;
