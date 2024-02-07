import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Localstorage from './Localstorage';
import Session from './Sessionstorage';
import Control from './Control';
import Router  from "./Router";
import Crud from './Crud';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Localstorage/>
    <Session/>
    <Control/>
    <Router />
    <Crud/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
