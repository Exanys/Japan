import React, {useEffect, useState} from "react";
import Head from "./components/head";
import Slider from "./components/slider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import History from "./components/sites/history";
import Map from "./components/sites/map";
import Politics from "./components/sites/politics";
import Places from "./components/sites/places";
import Basics from "./components/basics";
import MainPage from "./components/mainPage";
import Island from "./components/sites/island";
import Results from "./components/sites/results";
import { Route, Redirect, Switch } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faYinYang} from "@fortawesome/free-solid-svg-icons"
import LoadingMask from "react-loadingmask"
import BackGround from "./img/background.png"

function App() {

  const yinyang = <FontAwesomeIcon icon={faYinYang} className="rc-loading-spin"  />
  let height = window.innerHeight;

  const [loaded,setLoaded] = useState(false);
  useEffect(() => {
    function setLoading (){
      document.body.style.backgroundImage = `url(${BackGround})`;
      setLoaded(true);}
    setTimeout(setLoading, 3000);
  })

  return(!loaded ? (<LoadingMask  loading={!loaded} className="display-1" style={{fontSize: "1500%"}} indicator={yinyang}><div style={{width: "100%", height: height}}></div></LoadingMask>) :(
    
    <React.Fragment>
      <div  className="container-fluid p-0 m-0" > 
      <Head />
      <Slider />
      <Navbar />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-8 ">
            <Switch>
              <Route path="/mainPage" component={MainPage} />
              <Route path="/history" component={History} />
              <Route path="/map" component={Map} />
              <Route path="/politics" component={Politics} />
              <Route path="/places" component={Places} />
              <Route path="/island/:name" component={Island} />
              <Route path="/search/:word" component={Results} />
              <Redirect from="/" to="/mainPage" exact />
              <Redirect to="/mainPage" />
            </Switch>
          </div>
          <div className="col-lg-4  " id="basics"  >
            <Basics />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </React.Fragment>
    
  )) 
}

export default App;
