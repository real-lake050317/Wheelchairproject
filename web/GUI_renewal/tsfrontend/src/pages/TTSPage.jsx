import React from 'react';

import TTSComponent from '../components/TTSComponent';
import UserPageExit from '../components/UserPageExit';

import './TTSPage.css';

const TTSPage = () => {
  return (
    <div className='map-page'>
      <React.Fragment>
        <UserPageExit />
        <TTSComponent />
      </React.Fragment>
    </div>
  );
}

export default TTSPage;