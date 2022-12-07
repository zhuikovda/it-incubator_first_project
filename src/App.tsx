import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Rating";


function hello() {
    alert("Hello IT-KAMASUTRA")
}

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title = {"This is App component"}/>
            <PageTitle title = {"Hello, dima"}/>
            Article 1
            <Rating val = {1} />
            <Accordion titleValue = {"Accordion"} collapsed = {true}/>
            <Accordion titleValue = {"Menu"} collapsed = {true}/>
            Article 2
            <Rating val = {0}/>
            <Rating val = {1}/>
            <Rating val = {2}/>
            <Rating val = {3}/>
            <Rating val = {4}/>
            <Rating val = {5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering");
    return <h1>{ props.title }</h1>
}



export default App;
