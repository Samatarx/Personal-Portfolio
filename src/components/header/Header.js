import { AiOutlineDown } from "react-icons/ai";

import { useSpring, animated } from "react-spring";
import ParticleComp from "./ParticleComp";
import { useState } from "react";
import useInterval from "react-useinterval";
import "./header.css";
import Links from "./Links";
import IconLinks from "./IconLink";

const titles = ["Developer", "Engineer", "JavaScript", "React", "Polymath"];

function Header({ colour, handleBackClick, pageRefs, logoSwitch }) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const props2 = useSpring({
    from: { opacity: 0, marginTop: "-1000px" },
    to: { opacity: 1, marginTop: "0px" },
    config: { duration: 1000 },
  });

  const [index, setIndex] = useState(0);
  const item = titles[index];
  const increment = () => setIndex((state) => (state + 1) % titles.length);
  useInterval(increment, 3000);

  return (
    <article
      ref={(el) => (pageRefs.current = { ...pageRefs.current, home: el })}
    >
      <animated.div
        style={props2}
        onClick={() => {
          logoSwitch();
        }}
        className={`logo ${colour}`}
      >
        SX
      </animated.div>
      <div className="heading-div">
        <h1 className={`${colour} small-heading`}>Hi there!</h1>
      </div>
      <animated.div style={props} className="centre">
        <h2 className="title">I'm Samatar Xasan</h2>
        <p className="strap-line">A Structural Engineer turned Web Developer</p>
        <p className={`${colour} title-roll`}>{item}</p>
        <div className="quick-links">
          <Links handleBackClick={handleBackClick} />
        </div>
        <IconLinks colour={colour} />
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
