import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"

function Slider() {
    return (
      <Carousel>
        <Carousel.Item>
        <img className="d-block w-100" style={{height:"500px"}} src={img1} alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={img2} style={{height:"500px"}} alt="Second slide"/>

          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={img3} style={{height:"500px"}} alt="Third slide"/>

          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={img4} style={{height:"500px"}} alt="Fourth slide"/>

          </Carousel.Item>

      </Carousel>

    )
}

export default Slider

