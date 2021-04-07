import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


