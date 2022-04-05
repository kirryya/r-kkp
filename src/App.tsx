import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {useState} from "react";
import {ControlOnOff} from "./components/OnOff/ControlOnOff";
import {UncontrolledInput} from "./components/Input/UncontrolledInput";
import {UncontrolledInputWithButton} from "./components/Input/UncontrolledInputWithButton";
import {ControlledInput} from "./components/Input/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledSelect";
import Select from "./components/Select/Select";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import Memo_Demo from "./components/memo_demo/Memo_Demo";

/*function hello() {

    return (
        alert('Hello IT_KAMASUTRA')
    )
}

hello();*/


// function declaration
function App() {
    console.log('App rendering')
    // полезное что-то

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState<boolean>(false)
    let [value, setValue] = useState("1")

    const onClickCallback = (value) => {
        alert(value)
    }

    // обязана вернуть JSX
    return (
        <div className={"App"}>
            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1*/}
            {/*<Accordion titleValue={"Menu"} collapsed={collapsed} onClick={() => {setCollapsed(!collapsed)}} items={["1","2","3"]} />*/}
            <Accordion titleValue={"Users"} collapsed={collapsed} onClick={() => {
                setCollapsed(!collapsed)
            }} items={[{items: "Andrei", value: 1}, {items: "Valera", value: 2}, {
                items: "Viktor",
                value: 3
            }, {items: "Masyanya", value: 4}]}
                       onBodyClick={onClickCallback}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion titleValue="Menu1"/>
            <UncontrolledAccordion titleValue="Menu2"/>
            {/* Article 2
            <Rating value={0} onClick={() => {}}/>
            <Rating value={1} onClick={() => {}}/>
            <Rating value={2} onClick={() => {}}/>
            <Rating value={3} onClick={() => {}}/>
            <Rating value={4} onClick={() => {}}/>
            <Rating value={5} onClick={() => {}}/>
            <UncontrolledRating />*/}
            <OnOff/>
            <ControlOnOff on={onOff} setOn={setOnOff}/>
            <UncontrolledInput/>
            <UncontrolledInputWithButton/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            {/* <OnOff />*/}
            <Memo_Demo/>
            <Select value={value} onChange={setValue}
                    items={[{title: "Minsk", value: "1"}, {title: "Kiev", value: "2"}, {
                        title: "Vilnius",
                        value: "3"
                    }]}/>
        </div>
    );
}

export default App;
