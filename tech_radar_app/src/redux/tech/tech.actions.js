import types from "./tech.types.js";

export const setTechDotData = dotData => ({
  type: types.SET_TECH_DOT_DATA,
  payload: dotData
});
