import React from 'react';
import Img from '../../../images/quiz/angular.png';
import {MDBRadio, MDBCard} from "mdb-react-ui-kit";

const AngularQuiz = () => {
    var count=0;
    var mark1=0;
    var mark2=0;
    var mark3=0;
    var mark4=0;
    var mark5=0;
    var path='#'

    const onClick1True = () => {
        mark1=1;
        console.log(mark1);
    }
    const onClick1False= () => {
        mark1=0;
        console.log(mark1)
    }
    const onClick2True = () => {
        mark2=1;
        console.log(mark2)
    }
    const onClick2False= () => {
        mark2=0;
    }
    const onClick3True = () => {
        mark3=1;
        console.log(mark3)
    }
    const onClick3False= () => {
        mark3=0;

    }
    const onClick4True = () => {
        mark4=1;
        console.log(mark4)
    }
    const onClick4False= () => {
        mark4=0;
    }
    const onClick5True = () => {
        mark5=1;
        console.log(mark5)
    }
    const onClick5False= () => {
        mark5=0;
    }

    const onSubmit = () => {
        count+=mark1+ mark2+ mark3 + mark4+ mark5;
        if(count >= 3){
            console.log( 'votre score est' + count  + " vous avez reussi")
            alert('your score is ' + count  + "/5 . Good job");
            //path='http://localhost:3000/quizes/angular/success'
        }
        else {
            console.log('votre score est '+count + " :echec")
            alert('your score is ' + count  + "/5 . Try again");
           // path='http://localhost:3000/quizes/angular/fail'
        }
    }

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
                    <br/><br/>
                    <div style={{marginLeft: "15%"}}>
                    <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >AngularJs is based on _______?</h4>
                            <div>
                            <MDBRadio name='aa' id='q1' label='dsds' />
                        <MDBRadio name='aa' id='q2' label='dsqd'  />
                        <MDBRadio name='aa' id='q3' label='dsqdsqd'  />  
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            <h4 >What is the correct way to apply multiple filters in AngularJs?</h4>
                            <div>
                            <MDBRadio name='bb' id='q1' label='{{ expression | filter1 | filter2 | … }}' onClick={()=>onClick2True()} />
                            <MDBRadio name='bb' id='q2' label='{{ expression | {filter1} | {filter2} | … }}' onClick={()=>onClick2False()}/>
                            <MDBRadio name='bb' id='q3' label='{{ expression – {filter1} – {filter2} – … }}' onClick={()=>onClick2False()} />
                            <MDBRadio name='bb' id='q4' label='{{ {filter1} | {filter2} | … – expression}}' onClick={()=>onClick2False()}/>
                        </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            <h4 >AngularJS is entirely based on HTML and JavaScript?</h4>
                            <div>
                                <MDBRadio name='cc' id='q1' label='True' onClick={()=>onClick3True()} />
                                <MDBRadio name='cc' id='q2' label='False' onClick={()=>onClick3False()} />
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >Which of the following directive is used to start an angularJS application?</h4>
                            <div>
                            <MDBRadio name='dd' id='q1' label='ng-start'onClick={()=>onClick4False()} />
                        <MDBRadio name='dd' id='q2' label=' ng-begin' onClick={()=>onClick4False()} />
                        <MDBRadio name='dd' id='q3' label='ng-app' onClick={()=>onClick4True()}/>
                        <MDBRadio name='dd' id='q3' label=' None of the Above' onClick={()=>onClick4False()}/>
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4>AngularJs is based on _______?</h4>
                            <div>
                            <MDBRadio name='ee' id='q1' label='MVC Architecture' onClick={()=>onClick5False()}/>
                        <MDBRadio name='ee' id='q2' label='MVVM Architecture' onClick={()=>onClick5True()}/>
                        <MDBRadio name='ee' id='q3' label='Pattern Decorator' onClick={()=>onClick5False()}/>
                        <MDBRadio name='ee' id='q4' label='Pattern Observer' onClick={()=>onClick5False()} /> 
                            </div>
                        </MDBCard>
                    <br/>
                    <br/>
                    
                    <a style={{marginLeft:"30%"}} href='#' class="btn btn-success btn-md active" role="button" aria-pressed="true" onClick={()=>onSubmit()}>Submit</a>
                    </div>
                    
                </div>
            </div>
            <div className="row text-center">
        
            </div>
        </div>
    );
};

export default AngularQuiz;