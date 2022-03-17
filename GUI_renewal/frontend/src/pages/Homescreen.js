import React from "react";
import { NavLink } from "react-router-dom";

import "./Homescreen.css";

const Homescreen = () => {
  return (
    <div>
      <div className="title">
        <h1>Wheelchair Project</h1>
      </div>
      <div className="buttons-form">
        <NavLink to="/userpage" className="profile-button">
          <button className="routes">사용자</button>
        </NavLink>

        <button className="routes">보호자</button>
      </div>
    </div>
  );
};

export default Homescreen;
