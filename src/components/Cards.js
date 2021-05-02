import cardData from "./cardData";
import Project from "./Project";
import React, { useState } from "react";
import images from "../images";

const Cards = ({ colour }) => {
  const [cards, setCards] = useState(cardData);

  return (
    <summary className="cards cards-summary">
      <h2 className="sub-heading-cards">Projects</h2>
      {cards.map((card) => {
        return <Project {...card} key={cards.id} colour={colour} />;
      })}
      {images.map((image) => {
        return <div className="div" key={image.id} >
        <img key={image.id} src={image.img} alt="" width="200px" /></div>;
      })}
    </summary>
  );
};

export default Cards;
