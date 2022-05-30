import React from 'react';
import Img from '../../../images/quiz/angular.png';
import {MDBRadio, MDBBtn} from "mdb-react-ui-kit";

const AngularQuiz = () => {
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
                        Angular Quiz:
                    </h2>
                    <br/><br/>
                    <p style={{ color: "black", fontSize: "18px" }}>
                    With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.
                    </p>
                    <p>  </p>
                    <div style={{marginLeft: "5%"}}>
                    <h4>AngularJs is based on _______?</h4>
                    <div>
                        <MDBRadio name='aa' id='q1' label='dsds' />
                        <MDBRadio name='aa' id='q2' label='dsqd'  />
                        <MDBRadio name='aa' id='q3' label='dsqdsqd'  />

                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>What is the correct way to apply multiple filters in AngularJs?</h4>
                    <div>
                        <MDBRadio name='bb' id='q1' label='{{ expression | filter1 | filter2 | … }}' />
                        <MDBRadio name='bb' id='q2' label='{{ expression | {filter1} | {filter2} | … }}' />
                        <MDBRadio name='bb' id='q3' label='{{ expression – {filter1} – {filter2} – … }}' />
                        <MDBRadio name='bb' id='q4' label='{{ {filter1} | {filter2} | … – expression}}' />
                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>AngularJS is entirely based on HTML and JavaScript?</h4>
                    <div>
                        <MDBRadio name='cc' id='q1' label='True' />
                        <MDBRadio name='cc' id='q2' label='False' />
                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>
What is the correct way to apply multiple filters in AngularJs?</h4>
                    <div>
                        <MDBRadio name='dd' id='q1' label='{{ expression | filter1 | filter2 | … }}' />
                        <MDBRadio name='dd' id='q2' label='{{ expression | {filter1} | {filter2} | … }}' />
                        <MDBRadio name='dd' id='q3' label='{{ expression – {filter1} – {filter2} – … }}' />
                        <MDBRadio name='dd' id='q3' label='{{ {filter1} | {filter2} | … – expression}}' />
                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>AngularJs is based on _______?</h4>
                    <div>
                        <MDBRadio name='ee' id='q1' label='MVC Architecture' />
                        <MDBRadio name='ee' id='q2' label='MVVM Architecture' />
                        <MDBRadio name='ee' id='q3' label='Pattern Decorator' />
                        <MDBRadio name='ee' id='q4' label='Pattern Observer' />
                    </div>
                    <br/>
                    
                    <MDBBtn size='lg' href='#' active  outline rounded className='mx-2' color='success'>
                        Submit
                    </MDBBtn>  
                    </div>
                    
                </div>
            </div>
            <div className="row text-center">
        
            </div>
        </div>
    );
};

export default AngularQuiz;