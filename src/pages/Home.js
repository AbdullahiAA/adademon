import React from "react";
import "./Home.css";
import HomeHero from "../components/home/HomeHero";
import About from "../components/home/About";
import Underworld from "../components/home/Underworld";
import OwnLands from "../components/home/OwnLands";
import GameFeatures from "../components/home/GameFeatures";
import PlayToEarn from "../components/home/PlayToEarn";
import Governance from "../components/home/Governance";
import Slider from "../components/home/Slider";

function Home() {
  return (
    <div>
      <HomeHero />

      <About />

      {/* StoryLine - Not here */}

      {/* ImageMoving - Not here */}

      <Underworld />

      <OwnLands />

      <GameFeatures />

      <PlayToEarn />

      <Governance />

      <Slider />

      {/* Tokenomics - Not here */}

      {/* ProgressBar - Not here */}
    </div>
  );
}

export default Home;
