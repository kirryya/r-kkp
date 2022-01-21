import React from "react";
import './App.css';
import Accordion from "./components/Accordion.tsx";
import Rating from "./components/Rating.tsx";

function hello() {
    return (
        alert('Hello IT_KAMASUTRA')
    )
}

//hello();


// function declaration
function App() {
    console.log('App rendering')
    // полезное что-то

    // обязана вернуть JSX
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}



export default App;
