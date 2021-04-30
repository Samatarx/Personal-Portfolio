import cardData from "./cardData";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import images from '../images'

const Cards = ({ colour }) => {
  return (
    <summary className="cards cards-summary">
      <h2 className="sub-heading-cards">Projects</h2>
      {cardData.map((card, idx) => {
        const { id, name, image, github, url, tech, desc } = card;
        return (
          <div className="project-card" key={idx}>
            <p className="project-title">{name}</p>
            {/* <p>{desc}</p> */}
            <img src={images[0].img} alt={name}/>
            <ul className="project-tech">
              {tech.map((tec) => {
                return <li className="project-tech-list">{tec}</li>;
              })}
            </ul>
            <div className={`card-links ${colour}`}>
              <a href={url} target="_blank" rel="noreferrer">
                <AiOutlineLink />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </div>
          </div>
        );
      })}
    </summary>
  );
};

export default Cards;
