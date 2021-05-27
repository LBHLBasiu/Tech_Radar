import React from "react";
import { Accordion } from "react-bootstrap";
import { connect } from "react-redux";

import DotDataListEntry from "../dot-data-list-entry/dot-data-list-entry.component.jsx";

const DotDataList = ({ quadSlice, dotData }) => {
  return (
    <Accordion defaultActiveKey="0">
      {
        dotData[quadSlice].map((dotObj, i) => (
          <DotDataListEntry
            eventKey={i + 1}
            { ...dotObj }
            />
        ))
      }
    </Accordion>
  );
};

const mapStateToProps = state => ({
  dotData: state.tech.dotData
});

export default connect(mapStateToProps)(DotDataList);
