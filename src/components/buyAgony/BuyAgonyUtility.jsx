import React from "react";
import "./BuyAgonyUtility.css";
import buyAgonyDemon from "../../images/buyAgonyDemon.webp";

function BuyAgonyUtility() {
  return (
    <section className="buyAgonyUtility">
      <div className="buyAgonyUtility__header">
        <h2>
          What is the <br />
          Utility of $AGONY?
        </h2>
      </div>

      <div className="buyAgonyUtility__list">
        <div className="buyAgonyUtility__item">
          <div className="buyAgonyUtility__itemImg">
            <img src={buyAgonyDemon} alt="Buy Agony Demon" />
          </div>

          <h5>
            PLATFORM ACCESS: $Agony may be used to play games, purchase
            equipment, or modify your Avatar character, and it can also be
            collected via gaming.
          </h5>
        </div>

        <div className="buyAgonyUtility__item">
          <div className="buyAgonyUtility__itemImg">
            <img src={buyAgonyDemon} alt="Buy Agony Demon" />
          </div>

          <h5>
            DAO: Voting powers may be delegated by $Agony owners to other
            players of their choosing, or they may vote themselves.
          </h5>
        </div>

        <div className="buyAgonyUtility__item">
          <div className="buyAgonyUtility__itemImg">
            <img src={buyAgonyDemon} alt="Buy Agony Demon" />
          </div>

          <h5>
            STAKING: You can stake $Agony and earn passive income since you gain
            additional $Agony by staking it.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default BuyAgonyUtility;
