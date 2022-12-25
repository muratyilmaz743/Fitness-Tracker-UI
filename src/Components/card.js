import React from "react";
import "../css/card.css";
import CardItem from "./cardItem";
import image1 from "../assets/secure.jpg";
function Cards() {
  return (
    <div className="cards">
      <h2>Features</h2>
      <h1>What can you expect?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              label="Secure"
              path="/services"
              text="Secure"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
