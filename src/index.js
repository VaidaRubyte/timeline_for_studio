import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';  // style sheet
import Main from './main'; // main file

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);