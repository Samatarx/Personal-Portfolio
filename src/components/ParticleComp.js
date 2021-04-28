import Particles from "react-particles-js";

function ParticleComp({colour}) {
    const particlesBackground = (colour) => {
        if (colour === "red") {
          return (
            <Particles
              className="particles-full"
              params={{
                particles: {
                  number: {
                    value: 20,
                  },
                  size: {
                    value: 3,
                  },
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#ffa3a3",
                      blur: 5,
                    },
                  },
                  color: {
                    value: "#ffa3a3",
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
                    value: 20,
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
                    value: 20,
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
       <>
             {particlesBackground(colour)}
       </>
    )
}

export default ParticleComp
