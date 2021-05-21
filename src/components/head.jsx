import React,{useState, useEffect} from 'react'

function Head() {

    const [device, setDevice] = useState();
    
    useEffect(() =>{
        const wid = window.screen.width;
       setDevice(wid);
    },[device])
    return (
        <div className="jumbotron-fluid mb-1 p-4 bg-primary text-center"  >
            <h1 className={"text-white font-weight-bold font-italic display-" + (device<400 ? "3":"1")}><i className="fa fa-globe" aria-hidden="true"></i> JAPAN</h1>
        </div>
    )
}

export default Head;

 