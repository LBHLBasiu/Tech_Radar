import React from "react";
import { withRouter } from "react-router-dom";
import RadarQuad from "../components/radar-quad/radar-quad.component.jsx";
import DotDataList from "../components/dot-data-list/dot-data-list.component.jsx";
import { connect } from "react-redux";

const RadarPage = ({ match, history, dotData }) => {
  const radarSliceMap = {
    "languages_and_frameworks": "top-left",
    "data_platform": "top-right",
    "cloud_platform": "bottom-right",
    "tools": "bottom-left"
  };

  const pathToRadarSlice = path => {
    return radarSliceMap[path.slice(1)]
  };

  const titleFromPath = path => {
    path = path.slice(1);

    let wordArray = path.split("_");

    wordArray = wordArray.map(item => item[0].toUpperCase() + item.slice(1));

    return wordArray.join(" ");
  };

  return (
    <React.Fragment>
      <div className="radar-flex-container">
        <div className="quad-container">
          <RadarQuad quadSlice={pathToRadarSlice(match.path)} />
        </div>
        <div className="data-container">
          <h1>{titleFromPath(match.path)}</h1>
          <DotDataList quadSlice={pathToRadarSlice(match.path)} />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  dotData: state.tech.dotData
});

export default withRouter(connect(mapStateToProps)(RadarPage));
