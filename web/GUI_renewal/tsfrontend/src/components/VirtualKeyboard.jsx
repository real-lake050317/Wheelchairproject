import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
//https://hodgef.com/simple-keyboard/editor/?d=hodgef/react-simple-keyboard-demos/tree/master

const VirtualKeyboard = () => {
    const [value, setValue] = useState("");

    const onChange = (input) => {
        this.setValue({ input });
        console.log("Input Changed", input);
    }

    //onKeyPress = ()



    const onChangeInput = (event) => {
        const input = event.target.value;
        this.setValue({ input });
        this.keyboard.setInput(input);
    }

    return (
        <React.Fragement>
            <Keyboard
            />
        </React.Fragement>
    );
}

export default VirtualKeyboard;