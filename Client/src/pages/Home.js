import React from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import mug from "../images/mug.svg";
import brews from "../db/tempdb";

const Home = () => {
  return (
    <main className="home">
      <div className="introcontainer">
        <h1 className="intro intro2">GET STARTED</h1>
        <h3 className="intro">CHOOSE YOUR METHOD</h3>
      </div>
      <div className="wheel-align container">
        <div className="menu">
          <input className="toggle" id="menu" type="checkbox"></input>
          <label className="style" for="menu">
            <img className="wheelicon" alt="mug" src={mug}></img>
          </label>
          {brews.map((brew) => {
            return (
              <>
                <Link to={`/instructions/${brew.name}`} class="tab" href="#">
                  <img
                    className="wheelselect"
                    alt={brew.name}
                    src={brew.image}
                  ></img>
                  <p className="icontext">{brew.name}</p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
