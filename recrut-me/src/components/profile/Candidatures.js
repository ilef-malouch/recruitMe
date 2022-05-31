import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


export default function Candidatures() {
  const [candidas, setCandidas] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("this ",id);
    axios.get(`http://localhost:8000/recrutme/authrecruter/candidat/${id}`)
      .then(response => {
        setCandidas(response.data); console.log("nice" + candidas);
      }
      )
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="container">
      {
        
        candidas.length ?
      candidas.map(candid =>
        <div className="container" style={{ marginTop: "25px", marginBottom: "25px" }}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{candid.email}</MDBCardTitle>
              <MDBCardText> {candid.phone}     </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      ): null }


    </div>
  )
}
