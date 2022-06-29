import React, {useEffect, useState} from 'react';

const twoDigits = (num: number) => num < 10 ? "0" + num : num

export const DigitalClock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    let seconds = twoDigits(date.getSeconds())
    let minutes = twoDigits(date.getMinutes())
    let hours = twoDigits(date.getHours())

    return (
        <>
            <div>  {hours} : {minutes} : {seconds}</div>
        </>
    );
};