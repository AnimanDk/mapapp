import { combineReducers } from "@reduxjs/toolkit";
// import store from "../store/store";
import mapView from "./viewreducer";

const rootReducer = combineReducers({
  view: mapView,
});

export default rootReducer;
