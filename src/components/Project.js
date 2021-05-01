import { useState } from "react";
import {
  AiFillGithub,
  AiOutlineLink,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const Project = ({ name, image, github, url, tech, desc, colour}) => {
  const [show, setShow] = useState(false);

  const showAndHide = () => {
    setShow(!show);
  };
 
  return (
    <summary>

          <div className="project-card">
            <div className="project-title-wrapper">
              <div className="project-title-left">
                <p className="project-title">{name} - </p>
                <ul className="project-tech">
                  {tech.map((tec, idx) => {
                    return (
                      <li key={idx} className="project-tech-list">
                        {tec}
                      </li>
                    );
                  })}
                </ul>{" "}
              </div>

              {show ? (
                <AiOutlineMinus
                  onClick={() => {
                    showAndHide();
                  }}
                  className={`${colour}-bg project-button`}
                />
              ) : (
                <AiOutlinePlus
                  onClick={() => {
                    showAndHide();
                  }}
                  className={`${colour}-bg project-button`}
                />
              )}
            </div>
            {show && (
              <div>
                {/* <img src={images[0].img} alt={name} /> */}
                <p>{desc}</p>
                <div className={`card-links ${colour}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <AiOutlineLink />
                  </a>
                  <a href={github} target="_blank" rel="noreferrer">
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
