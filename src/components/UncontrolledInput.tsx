import React, {ChangeEvent, useState} from 'react';

export const UncontrolledInput = () => {

    const [inputValue, setInputValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        setInputValue(newValue)
    }

    return (
        <div>
            <input onChange={onChangeHandler}/> - {inputValue}
        </div>
    );
};
