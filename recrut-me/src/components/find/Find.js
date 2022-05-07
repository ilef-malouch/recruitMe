import React from 'react';
import Img1 from '../../images/find/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg';
import Img2 from '../../images/find/maranda-vandergriff-7aakZdIl4vg-unsplash.jpg';
import Img3 from '../../images/find/mediensturmer-aWf7mjwwJJo-unsplash.jpg';
import { MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Find() {
  return (
    <MDBCarousel showControls showIndicators >
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={Img1} style={{height:'600px'}} alt='...'  />
          <MDBCarouselCaption>
            <h3 style={{color:"black"}}>RecrutMe</h3>
            <h5 style={{color:"black"}}>Find a job that suits you...</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={Img2} style={{height:'600px'}} alt='...'  />
          <MDBCarouselCaption>
            <h3 style={{color:"black"}}>RecrutMe</h3>
            <h5 style={{color:"black"}}>Find a job that suits you...</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={Img3} style={{height:'600px'}} alt='...' />
          <MDBCarouselCaption>
          <h3>RecrutMe</h3>
          <h5>Find a job that suits you...</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}