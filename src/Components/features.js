import React from "react";
import "../css/card.css";
import url1 from "../assets/selecticon.png";
import url2 from "../assets/exercise2.png";
import url3 from "../assets/calendar.png";
import url4 from "../assets/dietProgram.png";
import url5 from "../assets/progresss.png";
import url6 from "../assets/workoutPlan.png";
import Footer from "../Components/footer";
function Features() {
  return (
    <div>
      <div className="cards">
        <h1 className="baslık">JUMPSTART YOUR JOURNEY</h1>
        <br />
        <br />

        <div class="h-56 grid grid-cols-3 gap-4 content-around ...">
          <div className="features">
            <img src={url2} width={80} alt="exercise photo"></img>
            <br></br>
            You can exercise wherever and whenever you want.
          </div>
          <div className="features">
            <img src={url1} width={80} alt="Security photo"></img>
            <br></br>
            The ability to easily select the tracker you want
          </div>
          <div className="features">
            {" "}
            <img src={url3} width={90} alt="Security photo"></img>
            <br></br>
            It contains tools that you can follow your progress day by day
          </div>
        </div>

        <div class="h-56 grid grid-cols-3 gap-4 content-around ...">
          <div className="features">
            {" "}
            <img src={url4} width={80} alt="Security photo"></img>
            <br></br>
            You can follow your diet program prepared by experts.
          </div>
          <div className="features">
            {" "}
            <img src={url5} width={80} alt="Security photo"></img>
            <br></br>
            You will have the opportunity to see your progress concretely.
          </div>
          <div className="features">
            {" "}
            <img src={url6} width={80} alt="Security photo"></img>
            <br></br>
            Workout plan prepared by professionals
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Features;
