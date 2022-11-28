import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="landingPage">
          <div id="slogan">
            <ul>
              <li>
                <strong className="text-[#1746A2] mix-blend-luminosity">TRAIN SMARTER</strong>
              </li>
              <li>
                <strong className="text-[#5F9DF7] mix-blend-hue">ACHIEVE FASTER</strong>
              </li>
            </ul>

            <div id="buttons">
              <a
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border border-blue-700 hover:border-blue-500 rounded"
                href="login"
              >
                Login
              </a>
              <a
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                href="register"
              >
                Register
              </a>
            </div>
          </div>
        </div>
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
