import React from "react";
import { FaNewspaper, FaMoneyBillWave } from "react-icons/fa";
import whitepaper from "../../pdf/ada-demon-whitepaper.pdf";
import buyAgonyDemon from "../../images/buyAgonyDemon.webp";
import "./BuyAgonyHero.css";

function BuyAgonyHero() {
  return (
    <section className="buyAgonyHero">
      <div className="buyAgonyHero__content">
        <h1>Take Advantage of the Presale of $AGONY token!</h1>

        <div className="buyAgonyHero__btns">
          <button>
            <FaMoneyBillWave /> Buy Token
          </button>
          <a href={whitepaper} className="button">
            <FaNewspaper /> Whitepaper
          </a>
        </div>
      </div>

      <div className="buyAgonyHero__img">
        <img src={buyAgonyDemon} alt="Buy Agony Demon" />
      </div>
    </section>
  );
}

export default BuyAgonyHero;
