
import { techNow, techSoon, techFuture } from "./techArrays";

function TechStack({ colour }) {
  return (
    <summary className="tech-summary">
      <h2 className="sub-heading">Tech Stack</h2>
      <p className="tech-exp">
        I have experience with the following technologies:
      </p>
      <div className="tech-icons main-area">
        {techNow.map((tech) => {
          return (
            <div className="tech-icon">
              <tech.icon className={`tech-icon-logo ${colour}`} />
              <p className="tech-icon-name">{tech.name}</p>
            </div>
          );
        })}
      </div>
      <p className="tech-future">
        Over the next few weeks and months I plan on learning the following
        technologies in order to build full stack applications and to gain a
        better understanding of test driven development (TDD).
      </p>

      <div className="tech-icons ">
      {techSoon.map((tech) => {
          return (
            <div className="tech-icon">
              <tech.icon className={`tech-icon-logo ${colour}`} />
              <p className="tech-icon-name">{tech.name}</p>
            </div>
          );
        })}
      </div>
      <p className="tech-future">
        If I have time in the future I would like to try and build the
        following:
        <br />
        <br />A web scrapper with Python, AR/VR applications using Unity and
        Mobile apps with React Native
      </p>
      <div className="tech-icons">
      {techFuture.map((tech) => {
          return (
            <div className="tech-icon">
              <tech.icon className={`tech-icon-logo ${colour}`} />
              <p className="tech-icon-name">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </summary>
  );
}

export default TechStack;
