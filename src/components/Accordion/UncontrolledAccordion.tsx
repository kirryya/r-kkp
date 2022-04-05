import React, {useReducer} from "react";

type AccordionPropsType = {
    titleValue: string

}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return !state
        default:
            return state
    }
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

    console.log('Accordion rendering')
    return (
        <div>
          {/*  <AccordionTitle onClick={() => {setCollapsed(!collapsed)}} title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => {dispatch({type: "TOGGLE-COLLAPSED"})}} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>-- {props.title} --</h3>
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

