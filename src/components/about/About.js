import { useState } from "react";
import "./about.css";

function About({ colour }) {
  const [size, setSize] = useState(1);
  return (
    <summary className="about-summary">
      <h2 className="sub-heading">About Me</h2>
      <section className="fields">
        <legend className="thin-para">Length:</legend>
        <div className="radio-field">
          <div className="radio-div">
            <input
              className="radio-btn"
              type="radio"
              name="shortest"
              id="shortest"
              checked={size === 0}
              onChange={() => {
                setSize(0);
              }}
            />
            <label for="shortest">.</label>
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
            <label for="short">.</label>
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
            <label for="medium">.</label>
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
            <label for="long">.</label>
          </div>
        </div>
        <div className="labels">
          <p className="thin-para">Short</p>
          <p className="thin-para">Long</p>
        </div>
      </section>

      {size === 0 && (
        <p>
          <span className={`${colour}`}>
            I am London based self-taught software developer
          </span>{" "}
          looking for my first graduate/junior role.
        </p>
      )}

      {size === 1 && (
        <summary>
          {" "}
          <p>
            <span className={`${colour}`}>
              I am London based self-taught software developer
            </span>{" "}
            looking for my first graduate/junior role.
          </p>{" "}
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
          {" "}
          <p>
            <span className={`${colour}`}>
              I am London based self-taught software developer
            </span>{" "}
            looking for my first graduate/junior role.
          </p>{" "}
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
          {" "}
          <p>
            <span className={`${colour}`}>
              I am London based self-taught software developer
            </span>{" "}
            looking for my first graduate/junior role.
          </p>{" "}
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
            I currently work as a{" "}
            <span className={`${colour}`}>Structural Engineer </span>and I have
            also started taking on freelance work for private clients that
            require <span className={`${colour}`}>fast bespoke websites.</span>
          </p>
        </summary>
      )}

      <h3 className="sub-heading">Education</h3>
      <h4>Certificates</h4>
      <p>
        Responsive Web Design - FreeCodeCamp -{" "}
        <span className={`${colour}`}>
          Approxiametly 300 hours of coursework
        </span>
      </p>
      <p>
        JavaScript Algorithms and Data Structures - FreeCodeCamp -{" "}
        <span className={`${colour}`}>
          Approxiametly 300 hours of coursework
        </span>
      </p>
      <p>
        JavaScript Essentials - <span className={`${colour}`}>LinkedIn</span>
      </p>
      <h4>Bachelors</h4>
      <p>
        City University London - BEng Civil Engineering -{" "}
        <span className={`${colour}`}> 1st Class Honours Degree</span>
      </p>
      <h4>Masters</h4>
      <p>
        City University London - MSc Civil Engineering Structures -{" "}
        <span className={`${colour}`}> Distinction</span>
      </p>
    </summary>
  );
}

export default About;
