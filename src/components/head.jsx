import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDAndD} from "@fortawesome/free-brands-svg-icons"

function Head() {

    const [device, setDevice] = useState();
    
    useEffect(() =>{
        const wid = window.screen.width;
       setDevice(wid);
    },[device])
    return (
        <div className="jumbotron-fluid mb-1 pb-4 pt-4 bg-primary text-center"  >
            <h1 className={"text-white font-weight-bold font-italic display-" + (device<400 ? "3":"1")}><FontAwesomeIcon icon={faDAndD}/> JAPAN</h1>
        </div>
    )
}

export default Head;

 