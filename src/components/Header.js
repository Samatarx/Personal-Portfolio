import { AiOutlineDown, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import PDF from "../images/Samatar_Xasan_Resume.pdf";
import { useSpring, animated } from "react-spring";
import ParticleComp from "./ParticleComp";
import { useState } from "react";
import useInterval from "react-useinterval"; 

const titles = ['Developer','Engineer', 'JavaScript', 'React' ,'Polymath'];


function Header({ colour, handleBackClick, pageRefs }) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1000}
  });

  const props2 = useSpring({
    from: { opacity: 0, marginTop:'-1000px' },
    to: { opacity: 1, marginTop:'0px' },
    config: {duration: 1000}
  });

  const [index, setIndex] = useState(0)
  const item = titles[index]
  const increment = () => setIndex(state => (state+1)% titles.length)
  useInterval(increment,3000)

  return (
    <article
      ref={(el) => (pageRefs.current = { ...pageRefs.current, home: el })}
    >
      <animated.div style={props2} className={`logo ${colour}`}>SX</animated.div>
      <div className="heading-div">
      <h1 className={`${colour} small-heading`}>
          Hi there!
        </h1>
        </div>
        <animated.div style={props} className="centre">
        
        <h2 className="title">I'm Samatar Xasan</h2>
        <p className='strap-line' >A Structural Engineer turned Web Developer</p>
        <p className={`${colour} title-roll`}>{item}</p>
        <div className="quick-links">
          <div className="quick-page-list">
          <span
              className="quick-link"
              onClick={() => {
                handleBackClick("about");
              }}
            >
              About
            </span>
            <span
              className="quick-link"
              onClick={() => {
                handleBackClick("projects");
              }}
            >
              Projects
              <div className="underline"></div>
            </span>
            <span
              className="quick-link"
              onClick={() => {
                handleBackClick("contact");
              }}
            >
              Contact
            </span>
            <span className="quick-link">
              <a href={PDF} target="_blank" rel="noreferrer" aria-label="CV">
                Resume
              </a>
            </span>
          </div>
        </div>
        <div className="quick-social">
          <a href="https://www.linkedin.com/in/samatarxasan/" target="blank" aria-label="LinkedIn">
            <AiFillLinkedin className={`${colour}`} />
          </a>
          <a href="https://github.com/samatarx" target="blank" aria-label="Github">
            <AiFillGithub className={`${colour}`} />
          </a>
        </div>
      </animated.div>
      <div className="down-icon">
        <AiOutlineDown
          onClick={() => {
            handleBackClick("about");
          }}
        />
      </div>
      <ParticleComp colour={colour} />
    </article>
  );
}

export default Header;
