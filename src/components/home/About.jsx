import React from "react";
import { FaNewspaper, FaMoneyBillWave } from "react-icons/fa";
import SocialLinks from "../global/SocialLinks";
import "./About.css";

function About() {
  return (
    <div className="about overlay">
      <div className="about__header">
        <h1>ABOUT ADA DEMON</h1>
      </div>

      <div className="about__content">
        <p>
          ADA Demon is an immersive metaverse-based environment on the Cardano
          Blockchain themed on the Greek underworld. Players on ADA Demon start
          off as estranged spirits and must venture out of the fields of
          Asphodel to battle monsters, beseech gods and escape this Greek
          version of Hell.
        </p>
        <p>
          In an effort to integrate blockchain into popular gaming, ADA Demon
          offers the benefits of genuine ownership, digital scarcity,
          monetization, and interoperability to both crypto and non-crypto game
          lovers.
        </p>
      </div>

      <div className="about__btns">
        <button>
          <FaNewspaper /> Whitepaper
        </button>
        <button>
          <FaMoneyBillWave /> Buy $Agony
        </button>
      </div>

      <SocialLinks />
    </div>
  );
}

export default About;
