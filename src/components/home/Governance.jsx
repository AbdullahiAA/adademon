import React from "react";
import "./Governance.css";
import governanceDemon from "../../images/governanceDemon.webp";

function Governance() {
  return (
    <div className="governance overlay">
      <div className="governance__content">
        <div className="governance__header">
          <h2>GOVERNANCE</h2>
          <h4>Staking $AGONY provides holders with the following benefit</h4>
        </div>

        <div className="governance__body">
          <ol>
            <li>
              As an ADA Demon stakeholder, you will have the ability to make new
              governance ideas and vote on them. Your voting weight will be
              determined by the number of tokens you have staked. Only ADA Demon
              Ecosystem features are subject to $AGONY holders’ right to vote.
              That right does not confer any equity interest in any legal
              entity, their affiliates, or their assets, or the disposition of
              those assets to token holders. $AGONY holders cannot vote on the
              operation or management of any legal entity, affiliate, or asset.
              This arrangement intends no joint venture or partnership.
            </li>
            <li>
              Participate in governance suggestions and get rewards. Because
              community members will drive the development of the ADA Demon
              platform, token incentives will be issued to reimburse them for
              their time, skill, and effort. Only users who have submitted ideas
              commented on them, reviewed them, and voted will be eligible to
              obtain $AGONY token governance incentives.
            </li>
          </ol>
        </div>
      </div>

      <div className="governance__demon">
        <img src={governanceDemon} alt="Governance Demon" />
      </div>
    </div>
  );
}

export default Governance;
