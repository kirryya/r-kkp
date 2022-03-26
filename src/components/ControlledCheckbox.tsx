import React, {ChangeEvent, useState} from 'react';

export const ControlledCheckbox = () => {

    const [value, setValue] = useState(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.checked
        setValue(newValue)
    }

    return (
        <div>
            <input type={"checkbox"} checked={value} onChange={onChangeHandler}/>
        </div>
    );
};
