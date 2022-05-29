import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="" style={{ paddingTop: "5px" }}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6
                style={{ color: "#ad0e88" }}
                className="text-uppercase fw-bold mb-4"
              >
                <i className="fas fa-gem me-3"></i>RecrutMe
              </h6>
              <p>
                RecrutMe helps you find you dream job and build your profional
                career.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                style={{ color: "#ad0e88" }}
                className="text-uppercase fw-bold mb-4"
              >
                Products
              </h6>
              <p>
                <a
                  href="http://localhost:8000/recrutme/"
                  className="text-reset"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="http://localhost:8000/recrutme/tips"
                  className="text-reset"
                >
                  Tips
                </a>
              </p>
              <p>
                <a
                  href="http://localhost:8000/recrutme/jobs"
                  className="text-reset"
                >
                  Jobs
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                style={{ color: "#ad0e88" }}
                className="text-uppercase fw-bold mb-4"
              >
                {" "}
                Contact
              </h6>
              <p>
                <i className="fas fa-home me-3"></i> Centre urbain nord.
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@recrutme.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 21627137886
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#!">
          recrutMe
        </a>
      </div>
    </MDBFooter>
  );
}
