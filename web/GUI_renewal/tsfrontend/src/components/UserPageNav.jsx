import React from "react";
import { NavLink } from "react-router-dom";

const UserPageNav = () => {
  return (
    <div className="functions-nav">
      <NavLink to="/userpage/tts" className="profile-button">
        <button className="functions">TTS</button>
      </NavLink>
      <NavLink to="/userpage/map" className="profile-button">
        <button className="functions">MAP</button>
      </NavLink>
      <NavLink to="/userpage/settings" className="profile-button">
        <button className="functions">SETTINGS</button>
      </NavLink>
    </div>
  );
}

export default UserPageNav;
