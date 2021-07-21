import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";
import logo from "../../images/icons/Logo/SVG/Logo.svg"
/// we need to add an "if logged in" for the logout button
import Auth from "../../utils/auth"

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const LoggedInNav = () => {
    if (Auth.loggedIn()) {

      return (<>
        <ul id="nav-mobile" className="left">
          <li>
            <a href="/" className="nav-link" onClick={logout}>Logout</a>
          </li>
        </ul>

        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/notes" className="nav-link">Notes</Link>
          </li>
        </ul>
      </>)
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
      </>

    )
  }


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
        <LoggedInNav/>
      </div>
    </nav>
  );
};

export default Header;
