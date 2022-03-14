import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {ControlOnOff} from "./ControlOnOff";

export default {
    title: 'ControlOnOff',
    component: ControlOnOff
}

const callback = action("on or off clicked")


export const OnMode = () => <ControlOnOff on={true} setOn={callback}/>
export const OffMode = () => <ControlOnOff on={false} setOn={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <ControlOnOff on={value} setOn={setValue}/>
}

