import React from "react";
import "./Footer.css";
import SocialLinks from "./SocialLinks";
import footerLogo from "../../images/footerLogo.webp";
import footerLeftImg from "../../images/slider3.webp";
import footerRightImg from "../../images/slider1.webp";

function Footer() {
  return (
    <footer>
      <div className="footer__left">
        <img src={footerLeftImg} alt="Demon" />
      </div>

      <div className="footer__content">
        <SocialLinks smallIcons />

        <div className="footer__logo">
          <img src={footerLogo} alt="ADA DEMON" />
        </div>

        <div className="footer__navs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Storyline</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Tokenomics</a>
            </li>
            <li>
              <a href="#">Buy $Agony</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__right">
        <img src={footerRightImg} alt="Demon" />
      </div>
    </footer>
  );
}

export default Footer;
