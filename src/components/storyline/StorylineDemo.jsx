import React from "react";
import "./StorylineDemo.css";
import demo1 from "../../images/storylineDemo1.webp";
import demo2 from "../../images/slider5.webp";

function StorylineDemo() {
  return (
    <section className="storylineDemo">
      <img src={demo1} alt="Storyline Demo 1" />
      <img src={demo2} alt="Storyline Demo 2" />
    </section>
  );
}

export default StorylineDemo;
