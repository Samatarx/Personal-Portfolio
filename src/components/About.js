function About({ colour }) {
  return (
    <summary className="about-summary">
      <h2 className="sub-heading">About Me</h2>
      <p>
        <span className={`${colour}`}>
          I am London based self-taught software developer 
        </span> looking for my first graduate/junior role. I have specialised thus far
        in <span className={`${colour}`}> front end technologies</span> and I am
        currently learning backend engineering.
      </p>
      <p>
        I started learning how to code on the 10<sup>th</sup> of July 2020 at
        the start of the pandemic, initially as a hobby. I've enjoyed it so much
        that I have decided to pursue a
        <span className={`${colour}`}> career in web development</span>.
      </p>
      <p>
        I am confident in my ability to build appealing and user friendly web
        components with data fetched from APIs using{" "}
        <span className={`${colour}`}>React JS</span>
      </p>
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
