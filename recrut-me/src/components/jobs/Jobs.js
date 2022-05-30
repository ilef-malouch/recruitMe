import React from "react";
import "./Jobs.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Jobs() {
  const [allJobs, setallJobs] = useState([]);

  const getAllJobs = () => {
    axios.get("http://localhost:8000/recrutme/jobs").then((result) => {
     
      setallJobs(result.data);
    });
   
  };

  React.useEffect(() => {
    
    getAllJobs();
    
  },[]);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div>
        <div className="col-md-12">
          <div className="grid search">
            <div className="grid-body">
              <div style={{ display: "flex", alignItems: "stretch" }}>
                <div className="col-md-3">
                  <h2 className="grid-title">
                    <i className="fa fa-filter"></i> Filters
                  </h2>
                  <hr />
                  <h4>Par secteur :</h4>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" /> Santé
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" /> Developpement
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" /> Justice
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" /> Management &
                      Finance
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" /> Restauration
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" /> Architecture
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" />
                      Biologie & Chimie
                    </label>
                  </div>
                  <div className="padding"></div>
                  <h4>Par type de contrat :</h4>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" />
                      Full Time contract
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" />
                      Part Time contract
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" />
                      Fixed Time contract
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" />
                      Temporary contract
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" className="icheck" />
                      Agency contract
                    </label>
                  </div>
                  <div className="padding"></div>
                </div>

                <div className="col-md-9">
                  <h2>
                    <i className="fa fa-file-o"></i> Result
                  </h2>
                  <hr />

                  <div className="padding"></div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <tbody>
                        {allJobs ? (
                          allJobs.map((job) => (
                            <tr>
                              <td className="image">
                                <img
                                  src="https://via.placeholder.com/400x300/FF8C00"
                                  alt=""
                                />
                              </td>
                              <td className="product">
                                <strong>{job.secteur}</strong>
                                <br />
                                {job.description}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <p>Not loaded yet</p>
                        )}
                      </tbody>
                      <div className="padding"></div>
                    </table>
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

export default Jobs;
