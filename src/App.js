import React from "react";
import Head from "./components/head";
import Slider from "./components/slider";
import Navbar from "./components/navbar";
import History from "./components/history";
import Map from "./components/map";
import Politics from "./components/politics";
import Places from "./components/places";
import Basics from "./components/basics";
import MainPage from "./components/mainPage";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Head />
      <Slider />
      <Navbar />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-9">
            <Switch>
              <Route path="/mainPage" component={MainPage} />
              <Route path="/history" component={History} />
              <Route path="/map" component={Map} />
              <Route path="/politics" component={Politics} />
              <Route path="/places" component={Places} />

              <Redirect from="/" to="/mainPage" exact />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <div className="col-lg-3 mt-2">
            <Basics />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
