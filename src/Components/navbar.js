import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import "../css/navbar.css";
import mainLogo from "../assets/14-removebg-preview.png";
function Navbar() {
  const location = useLocation();

  var showButtons = location.pathname !== "/"

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/"><img src={mainLogo} alt="Fitness Tracker" width={190} /></a>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {showButtons === true &&
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/exercise"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/teacherList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trackers
              </Link>
            </li>
          </ul>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
