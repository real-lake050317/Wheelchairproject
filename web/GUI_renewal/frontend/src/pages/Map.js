import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Map = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  <Wrapper apiKey={"AIzaSyA66ylL4qgGKmHJUPU67Y80mgzX_EwAjWU"} render={render}>
    <YourComponent />
  </Wrapper>;

  return (
    <div className="map">
      <h1>MAP</h1>
    </div>
  );
};

export default Map;
