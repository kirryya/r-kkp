import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle collapsed={!collapsed} setCollapsed={setCollapsed} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed:boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {props.setCollapsed(props.collapsed)}}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}

