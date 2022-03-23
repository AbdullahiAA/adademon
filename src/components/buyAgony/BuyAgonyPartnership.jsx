import React from "react";
import "./BuyAgonyPartnership.css";
import { GoMail } from "react-icons/go";
import Zoom from "react-reveal/Zoom";

function BuyAgonyPartnership() {
  return (
    <section className="buyAgonyPartnership">
      <Zoom>
        <h2>PARTNERSHIP REQUEST</h2>

        <h3>Become a Partner</h3>

        <button>
          <GoMail /> Contact
        </button>
      </Zoom>
    </section>
  );
}

export default BuyAgonyPartnership;
