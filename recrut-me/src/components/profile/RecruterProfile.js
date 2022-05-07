import axios from "axios";
import React from "react";
import "./clientProfile.css";
import { useState, useEffect } from "react";

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
    <div className="maincontainer">
      <div className="maincontainer">
        <div className="container">
          <div className="profile-page tx-13">
            <div className="row">
              <div className="col-12 grid-margin">
                <div className="profile-header">
                  <div className="cover">
                    <div className="gray-shade"></div>

                    <div className="cover-body d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          className="profile-pic"
                          src={recruter.image}
                          alt="profile"
                        />
                        <span className="profile-name">
                          {recruter.compagnyName}
                        </span>
                      </div>
                      <div className="d-none d-md-block">
                        <form
                          action=""
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            name="profile"
                            id="fileUploadField"
                            onChange={(event) => setImage(event)}
                          ></input>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="header-links"></div>
                </div>
              </div>
            </div>
            <div className="row profile-body">
              <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                <div className="card rounded">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="card-title mb-0">Facebook Link:</h6>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="dropdownMenuButton"
                          datatoggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokw="2"
                            strokelinecl="round"
                            strokeLinejoin="round"
                            className="feather feather-more-horizontal icon-lg text-muted pb-3px"
                          >
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokw="2"
                              strokelinecl="round"
                              strokeLinejoin="round"
                              className="feather feather-edit-2 icon-sm mr-2"
                            >
                              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </svg>{" "}
                            <span className="">Edit</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokw="2"
                              strokelinecl="round"
                              strokeLinejoin="round"
                              className="feather feather-git-branch icon-sm mr-2"
                            >
                              <line x1="6" y1="3" x2="6" y2="15"></line>
                              <circle cx="18" cy="6" r="3"></circle>
                              <circle cx="6" cy="18" r="3"></circle>
                              <path d="M18 9a9 9 0 0 1-9 9"></path>
                            </svg>{" "}
                            <span className="">Update</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokw="2"
                              strokelinecl="round"
                              strokeLinejoin="round"
                              className="feather feather-eye icon-sm mr-2"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>{" "}
                            <span className="">View all</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>{recruter.facebookLink}</p>
                    <div className="mt-3">
                      <label className="tx-11 mb-0">LinkedInLink :</label>
                      <p className="text-muted">{recruter.linkedinLink}</p>
                    </div>

                    <div className="mt-3">
                      <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                        Email:
                      </label>
                      <p className="text-muted">{recruter.email}</p>
                    </div>
                    <div className="mt-3">
                      <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                        Domaine :
                      </label>
                      <p className="text-muted">{recruter.domaine}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 col-xl-6 middle-wrapper">
                <div className="row">
                  <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                      <div className="card-header">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <img
                              className="img-xs rounded-circle"
                              src={recruter.image}
                              alt=""
                            />
                            &nbsp;&nbsp;
                            <div className="ml-2">
                              <p> {recruter.compagnyName}</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="dropdownMenuButton2"
                              datatoggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokw="2"
                                strokelinecl="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal icon-lg pb-3px"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton2"
                            >
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokw="2"
                                  strokelinecl="round"
                                  strokeLinejoin="round"
                                  className="feather feather-meh icon-sm mr-2"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="8" y1="15" x2="16" y2="15"></line>
                                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                </svg>{" "}
                                <span className="">Unfollow</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokw="2"
                                  strokelinecl="round"
                                  strokeLinejoin="round"
                                  className="feather feather-corner-right-up icon-sm mr-2"
                                >
                                  <polyline points="10 9 15 4 20 9"></polyline>
                                  <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                </svg>{" "}
                                <span className="">Go to post</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokw="2"
                                  strokelinecl="round"
                                  strokeLinejoin="round"
                                  className="feather feather-share-2 icon-sm mr-2"
                                >
                                  <circle cx="18" cy="5" r="3"></circle>
                                  <circle cx="6" cy="12" r="3"></circle>
                                  <circle cx="18" cy="19" r="3"></circle>
                                  <line
                                    x1="8.59"
                                    y1="13.51"
                                    x2="15.42"
                                    y2="17.49"
                                  ></line>
                                  <line
                                    x1="15.41"
                                    y1="6.51"
                                    x2="8.59"
                                    y2="10.49"
                                  ></line>
                                </svg>{" "}
                                <span className="">Share</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokw="2"
                                  strokelinecl="round"
                                  strokeLinejoin="round"
                                  className="feather feather-copy icon-sm mr-2"
                                >
                                  <rect
                                    x="9"
                                    y="9"
                                    width="13"
                                    height="13"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>{" "}
                                <span className="">Copy link</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        About :<p className="mb-3 tx-14"></p>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="d-flex align-items-center mb-3">
                                Project Status
                              </h5>
                              <p>Web Design</p>
                              <div
                                className="progress mb-3"
                                style={{ height: "5px" }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{
                                    width: "80%",
                                    ariaValuenow: "80",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                ></div>
                              </div>
                              <p>Website Markup</p>
                              <div
                                className="progress mb-3"
                                style={{ height: "5px" }}
                              >
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{
                                    width: "90%",
                                    ariaValuenow: "80",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                ></div>
                              </div>
                              <p>One Page</p>
                              <div
                                className="progress mb-3"
                                style={{ height: "5px" }}
                              >
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{
                                    width: "70%",
                                    ariaValuenow: "80",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                ></div>
                              </div>
                              <p>Mobile Template</p>
                              <div
                                className="progress mb-3"
                                style={{ height: "5px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{
                                    width: "50%",
                                    ariaValuenow: "80",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                ></div>
                              </div>
                              <p>Backend API</p>
                              <div
                                className="progress"
                                style={{ height: "5px" }}
                              >
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{
                                    width: "60%",
                                    ariaValuenow: "80",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12"></div>
                      </div>
                    </div>
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
