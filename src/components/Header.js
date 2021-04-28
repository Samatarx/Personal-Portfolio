import { AiOutlineDown, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import PDF from "../images/Samatar_Xasan_Resume.pdf";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import ParticleComp from "./ParticleComp";

function Header({ colour, handleBackClick, pageRefs }) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });
  const props2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const [appear, setAppear] = useState(true);

  return (
    <article
      ref={(el) => (pageRefs.current = { ...pageRefs.current, home: el })}
    >
      <div className={`logo ${colour}-bg`}>SX</div>
      <animated.div style={props} className="centre">
        <p className={`${colour}`}>Hi there!</p>
        <h1 className="title">I'm Samatar Xasan</h1>
        <p className={`${colour}`}>Front end developer</p>
        <div className="quick-links">
          <animated.div style={props2} className="quick-page-list">
            <animated.span style={props2} className="quick-link">
              <a href={PDF} target="_blank">
                Resume
              </a>
            </animated.span>
            <span className="quick-link"
              onClick={() => {
                handleBackClick("projects");
              }}
            >
              Projects
              <div className='underline'></div>
            </span>
            <span className="quick-link"
              onClick={() => {
                handleBackClick("contact");
              }}
            >
              Contact Me
            </span>
          </animated.div>
        </div>
        <div className="quick-social">
          <a href="https://www.linkedin.com/in/samatarxasan/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/samatarx" target="blank">
            <AiFillGithub />
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
