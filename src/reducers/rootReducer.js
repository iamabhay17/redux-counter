import numReducer from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  numReducer
});
export default rootReducer;
