import React from "react";

import { Link, useHistory, useParams } from "react-router-dom";

import { FiHome, FiTrendingUp } from "react-icons/fi";
import "./Menu.css";

const Menu = () => {
  const params = useParams();
  const history = useHistory();

  return (
    <div className="menu">
      <Link to="/">
        <h1 className="logo-name">
          Your <span className="money">Money</span>
        </h1>
      </Link>
      <div className="menu-container">
        <ul>
          <Link to="/">
            <li
              className={`icons-container ${
                history.location.pathname === "/" ? "Page" : ""
              }`}
            >
              <FiHome className="icons" />
              <p className="icons-name">Home</p>
            </li>
          </Link>
          <Link to="/organize">
            <li
              className={`icons-container ${
                history.location.pathname === "/organize" ? "Organize" : ""
              }`}
            >
              <FiTrendingUp className="icons" />
              <p className="icons-name">Organize</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
