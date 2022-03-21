import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Bounce from "react-reveal/Bounce";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function closeMenu(e) {
      if (isMenu && !menuRef.current.contains(e.target)) {
        setIsMenu(false);
      }
    }

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  return (
    <header>
      <Bounce top spy={isMenu}>
        <nav
          className={`${isMenu ? "show" : ""}`}
          onClick={() => setIsMenu(false)}
        >
          <ul ref={menuRef}>
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
      </Bounce>

      <div
        className="header__toggle"
        onClick={() => setIsMenu((prevState) => !prevState)}
      >
        {isMenu === false ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
    </header>
  );
}

export default Header;
