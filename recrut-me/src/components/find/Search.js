import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <MDBCol md="6">
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span
              className="input-group-text lighten-3"
              style={{ backgroundColor: "#ad0e88" }}
              id="basic-text1"
            >
              <MDBIcon className="text-white" icon="search" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Find the best job for you ...."
            aria-label="Search"
            style={{ backgroundColor: "#eee" }}
          />
        </div>
      </MDBCol>
    );
  }
}

export default Search;
