import React from "react";
import "./GameFeatures.css";
import gameFeatures from "../../images/gameFeatures.webp";

function GameFeatures() {
  return (
    <div className="gameFeatures overlay">
      <div className="gameFeatures__content">
        <h3>BATTLE WITH IMMERSIVE GAME FEATURES</h3>

        <p>
          To progress through a game’s plot, the player may be required to
          complete tasks, defeat bosses, or defeat other players.
        </p>

        <p>
          By creating a vast, engaging, and participatory metaverse, ADA Demon
          succeeds in bringing together fantasy gamers, myth fans, and NFT
          enthusiasts.
        </p>

        <p>
          Players compete against one other in a number of ways in order to
          obtain top positions or acquire precious resources.
        </p>
      </div>

      <div className="gameFeatures__img">
        <img src={gameFeatures} alt="Game Features" />
      </div>
    </div>
  );
}

export default GameFeatures;
