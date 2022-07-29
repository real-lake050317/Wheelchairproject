import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import axios from "axios";

import "./UserLocation.css";
//import { UserData } from "../assets/UserData";

const UserLocation = (props) => {
  const [address, setAddress] = useState("");
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
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.data.location.lat},${props.data.location.lng}&key=${key}`
      )
      .then((response) => {
        setAddress(response.data.results[0].formatted_address);
        console.log(address);
        console.log(props.data);
      });
  });
  //console.log(address);

  /*
  useEffect (() => {
    axios
      .get (
        `http://localhost:8800/api/users`
      )
      .then ((response) => {
        setAddress(response.data.results[0]..formatted_address);
      });
  })
  */
  //console.log(props.data);

  return (
    <div className="location">
      <label>
        {props.data.name} 님은 <br></br>
        {props.data.time} 기준<br></br>
        위도 {props.data.location.lat}, 경도 {props.data.location.lng}에 있으며,
      </label>
      <label>
        <br></br>
        주소는 {address} 입니다.
      </label>
    </div>
  );
};

export default UserLocation;
