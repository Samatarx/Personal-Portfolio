import { useState } from "react";
import "./about.css";
import Certificates from "./Certificates";
import Degree from "./Degree";
import Bio from "./Bio"

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
        </div>
        <div className="labels">
          <p className="thin-para">Short</p>
          <p className="thin-para">Long</p>
        </div>
      </section>

      <Bio colour={colour} size={size}/>

      <h3 className="sub-heading">Education</h3>
      <Certificates colour={colour} />
      <Degree colour={colour} />
    </summary>
  );
}

export default About;
