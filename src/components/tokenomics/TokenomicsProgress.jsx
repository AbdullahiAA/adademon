import React from "react";
import "./TokenomicsProgress.css";
import TokenomicsProgressBar from "./TokenomicsProgressBar";

const progressItems = [
  {
    title: "Private Seed Sale (100% unlocked)",
    value: 10,
  },
  {
    title: "Presale (100% unlocked)",
    value: 8,
  },
  {
    title: "Development (5% unlocked quarterly over 7yrs)",
    value: 10,
  },
  {
    title: "Liquidity (Locked)",
    value: 30,
  },
  {
    title: "Marketing (5% quarterly unlock over 7years)",
    value: 10,
  },
  {
    title: "Security Audit (Locked)",
    value: 1,
  },
  {
    title: "Ecosystem Grants (Locked)",
    value: 12,
  },
  {
    title: "Staking Reward",
    value: 3,
  },
  {
    title: "Governance",
    value: 4,
  },
  {
    title: "Participation Reward",
    value: 2,
  },
  {
    title: "External Protocol Development",
    value: 11,
  },
];

function TokenomicsProgress() {
  return (
    <section className="tokenomicsProgress overlay">
      {progressItems.map((item, index) => (
        <TokenomicsProgressBar
          key={index}
          title={item.title}
          value={item.value}
        />
      ))}

      <h5>
        The chart above does not include the reduction in the Maximum supply of
        $AGONY due to the burn event.
      </h5>
    </section>
  );
}

export default TokenomicsProgress;
