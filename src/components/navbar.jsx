import React, {useState} from "react";
import flag from "../img/japan_flag.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [activeIsland, setActiveIsland] = useState("Islands");
  const [islands] = useState(["Hokkaido","Honshu","Kyushu","Shikoku","Okinawa"]);

  const currentIsland = (name) => {
   setActiveIsland(name);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mt-1 mb-2" style={{fontSize: "125%"}}>
      <div className="container">      <Link className="navbar-brand" onClick={() => currentIsland("Inslands")} to="/">
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
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" onClick={() => currentIsland("Inslands")} to="/history">
              History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" onClick={() => currentIsland("Inslands")} to="/map">
              Map
            </NavLink>
          </li>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#!" id="dropdownIslands" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {activeIsland}
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownIslands">
          {islands.map((e)=> {
            if(e !== activeIsland){ return (<Link to={"/island/" + e} onClick={() => currentIsland(e)} key={e} className="dropdown-item">{e}</Link>)}
          })}
        </div>
      </li>
          <li className="nav-item">
            <NavLink className="nav-link" onClick={() => currentIsland("Inslands")} to="/politics">
              Politics
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" onClick={() => currentIsland("Inslands")} to="/places">
              Places
            </NavLink>
          </li>
        </ul>
        <form className="form-inline p-0 my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          </form>
      </div></div>

    </nav>
  );
}

export default Navbar;
