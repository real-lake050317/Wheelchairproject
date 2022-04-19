import React from 'react';

import MapComponent from '../components/MapComponent';
import UserPageExit from '../components/UserPageExit';

import './Map.css';

const Map = () => {
  return (
    <div className='map-page'>
      <React.Fragment>
        <UserPageExit />
        <MapComponent />
      </React.Fragment>
    </div>
  );
}

export default Map;