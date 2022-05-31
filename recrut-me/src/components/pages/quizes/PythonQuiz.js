import React from 'react';
import Img from '../../../images/quiz/python.png';
import {MDBRadio, MDBCard} from "mdb-react-ui-kit";

const PythonQuiz = () => {
    return (
        <div className="container py-5">
            <div className="row mb-4">
                
                <div className="">
                    <img
                    src={Img}
                    alt="logo"
                    width="120"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    style={{marginLeft: "45%"}} />
                    <h2
                    className="font-weight-light"
                    style={{ color: "#1c8090", fontSize: "40px", paddingLeft: "40%", paddingButtom:100 }}
                    >
                        Python Quiz:
                    </h2>
                    <br/><br/>
                    <p style={{ color: "black", fontSize: "18px" }}>
                    Python has become one of the most popular programming languages in the world in recent years. It's used in everything from machine learning to building websites and software testing. It can be used by developers and non-developers alike.</p>
                    <br/><br/>
                    <div style={{marginLeft: "15%"}}>
                    <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >Are String objects mutable?</h4>
                            <div>
                            <MDBRadio name='aa' id='q1' label='Yes' />
                            <MDBRadio name='aa' id='q2' label='No'  />
                            </div>
                        </MDBCard>
                            <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >Which of the following statements is correct about Python?</h4>
                            <div>
                            <MDBRadio name='bb' id='q1' label='It automatically supports the garbage collector.' />
                        <MDBRadio name='bb' id='q2' label='It can be easily integrated with C, C++, COM, ActiveX, CORBA and Java.' />
                        <MDBRadio name='bb' id='q3' label='Both A and B are true' />
                        <MDBRadio name='bb' id='q4' label='All answers are true' />
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >In the following code n = '2' , n is a _______?:</h4>
                            <div>
                            <MDBRadio name='cc' id='q1' label='char' />
                        <MDBRadio name='cc' id='q2' label='integer' />
                        <MDBRadio name='cc' id='q2' label='string' />
                        <MDBRadio name='cc' id='q2' label='string' />
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >Which is not a complex number?</h4>
                            <div>
                                <MDBRadio name='dd' id='q1' label='z = 1 + 2j' />
                                <MDBRadio name='dd' id='q2' label='z = 1 + 2l' />
                                <MDBRadio name='dd' id='q3' label='z = 1 + 2J' />
                                <MDBRadio name='dd' id='q3' label='z = complex(1, 2)' />
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4>What will be the output of the following code? [ (a,b) for a in range(3) for b in range(a) ]</h4>
                            <div>
                                <MDBRadio name='ee' id='q1' label='[(1,0),(2,0),(2,1)]' />
                                <MDBRadio name='ee' id='q2' label='[(1,0),(2,1),(2,1)]' />
                                <MDBRadio name='ee' id='q3' label='[(0,0),(1,1),(2,2)]' />
                                <MDBRadio name='ee' id='q4' label='[(1,0),(2,1),(3,2)]' /> 
                            </div>
                        </MDBCard>
                    <br/>
                    <br/>
                    
                    <a style={{marginLeft:"30%"}} href='#' class="btn btn-success btn-md active" role="button" aria-pressed="true">Submit</a>
                  
                    </div>
                    
                </div>
            </div>
            <div className="row text-center">
        
            </div>
        </div>
    );
};

export default PythonQuiz;