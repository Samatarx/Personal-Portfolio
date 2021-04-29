function About({ colour }) {
  return (
    <summary>
      <h2 className="sub-heading">About Me</h2>
      <p className={`${colour}`}>
        I am London based self-taught software developer looking for my first
        graduate/junior role. I have specialised thus far in front end
        technologies and I am currently learning backend engineering.
      </p>
      <p className={`${colour}`}>
        I started learning how to code on the 10<sup>th</sup> of July 2020 at
        the start of the pandemic, initially as a hobby. I've enjoyed it so much
        that I have decided to pursue a career in web development.
      </p>
      <p className={`${colour}`}>
        I am confident in my ability to build appealing and user friendly web
        components with data fetched from APIs using React JS
      </p>
      <h3 className="sub-heading">Education</h3>
      <h4>Certificates</h4>
      <p className={`${colour}`}>
        Responsive Web Design - FreeCodeCamp - Approxiametly 300 hours of
        coursework
      </p>
      <p className={`${colour}`}>
        JavaScript Algorithms and Data Structures - FreeCodeCamp - Approxiametly
        300 hours of coursework
      </p>
      <h4>Bachelors</h4>
      <p className={`${colour}`}>
        City University London - BEng Civil Engineering - 1st Class Honours
        Degree
      </p>
      <h4>Masters</h4>
      <p className={`${colour}`}>
        City University London - MSc Civil Engineering Structures - Distinction
      </p>
    </summary>
  );
}

export default About;
