import React from "react";
import "./PlayToEarn.css";
import playToEarnDemon from "../../images/playToEarnDemon.png";
import Slide from "react-reveal/Slide";

function PlayToEarn() {
  return (
    <section className="playToEarn overlay">
      <div className="playToEarn__content">
        <Slide bottom>
          <h2>PLAY TO EARN</h2>

          <p>
            The Play to Earn budget may be seen as a tool for promoting the
            ecosystem via marketing.
          </p>

          <p>
            It’s possible that the play to earn allotment will be raised when
            particular game modes and goods are ready for promotion.
          </p>

          <p>
            Players are essential to the success of a game. Even if they don’t
            win, members of the community are a valuable resource to the network
            and should be compensated accordingly. It’s straightforward, yet
            innovative all the same. Missionaries are needed as we transform the
            game industry for the better.
          </p>
        </Slide>
      </div>

      <div className="playToEarn__img">
        <img src={playToEarnDemon} alt="Play To Earn" />
      </div>
    </section>
  );
}

export default PlayToEarn;
