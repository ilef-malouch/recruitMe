import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Img from "./candid.jpg";
import Img1 from "./iconcand.png";
import { Link } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

export default function Candidatures() {
  const [candidas, setCandidas] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("this ", id);
    axios
      .get(`http://localhost:8000/recrutme/authrecruter/candidat/${id}`)
      .then((response) => {
        setCandidas(response.data);
        console.log("nice" + candidas);
      })
      .catch((err) => console.log(err));
  }, []);

  const getProfile = (candidat) => {
    console.log(candidas.email);
    localStorage.setItem("candidatEmail", candidat.email);
  };
  return (
    <div>
      <img
        src={Img}
        className="img-fluid shadow-4"
        alt="..."
        style={{ width: 1900, height: 300 }}
      />
      <div className="container">
        {candidas.length
          ? candidas.map((candid) => (
              <div
                className="container"
                style={{ marginTop: "25px", marginBottom: "25px" }}
              >
                <MDBCard>
                  <MDBCardBody>
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={Img1} />
                      </div>
                      <div className="col-lg-6">
                        <MDBCardTitle
                          style={{
                            marginRight: "550px",
                            color: "blach",
                            fontFamily: "Oswald",
                          }}
                        >
                          <div style={{ display: "flex" }}>
                            <b style={{ color: "#00adca", marginRight: 15 }}>
                              Email:{" "}
                            </b>
                            {candid.email}
                          </div>
                        </MDBCardTitle>
                        <MDBCardText>
                          <b style={{ color: "#00adca", marginRight: 15 }}>
                            Phone Number:{" "}
                          </b>{" "}
                          {candid.phone}
                        </MDBCardText>
                      </div>
                      <div className="col-md-2">
                        <Link
                          to={`/candidatEmail`}
                          style={{ color: "#ad0e88", fontWeight: "bolder" }}
                          onClick={() => {
                            getProfile(candid);
                          }}
                        >
                          See profile
                        </Link>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
