import React from "react";
import "./Roadmap.css";
import roadmap from "../images/roadmap.webp";

function Roadmap() {
  return (
    <section className="roadmap">
      <img src={roadmap} alt="Roadmap" />
    </section>
  );
}

export default Roadmap;
