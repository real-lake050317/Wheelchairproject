import React from 'react';
import { NavLink } from "react-router-dom";

import exitarrow from '../assets/exitarrow.png';
import './UserPageExit.css'

const UserPageExit = () => {
    return (
        <NavLink to="/userpage" className="user-exit">
          <img src = {exitarrow} className = "exit-arrow" alt = "exit button"/>
        </NavLink>
    );

};

export default UserPageExit;