import React from "react";

const RadarSubHeadings = ({ quadSlice, top, bottom }) => {
  const setHorizontalPosition = () => {
      if (quadSlice.match(/left/)) {
        return "left";
      } else {
        return "right";
      }
  };

  return (
    <div className={`radar-sub-headings ${setHorizontalPosition()} ${bottom ? "bottom" : ""} ${top ? "top" : ""}`}>
      {
        setHorizontalPosition() === "left" ? (
          <React.Fragment>
            <h3 className="sub-heading">
              Hold
            </h3>
            <h3 className="sub-heading">
              Assess
            </h3>
            <h3 className="sub-heading">
              Trial
            </h3>
            <h3 className="sub-heading">
              Adopt
            </h3>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3 className="sub-heading">
              Adopt
            </h3>
            <h3 className="sub-heading">
              Trial
            </h3>
            <h3 className="sub-heading">
              Assess
            </h3>
            <h3 className="sub-heading">
              Hold
            </h3>
          </React.Fragment>
        )
      }
    </div>
  );
};

export default RadarSubHeadings;
