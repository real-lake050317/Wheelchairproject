import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import "./TTS.css";

const TTS = () => {
  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();

  const Keyboard = window.SimpleKeyboard.default;

  const myKeyboard = new Keyboard({
    onChange: (tts-textbox) => onChange(tts-textbox),
    onKeyPress: (button) => onKeyPress(button),
  });

  function onChange(tts-textbox) {
    document.querySelector(".tts-textbox").value = tts-textbox;
    console.log("Input changed", tts-textbox);
  }

  function onKeyPress(button) {
    console.log("Button pressed", button);
  }
  
  return (
    <div className="tts-service">
      <textarea
        className="tts-textbox"
        cols="150"
        rows="45"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="tts-speak" onClick={() => speak({ text: value })}>
        SPEAK
      </button>
    </div>
  );
};

export default TTS;
