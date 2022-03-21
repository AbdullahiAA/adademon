import React, { useEffect, useRef } from "react";
import "./GameFeatures.css";
import gameFeatures from "../../images/gameFeatures.webp";
import Slide from "react-reveal/Slide";
import Flash from "react-reveal/Flash";
import { useInView } from "react-intersection-observer";

function GameFeatures() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      // console.log(sectionRef.current.clientHeight);
      console.log(sectionRef.current.getBoundingClientRect());
      console.log(window.scrollY);
    }

    window.addEventListener("scroll", handleMouseMove);

    return () => window.removeEventListener("scroll", handleMouseMove);
  }, []);

  return (
    <section className="gameFeatures overlay" ref={sectionRef}>
      <div ref={ref} className="gameFeatures__content">
        <Slide bottom>
          <h2>BATTLE WITH IMMERSIVE GAME FEATURES</h2>

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
        </Slide>
      </div>

      <div className="gameFeatures__img">
        <Flash>
          <img src={gameFeatures} alt="Game Features" />
        </Flash>
      </div>
    </section>
  );
}

export default GameFeatures;
