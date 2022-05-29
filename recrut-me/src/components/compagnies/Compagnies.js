import React from "react";
import "./Compagnies.css";

export default function Compagnies() {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="">
          <h2
            className="font-weight-light"
            style={{ color: "#1c8090", fontSize: "40px", paddingLeft: "20%" }}
          >
            Compagnies with constant job offers :
          </h2>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Linedata_Logo.jpg/1200px-Linedata_Logo.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0"></h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://startingfrance.com/sf2020/wp-content/uploads/2019/10/expensya-1.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Samuel Hardy</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="http://assets.stickpng.com/images/58429064a6515b1e0ad75aba.png"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Tom Sunderland</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://play-lh.googleusercontent.com/5mIUQqC5vuuAg0mCf84ScqVPlSJLUJcsPDTq5MbYjh5Yl-kLHDLqGSd3-0GbQeyCyVY"
              alt=""
              width="80"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">John Tarly</h5>
            <span className="small text-uppercase text-muted">
              CEO - Founder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
