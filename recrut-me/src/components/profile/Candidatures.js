import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


export default function Candidatures() {
  return (
    <div className="container" style={{marginTop:"25px",marginBottom:"25px"}}>
        <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </div>
  )
}
