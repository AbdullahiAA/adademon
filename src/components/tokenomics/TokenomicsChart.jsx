import React from "react";
import "./TokenomicsChart.css";
import tokenomicsChart from "../../images/tokenomicsChart.png";
import Zoom from "react-reveal/Zoom";

function TokenomicsChart() {
  return (
    <section className="tokenomicsChart overlay">
      <Zoom>
        <img src={tokenomicsChart} alt="Tokenomics Chart" />
      </Zoom>
    </section>
  );
}

export default TokenomicsChart;
