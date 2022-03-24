import React from "react";
// import { FaNewspaper, FaMoneyBillWave } from "react-icons/fa";
// import whitepaper from "../../pdf/ada-demon-whitepaper.pdf";
import buyAgonyDemon from "../../images/buyAgonyDemon.webp";
import "./BuyAgonyHero.css";
import Flash from "react-reveal/Flash";

function BuyAgonyHero() {
  return (
    <section className="buyAgonyHero">
      <div className="buyAgonyHero__content">
        <Flash>
          <h1>Private seed sale will be coming soon</h1>
        </Flash>
        {/* <Flash>
          <h1>Take Advantage of the Presale of $AGONY token!</h1>

          <div className="buyAgonyHero__btns">
            <button>
              <FaMoneyBillWave /> Buy Token
            </button>
            <a href={whitepaper} className="button">
              <FaNewspaper /> Whitepaper
            </a>
          </div>
        </Flash> */}
      </div>

      <div className="buyAgonyHero__img">
        <Flash>
          <img src={buyAgonyDemon} alt="Buy Agony Demon" />
        </Flash>
      </div>
    </section>
  );
}

export default BuyAgonyHero;
