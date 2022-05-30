import React from 'react';
import './Quiz.css';
import {MDBBtn} from 'mdb-react-ui-kit'

const Quiz = (props) => {
    return (
        
            <div className="col-xl-3 col-sm-6 mb-5" style={{paddingTop:50}}>
                <div className="bg-white rounded shadow-sm py-5 px-4" >
                    <img
                        src={props.img}
                        alt="logo"
                        width="100"
                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    />
                    <h5 className="mb-0">{props.name}</h5>
                    <span className="small text-uppercase text-muted">
                        {props.details}
                    </span>
                    <br/>
                    <MDBBtn size='sm' href={props.link} active  outline rounded className='mx-2' color='success'>
                        Quiz
                    </MDBBtn>                
                </div>
            </div>
        
   
    );
};

export default Quiz;