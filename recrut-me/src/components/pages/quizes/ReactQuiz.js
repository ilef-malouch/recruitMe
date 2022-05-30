import React from 'react';
import Img from '../../../images/quiz/react.png';
import {MDBRadio, MDBBtn} from "mdb-react-ui-kit";

const ReactQuiz = () => {
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
                        React Quiz:
                    </h2>
                    <br/><br/>
                    <p style={{ color: "black", fontSize: "18px" }}>
                    React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
                    React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.
                    </p>
                    <p>  </p>
                    <div style={{marginLeft: "5%"}}>
                    <h4>Who develops React.js?</h4>
                    <div>
                        <MDBRadio name='aa' id='q1' label='Google' />
                        <MDBRadio name='aa' id='q2' label='Twitter'  />
                        <MDBRadio name='aa' id='q3' label='Apple'  />
                        <MDBRadio name='aa' id='q4' label='Facebook'  />  

                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>Props are __________ in other components</h4>
                    <div>
                        <MDBRadio name='bb' id='q1' label='Injected' />
                        <MDBRadio name='bb' id='q2' label='methods' />
                        <MDBRadio name='bb' id='q3' label='Both A and B are true' />
                        <MDBRadio name='bb' id='q4' label='None of these answers are true' />
                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>Props in React ful________</h4>
                    <div>
                        <MDBRadio name='cc' id='q1' label='Be modified inside the component' />
                        <MDBRadio name='cc' id='q2' label='Not to be modified in the component' />
                        <MDBRadio name='cc' id='q3' label='Be modified in other component' />
                        <MDBRadio name='cc' id='q4' label='None of these answers are true' />
                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>Which port is the default port where the webpack-dev-server will run?</h4>
                    <div>
                        <MDBRadio name='dd' id='q1' label='8000' />
                        <MDBRadio name='dd' id='q2' label='3000' />
                        <MDBRadio name='dd' id='q3' label='8080' />
                        <MDBRadio name='dd' id='q3' label='3306' />
                    </div>
                    <p>  </p>
                    <p>  </p>
                    <h4>None of these answers are trueWhat are the two ways that data is processed in React?</h4>
                    <div>
                        <MDBRadio name='ee' id='q1' label='state and props' />
                        <MDBRadio name='ee' id='q2' label='services and components' />
                        <MDBRadio name='ee' id='q3' label='state and services' />
                        <MDBRadio name='ee' id='q4' label='props and components' />
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

export default ReactQuiz;