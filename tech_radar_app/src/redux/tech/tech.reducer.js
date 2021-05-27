import types from "./tech.types.js";
import { setTechDotData } from "./tech.actions.js";
import INITIAL_DOT_DATA from "./tech.data.js";

const INITIAL_STATE = {
  dotData: INITIAL_DOT_DATA
};

const techReducer = (state=INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SET_TECH_DOT_DATA: return state; // does nothing momentarily
    default: return state;
  }
};

export default techReducer;
