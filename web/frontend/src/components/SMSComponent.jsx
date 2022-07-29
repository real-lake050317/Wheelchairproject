import React, { useState } from "react";
import axios from "axios";

import "./SMSComponent.css";

const SMSComponent = () => {
  const [message, setMessage] = useState("");
  const contact = "01099666503";

  const messageUpdate = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  const emptyMessage = () => {
    setMessage("");
  }

  const submitMessage = (event) => {
    axios({
      url: "http://localhost:8800/api/sms",
      method: "post",
      data: {
        message: message,
        contact: contact,
      },
    })
      .then((res) => {
        //console.log(res);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
    //event.target = "";
    setMessage(""); //Requires additional check
    event.preventDefault();
    alert("Message Sent");
  };

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
          <button className="contact-button" onClick = {emptyMessage} >전체취소</button>
        </div>
        <div className="saved-messages">
          <button>선택항목 삭제</button>
          <input type="text"></input>
          <button>Save</button>
        </div>
        <div className="write-message">
          <textarea
            className="message-text"
            cols={40}
            rows={10}
            onChange={messageUpdate}
            value = { message }
          />
          <div className="messagewrite-buttons">
            <button>입력</button>
            <button type="submit" onClick={ submitMessage }>
              보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSComponent;