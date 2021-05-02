import cardData from "./cardData";
import Project from "./Project";
import React, { useState } from "react";


const Cards = ({ colour }) => {
  const [cards, setCards] = useState(cardData);

  return (
    <summary className="cards cards-summary">
      <h2 className="sub-heading-cards">Projects</h2>
      {cards.map((card) => {
        return <Project {...card} key={cards.id} colour={colour} />;
      })}
    
    </summary>
  );
};

export default Cards;
