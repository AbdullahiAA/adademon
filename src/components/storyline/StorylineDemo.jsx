import React, { useEffect, useState } from "react";
import "./StorylineDemo.css";
import demo1 from "../../images/storylineDemo1.webp";
import demo2 from "../../images/slider5.webp";
import Zoom from "react-reveal/Zoom";
import useDeviceWidth from "../hooks/useDeviceWidth";

function StorylineDemo() {
  const isDesktop = useDeviceWidth() > 550;

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  function handleMouseMove(e) {
    setOffsetX(e.clientX * 0.05);
    setOffsetY(e.clientY * 0.05);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="storylineDemo">
      <Zoom right>
        <img
          src={demo1}
          alt="Storyline Demo 1"
          style={{
            transform: isDesktop
              ? `perspective(1px) translate3d(${offsetX}px, ${offsetY}px, 0px) scale(1.4, 1.4)`
              : "",
          }}
        />
        <img
          src={demo2}
          alt="Storyline Demo 2"
          style={{
            transform: isDesktop
              ? `perspective(1px) translate3d(${offsetX}px, ${offsetY}px, 0px) scale(1.4, 1.4)`
              : "",
          }}
        />
      </Zoom>
    </section>
  );
}

export default StorylineDemo;
