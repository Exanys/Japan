import React from 'react';
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <Link className="navbar-brand" to="/">
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
          <NavLink className="nav-item nav-link active" to="/history">
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
