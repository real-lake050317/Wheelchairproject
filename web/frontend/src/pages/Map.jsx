import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserData from '../assets/UserData';

import MapComponent from '../components/MapComponent';
import UserPageExit from '../components/UserPageExit';
import UserLocation from '../components/UserLocation';

import './Map.css';

  
const Map = () => {
  //const [coords, setCoords] = useState(UserData);
  const [isLoading, setIsLoading] = useState(true);
  var coords = UserData;
  useEffect(() => {
    axios
      .get(
        'http://localhost:8800/api/users'
      )
      .then((response) => {
        console.log(response.data[0]);
        //setCoords(response.data[0]);
        coords = response.data[0];
        console.log(coords);
        setIsLoading(false);
      })
  }, [])
  


  return (
    <div className='map-page'>
      <React.Fragment>
        <UserPageExit />
        <UserLocation data = { coords } />
        <MapComponent data = { coords } />
      </React.Fragment>
    </div>
  );
}

export default Map;