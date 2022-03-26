import React, {ChangeEvent, useState} from 'react';

export const ControlledSelect = () => {

    const [select, setSelect] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        setSelect(newValue)
    }

    return (
        <select value={select} onChange={onChangeHandler}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Kiev</option>
            <option value={"3"}>Vilnius</option>
        </select>
    );
};
