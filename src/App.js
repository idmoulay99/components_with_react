import React, { useState } from 'react'
import ChercherBar from './components/ChercherBar'
import ResultatList from './components/ResultatList'
import './App.css'

function App() {

    const list = [
        {nom:"banane", type:"fruit"},
        {nom:"orange", type:"fruit"},
        {nom:"pomme", type:"fruit"},
        {nom:"raisins", type:"fruit"},
        {nom:"kiwi", type:"fruit"},
        {nom:"tomate", type:"legume"},
        {nom:"carotte", type:"legume"},
        {nom:"pomme de terre", type:"legume"},
        {nom:"navet", type:"legume"},
        {nom:"poivron", type:"legume"}
    ]        

    const [type, setType] = useState('')

    return (
        <div className='wrapper'>
            Component App
            <ChercherBar setType={setType}/>
            le type: {type}
            <ResultatList list={list.filter((element) => element.type === type.toLowerCase())}/>
        </div>
    )
}

export default App