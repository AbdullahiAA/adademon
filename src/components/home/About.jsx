import React from "react";
import {
  FaNewspaper,
  FaMoneyBillWave,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaReddit,
  FaMedium,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__header">
        <h2>ABOUT ADA DEMON</h2>
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

      <div className="about__socials">
        <a href="https://t.me/ADA_DEMON">
          <FaTelegramPlane />
        </a>
        <a href="https://twitter.com/ADADEMON_?t=gPBFY7DCnGGBy2iWngw8dg&s=09">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/ada.dem0n?utm_medium=copy_link">
          <FaInstagram />
        </a>
        <a href="https://www.reddit.com/user/Ada_demon/">
          <FaReddit />
        </a>
        <a href="https://discord.gg/dmVcqaa86S">
          <FaDiscord />
        </a>
        <a href="https://medium.com/@ADADEMON">
          <FaMedium />
        </a>
        <a href="https://github.com/ADADEMON">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default About;
