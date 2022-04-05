import React from "react";

type ItemsType = {
    items: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    items: ItemsType[]
    onBodyClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle collapsed={!props.collapsed} title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items} onBodyClick={props.onBodyClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>-- {props.title} --</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onBodyClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((el, i) => <li key={i} onClick={() => {
                props.onBodyClick(el.value)
            }}>{el.items}</li>)}
        </ul>
    )

}
