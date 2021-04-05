import React from 'react';
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"

function Slider() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img4} alt="Fourth slide"/>
          </div>
        </div>
      </div>
    )
}

export default Slider
