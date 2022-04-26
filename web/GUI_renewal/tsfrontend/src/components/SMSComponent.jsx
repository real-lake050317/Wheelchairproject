import React from "react";

import "./SMSComponent.css";

const SMSComponent = () => {
  var CryptoJS = require("crypto-js");
  var SHA256 = require("crypto-js/sha256");
  var Base64 = require("crypto-js/enc-base64");
  var request = require('request');
  const send_message = () => {
    var user_phone_number = process.env.mynumber;
    var user_auth_number = Math.random().toString(36).slice(2);
    var resultCode = 404;

    const date = Date.now().toString();
    const uri = process.env.service_id;
    const secretKey = process.env.secret_key;
    const accessKey = process.env.access_key;
    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
    const url2 = `/sms/v2/services/${uri}/messages`;
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);

    const hash = hmac.finalize();
    const signature = hash.toString(CryptoJS.enc.Base64);

    request(
      {
        method: method,
        json: true,
        uri: url,
        headers: {
          "Contenc-type": "application/json; charset=utf-8",
          "x-ncp-iam-access-key": accessKey,
          "x-ncp-apigw-timestamp": date,
          "x-ncp-apigw-signature-v2": signature,
        },

        body: {
          type: "SMS",
          countryCode: "82",
          from: "발신번호 입력하세요~~",
          content: `인증번호 ${user_auth_number} 입니다.`,
          messages: [{ to: `${user_phone_number}` }],
        },
      },
      function (err, res, html) {
        if (err) console.log(err);
        else {
          resultCode = 200;
          console.log(html);
        }
      }
    );
    return resultCode;
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
          <textarea className="message-text" cols="30" rows="10" />
          <div className="messagewrite-buttons">
            <button>입력</button>
            <button onClick={send_message}>보내기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSComponent;
