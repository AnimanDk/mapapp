import "./App.css";
import MapGL, {
  GeolocateControl,
  NavigationControl,
  FullscreenControl,
} from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector, useDispatch, shallowEqual, Provider } from "react-redux";
import store from "./reducers/store";
// import { viewUpdate } from "./reducers/viewreducer";
import { viewUpdate } from "./reducers/normalReducer";
const mapControls=()=>{
        return(
        <>
        <GeolocateControl position="top-right" />
        <NavigationControl showCompass showZoom position="top-right"/>
        <FullscreenControl position="bottom-right" />
        </>
        )
}

function MapApp() {
  const dispatch=useDispatch();
  const viewport = useSelector((state) => state.viewport);
  return (
    <>
      <MapGL
        {...viewport}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle='mapbox://styles/mapbox/satellite-v9'
        accessToken="pk.eyJ1IjoiZGluZXNoa3VtYXIxOCIsImEiOiJja3R4NDlmdzcycDZlMnBvMmhza3hzNGdjIn0.MNosBcb9xLdXPcvru5ZShw"
        onViewportChange={(vi) => {
          dispatch(viewUpdate(vi));
        }}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        dragPan
        dragRotate
        doubleClickZoom
        cursorStyle="mouse"
      >
        {mapControls()}
      </MapGL>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <MapApp />
    </Provider>
  );
}
export default App;
