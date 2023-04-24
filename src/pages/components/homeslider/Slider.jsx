import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';
import {useState, useEffect} from "react"

function Slider() {
  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 956) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  handleResize()
})

  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={isMobile?"./images/pslide1.jpg":"./images/slide1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption className="corousel-wrapper">
          <div className="corousel-text">
            <h5>Right from your phone, you can own cattle</h5>
            <p>From the comfort of your home, you can own cattle and become a virtual farmer, exciting!!!</p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={isMobile?"./images/pslide2.jpg":"./images/slide2.jpg"}
          alt="Second slide"
        />
        <Carousel.Caption className="corousel-wrapper">
          <div className="corousel-text">
            <h5>Buy now, We take care of it!!</h5>
            <p>Just like the stock market, you can buy cattle now and sell anytime. We will take care of the growth of the cattle.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={isMobile?"./images/pslide3.jpg":"./images/slide3.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption className="corousel-wrapper">
          <div className="corousel-text">
            <h5>Own cattle virtually from anywhere </h5>
            <p>No farm, no problem. No land, no problem. Own cattle virtually from anywhere.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;