import React from "react";
import RadarSubHeadings from "../radar-sub-headings/radar-sub-headings.component.jsx";

const RadarQuad = ({ quadSlice }) => {
  quadSlice = quadSlice ? quadSlice : "top-left";

  const isTop = quadSlice === "top-left" || quadSlice === "top-right";
  const isBottom = quadSlice === "bottom-left" || quadSlice === "bottom-right";

  return (
    <div className="radar-quad-container">
      <div className={`radar-quad ${quadSlice}`}>
        {
          isTop && (
            <RadarSubHeadings top quadSlice={quadSlice} />
          )
        }
        <div className={`sub-radar one ${quadSlice}`} />
        <div className={`sub-radar two ${quadSlice}`} />
        <div className={`sub-radar three ${quadSlice}`} />
        {
          isBottom && (
            <RadarSubHeadings bottom quadSlice={quadSlice} />
          )
        }
      </div>
    </div>
  );
};

export default RadarQuad;
