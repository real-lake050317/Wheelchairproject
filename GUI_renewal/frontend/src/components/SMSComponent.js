import React from "react";

const SMSComponent = () => {
  return (
    <div class="sms-sender">
      <div class="contacts">
        <button class="contact-button">click me</button>
        <div class="contacts">
          <button class="contact-button">click me</button>
          <form>
            <label>
              <input type="checkbox" name="nb[]" valueF="01" />
              mom
            </label>
            <label>
              <input type="checkbox" name="nb[]" value="02" />
              dad
            </label>
            <label>
              <input type="checkbox" name="nb[]" value="03" />
              friend1
            </label>
            <label>
              <input type="checkbox" name="nb[]" value="04" />
              friend2
            </label>
            <label>
              <input type="checkbox" name="nb[]" value="05" />
              friend3
            </label>
          </form>
          <button class="contact-button">전체취소</button>
        </div>
        <div class="saved-messages">
          <button>선택항목 삭제</button>
          <input type="text"></input>
          <button>Save</button>
        </div>
        <div class="write-message">
          <textarea></textarea>
          <div class="messagewrite-buttons">
            <button>입력</button>
            <button>보내기</button>
          </div>
        </div>
        <button class="contact-button">전체취소</button>
      </div>
      <div class="saved-messages">
        <button>선택항목 삭제</button>
        <input type="text"></input>
        <button>Save</button>
      </div>
      <div class="write-message">
        <textarea></textarea>
        <div class="messagewrite-buttons">
          <button>입력</button>
          <button>보내기</button>
        </div>
      </div>
    </div>
  );
};

export default SMSComponent;
