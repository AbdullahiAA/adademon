import React from "react";
import TokenomicsChart from "../components/tokenomics/TokenomicsChart";
import TokenomicsHero from "../components/tokenomics/TokenomicsHero";
import TokenomicsProgress from "../components/tokenomics/TokenomicsProgress";
import "./Tokenomics.css";

function Tokenomics() {
  return (
    <>
      <TokenomicsHero />

      {/* <TokenomicsProgress /> */}

      <TokenomicsChart />
    </>
  );
}

export default Tokenomics;
