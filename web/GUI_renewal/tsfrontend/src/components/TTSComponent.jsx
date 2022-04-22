import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import "./TTSComponent.css";

const TTSComponent = () => {
  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();
  
  return (
    <div className="tts-service">
      <textarea
        className="textbox"
        cols="100"
        rows="20"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="tts-speak"
        onClick={() => speak({ text: value })}
      >
        SPEAK
      </button>
    </div>
  );
};

export default TTSComponent;
