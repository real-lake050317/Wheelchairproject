import React from "react";
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import { LoadScript } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const AnyReactComponent = (text: any) => {
  return <div>{text}</div>;
};

interface Ilocation {
  center: number[],
  zoom: number,
}

const location = {
  center: {
    lat: 37.457919811062204,
    lng: 128.14512067905684,
  },
  zoom: 18,
};

/*
const LocationPin = () => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
  </div>
);
*/

const Map = () => {
  //const render = (status: Status) => {
  //  return <h1>{status}</h1>;
  //};

  //<Wrapper apiKey={""} render={render}>
  {
    /* <YourComponent /> */
  }
  //</Wrapper>;

  return (
    /*
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
    
    <GoogleMap
      ref={mapRef}
      defaultZoom={DEFAULT_ZOOM}
      defaultCenter={DEFAULT_CENTER}
      defaultOptions={{ ...DEFAULT_MAP_OPTIONS, styles: mapStyles }}
    >
      {origins.map(({ coordinates: { lat, lon: lng }, id }) => (
        <Marker
          key={id}
          position={{ lat, lng }}
          icon={{
            url: locationIconActive,
            scaledSize: new window.google.maps.Size(MARKER_SIZE, MARKER_SIZE),
          }}
        />
      ))}
      {destinations.map(({ coordinates: { lat, lon: lng }, id }) => (
        <Marker
          key={id}
          position={{ location.lat, location.lng }}
          icon={{
            url: heartIcon,
            scaledSize: new window.google.maps.Size(MARKER_SIZE, MARKER_SIZE),
          }}
        />
      ))}
    </GoogleMap>
    
    <LoadScript
    googleMapsApiKey="AIzaSyA66ylL4qgGKmHJUPU67Y80mgzX_EwAjWU"
    >
      
    </LoadScript>
    */
    <div style={{ height: "100vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA66ylL4qgGKmHJUPU67Y80mgzX_EwAjWU" }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      >
        <Marker lng={location.center.lng} lat={location.center.lat} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
