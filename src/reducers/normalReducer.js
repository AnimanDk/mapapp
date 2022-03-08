import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import _findIndex from "lodash/findIndex";

// actions
export const viewUpdate = (payload) => {
  return {
    type: "VIEW_UPDATE",
    payload,
  };
};

// initial state
const initialState = {
  viewport: {
    latitude: 37.78,
    longitude: -122.41,
    height: "100vh",
    width: "100vw",
    zoom: 13.5,
  },
};

// reducer
export function mapReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "VIEW_UPDATE": {
        console.log('state',state);
      return {
        ...state,
        viewport: payload,
      };
    }
    default:
      return state;
  }
}

export const store = createStore(mapReducer, applyMiddleware(thunk));
