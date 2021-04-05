import React from 'react';
import flag from '../img/japan_flag.png'
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-1" >
      <Link className="navbar-brand" to="/">
        <img src={flag} style={{height:"25px", width:"50px", marginRight: "3px"}} alt="Flag" />
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/history">
            History
          </NavLink>
          <NavLink className="nav-item nav-link" to="/map">
            Map
          </NavLink>
          <NavLink className="nav-item nav-link" to="/politics">
            Politics
          </NavLink>
          <NavLink className="nav-item nav-link" to="/places">
            Places
          </NavLink>
          
        </div>
      </div>            
        </nav>
    )
}

export default Navbar
