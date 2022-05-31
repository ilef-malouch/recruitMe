import axios from "axios";
import React from "react";
import "./clientProfile.css";
import { useState, useEffect } from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


export default function RecruterProfile() {
  
  const [recruter, setRecruter] = useState({
    compagnyName: "",
    idCompagny: "",
    domaine: "",
    facebookLink: "",
    linkedinLink: "",
    email: "",
    image: "",
  });

  const getProfile = () => {
    const token = localStorage.getItem("token");
    console.log("couocu");
    axios
      .get("http://localhost:8000/recrutme/authrecruter/recruterInfo/" + token)
      .then((result) => {
        console.log("11");
        console.log(result);
        if (result.data.image === undefined) {
          setRecruter({
            compagnyName: result.data.compagnyName,
            idCompagny: result.data.idCompagny,
            domaine: result.data.domaine,
            facebookLink: result.data.facebookLink,
            linkedinLink: result.data.linkedinLink,
            email: result.data.email,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
          });
        } else {
          setRecruter({
            compagnyName: result.data.compagnyName,
            compagnyId: result.data.compagnyId,
            domaine: result.data.domaine,
            facebookLink: result.data.facebookLink,
            linkedinLink: result.data.linkedinLink,
            email: result.data.email,
            image: result.data.image,
          });
        }
      });
  };

  const setImage = (event) => {
    const token = localStorage.getItem("token");
    const fd = new FormData();
    const file = event.target.files[0];
    fd.append("file", file, file.name);

    axios
      .post("http://localhost:8000/recrutme/authrecruter/picture/" + token, fd)
      .then((result) => {
        recruter.image = result.data.image;
      });
  };

  useEffect(() => {
    getProfile();
  });

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <div className="col-lg-5 col-xl-4">
          <div className="card-box text-center">
            <div>
              <img
                className="rounded-circle avatar-xl img-thumbnail"
                src={recruter.image}
                alt="profile"
                style={{ height: "10rem", width: "10rem" }}
              />
            </div>
            <div className="d-none d-md-block">
              <form action="" method="post" enctype="multipart/form-data">
                <input
                  type="file"
                  name="profile"
                  id="fileUploadField"
                  onChange={(event) => setImage(event)}
                ></input>
              </form>
            </div>
            <br />
            <h4 className="mb-0" style={{ color: "black" }}>
              {recruter.compagnyName}
            </h4>
            <p className="text-muted">@{recruter.domaine}</p>

            <div className="text-left mt-3">
              <p className="text-muted mb-2 font-13">
                <strong>compagnyName :</strong>{" "}
                <span className="ml-2">{recruter.compagnyName} </span>
              </p>

              <p className="text-muted mb-2 font-13">
                <strong>FacebookLink :</strong>
                <span className="ml-2">{recruter.facebookLink}</span>
              </p>

              <p className="text-muted mb-2 font-13">
                <strong>LinkedinLink :</strong>
                <span className="ml-2">{recruter.linkedinLink}</span>
              </p>

              <p className="text-muted mb-2 font-13">
                <strong>Email :</strong>
                <span className="ml-2 ">{recruter.email}</span>
              </p>
            </div>

            <ul className="social-list list-inline mt-3 mb-0">
              <li className="list-inline-item">
                <a
                  href="javascript: void(0);"
                  className="social-list-item border-purple text-purple"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="javascript: void(0);"
                  className="social-list-item border-danger text-danger"
                >
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="javascript: void(0);"
                  className="social-list-item border-info text-info"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="javascript: void(0);"
                  className="social-list-item border-secondary text-secondary"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="card-box">
            <h4 className="header-title" style={{ color: "black" }}>
              Domaine:
            </h4>
            <p className="mb-3">{recruter.domaine}</p>
          </div>
        </div>

        <div className="col-lg-8 col-xl-8">
          <div className="card-box">
            <ul className="nav nav-pills navtab-bg">
              <li className="nav-item">
                <a
                  href="#about-me"
                  data-toggle="tab"
                  aria-expanded="true"
                  className="nav-link ml-0 active"
                  style={{ backgroundColor: "#ad0e88", color: "white" }}
                >
                  <i className="mdi mdi-face-profile mr-1"></i>About Me
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane show active" id="about-me">
                <h5 className="mb-5 text-uppercase">
                  <i className="mdi mdi-briefcase mr-1"></i>
                  Offre :
                </h5>

                <h5 className="mb-3 mt-4 text-uppercase">
                  <i className="mdi mdi-cards-variant mr-1"></i>
                  Projects
                </h5>
                <div>
                    <MDBCard>
                      <MDBCardBody>
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                        <a href='http://localhost:3000/candidatures' className="btn btn-sm active" style={{backgroundColor:"#ad0e88",color:"white"}} role="button" aria-pressed="true">Voir candidature</a>
                      </MDBCardBody>
                    </MDBCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
