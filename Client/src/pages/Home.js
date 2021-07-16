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
      <div class="dial-items">
        <span class="item-1">French Press</span>
        <span class="item-2">Chemex</span>
        <span class="item-3">Aeropress</span>
        <span class="item-4">Bialetti</span>
        <span class="item-5">Hairo Vaccum</span>
        <div class="dial-arrow"></div>
      </div>
          <div>
            <Brews/>
          </div>
    </div>
  

      
    </main>
  );
};

export default Home;