import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
https://hodgef.com/simple-keyboard/editor/?d=hodgef/react-simple-keyboard-demos/tree/master
const VirtualKeyboard = () => {
    const [value, setValue] = useState("");


    return (
        <React.Fragement>
            <Keyboard
                value 
            />
        </React.Fragement>
    );
}