import React from "react";
import Head from "./components/head";
import Slider from "./components/slider";
import Navbar from "./components/navbar";
import History from "./components/sites/history";
import Map from "./components/sites/map";
import Politics from "./components/sites/politics";
import Places from "./components/sites/places";
import Basics from "./components/basics";
import MainPage from "./components/mainPage";
import Island from "./components/sites/island";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
      <Head />
      <Slider />
      <Navbar />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-8 justify-center">
            <Switch>
              <Route path="/mainPage" component={MainPage} />
              <Route path="/history" component={History} />
              <Route path="/map" component={Map} />
              <Route path="/politics" component={Politics} />
              <Route path="/places" component={Places} />
              <Route path="/island/:name" component={Island} />
              <Redirect from="/" to="/mainPage" exact />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <div className="rounded col-lg-4 p-0" id="basics" >
            <Basics />
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
