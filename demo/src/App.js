
import './App.css';
// import Parent from './Parent';
// import Hook from './Hook';
// import React from 'react';
// import UseEffect from './UseEffect';
// import Form from './Form';
// import Showdata from './Showdata';
// import Hidedata from './Hidedata';
// import Toogle from './Toogle';
// import Render from './Render';
// import Renderex from './Renderex';
// import Registration from './Registration';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Tables from './Table';

// import Tloop from './Tloop';
// import Frag1 from './Frag1';
import React, { useState } from 'react';
// import Col from './Parentcall';

// import Localstorage from './Localstorage';
// import high from './Hoc';
// import Session from './Sessionstorage';
// import Control from './Control';
// import Uncontrol from './Uncontrol';
// import React from 'react';
// import Home from './Component/Home';
// import About from './Component/About';
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Crud.css';
function App() {
    const [name, setName] = useState("");
    const [allData, setAllData] = useState([])

    const handled = () => {
        if (name.length !== 0) {
            setAllData(newData => [...newData, name]);
            setName("");
        }
    }
    const handleDelete=(index)=>

    {
        allData.splice(index,1);
        setAllData([...allData])
    }
    return (
        <div className="App">
            <h1>CRUD APPLICATION</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={handled}>Add Data</button>
            {
                allData.map((val) =>
                    <div>
                        <h1>{val}</h1>
                        <button>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )

            }
        </div>
    )
}

export default App;
