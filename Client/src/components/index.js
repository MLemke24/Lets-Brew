import React from "react";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import logo from "../images/noun_coffee beans_306161.png"

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <a href="/" className="brand-logo center">
            <h1>
              <b>Lets </b>
              <span className="dot">
                <img
                  className="beans"
                  src={logo}
                  alt=""
                />
              </span>
              <b> Brew</b>
            </h1>
          </a>
        </Link>
        <ul id="nav-mobile" className="left">
          <li>
            <a href="sass.html">Sign-In</a>
          </li>
          <li>
            <a href="badges.html">Sign-Up</a>
          </li>
        </ul>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="sass.html">Get-Started</a>
          </li>
          <li>
            <a href="badges.html">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
