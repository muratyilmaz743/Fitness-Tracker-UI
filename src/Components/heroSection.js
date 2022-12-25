import React from "react";
import "../index.css";
import { Button } from "./button";
import "../css/heroSection.css";
import main from "../assets/woman_exercise_home.png";
function HeroSection() {
  return (
    <div className="hero-container">
      <img src={main} className="asd" alt="dsfsdf"></img>
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h4>YOUR FITNESS TRACKER IS HERE</h4>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
