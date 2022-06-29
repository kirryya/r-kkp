import React, {useEffect, useState} from 'react';
import "./AnalogClock.css"

export const AnalogClock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
        <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle} />
                <div className={"dial minutes"} style={minutesStyle} />
                <div className={"dial hours"} style={hoursStyle} />
            </div>
        </div>
    );
};
