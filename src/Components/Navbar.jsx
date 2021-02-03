import React from 'react';   
import {NavLink } from 'react-router-dom'


const Navbar = props => {
        return (
            <nav className="navbar navbar-expand  bg-dark ">
                <ul className="nav">
                    <li className="nav-item"> 
                        <NavLink className="nav-link text-light" to="/home">Home</NavLink> 
                     </li>
                    <li className="nav-item">  
                        <NavLink className="nav-link text-light" to="/about">About</NavLink> 
                     </li>
                     <li className="nav-item">  
                        <NavLink className="nav-link text-light" to="/ShoppingCart">ShoppingCart</NavLink> 
                     </li>
                </ul>
                <span className="ml-auto border text-light font-weight-bold bg-primary px-4">{props.data}</span>
            </nav>
         );
}
 
export default Navbar;