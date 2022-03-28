import LinearProgress from "@mui/material/LinearProgress";
import "./TokenomicsProgressBar.css";
import Slide from "react-reveal/Slide";

function TokenomicsProgressBar({ title, value }) {
  return (
    <div className="tokenomicsProgressBar">
      <Slide bottom>
        <div className="tokenomicsProgressBar__label">
          <h4>{title}</h4>
          <h4>{value}%</h4>
        </div>

        <LinearProgress variant="determinate" value={value} />
      </Slide>
    </div>
  );
}

export default TokenomicsProgressBar;
