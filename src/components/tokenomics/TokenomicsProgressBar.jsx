import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import "./TokenomicsProgressBar.css";
import Slide from "react-reveal/Slide";

function TokenomicsProgressBar({ title, value }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(value);
    }, 50);
  }, []);
  return (
    <div className="tokenomicsProgressBar">
      <Slide bottom>
        <div className="tokenomicsProgressBar__label">
          <h4>{title}</h4>
          <h4>{value}%</h4>
        </div>

        <LinearProgress variant="determinate" value={19} />
      </Slide>
    </div>
  );
}

export default TokenomicsProgressBar;
