import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";
import logo from "../../images/icons/Logo/SVG/Logo.svg"
/// we need to add an "if logged in" for the logout button
import Auth from "../../utils/auth"

const Header = () => {

  const LoggedInNav = () => {
    if (Auth.loggedIn()) {
      <>
        <ul id="nav-mobile" className="left">
          <li>
            <a href="/" onClick={()=> Auth.logout()}>Logout</a>
          </li>
          <li>
            <Link to="/signup">Log-Out</Link>
          </li>
        </ul>
      </>
    } else {
      return (
        <>
        {Navigation()}
        </>
      )
    }
  }

  const Navigation = () => {
    return (
      <>
        <ul id="nav-mobile" className="left">
          <li>
            <Link to="/login">Sign-In</Link>
          </li>
          <li>
            <Link to="/signup">Sign-Up</Link>
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
      </>

    )
  }


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
              <b className="titlemargin"> Brew</b>
            </h1>
          </a>
        </Link>
        <>
          {LoggedInNav()}
        </>
      </div>
    </nav>
  );
};

export default Header;
