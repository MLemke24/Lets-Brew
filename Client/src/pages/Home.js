import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Brews from "../components/Catalog";
const Home = () => {
  

  return (
    <main className="home">
        <div>
            <h1>GET STARTED</h1>
            <h3>CHOOSE YOUR METHOD</h3>
        </div>

        <div class="dial-wrapper">
      <div className="dial-items">
        <span className="item-1">French Press</span>
        <span className="item-2">Chemex</span>
        <span className="item-3">Aeropress</span>
        <span className="item-4">Bialetti</span>
        <span className="item-5">Hairo Vaccum</span>
        <div className="dial-arrow"></div>
      </div>
          <div>
            <Brews/>
          </div>
    </div>
  

      
    </main>
  );
};

export default Home;