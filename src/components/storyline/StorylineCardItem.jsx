import React, { useEffect, useRef } from "react";
import "./StorylineCardItem.css";
import VanillaTilt from "vanilla-tilt";

function StorylineCardItem({ num, title, content }) {
  const tiltElement = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltElement.current, { speed: 400 });
  }, []);

  // const [offsetX, setOffsetX] = useState(0);
  // const [offsetY, setOffsetY] = useState(0);

  // const screenW = window.screen.width;
  // const screenH = window.screen.height;

  // function handleMouseMove() {
  //   setOffsetX(window.event.clientX);
  //   setOffsetY(window.event.clientY);
  // }

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  // const skewPosX = (offsetX / screenW - 0.5) * 10;
  // const skewPosY = (offsetY / screenH - 0.5) * 10;

  return (
    <div
      className="storylineCardItem"
      ref={tiltElement}
      data-tilt
      data-tilt-reverse="true"
      data-tilt-full-page-listening
    >
      <h1 className="storylineCardItem__num">{num}</h1>

      <h3 className="storylineCardItem__title">{title}</h3>

      <div className="storylineCardItem__content">
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default StorylineCardItem;
