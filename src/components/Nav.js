import {useEffect} from 'react'
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { useSpring, animated } from "react-spring";

const coloursArray = ["red", "yellow", "green"];

function Nav({ nav, colour, changeNav, changeColour, handleBackClick }) {
  const props = useSpring({
    from: { opacity: 0, marginTop:'-1000px' },
    to: { opacity: 1, marginTop:'0px' },
    config: {duration: 1500}
  });

  useEffect(() => {
    setInterval(()=>{changeNav(true)},15000)
  }, [nav])
 
  return (
    <animated.nav style={props} className="icon">
      {nav ? (
        <div onClick={() => changeNav(false)} className={`icon-m ${colour}-bg`}>
          <AiOutlineMenu  />
        </div>
      ) : (
        <div className="menu-wrapper">
          <div className="icon-x">
            <AiOutlineHome
              onClick={() => {
                handleBackClick("home");
              }}
            />
            <AiOutlineClose onClick={() => changeNav(true)} />
          </div>
          <div className="nav-drop ">
            <ul>
              <li className='nav-links'
                onClick={() => {
                  handleBackClick("about");
                }}
              >
                About
              </li>
              <li className='nav-links'
                onClick={() => {
                  handleBackClick("projects");
                }}
              >
                Projects
              </li>
              <li className='nav-links'
                onClick={() => {
                  handleBackClick("contact");
                }}
              >
                Contact
              </li>
              <li className="themes">Themes</li>
            </ul>
          </div>

          <div className="colours">
            {coloursArray.map((colour, idx) => {
              return (
                <div
                  key={idx}
                  className={`${colour}-bg ${colour}-btn`}
                  onClick={() => changeColour(colour)}
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </animated.nav>
  );
}

export default Nav;
