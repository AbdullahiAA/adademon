import React from "react";
import StorylineCards from "../components/storyline/StorylineCards";
import StorylineDemo from "../components/storyline/StorylineDemo";
import "./Storyline.css";

function Storyline() {
  return (
    <>
      <section className="storyline overlay">
        <h1>STORYLINE</h1>

        <StorylineCards />
      </section>

      <StorylineDemo />
    </>
  );
}

export default Storyline;
