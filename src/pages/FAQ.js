import React, { useState } from "react";
import "./FAQ.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FaQuestionCircle, FaAngleDown } from "react-icons/fa";

function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="faq">
      <div className="faq__header">
        <h1>FAQ</h1>
        <h3>Frequently asked questions about ADA Demon</h3>
      </div>

      <div className="faq__list">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h5>
              <FaQuestionCircle />
              WHAT IS ADA DEMON?
            </h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              ADA Demon is the first in-depth, play-to-earn immersive
              metaverse-based ecosystem on the Cardano Blockchain based on the
              Greek Underworld.
            </p>
            <p>
              This Virtual-Underworld takes on a premise never before attempted
              in the history of the blockchain.
            </p>
            <p>
              ADA Demon succeeds by bringing gamers, myth lovers, and NFT
              enthusiast into one massive, fun, and interactive metaverse where
              magic, adventure, danger runs amok.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <h5>
              <FaQuestionCircle />
              WHAT MAKES ADA DEMON DIFFERENT?
            </h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Some features that a lot of metaverse-based projects severely lack
              are great storylines, fluid gameplay, and player adaptability.
            </p>
            <p>
              ADA Demon encompasses those features, paving the way for the next
              generation of Blockchain-based games on the Cardano network.
            </p>
            <p>
              This project simulates real-world principles such as property
              ownership (in form of NFTs), and social interactivity.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <h5>
              <FaQuestionCircle />
              WHAT IS $AGONY?
            </h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              $AGONY is the utility token used as a standard for evaluating game
              value as well as an exchange and purchase mechanism.
            </p>
            <p>
              $AGONY tokens are also fungible, which means they may be traded
              and moved freely throughout the network's many service chain and
              bridge chain participants.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <h5>
              <FaQuestionCircle />
              WHAT IS $AGONY UTILITY?
            </h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Inside ADA Demon, $AGONY is a critical component being worked on
              to ensure its inherent connection to the platform and its value.
            </p>
            <p>
              Using the Cardano network, $AGONY is a utility token that may be
              used in various ways in ADA Demon.
            </p>
            <p>
              To make $AGONY an integral platform component, we are focusing on
              creating essential mechanisms.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
