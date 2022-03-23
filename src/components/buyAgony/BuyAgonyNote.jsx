import React from "react";
import "./BuyAgonyNote.css";
import Slide from "react-reveal/Slide";

function BuyAgonyNote() {
  return (
    <section className="buyAgonyNote">
      <Slide bottom>
        <h2>Note</h2>

        <h5>
          Ensure that you provide the right quantity of ADA when purchasing
          AGONY tokens; this will ensure that you get your AGONY tokens
          automatically when the distribution begins.
        </h5>

        <h5>
          - AGONY tokens will be given to the participant's sending wallet
          address, or an equivalent.
        </h5>

        <h5>
          – Do not transmit your ADA from an exchange; do not transfer ADA
          straight to the seed address from Binance, Coinbase, or any other
          exchange wallet.
        </h5>
      </Slide>
    </section>
  );
}

export default BuyAgonyNote;
