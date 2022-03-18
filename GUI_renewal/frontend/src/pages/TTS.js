import React from 'react';

import './TTS.css';

const TTS = () => {
    return (
        <div className="tts-service">
            <textarea className='tts-textbox' cols ="150" rows="45" />
            <button className='tts-speak'>SPEAK</button>
        </div>
    );
}

export default TTS;