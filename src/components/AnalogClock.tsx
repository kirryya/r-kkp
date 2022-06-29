import React, {useEffect, useState} from 'react';

const twoDigits = (num: number) => num < 10 ? "0" + num : num

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

    let seconds = twoDigits(date.getSeconds())
    let minutes = twoDigits(date.getMinutes())
    let hours = twoDigits(date.getHours())


    return (
        <div>
            <div className="relative flex items-center justify-end w-20 h-20 overflow-hidden bg-gray-900 rounded-full ">
                <div className="absolute w-1/2 h-1 bg-white rounded-full origin-left -rotate-12 group-hover:rotate-[215deg] duration-1000 ease-in-out" />

                <div className="absolute w-1/2 h-1  origin-left rotate-[70] group-hover:rotate-[340deg] duration-1000 ease-in-out">
                    <div className="w-2/3 h-full bg-white rounded-full" />
                </div>

                <div className="absolute flex justify-center flex-1 w-full">
                    <div className="w-1 h-1 bg-white rounded-full" />
                </div>
            </div>
        </div>
    );
};
