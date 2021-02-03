import React from 'react'; 
import ReactDOM from 'react-dom';
import {  BrowserRouter } from 'react-router-dom';


// import Product from './Product';
//import { Component } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";

import App from './Components/app';


ReactDOM.render(<BrowserRouter> <App/> </BrowserRouter> , document.querySelector("#root"));