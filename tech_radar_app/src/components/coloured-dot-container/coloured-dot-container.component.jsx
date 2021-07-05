import React from "react";
import ColouredDot from "../coloured-dot/coloured-dot.component.jsx";

class ColouredDotContainer extends React.Component {
  render() {
    const { quadSlice, dotData } = this.props;

    const currentDots = dotData[quadSlice];

    return (
      <div className={`coloured-dot-container ${quadSlice}`}>
        <div className="coloured-dot-sq-wrapper">
          {
            currentDots.map((singleDotData, index) => (
              <ColouredDot key={index} quadSlice={quadSlice} {...singleDotData} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default ColouredDotContainer;
