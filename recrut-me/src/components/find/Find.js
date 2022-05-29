import React from "react";
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

export default function Find() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement
            src={Img1}
            style={{ height: "700px" }}
            alt="..."
          />

          <MDBCarouselCaption>
            <h3 style={{ fontSize: "40px" }}>RecrutMe</h3>
            <div style={{ paddingLeft: "400px" }}>
              <Search />
            </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src={Img2}
            style={{ height: "700px" }}
            alt="..."
          />
          <MDBCarouselCaption>
            <h3 style={{ fontSize: "40px" }}>RecrutMe</h3>
            <div style={{ paddingLeft: "400px" }}>
              <Search />
            </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src={Img3}
            style={{ height: "700px" }}
            alt="..."
          />
          <MDBCarouselCaption>
            <h3 style={{ fontSize: "40px" }}>RecrutMe</h3>
            <div style={{ paddingLeft: "400px" }}>
              <Search />
            </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
