import React from 'react'
import img from "../img/japan_olg_flag.png"

function mainPage() {
    return (
        <div className="container-fluid justify-center">
        <h1 className="display-1 text-center text-white">Welcome on the page, where you can find many informations about Japan!</h1>
        <img className="img-fluid m-2 w-100 rounded" src={img} />
        </div>
    )
}

export default mainPage
