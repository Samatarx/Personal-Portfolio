import cardData from "./cardData";
import Project from "./Project";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Cards = ({ colour }) => {
  const [cards] = useState(cardData);

  return (
    <summary className="cards cards-summary">
      <h2 className="sub-heading-cards">Projects</h2>
      {cards.map((card) => {
        return <Project {...card} key={uuidv4()} colour={colour} />;
      })}
    </summary>
  );
};

export default Cards;
