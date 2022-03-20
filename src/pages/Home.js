import React from "react";
import "./Home.css";
import HomeHero from "../components/home/HomeHero";
import About from "../components/home/About";
import Underworld from "../components/home/Underworld";
import OwnLands from "../components/home/OwnLands";
import GameFeatures from "../components/home/GameFeatures";
import PlayToEarn from "../components/home/PlayToEarn";
import Governance from "../components/home/Governance";
import ImgSlider from "../components/home/ImgSlider";

function Home() {
  return (
    <>
      <HomeHero />

      <About />

      <Underworld />

      <OwnLands />

      <GameFeatures />

      <PlayToEarn />

      <Governance />

      <ImgSlider />
    </>
  );
}

export default Home;
