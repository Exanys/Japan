import React, {useState} from "react";
import flag from "../img/japan_flag.png";
import { NavLink, Link } from "react-router-dom";
import {Navbar as NavBar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

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
  return(
    <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="rounded mt-1 mb-2" style={{fontSize: "125%", opacity: 0.85}} >
      <NavBar.Brand as={Link} to={"/"} onClick={() => {currentIsland("Islands"); window.scrollTo(0,0)}} className="p-0">
      <img
          src={flag}
          style={{ height: "25px", width: "50px", marginRight: "3px", marginBottom: "4px"}}
          alt="Flag"
        />
        Home
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="responsive-navbar-nav" />
      <NavBar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={NavLink} eventKey="1" onClick={() => {currentIsland("Islands"); window.scrollTo(0,0)}}to={"/history"}>
              History
        </Nav.Link>
        <Nav.Link as={NavLink} eventKey="2" onClick={() => {currentIsland("Islands"); window.scrollTo(0,0)}} to={"/map"}>
              Map
        </Nav.Link>
        <NavDropdown id="my-nav-dropdown" title={activeIsland} active={activeIsland !== "Islands" ? true : false}>
        {islands.map((e)=> {
            if(e !== activeIsland){ return (<NavDropdown.Item as={Link} eventKey="3" active={false} to={"/island/" + e} onClick={() => {currentIsland(e); window.scrollTo(0,0)}} key={e}>{e}</NavDropdown.Item>)}
            else return null;
          })}
        </NavDropdown>
        <Nav.Link as={NavLink} eventKey="4" onClick={() => {currentIsland("Islands"); window.scrollTo(0,0)}} to={"/politics"}>
              Politics
        </Nav.Link>
        <Nav.Link as={NavLink} eventKey="5" onClick={() => {currentIsland("Islands"); window.scrollTo(0,0)}} to={"/places"}>
              Places
        </Nav.Link>
        </Nav>
        <Form  className="d-flex p-0 pl-lg-2 my-2 my-mlg-0" onSubmit={changeUrl}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={changeState}
      />
      <Button  variant="outline-danger" type="submit">Search</Button>
    </Form>
      </NavBar.Collapse>
    </NavBar>
  );

  // return (
  //   <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mt-1 mb-2" style={{fontSize: "125%", opacity: 0.8}}>
  //     <div className="container">      <Link className="navbar-brand p-0" onClick={() => currentIsland("Islands")} to="/">
  //       <img
  //         src={flag}
  //         style={{ height: "25px", width: "50px", marginRight: "3px", marginBottom: "4px"}}
  //         alt="Flag"
  //       />
  //       Home
  //     </Link>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarNavAltMarkup"
  //       aria-controls="navbarNavAltMarkup"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>

  //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //       <ul className="navbar-nav mr-auto">
  //         <li className="nav-item">
  //           <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/history">
  //             History
  //           </NavLink>
  //         </li>
  //         <li className="nav-item">
  //           <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/map">
  //             Map
  //           </NavLink>
  //         </li>
  //         <li className="nav-item dropdown">
  //       <a className="nav-link dropdown-toggle" href="#!" id="dropdownIslands" data-toggle="dropdown"  aria-expanded="false">
  //         {activeIsland}
  //       </a>
  //       <div className="dropdown-menu" aria-labelledby="dropdownIslands">
  //         {islands.map((e)=> {
  //           if(e !== activeIsland){ return (<Link to={"/island/" + e} onClick={() => currentIsland(e)} key={e} className="dropdown-item">{e}</Link>)}
  //           else return null;
  //         })}
  //       </div>
  //     </li>
  //         <li className="nav-item">
  //           <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/politics">
  //             Politics
  //           </NavLink>
  //         </li>
  //         <li className="nav-item">
  //           {" "}
  //           <NavLink className="nav-link" onClick={() => currentIsland("Islands")} to="/places">
  //             Places
  //           </NavLink>
  //         </li>
  //       </ul>
  //       <form className="form-inline p-0 pl-lg-2 my-2 my-mlg-0" onSubmit={changeUrl}>
  //           <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={changeState} />
  //         </form>
  //     </div></div>

  //   </nav>
  // );
}

export default Navbar;
