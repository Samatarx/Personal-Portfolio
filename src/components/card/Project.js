import { useState } from "react";
import {
  AiFillGithub,
  AiOutlineLink,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

const Project = ({
  id,
  name,
  image,
  github,
  url,
  tech,
  desc,
  figma,
  colour,
}) => {
  const [show, setShow] = useState(false);

  const showAndHide = () => {
    setShow(!show);
  };

  return (
    <summary key={id}>
      <div
        className="project-card"
        onClick={() => {
          showAndHide();
        }}
      >
        <div className="project-title-wrapper">
          <div className="project-title-left">
            <p className="project-title">{name}:</p>
            <ul className="project-tech">
              {tech.map((tec, idx) => {
                return (
                  <li key={idx} className="project-tech-list">
                    {tec}
                  </li>
                );
              })}
            </ul>
          </div>
          {show ? (
            <AiOutlineMinus
              data-testid="minus"
              onClick={() => {
                showAndHide();
              }}
              className={`${colour}-bg project-button`}
            />
          ) : (
            <AiOutlinePlus
              data-testid="plus"
              onClick={() => {
                showAndHide();
              }}
              className={`${colour}-bg project-button`}
            />
          )}
        </div>
        {show && (
          <div className="card-content">
            {image}
            <p className="card-desc">{desc}</p>
            <div className={`card-links ${colour}`}>
              {figma && (
                <a
                  href={figma}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Figma"
                >
                  <FiFigma />
                </a>
              )}
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label="Website link"
              >
                <AiOutlineLink />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        )}
      </div>
    </summary>
  );
};

export default Project;
