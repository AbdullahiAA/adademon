import React from "react";
import "./BuyAgonyPurchase.css";

function BuyAgonyPurchase() {
  return (
    <section className="buyAgonyPurchase">
      <div className="buyAgonyPurchase__minmax">
        <h3>Minimum Purchase 1,000 ADA</h3>

        <hr />

        <h3>Maximum Purchase 50,000 ADA</h3>
      </div>

      <div className="buyAgonyPurchase__price">
        <h3>PRICE</h3>

        <h5>$Agony = 0.0021 USDT</h5>

        <h5>ADA = 527 $Agony</h5>
      </div>
    </section>
  );
}

export default BuyAgonyPurchase;
