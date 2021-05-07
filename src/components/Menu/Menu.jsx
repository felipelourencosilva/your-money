import React from "react";

import {Link} from "react-router-dom";

import { FiHome, FiTrendingUp } from "react-icons/fi";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="logo-name">
        Your <span className="money">Money</span>
      </h1>
      <div className="menu-container">
        <ul>
          <Link to="/">
            <li className={`icons-container`}>
              <FiHome className="icons" />
              <p className="icons-name">Home</p>
            </li>
          </Link>
          <Link to="/organize">
            <li className={`icons-container`} >
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
