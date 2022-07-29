import React from "react";
/*
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
*/
//import { LoadScript } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import "./MapComponent.css";
import markericn from "../assets/markericn.png";

const MapMarker = ({ text }) => {
  return (
    <div>
      <img src={markericn} alt="Notification" className="marker"></img>
      <label className="marker-label">{text}</label>
    </div>
  );
};

/*
const LocationPin = () => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
  </div>
);
*/

const MapComponent = (props) => {
  //const render = (status: Status) => {
  //  return <h1>{status}</h1>;
  //};

  //<Wrapper apiKey={""} render={render}>
  
  // <YourComponent />
  
  //</Wrapper>;
  /*
  const hello = {
    center: {
      lat: 37.1234,
      lng: 128.1234,
    },
    zoom: 18,
  };
  */
  //console.log(props.data.location.lat)
  
  //console.log(props.data);
  //console.log(props.data);

  return (
    /*
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
      >
        <LocationPins
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
    <div style={{ height: "100vh", width: "50%" }} className="map">
      <GoogleMapReact
        bootstrapURLKeys = {process.env.REACT_APP_API_KEY}
        defaultCenter={props.data.location}
        defaultZoom={16}
        zoomControl="false"
      >
        <MapMarker
          lat={props.data.location.lat}
          lng={props.data.location.lng}
          text="User's Current location"
        />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
