import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import PDF from "../../images/Samatar_Xasan_Resume.pdf";
import "./contact.css";

const Contact = ({ colour, handleBackClick }) => {
  const [submit, setSubmit] = useState(false);
  const onSubmission = (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log(e);
  };
  return (
    <summary className="contact-summary">
      <h2 className="sub-heading">Get in Touch</h2>

      <p className="contact-desc">
        If you would like to <span className={`${colour}`}>hire me</span> or
        just want to say Hi, fill in the form below.
      </p>
      <form
        name="contact-form"
        data-netlify="true"
        method="POST"
        onSubmit={(e) => onSubmission(e)}
      >
        {submit ? (
          <div className="success-form">
            <svg
              className={` ${colour}-bg ${colour} checkmark`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className={` ${colour}-bg ${colour}-stroke checkmark__circle`}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className={` ${colour} checkmark__check`}
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <p>Your message has been sent!</p>
          </div>
        ) : (
          <div className="contact-form">
            <input type="hidden" name="form-name" value="contact-form" />
            <p>
              <label>
                <input
                  className={`${colour}-bg contact-label `}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
            </p>
            <p>
              <label>
                <input
                  className={`${colour}-bg contact-label`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </label>
            </p>
            <p>
              <label>
                <textarea
                  className={`${colour}-bg contact-text`}
                  name="message"
                  placeholder="Message"
                  rows="5"
                  spellCheck="false"
                ></textarea>
              </label>
            </p>
            <div className="contact-btn-div">
              <button className={`${colour}-bg contact-btn`} type="submit">
                SEND
              </button>
            </div>
          </div>
        )}
      </form>
      <div className="resume">
        Click here for a copy of my CV{" "}
        <a href={PDF} target="_blank" rel="noreferrer" aria-label="CV">
          <button className={`${colour}-bg download-btn resume-btn`}>
            Download
          </button>
        </a>
      </div>
      <div className="contact-socials">
        <p className="contact-footer">
          Alternatively, you can get in touch with me via Social Media or send
          me an{" "}
          <span>
            {" "}
            <a
              href="mailto:samatarcodes@gmail.com"
              aria-label="Email"
              className={`${colour} quick-link`}
            >
              email
            </a>
          </span>
        </p>
        <div className="quick-social-contact">
          <a
            href="https://www.linkedin.com/in/samatarxasan/"
            target="blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className={`${colour}`} />
          </a>
          <a
            href="https://github.com/samatarx"
            target="blank"
            aria-label="Github"
          >
            <AiFillGithub className={`${colour}`} />
          </a>
          <a
            href="https://twitter.com/samatarcodes"
            target="blank"
            aria-label="Twitter"
          >
            <AiOutlineTwitter className={`${colour}`} />
          </a>
        </div>
      </div>
      <div className="footer">
        <p>
          Designed and Developed by{" "}
          <span
            onClick={() => {
              handleBackClick("home");
            }}
            className={`${colour} name-span quick-link`}
          >
            Samatar Xasan
          </span>
        </p>
      </div>
    </summary>
  );
};

export default Contact;
