import { Component } from "react";
import HeroSection from "../Components/heroSection";
import Features from "../Components/features";
class Dashboard extends Component {
  render() {
    return (
      <>
        <div>
          <HeroSection />
          <Features />
        </div>
      </>
    );
  }
}

export default Dashboard;
