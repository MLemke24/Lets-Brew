import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";
import logo from "../../images/icons/Logo/SVG/Logo.svg"

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <a href="/" className="brand-logo center">
            <h1 className="apptitle">
              <b>Lets </b>
              <span className="dot">
                <img
                  className="beans"
                  src={logo}
                  alt=""
                />
              </span>
              <b className="titlemargin"> Brew</b>
            </h1>
          </a>
        </Link>
        <ul id="nav-mobile" className="left">
          <li>
            <Link to = "/login" className="nav-link">Sign-In</Link>
          </li>
          <li>
            <Link to = "/signup" className="nav-link">Sign-Up</Link>
          </li>
        </ul>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="sass.html" className="nav-link">Get-Started</a>
          </li>
          <li>
            <a href="badges.html" className="nav-link">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
