
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
import React,{useState} from 'react';
import Col from './Parentcall';

function App() {
  const [data,setData]=useState("")

    const updateData=()=>
        {
                setData("pankaj")
        }
    return(
        <div> 
            <Col name={data} getData={updateData}/>
        </div>
    )
}

export default App;
