import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "react-loadingmask/dist/react-loadingmask.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  
    <Router><App /></Router>
  ,
  document.getElementById('root')
);


