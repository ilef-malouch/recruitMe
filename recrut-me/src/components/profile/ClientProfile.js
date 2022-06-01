import axios from "axios";
import React from "react";
import "./clientProfile.css";
import { useState, useEffect } from "react";

export default function ClientProfile() {
  const [client, setClient] = useState({
    firstName: "",
    familyName: "",
    birthday: "",
    domaine: "",
    githubLink: "",
    linkedinLink: "",
    email: "",
    image: "",
    cv: "",
  });

  const getProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/recrutme/authclient/clientInfo/" + token)
      .then((result) => {
        console.log(result.data.cv);
        if (result.data.image === undefined) {
          setClient({
            firstName: result.data.firstName,
            familyName: result.data.familyName,
            birthday: result.data.birthday,
            domaine: result.data.domaine,
            githubLink: result.data.githubLink,
            linkedinLink: result.data.linkedinLink,
            email: result.data.email,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            cv: result.data.cv,
          });
        } else {
          setClient({
            firstName: result.data.firstName,
            familyName: result.data.familyName,
            birthday: result.data.birthday,
            domaine: result.data.domaine,
            githubLink: result.data.githubLink,
            linkedinLink: result.data.linkedinLink,
            email: result.data.email,
            image: result.data.image,
            cv: result.data.cv,
          });
        }
      });
  };

  const setImage = (event) => {
    const token = localStorage.getItem("token");
    const fd = new FormData();
    const file = event.target.files[0];
    fd.append("file", file, file.name);
    console.log("phooto");
    axios
      .post("http://localhost:8000/recrutme/authclient/picture/" + token, fd)
      .then((result) => {
        client.image = result.data.image;
      });
  };
  const setCv = (event) => {
    console.log("cc");
    const token = localStorage.getItem("token");
    const fd = new FormData();
    const file = event.target.files[0];
    fd.append("file", file, file.name);
    console.log("phooto");
    axios
      .post("http://localhost:8000/recrutme/authclient/cv/" + token, fd)
      .then((result) => {
        client.cv = result.data.cv;
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
                src={client.image}
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
            <h4 className="" style={{ color: "black" }}>
              {client.familyName} {client.firstName}
            </h4>
            <p className="text-muted">{client.domaine}</p>

            <div className="text-left mt-3">
              <p className="text-muted mb-2 font-13">
                <strong>Full Name :</strong>{" "}
                <span className="ml-2">
                  {client.familyName} {client.firstName}
                </span>
              </p>

              <p className="text-muted mb-2 font-13">
                <strong>Githublink :</strong>
                <span className="ml-2">{client.githubLink}</span>
              </p>

              <p className="text-muted mb-2 font-13">
                <strong>Email :</strong>{" "}
                <span className="ml-2 ">{client.email}</span>
              </p>

              <p className="text-muted mb-1 font-13">
                <strong>Birthday :</strong>{" "}
                <span className="ml-2">{client.birthday}</span>
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
              Skills
            </h4>
            <p className="mb-3">{client.domaine}</p>
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
                  Experience
                </h5>

                <h5 className="mb-3 mt-4 text-uppercase">
                  <i className="mdi mdi-cards-variant mr-1"></i>
                  Projects
                </h5>
                <div className="table-responsive">
                  <div className="row">
                    <p>Your CV :</p>
                    <form action="" method="post" enctype="multipart/form-data">
                      <input
                        type="file"
                        name="cv"
                        id="fileUploadField"
                        onChange={(event) => setCv(event)}
                      ></input>
                    </form>
                    <iframe
                      src={client.cv}
                      frameBorder="0"
                      scrolling="auto"
                      height="700px"
                      width="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
