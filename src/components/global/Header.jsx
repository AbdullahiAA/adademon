import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/storyline">Storyline</NavLink>
          </li>
          <li>
            <NavLink to="roadmap">Roadmap</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/tokenomics">Tokenomics</NavLink>
          </li>
          <li>
            <NavLink to="/buy-$agony">Buy $Agony</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
