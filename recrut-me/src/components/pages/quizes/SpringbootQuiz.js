import React from 'react';
import Img from '../../../images/quiz/springboot.png';
import {MDBRadio, MDBCard} from "mdb-react-ui-kit";
const SpringbootQuiz = () => {
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
                        Spring Boot Quiz:
                    </h2>
                    <br/><br/>
                    <p style={{ color: "black", fontSize: "18px" }}>
                    Spring Boot is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications. This chapter will give you an introduction to Spring Boot and familiarizes you with its basic concepts.</p>
                    <br/><br/>
                    <div style={{marginLeft: "15%"}}>
                        <MDBCard className='w-75' style={{padding:20}}>
                            <h4 >What is Dependency Injection?</h4>
                            <div>
                                <MDBRadio name='aa' id='q1' label='A design pattern which implements Inversion of Control for software applications.' />
                                <MDBRadio name='aa' id='q2' label='One of the spring module.'  />
                                <MDBRadio name='aa' id='q3' label=' A technique to get dependencies of any project.'  />
                                <MDBRadio name='aa' id='q3' label='  Used to promote tight coupling in code.'  />
                            </div>
                        </MDBCard>
                        <br/> <br/>

                        <MDBCard className='w-75' style={{padding:20}}>
                            <h4 >What is the correct syntax for annotation wiring?</h4>
                            <div>
                                <MDBRadio name='bb' id='q1' label=' <annotation-context:config /> to bean configuration.' />
                                <MDBRadio name='bb' id='q2' label='<annotation-config /> to bean configuration.' />
                                <MDBRadio name='bb' id='q3' label=' <annotation-context-config /> to bean configuration.' />
                                <MDBRadio name='bb' id='q4' label=' <context:annotation-config/> to bean configuration.' />
                            </div>
                        </MDBCard>
                        <br/> <br/>

                        <MDBCard className='w-75' style={{padding:20}}>
                            <h4 >Annotation for Hibernate exceptions to be translated into Spring’s DataAccessException for consistent exception handling</h4>
                            <div>
                                <MDBRadio name='cc' id='q1' label='@Translation' />
                                <MDBRadio name='cc' id='q2' label='@Repo' />
                                <MDBRadio name='cc' id='q2' label='@Repository' />
                                <MDBRadio name='cc' id='q2' label=' None of the above' />
                            </div>
                        </MDBCard>
                        <br/> <br/>

                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >What is the default scope of the beans?</h4>
                            <div>
                                <MDBRadio name='dd' id='q1' label='Prototype' />
                                <MDBRadio name='dd' id='q2' label='Session' />
                                <MDBRadio name='dd' id='q3' label='Request' />
                                <MDBRadio name='dd' id='q3' label='Singleton' />
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4>What is Bean in Spring?</h4>
                            <div>
                                <MDBRadio name='ee' id='q1' label='Component' />
                                <MDBRadio name='ee' id='q2' label='Object' />
                                <MDBRadio name='ee' id='q3' label='Class' />
                                <MDBRadio name='ee' id='q4' label='Container' />
                            </div>
                        </MDBCard>
                    <br/>
                    <br/>
                    
                    <a style={{marginLeft:"30%"}} href='#' class="btn btn-success btn-md active" role="button" aria-pressed="true">Submit</a>
                    
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
};

export default SpringbootQuiz;