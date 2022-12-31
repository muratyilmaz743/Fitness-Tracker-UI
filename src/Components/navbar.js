import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/navbar.css";
import mainLogo from "../assets/14-removebg-preview.png";
import userIcon from "../assets/userIcom.png";
import { PostWithoutAuth } from "../services/HttpService";
import { ChangeTrackerActivity } from "../services/HttpService";
import { IsTracker, IsTrackerAvaliable } from "../services/userService";

function Navbar() {
  const location = useLocation();

  var showButtons = location.pathname !== "/";

  const [click, setClick] = useState(false);
  const userId = localStorage.getItem("currentUser");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = () => {
    const refreshToken = localStorage.getItem("refreshKey");

    PostWithoutAuth("/auth/refresh", {
      userId: userId,
      refreshToken: refreshToken,
    });
  };

  const changeTrackerActivty = () => {
    ChangeTrackerActivity(userId);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/exercise">
            <img src={mainLogo} alt="Fitness Tracker" width={190} />
          </a>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {showButtons && (
              <>
                <li className="nav-item">
                  <Link
                    to="/teacherList"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Trackers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/workoutTips"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Exercises
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/exercise"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Plan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/stats"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Statistics
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <button
                className="nav-links"
                style={{ color: "red" }}
                onClick={logout}
              >
                Logout
              </button>
            </li>
            <li className="nav-item userIcon">
              <a>
                <img src={userIcon} alt="Fitness Tracker" width={40} />
              </a>
            </li>
            {IsTracker && showButtons && (
              <li className="nav-item">
                <label className="switch">
                  <input id="avaSwitch" type="checkbox" defaultChecked={IsTrackerAvaliable} onClick={changeTrackerActivty} />
                  <span class="slider round"></span>
                </label>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
