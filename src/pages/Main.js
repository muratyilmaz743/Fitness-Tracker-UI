import React from "react";
import HeroSection from "../Components/heroSection";
import Features from "../Components/features";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <Features />
      </>
    );
  }

  Register() {
    return <Route to="/register" />;
  }

  Login() {
    return <Link to="/login">Home</Link>;
  }
}
export default Main;
