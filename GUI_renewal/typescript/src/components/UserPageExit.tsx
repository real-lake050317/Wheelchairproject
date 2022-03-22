import React from 'react';
import { NavLink } from "react-router-dom";

const UserPageExit = () => {
    return (
        <NavLink to="/userhome" className="user-exit">
          <button className = "sub-buttons">공강 신청</button>
        </NavLink>
    );

};

export default UserPageExit;