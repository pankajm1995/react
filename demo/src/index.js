import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routercss from './Routercss';
import App from './App';
import Nestednav from './Nestednav';

import reportWebVitals from './reportWebVitals';
// import Counter from './Counter';
// import Eventhandler from './Eventhandler';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Routercss/>
 <App/>
 <Nestednav/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
