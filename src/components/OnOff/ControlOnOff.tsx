import React, {useState} from 'react';

type PropsType = {
    on: boolean
    setOn: (on:boolean) => void
}


export const ControlOnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inLine-block",
        marginTop: "5px",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inLine-block",
        marginTop: "5px",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    };

    const indicatorStyle = {
        height: "15px",
        width: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        marginTop: "5px",
        marginLeft: "5px",
        display: "inLine-block",
        backgroundColor: props.on ? "green" : "red"
    };

    const onOffHandler = () => {
        props.setOn(!props.on)
    }

    return (
        <div>
            <div style={onStyle} onClick={onOffHandler}>On</div>
            <div style={offStyle} onClick={onOffHandler}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
};

