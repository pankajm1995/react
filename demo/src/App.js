
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
// import React, { useState } from 'react';
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
// import './Crud.css';
import Home from './Component/Home';
import About from './Component/About';
import Error from './Component/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
    return(
        <div className="App">
        <BrowserRouter>
            <h1>Router</h1>
            <Routes>
                <Route path="/Home" element={<Home />}>Home</Route>
                <Route path="/About" element={<About />}>Home</Route>
                <Route path="/*" element={<Error/>}>Error</Route>
            </Routes>     
    </BrowserRouter>
    </div>
    )
}

export default App;
