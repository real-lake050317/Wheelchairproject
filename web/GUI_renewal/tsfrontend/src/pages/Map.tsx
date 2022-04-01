import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
  address: "Sosa-ri, Anheung-myeon, Hoengseong-gun, Gangwon-do",
  lat: 37.457919811062204,
  lng: 128.14512067905684,
};

const LocationPin = () => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
  </div>
)

const Map = () => {
  //const render = (status: Status) => {
  //  return <h1>{status}</h1>;
  //};

  //<Wrapper apiKey={"AIzaSyA66ylL4qgGKmHJUPU67Y80mgzX_EwAjWU"} render={render}>
  {
    /* <YourComponent /> */
  }
  //</Wrapper>;

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA66ylL4qgGKmHJUPU67Y80mgzX_EwAjWU" }}
        defaultCenter={location}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
