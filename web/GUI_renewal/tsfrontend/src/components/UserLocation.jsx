import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import axios from "axios";

import "./UserLocation.css";

const UserLocation = () => {
  const [address, setAddress] = useState("");

  const [coords, setCoords] = useState();

  useEffect(() => {
    axios
      .get(
        'http://localhost:8800/api/users'
      )
      .then((response) => {
        console.log(response.data[0]);
        setCoords(response.data[0]);
        console.log(coords);
      })
  }, [])
  /*
  const location = {
    name: "Jinho Kim",
    center: {
      lat: "37.45791",
      lng: "128.14512",
    },
    date: "May 20, 2022",
    time: "14:54",
  }; //axios로 긁어와야 함
  */
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);
  Geocode.enableDebug();

  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.location.lat},${coords.location.lng}&key=${key}`
      )
      .then((response) => {
        setAddress(response.data.results[0].formatted_address);
      });
  });
  //console.log(address);

  return (
    <div className="location">
      <label>
        {/*{location.name} */} 김진호 님은 <br></br>
        { coords.date } 기준
      </label>
      <br></br>
      <label>
        위도 {coords.location.lat}, 경도 {coords.location.lng}에 있으며,
        <br></br>
        주소는 {address} 입니다.
      </label>
    </div>
  );
};

export default UserLocation;
