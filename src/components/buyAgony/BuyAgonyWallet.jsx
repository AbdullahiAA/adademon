import React, { useState } from "react";
import "./BuyAgonyWallet.css";
import { FaRegClipboard } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import ClipboardJS from "clipboard";

function BuyAgonyWallet() {
  const [btnText, setBtnText] = useState("Copy Address");

  function copyAddrHandler(e) {
    var clipboardCopy = new ClipboardJS(".copyBtn");

    clipboardCopy.on("success", (e) => {
      clipboardCopy.destroy();

      setBtnText("Copied!");

      setTimeout(() => {
        setBtnText("Copy Address");
      }, 3000);

      e.clearSelection();
    });
  }

  return (
    <section className="buyAgonyWallet">
      <Zoom>
        <div className="buyAgonyWallet__box">
          <h3>Wallet Address</h3>

          <h5 id="walletAddr">
            addr1qystw73xy5t904zsr7nyyvyc9xrvav7vrexs9cwuxry7zaeqjy57qnwf7y5ngzec9mryr4m3xxy56xzuz3pdqyusatkspz7ryw
          </h5>

          <button
            className="copyBtn"
            data-clipboard-target="#walletAddr"
            onClick={copyAddrHandler}
          >
            <FaRegClipboard /> {btnText}
          </button>
        </div>
      </Zoom>
    </section>
  );
}

export default BuyAgonyWallet;
