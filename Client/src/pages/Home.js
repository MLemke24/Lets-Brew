import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import mug from "../images/mug.svg"
import aeropress from "../images/icons/AeroPress/SVG/AeroPress.svg"
import bialetti from "../images/icons/Bialetti/SVG/Bialetti.svg"
import chemex from "../images/icons/Chemex/SVG/Chemex.svg"
import frenchpress from "../images/icons/French Press/SVG/French Press.svg"
import hairo from "../images/icons/Hairo Vaccum/SVG/Hairo Vaccum .svg"
import kettle from "../images/icons/Kettle/SVG/Kettle.svg"
import neldrip from "../images/icons/Nel-Drip/SVG/Nel Drip.svg"
import v60 from "../images/icons/V60/SVG/V60.svg"

import Brews from "../components/Catalog";

  


const Home = () => {
  return (
    <main className="home">

      <div>
        <h1>GET STARTED</h1>
        <h3>CHOOSE YOUR METHOD</h3>
      </div>


      
      <div class="container">
			<div className='menu'>
			  <input className='toggle' id='menu' type='checkbox'>
                </input>
			  <label className='style' for='menu'>
			  	<img className="wheelicon" alt="mug" src={mug}></img>
			  </label>
               
			  <a class='tab' href='#'>
              <img className="wheelselect" alt="aeropress"  src={aeropress}></img>
              <p className="icontext">Aeropress</p>
			  </a>
              
			  <a class='tab' href='#'>
              <img className="wheelselect" alt="bialetti"  src={bialetti}></img>
			  	<p className="icontext">Bialetti</p>
			  </a>
              
			  <a class='tab' href='#'>
              <img className="wheelselect" alt="chemex" src={chemex}></img>
			  	<p className="icontext">Chemex</p>
			  </a>

              <a class='tab' href='#'>
              <img className="wheelselect" alt="french" src={frenchpress}></img>
			  	<p className="icontext">French Press</p>
			  </a>
              
			  <a class='tab' href='#'>
              <img className="wheelselect" alt="hairo"  src={hairo}></img>
			  	<p className="icontext">Hairo Vaccum</p>
			  </a>

			  <a class='tab' href='#'>
              <img className="wheelselect" alt="kettle" src={kettle}></img>
			  	<p className="icontext">Kettle</p>
			  </a>

			  <a class='tab' href='#'>
              <img className="wheelselect" alt="drip" src={neldrip}></img>
			  	<p className="icontext">Nel-Drip</p>
			  </a>

              <a class='tab' href='#'>
              <img className="wheelselect" alt="v60"  src={v60}></img>
			  	<p className="icontext">V-60</p>
			  </a>
              
              
			</div>
		</div>


</main>
  );
};

export default Home;
