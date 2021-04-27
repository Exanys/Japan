import React, {useState, useEffect} from 'react'
import img from "../img/japan_olg_flag.png"

function MainPage() {
    const [device, setDevice] = useState();
    
    useEffect(() =>{
        const wid = window.screen.width;
       setDevice(wid);
    },[device])

    return (
        <div className="container-fluid justify-center">
        <h1 className={"text-center text-white " + (device > 768 && 'display-1')}>Welcome on the page, where you can find many informations about Japan!</h1>
        <img className="img-fluid m-2 w-100 rounded" src={img} alt="japanFlag"/>
        </div>
    )
}

export default MainPage
