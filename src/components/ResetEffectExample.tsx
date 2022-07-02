import React, {useEffect, useState} from 'react';

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState<number>(1)

    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect occurred")

        return () => {
            console.log("Reset effect")
        }
    }, [])


    return (
        <div>
            <span>Hello, counter: {counter}</span>
            <button onClick={() => {setCounter(counter+1)}}>+</button>
        </div>
    );
};
