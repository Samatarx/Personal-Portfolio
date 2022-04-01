import { useState } from "react";
import "./about.css";
import Certificates from "./Certificates";
import Degree from "./Degree";

function About({ colour }) {
  const [size, setSize] = useState(1);
  return (
    <summary data-testid="container" className="about-summary">
      <h2 className="sub-heading">About Me</h2>
      <section className="fields">
        <legend className="thin-para">Length:</legend>
        <div className="radio-field">
          <div className="radio-div">
            <input
              data-testid="zero-btn"
              className="radio-btn"
              type="radio"
              name="shortest"
              id="shortest"
              checked={size === 0}
              onChange={() => {
                setSize(0);
              }}
            />
            <label htmlFor="shortest">.</label>
          </div>
          <div className="radio-div">
            <input
              className="radio-btn"
              type="radio"
              name="short"
              id="short"
              checked={size === 1}
              onChange={() => {
                setSize(1);
              }}
            />
            <label htmlFor="short">.</label>
          </div>
          <div className="radio-div">
            <input
              className="radio-btn"
              type="radio"
              name="medium"
              id="medium"
              checked={size === 2}
              onChange={() => {
                setSize(2);
              }}
            />
            <label htmlFor="medium">.</label>
          </div>
          <div className="radio-div">
            <input
              className={` ${colour}-radio radio-btn`}
              type="radio"
              name="long"
              id="long"
              checked={size === 3}
              onChange={() => {
                setSize(3);
              }}
            />
            <label htmlFor="long">.</label>
          </div>
        </div>
        <div className="labels">
          <p className="thin-para">Short</p>
          <p className="thin-para">Long</p>
        </div>
      </section>

      {size === 0 && (
        <p>
          I am a London based{" "}
          <span className={`${colour}`}>Frontend Developer</span>
        </p>
      )}

      {size === 1 && (
        <summary>
          <p>
            I am a London based{" "}
            <span className={`${colour}`}>Frontend Developer</span>
          </p>
          <p>
            {" "}
            I have specialised thus far in{" "}
            <span className={`${colour}`}> front end technologies</span> and I
            am currently learning backend engineering.
          </p>
        </summary>
      )}
      {size === 2 && (
        <summary>
          <p>
            I am a London based{" "}
            <span className={`${colour}`}>Frontend Developer</span>
          </p>
          <p>
            {" "}
            I have specialised thus far in{" "}
            <span className={`${colour}`}> front end technologies</span> and I
            am currently learning backend engineering.
          </p>
          <p>
            I started<span className={`${colour}`}> learning </span>how to code
            on the 10<sup>th</sup> of July 2020 at the start of the pandemic,
            initially as a hobby. I've enjoyed it so much that I have decided to
            pursue a
            <span className={`${colour}`}> career in web development</span>.
          </p>
        </summary>
      )}
      {size === 3 && (
        <summary>
          <p>
            I am a London based{" "}
            <span className={`${colour}`}>Frontend Developer</span>
          </p>
          <p>
            {" "}
            I have specialised thus far in{" "}
            <span className={`${colour}`}> front end technologies</span> like
            React and I am currently learning backend engineering.
          </p>
          <p>
            I started<span className={`${colour}`}> learning </span>how to code
            on the 10<sup>th</sup> of July 2020 at the start of the pandemic,
            initially as a hobby. I've enjoyed it so much that I have decided to
            pursue a
            <span className={`${colour}`}> career in web development</span>.
          </p>
          <p>
            I use to work as a{" "}
            <span className={`${colour}`}>Structural Engineer </span>and I have
            also started taking on freelance work for private clients that
            require <span className={`${colour}`}>fast bespoke websites.</span>
          </p>
        </summary>
      )}

      <h3 className="sub-heading">Education</h3>
      <Certificates colour={colour} />
      <Degree colour={colour} />
    </summary>
  );
}

export default About;
