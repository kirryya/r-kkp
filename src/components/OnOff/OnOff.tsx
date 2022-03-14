import React, {useState} from 'react';

export const OnOff = () => {

    let [on, setOn] = useState<boolean>(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inLine-block",
        marginTop: "5px",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inLine-block",
        marginTop: "5px",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };

    const indicatorStyle = {
        height: "15px",
        width: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        marginTop: "5px",
        marginLeft: "5px",
        display: "inLine-block",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
};

