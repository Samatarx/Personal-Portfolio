import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import PDF from "../images/Samatar_Xasan_Resume.pdf";

const Contact = ({ colour, handleBackClick }) => {
  const labels = document.querySelectorAll(".form-control label");

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style='transition-delay:${idx * 100}ms'>${letter}</span>`
      )
      .join("");
  });
  return (
    <summary className="contact-summary">
      <h2 className="sub-heading">Get in Touch</h2>

      <p className="contact-desc">
        If you are want to hire me or require help with a project fill in the
        form below, or ping me an email
      </p>

      <form name="contact-form" method="POST" data-netlify="true">
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
              minLength="30"
              rows="5"
              spellCheck="false"
            ></textarea>
          </label>
        </p>
        <div className="contact-btn-div">
          <button className={`${colour}-bg contact-btn`} type="submit">
            Send
          </button>
        </div>
      </form>

      <div className="resume">
        Click here for a copy of my{" "}
        <span className={`${colour} quick-link`}>
          <a href={PDF} target="_blank" rel="noreferrer">
            CV
          </a>
        </span>
      </div>
      <div className="contact-socials">
        <p className="sad">
          Alternatively, you can get in touch with me via Social Media
        </p>
        <div className="quick-social-contact">
          <a href="https://www.linkedin.com/in/samatarxasan/" target="blank">
            <AiFillLinkedin className={`${colour}`} />
          </a>
          <a href="https://github.com/samatarx" target="blank">
            <AiFillGithub className={`${colour}`} />
          </a>
          <a href="https://twitter.com/samatarcodes" target="blank">
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
