import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {useState} from "react";
import {ControlOnOff} from "./components/OnOff/ControlOnOff";

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

    // обязана вернуть JSX
    return (
        <div className={"App"}>
            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1*/}
            <Accordion titleValue={"Menu"} collapsed={collapsed} onClick={() => {setCollapsed(!collapsed)}} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion titleValue="Menu1"/>
            <UncontrolledAccordion titleValue="Menu2"/>
           {/* Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <UncontrolledRating />
            <OnOff />
            <OnOff />
            <ControlOnOff on={onOff} setOn={setOnOff} />
           {/* <OnOff />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
