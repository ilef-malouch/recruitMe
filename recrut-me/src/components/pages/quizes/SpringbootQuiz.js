import React from 'react';
import Img from '../../../images/quiz/springboot.png';
import {MDBRadio, MDBCard} from "mdb-react-ui-kit";
const SpringbootQuiz = () => {

    var count=0;
    var mark1=0;
    var mark2=0;
    var mark3=0;
    var mark4=0;
    var mark5=0;
    var path = "#";

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
            //spath='http://localhost:3000/quizes/springboot/success'
        }
        else {
            console.log('votre score est '+count + " :echec")
            alert('your score is ' + count  + "/5 . Try again");
           // path='http://localhost:3000/quizes/springboot/fail'
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
                                <MDBRadio name='aa' id='q1' label='A design pattern which implements Inversion of Control for software applications.' onClick={()=>onClick1True()} />
                                <MDBRadio name='aa' id='q2' label='One of the spring module.'  onClick={()=>onClick1False()}/>
                                <MDBRadio name='aa' id='q3' label=' A technique to get dependencies of any project.' onClick={()=>onClick1False()} />
                                <MDBRadio name='aa' id='q3' label='  Used to promote tight coupling in code.'  onClick={()=>onClick1False()}/>
                            </div>
                        </MDBCard>
                        <br/> <br/>

                        <MDBCard className='w-75' style={{padding:20}}>
                            <h4 >What is the correct syntax for annotation wiring?</h4>
                            <div>
                                <MDBRadio name='bb' id='q1' label=' <annotation-context:config /> to bean configuration.' onClick={()=>onClick2False()} />
                                <MDBRadio name='bb' id='q2' label='<annotation-config /> to bean configuration.' onClick={()=>onClick2False()} />
                                <MDBRadio name='bb' id='q3' label=' <annotation-context-config /> to bean configuration.' onClick={()=>onClick2False()} />
                                <MDBRadio name='bb' id='q4' label=' <context:annotation-config/> to bean configuration.' onClick={()=>onClick2True()} />
                            </div>
                        </MDBCard>
                        <br/> <br/>

                        <MDBCard className='w-75' style={{padding:20}}>
                            <h4 >Annotation for Hibernate exceptions to be translated into Spring’s DataAccessException for consistent exception handling</h4>
                            <div>
                                <MDBRadio name='cc' id='q1' label='@Translation' onClick={()=>onClick3True()}/>
                                <MDBRadio name='cc' id='q2' label='@Repo' onClick={()=>onClick3True()}/>
                                <MDBRadio name='cc' id='q2' label='@Repository' onClick={()=>onClick3True()}/>
                                <MDBRadio name='cc' id='q2' label=' None of the above' onClick={()=>onClick3True()}/>
                            </div>
                        </MDBCard>
                        <br/> <br/>

                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4 >What is the default scope of the beans?</h4>
                            <div>
                                <MDBRadio name='dd' id='q1' label='Prototype' onClick={()=>onClick4False()}/>
                                <MDBRadio name='dd' id='q2' label='Session' onClick={()=>onClick4False()}/>
                                <MDBRadio name='dd' id='q3' label='Request' onClick={()=>onClick4False()}/>
                                <MDBRadio name='dd' id='q3' label='Singleton' onClick={()=>onClick4True()}/>
                            </div>
                        </MDBCard>
                        <br/> <br/>
                        <MDBCard className='w-75' style={{padding:20}}>
                            
                            <h4>What is Bean in Spring?</h4>
                            <div>
                                <MDBRadio name='ee' id='q1' label='Component' onClick={()=>onClick5False()}/>
                                <MDBRadio name='ee' id='q2' label='Object'onClick={()=>onClick5True()} />
                                <MDBRadio name='ee' id='q3' label='Class' onClick={()=>onClick5False()}/>
                                <MDBRadio name='ee' id='q4' label='Container' onClick={()=>onClick5False()}/>
                            </div>
                        </MDBCard>
                    <br/>
                    <br/>
                    
                    <a style={{marginLeft:"30%"}} href='#' class="btn btn-success btn-md active" role="button" aria-pressed="true" onClick={()=>onSubmit()}>Submit</a>
                    
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
};

export default SpringbootQuiz;