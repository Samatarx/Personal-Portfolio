import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import PDF from "../../images/Samatar_Xasan_Resume.pdf";
import "./contact.css";

const Contact = ({ colour, handleBackClick }) => {
  return (
    <summary className="contact-summary">
      <h2 className="sub-heading">Get in Touch</h2>

      <p className="contact-desc">
        If you would like to <span className={`${colour}`}>hire me</span> or
        just want to say Hi, fill in the form below.
      </p>

      <div className="contact-form">
        <form name="contact-form" method="POST" data-netlify="true">
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
        </form>
      </div>
      <div className="resume">
        Click here for a copy of my CV{" "}
        <a href={PDF} target="_blank" rel="noreferrer" aria-label="CV">
          <button className={`${colour}-bg contact-btn resume-btn`}>
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
      <p className="footer">
        Designed and Developed by{" "}
        <span
          onClick={() => {
            handleBackClick("home");
          }}
          className={`${colour} name-span`}
        >
          Samatar Xasan
        </span>
      </p>
    </summary>
  );
};

export default Contact;
