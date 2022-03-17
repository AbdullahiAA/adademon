import React from "react";
import "./Underworld.css";
import demon from "../../images/underworldDemon.webp";
import fire from "../../images/fire.png.webp";

function Underworld() {
  return (
    <div className="underworld">
      <div className="underworld__demon">
        <img className="underworld__demonImg" src={demon} alt="Demon" />
        <img className="underworld__demonFire" src={fire} alt="Demon Fire" />
      </div>

      <div className="underworld__content">
        <h3>UNDERWORLD</h3>

        <p>
          It offers an economy owned by players where users may actually own,
          trade and sell the resources they acquire via skillful gaming and
          ecosystem participation.
        </p>

        <p>
          This Virtual-Underworld takes on a premise never before attempted in
          the history of the blockchain.
        </p>
      </div>
    </div>
  );
}

export default Underworld;
