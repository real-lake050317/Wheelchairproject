import React from 'react';

import MapComponent from '../components/MapComponent';
import UserPageExit from '../components/UserPageExit';
import UserLocation from '../components/UserLocation';

import './Map.css';

const Map = () => {
  return (
    <div className='map-page'>
      <React.Fragment>
        <UserPageExit />
        <UserLocation />
        <MapComponent />
      </React.Fragment>
    </div>
  );
}

export default Map;