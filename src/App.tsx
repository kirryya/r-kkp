import React from "react";
import './App.css';
// @ts-ignore
import Accordion from "./components/Accordion.tsx";
// @ts-ignore
import {Rating} from "./components/Rating.tsx";

function hello() {
    return (
        alert('Hello IT_KAMASUTRA')
    )
}

hello();


// function declaration
function App(props:any) {
    console.log('App rendering')
    // полезное что-то

    // обязана вернуть JSX
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title="Menu1"/>
            <Accordion title="Menu2"/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}



export default App;
