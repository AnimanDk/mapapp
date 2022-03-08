import { createSlice,current } from "@reduxjs/toolkit";

const lat = 37.78;
const long = -122.41;

const initialState = {
  view: {
    latitude: lat,
    longitude: long,
    height: "100vh",
    width: "100vw",
    zoom: 16.5,
  },
};

const mapView = createSlice({
  name: "view",
  initialState,
  reducers: {
    viewUpdate: (state, action) => {
      let temp={...state.view,...action.payload}
      state.view =temp;
    },
  },
});

export const { viewUpdate } = mapView.actions;

export default mapView.reducer;
