import { techNow, techSoon, techFuture } from "./techArrays";
import "./techStack.css";
import TechComp from "./TechComp";

function TechStack({ colour }) {
  return (
    <summary className="tech-summary">
      <h2 className="sub-heading">Tech Stack</h2>
      <p className="tech-exp">
        I have experience with the following technologies:
      </p>
      <TechComp colour={colour} data={techNow} />
      <p className="tech-future">
        Over the next few weeks and months I plan on learning the following
        technologies in order to build full stack applications and to gain a
        better understanding of test driven development (TDD).
      </p>

      <TechComp colour={colour} data={techSoon} />
      <p className="tech-future">
        If I have time in the future I would like to try and build the
        following:
        <br />
        <br />A web scrapper with Python, AR/VR applications using Unity and
        Mobile apps with React Native.
      </p>
      <TechComp colour={colour} data={techFuture} />
    </summary>
  );
}

export default TechStack;
