import React from 'react';
import './Quiz.css';
import {MDBBtn} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';

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
                    {/* <a href={props.link} className="btn btn-success btn-sm active" role="button" aria-pressed="true">Quiz</a> */}
                    <Link  to=  {`/quizes/${props.name}`}className="btn  btn-sm active"  style={{backgroundColor:"#1c8090",color:"white",margin:"1rem"}}>Quiz</Link>
                </div>
            </div>
        
   
    );
};

export default Quiz;