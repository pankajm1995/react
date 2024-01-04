
import './App.css';
import Parent from './Parent';
import Hook from './Hook';
import React from 'react';
import UseEffect from './UseEffect';
import Form from './Form';
import Showdata from './Showdata';
import Hidedata from './Hidedata';

function App() {
  return (
    <div className="App">
   <Parent/>
     <Hook/>
     <UseEffect/>
  <Form/>
  <Showdata/>
 <Hidedata/>
    </div>
  )
}

export default App;
