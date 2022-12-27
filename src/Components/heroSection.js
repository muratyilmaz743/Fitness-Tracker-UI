import React from "react";
import "../index.css";
import { Button } from "./button";
import "../css/heroSection.css";
import main from "../assets/woman_exercise_home.png";
function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <img src={main} className="asd" alt="dsfsdf"></img>

        <h4>YOUR FITNESS TRACKER IS HERE</h4>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            buttonLink="/register"
          >
            REGISTER
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            buttonLink="/login"
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
