import React from "react";

const ColouredDot = ({ id, quadSlice, posX, posY, name }) => {
  const quadColours = {
    "top-left": "blue",
    "top-right": "green",
    "bottom-left": "red",
    "bottom-right": "purple"
  };

  const dotDir = {
    "top-left": {right: posX, bottom: posY},
    "top-right": {left: posX, bottom: posY},
    "bottom-left": {right: posX, top: posY},
    "bottom-right": {left: posX, top: posY},
  };

  const handleMouseEnter = event => {
    const tooltipDots = document.querySelectorAll(".coloured-dot.highlight");

    // remove stuck tooltips
    if (tooltipDots) {
      for (const element of tooltipDots) {
        element.classList.remove("highlight");
      }
    }

    const listItem = document.querySelector(`.id-${id}.card`);
    listItem.classList.add("highlight");

    event.target.classList.add("highlight");

    // fade dots
    const dots = document.querySelectorAll(".coloured-dot:not(.highlight)");

    for (const dot of dots) {
      dot.classList.add("fade");
    }
  };

  const handleMouseLeave = event => {
    event.target.classList.remove("highlight");

    // un-fade dots
    const dots = document.querySelectorAll(".coloured-dot");

    for (const dot of dots) {
      dot.classList.remove("fade");
    }

    const listItem = document.querySelector(`.id-${id}.card`);
    listItem.classList.remove("highlight");
  };

  return (
    <div
      style={
        dotDir[quadSlice]
      }
      className={`coloured-dot ${quadColours[quadSlice]} id-${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="c-tooltip">
        <p className="value">{name}</p>
      </div>
      <p>{id}</p>
    </div>
  );
};

export default ColouredDot;
