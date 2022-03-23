import React, { useEffect, useState } from "react";
import "./BuyAgonyPresale.css";
import Slide from "react-reveal/Slide";

function BuyAgonyPresale() {
  const [adaCount, setAdaCount] = useState(1);
  const [agonyPrice, setAgonyPrice] = useState(0);

  useEffect(() => {
    const defaultPrice = 527;

    setAgonyPrice(adaCount * defaultPrice);
  }, [adaCount]);

  return (
    <section className="buyAgonyPresale">
      <Slide left>
        <div className="buyAgonyPresale__howTo">
          <h2>How To Participate in $AGONY Presale?</h2>

          <p>
            $Agony is accessible to early bird investors that want to grab Agony
            at initial least price it can ever Go
          </p>

          <ol>
            <li>
              Purchase ADA on any cryptocurrency exchange, such as Binance, then
              transfer it to one of your Cardano native wallets, such as Yoroi,
              Adalite, or Daedulus.
            </li>
            <li>
              Go to the sale page for ADA Demon Seeds and{" "}
              <b>copy the Address</b>
            </li>
          </ol>
        </div>
      </Slide>

      <Slide right>
        <div className="buyAgonyPresale__middle">
          <div className="buyAgonyPresale__tokenSale">
            <h3>AGONY Token Sale</h3>

            <p>
              You can now purchase $AGONY in large numbers, this can be used in
              making purchases in the game and also be saved up as over time,
              the value of Agony will increase. As Presale holders, you get to
              be the first to enjoy this.
            </p>

            <hr />
          </div>

          <div className="buyAgonyPresale__calculatorForm">
            <h3>
              Calculator <hr />
            </h3>

            <div className="formGroup">
              <label htmlFor="ada">ADA</label>
              <input
                type="number"
                id="ada"
                value={adaCount}
                onChange={(e) => setAdaCount(e.target.value)}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="agony">AGONY</label>
              <input
                className="agonyInput"
                type="number"
                id="agony"
                value={agonyPrice}
                readOnly
              />
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default BuyAgonyPresale;
