import React from "react";
import "./StorylineCardItem.css";

function StorylineCardItem({ num, title, content }) {
  return (
    <div className="storylineCardItem">
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
