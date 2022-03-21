import React from "react";
import "./Footer.css";
import SocialLinks from "./SocialLinks";
import footerLogo from "../../images/footerLogo.webp";
import footerLeftImg from "../../images/slider3.webp";
import footerRightImg from "../../images/slider1.webp";
import { Link } from "react-router-dom";
import Flash from "react-reveal/Flash";

function Footer() {
  return (
    <footer>
      <div className="footer__left">
        <img src={footerLeftImg} alt="Demon" />
      </div>

      <div className="footer__content">
        <Flash>
          <SocialLinks smallIcons />
        </Flash>

        <div className="footer__logo">
          <img src={footerLogo} alt="ADA DEMON" />
        </div>

        <div className="footer__navs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/storyline">Storyline</Link>
            </li>
            <li>
              <Link to="roadmap">Roadmap</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/tokenomics">Tokenomics</Link>
            </li>
            <li>
              <Link to="/buy-$agony">Buy $Agony</Link>
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
