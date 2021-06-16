import React,{useState, useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"

function Slider() {

  const [device, setDevice] = useState();
    
  useEffect(() =>{
      const wid = window.screen.width;
     setDevice(wid);
  },[device])

    return (
      <Carousel>
        <Carousel.Item>
        <img className="d-block w-100" style={{height: (device<768 ? "150":"500")+"px"}} src={img1} alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={img2} style={{height: (device<768 ? "150":"500")+"px"}} alt="Second slide"/>

          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={img3} style={{height: (device<768 ? "150":"500")+"px"}} alt="Third slide"/>

          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={img4} style={{height: (device<768 ? "150":"500")+"px"}} alt="Fourth slide"/>

          </Carousel.Item>

      </Carousel>

    )
}

export default Slider

