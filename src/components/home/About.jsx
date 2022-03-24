import React from "react";
import { FaNewspaper, FaMoneyBillWave } from "react-icons/fa";
import SocialLinks from "../global/SocialLinks";
import "./About.css";
import Flash from "react-reveal/Flash";
import whitepaper from "../../pdf/ada-demon-whitepaper.pdf";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about overlay">
      <Flash>
        <div className="about__header">
          <h1>ABOUT ADA DEMON</h1>
        </div>

        <div className="about__content">
          <p>
            ADA Demon is the first in-depth play-to-earn immersive
            metaverse-based ecosystem on the Cardano Blockchain themed on the
            Greek Underworld.
          </p>
          <p>
            This Virtual-Underworld takes on a premise never before attempted in
            the history of blockchain.
          </p>
          <p>
            Players on ADA Demon start off as estranged spirits and must venture
            out of the fields of Asphodel to battle monsters, beseech gods and
            escape this Greek version of Hell.
          </p>
          <p>
            In an effort to integrate blockchain into popular gaming, ADA Demon
            offers the benefits of genuine ownership, digital scarcity,
            monetization, and interoperability to both crypto and non-crypto
            game lovers.
          </p>
        </div>

        <div className="about__btns">
          <a href={whitepaper} className="button">
            <FaNewspaper /> Whitepaper
          </a>
          <Link to="/buy-$agony" className="button">
            <FaMoneyBillWave /> Buy $AGONY
          </Link>
        </div>

        <SocialLinks />
      </Flash>
    </section>
  );
}

export default About;
