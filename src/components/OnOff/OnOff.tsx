import React from 'react';

type OnOffType = {
    value: boolean
}


export const OnOff = (props: OnOffType) => {

    const on = {
        backgroundColor: "green",
    };

    const off = {
        backgroundColor: "red",
    };

    const circleOn = {
        height: "15px",
        width: "15px",
        backgroundColor: "green",
        borderRadius: "50%",
        marginLeft: "5px",
};

    const circleOff = {
        height: "15px",
        width: "15px",
        backgroundColor: "red",
        borderRadius: "50%",
        marginLeft: "5px"
};

    if (props.value) {
        return (
            <div>
                <button style={on}>On</button>
                <button>Off</button>
                <button style={circleOn}> </button>
            </div>
        );
    } else {
        return (
            <div>
                <button>On</button>
                <button style={off}>Off</button>
                <button style={circleOff}> </button>
            </div>
        )
    }
};

