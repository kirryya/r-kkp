import React, {useRef, useState} from 'react';

export const UncontrolledInputWithButton = () => {

    const [inputValue, setInputValue] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)


    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setInputValue(el.value)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}> save</button>
            actualInput - {inputValue}
        </div>
    );
};
