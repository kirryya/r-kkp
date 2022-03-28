import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {useState} from "react";
import {ControlOnOff} from "./components/OnOff/ControlOnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {UncontrolledInputWithButton} from "./components/UncontrolledInputWithButton";
import {ControlledInput} from "./components/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledSelect";

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
            }} items={[{items:"Andrei", value:1}, {items:"Valera", value:2}, {items:"Viktor", value:3}, {items:"Masyanya", value:4}]}
            onBodyClick={onClickCallback}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/* <UncontrolledAccordion titleValue="Menu1"/>
            <UncontrolledAccordion titleValue="Menu2"/>
            Article 2
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
        </div>
    );
}

export default App;
