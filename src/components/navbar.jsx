import React from "react";
import flag from "../img/japan_flag.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-1">
      <div className="container">      <Link className="navbar-brand" to="/">
        <img
          src={flag}
          style={{ height: "25px", width: "50px", marginRight: "3px" }}
          alt="Flag"
        />
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/history">
              History
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/map">
              Map
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/politics">
              Politics
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/places">
              Places
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          </form>
      </div></div>

    </nav>
  );
}

export default Navbar;
