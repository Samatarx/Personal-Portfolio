import { useState } from "react";
import PDF from "../../images/Samatar_Xasan_Resume.pdf";
import IconLinks from "../header/IconLink";
import "./contact.css";

const Contact = ({ colour, handleBackClick }) => {
  const [submit, setSubmit] = useState(false);

  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmission = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...state }),
    });
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <summary className="contact-summary">
      <h2 className="sub-heading">Get in Touch</h2>

      <p className="contact-desc">
        If you would like to <span className={`${colour}`}>hire me</span> or
        just want to say Hi, fill in the form below.
      </p>
      <div className="contact-form">
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
            <p>Message has been sent</p>
          </div>
        ) : (
          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            onSubmit={(e) => {
              onSubmission(e);
            }}
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <p>
              <label>
                <input
                  className={`${colour}-bg contact-label `}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
        )}
      </div>
      <div className="resume">
        Click here for a copy of my CV{" "}
        <a href={PDF} target="_blank" rel="noreferrer" aria-label="CV">
          <button className={`${colour}-bg download-btn`}>DOWNLOAD</button>
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
        <IconLinks colour={colour} phase={1} />
      </div>
      <p className="footer">
        Designed and Developed by{" "}
        <span
          onClick={() => {
            handleBackClick("home");
          }}
          className={`${colour} name-span`}
        >
          {" "}
          Samatar Xasan
        </span>
      </p>
    </summary>
  );
};

export default Contact;
