import React from "react";

import "./UserMainPage.css";
import UserPageNav from "../components/UserPageNav";
import SMSComponent from "../components/SMSComponent";

const UserMainPage = () => {
  return (
    <div className="page">
      
      <React.Fragment>
        <UserPageNav />
        <SMSComponent />
      </React.Fragment>
    </div>
  );
};

export default UserMainPage;
