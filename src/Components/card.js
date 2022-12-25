import React from "react";
import "./css/card.css";
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
            {/* <CardItem
              src="images/img-4.jpg"
              //   
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              //   text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              //   text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              //   text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
