import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/profile">
          <a href="/" class="brand-logo center">
            <h4>
              Lets
              <span class="dot">
                <img
                  class="beans"
                  src="Client\src\images\noun_coffee beans_306161.png"
                  alt=""
                />
              </span>
              Brew
            </h4>
          </a>
        </Link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Sign-In</a>
          </li>
          <li>
            <a href="badges.html">Sign-Up</a>
          </li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
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
