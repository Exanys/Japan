import React, {useState} from "react";
import flag from "../img/japan_flag.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [activeIsland, setActiveIsland] = useState("Islands");
  const [islands] = useState(["Hokkaido","Honshu","Kyushu","Shikoku","Okinawa"]);
  const [search, setSearch] = useState();

  const currentIsland = (name) => {
   setActiveIsland(name);
  }
  const  changeUrl = (e) => {
    e.preventDefault();
    let ori = window.location.origin;
    let url = `${ori}/search/${search}`;
    window.location.replace(url);
  }
  const changeState = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mt-1 mb-2" style={{fontSize: "125%"}}>
      <div className="container">      <Link className="navbar-brand p-0" onClick={() => currentIsland("Islands")} to="/">
        <img
          src={flag}
          style={{ height: "25px", width: "50px", marginRight: "3px", marginBottom: "4px"}}
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
            <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/history">
              History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/map">
              Map
            </NavLink>
          </li>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#!" id="dropdownIslands" data-toggle="dropdown"  aria-expanded="false">
          {activeIsland}
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownIslands">
          {islands.map((e)=> {
            if(e !== activeIsland){ return (<Link to={"/island/" + e} onClick={() => currentIsland(e)} key={e} className="dropdown-item">{e}</Link>)}
            else return null;
          })}
        </div>
      </li>
          <li className="nav-item">
            <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/politics">
              Politics
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/places">
              Places
            </NavLink>
          </li>
        </ul>
        <form className="form-inline p-0 pl-lg-2 my-2 my-mlg-0" onSubmit={changeUrl}>
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={changeState} />
          </form>
      </div></div>

    </nav>
  );
}

export default Navbar;
