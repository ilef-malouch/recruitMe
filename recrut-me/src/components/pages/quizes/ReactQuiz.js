import React from 'react';
import Img from '../../../images/quiz/react.png';
import {MDBRadio, MDBBtn} from "mdb-react-ui-kit";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { useState } from 'react';

const ReactQuiz = () => {

    var count=0;
    var mark1=0;
    var mark2=0;
    var mark3=0;
    var mark4=0;
    var mark5=0;

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
        }
        else {
            console.log('votre score est '+count + " :echec")
        }
    }


    /*const correctValue=()=>{
        setCount(count+1);
    }*/
    /*const wrongValue=()=>{
        setCount(count-1);
    }*/

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
                    <br/><br/>
                    <div style={{marginLeft: "15%"}}>

                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >Who develops React.js?</h4>
                            <div>
                                <MDBRadio name='aa' id='q1' label='Google' onClick={(event)=>{onClick1False();console.log(event)}} />
                                <MDBRadio name='aa' id='q2' label='Twitter' onClick={()=>onClick1False()}  />
                                <MDBRadio name='aa' id='q3' label='Apple' onClick={()=>onClick1False()} />
                                <MDBRadio name='aa' id='q4' label='Facebook' onClick={()=>{onClick1True()}} />  
                            </div>
                        </MDBCard>
                            <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >Props are __________ in other components</h4>
                            <div>
                                <MDBRadio name='bb' id='q1' label='Injected' onClick={()=>onClick2True()}/>
                                <MDBRadio name='bb' id='q2' label='methods' onClick={()=>onClick2False()} />
                                <MDBRadio name='bb' id='q3' label='Both A and B are true' onClick={()=>onClick2False()} />
                                <MDBRadio name='bb' id='q4' label='None of these answers are true' onClick={()=>onClick2False()} />
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >In React, what is used to transmit data to an external component?</h4>
                            <div>
                                <MDBRadio name='cc' id='q1' label='At setState' onClick={()=>onClick3False()}/>
                                <MDBRadio name='cc' id='q2' label='render with arguments' onClick={()=>onClick3False()}/>
                                <MDBRadio name='cc' id='q3' label='props' onClick={()=>onClick3True()}/>
                                <MDBRadio name='cc' id='q4' label='PropTypes' onClick={()=>onClick3False()}/> 
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >Which port is the default port where the webpack-dev-server will run?</h4>
                            <div>
                                <MDBRadio name='dd' id='q1' label='8000' onClick={()=>onClick4False()} />
                                <MDBRadio name='dd' id='q2' label='3000' onClick={()=>onClick4True()}/>
                                <MDBRadio name='dd' id='q3' label='8080' onClick={()=>onClick4False()}/>
                                <MDBRadio name='dd' id='q3' label='3306' onClick={()=>onClick4False()}/>
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4>What is the name of the developer of React.js?</h4>
                            <div>
                                <MDBRadio name='ee' id='q1' label='Jordan mike' onClick={()=>onClick5False()}/>
                                <MDBRadio name='ee' id='q2' label='Jordan Walke' onClick={()=>onClick5True()} />
                                <MDBRadio name='ee' id='q3' label='Jordan Lee' onClick={()=>onClick5False()} />
                                <MDBRadio name='ee' id='q4' label='Tim Lee' onClick={()=>onClick5False()}/> 
                            </div>
                        </MDBCard>
                    <br/>
                    <br/>
                    
                    <a style={{marginLeft:"30%"}} href='#' className="btn btn-success btn-md active" role="button" aria-pressed="true" onClick={()=>onSubmit()}>Submit</a>
                  
                    </div>
                    
                </div>
            </div>
            <div className="row text-center">
        
            </div>
        </div>
    );
};

export default ReactQuiz;