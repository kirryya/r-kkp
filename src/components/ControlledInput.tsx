import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {

    const [value, setValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        setValue(newValue)
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/> - {value}
        </div>
    );
};
