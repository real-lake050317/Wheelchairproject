import React from "react";
import {useState} from 'react';

import "./SMSComponent.css";

const SMSComponent = () => {
  const [message, setMessage] = useState('');
  
  const send_message = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className="sms-sender">
      <div className="contacts">
        <div className="contacts">
          <form className="contacts">
            <label>
              <input
                type="checkbox"
                name="nb[]"
                value="01"
                className="contact-choice"
              />
              mom
            </label>
            <label>
              <input
                type="checkbox"
                name="nb[]"
                value="02"
                className="contact-choice"
              />
              dad
            </label>
            <label>
              <input
                type="checkbox"
                name="nb[]"
                value="03"
                className="contact-choice"
              />
              friend1
            </label>
            <label>
              <input
                type="checkbox"
                name="nb[]"
                value="04"
                className="contact-choice"
              />
              friend2
            </label>
            <label>
              <input
                type="checkbox"
                name="nb[]"
                value="05"
                className="contact-choice"
              />
              friend3
            </label>
          </form>
          <button className="contact-button">전체취소</button>
        </div>
        <div className="saved-messages">
          <button>선택항목 삭제</button>
          <input type="text"></input>
          <button>Save</button>
        </div>
        <div className="write-message">
          <textarea className="message-text" cols={30} rows={10} />
          <div className="messagewrite-buttons">
            <button>입력</button>
            <button>보내기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSComponent;
