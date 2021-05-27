import { combineReducers } from "redux";
import techReducer from "./tech/tech.reducer.js";

const rootReducer = combineReducers({
  tech: techReducer
});

export default rootReducer;
