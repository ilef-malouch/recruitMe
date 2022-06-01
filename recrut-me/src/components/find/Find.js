import React, { useState } from "react";
import "./Find.css"
import Img1 from "../../images/find/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import Img2 from "../../images/find/firmbee-com-gcsNOsPEXfs-unsplash.jpg";
import Img3 from "../../images/find/img1.jpg";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import Search from "./Search";
import { Carousel } from "react-bootstrap";

export default function Find() {  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }; 
  
      return (
        
        <section className="section"></section>
        /*
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.0e01d33d62802b57e0fdf8ad8c29ca17?rik=44r%2fuGrtxhzIyQ&pid=ImgRaw&r=0"

              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.0e01d33d62802b57e0fdf8ad8c29ca17?rik=44r%2fuGrtxhzIyQ&pid=ImgRaw&r=0"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.0e01d33d62802b57e0fdf8ad8c29ca17?rik=44r%2fuGrtxhzIyQ&pid=ImgRaw&r=0"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> 
    */
     
  );
}
