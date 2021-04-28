import { AiOutlineDown, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Particles from "react-particles-js";

function Header({ colour, handleBackClick, pageRefs }) {
  const particlesBackground = (colour) => {
    if (colour === "red") {
      return (
        <Particles
          className="particles-full"
          params={{
            particles: {
              number: {
                value: 15,
              },
              size: {
                value: 3,
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#fc4445",
                  blur: 5,
                },
              },
              color: {
                value: "#fc4445",
              },
              move: {
                speed: 0.5,
              },
            },
          }}
        />
      );
    } else if (colour === "yellow") {
      return (
        <Particles
          className="particles-full"
          params={{
            particles: {
              number: {
                value: 15,
              },
              size: {
                value: 3,
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#fdca7f",
                  blur: 5,
                },
              },
              color: {
                value: "#fdca7f",
              },
              move: {
                speed: 0.5,
              },
            },
          }}
        />
      );
    } else if (colour === "green") {
      return (
        <Particles
          className="particles-full"
          params={{
            particles: {
              number: {
                value: 15,
              },
              size: {
                value: 3,
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#59e759",
                  blur: 5,
                },
              },
              color: {
                value: "#59e759",
              },
              move: {
                speed: 0.5,
              },
            },
          }}
        />
      );
    }
  };

  return (
    <article
      ref={(el) => (pageRefs.current = { ...pageRefs.current, home: el })}
    >
      <div className={`logo `} style={{ boxShadow: `3px 3px ${colour}` }}>
        SX
      </div>
      <div className="centre">
        <p>Hi there!</p>
        <h2>I'm Samatar Xasan</h2>
        <p className={`${colour}`}>Front end developer</p>
        <div className="social-icons-top">
          <a href="https://www.linkedin.com/in/samatarxasan/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/samatarx" target="blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="down-icon">
        <AiOutlineDown
          onClick={() => {
            handleBackClick("about");
          }}
        />
      </div>
      {particlesBackground(colour)}
    </article>
  );
}

export default Header;
