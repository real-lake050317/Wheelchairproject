import axios from 'axios';
import React from 'react';

const d = new Date();

const UserData = {
  name: "Jinho Kim",
  location: {
    lat: 37.4622,
    lng: 128.1404,
  },
  _id: "628744105d82a9f0d1b59a4a",
  time: `2022-0${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`,
};


export default UserData;