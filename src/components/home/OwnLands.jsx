import React from "react";
import "./OwnLands.css";
import Slide from "react-reveal/Slide";

function OwnLands() {
  return (
    <section className="ownLands">
      <div className="ownLands__content">
        <Slide bottom>
          <h2>OWN LANDS</h2>

          <p>
            Using $Agony, the platform’s utility token, ADA Demon is creating a
            virtual environment where gamers can design, control, and sell their
            experiences.
          </p>

          <p>
            You may produce digital assets (also known as Non-Fungible Tokens,
            or NFTs) as a player, submit them to the marketplace, and then use
            The World Creator’s drag-and-drop functionality to construct new
            gaming worlds and scenarios.
          </p>
        </Slide>
      </div>
    </section>
  );
}

export default OwnLands;
