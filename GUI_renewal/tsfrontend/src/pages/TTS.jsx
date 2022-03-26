import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import "./TTS.css";

const TTS = () => {
  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();
  
  return (
    <div className="tts-service">
      <textarea
        className="textbox"
        cols="150"
        rows="45"
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

export default TTS;
