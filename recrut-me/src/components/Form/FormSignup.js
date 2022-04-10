import React from 'react'
import "./FormSignUp.css"
import Icons from './Icons'

class FormSignup extends React.Component {

  handleChange(event) {
    const infos={FamilyName:event.target.FamilyName ,FirstName:event.target.FirstName, Domaine:event.target.Domaine}
    const auth={Email:event.target.Email ,Password:event.target.Password, CofirmedPassword:event.target.CofirmedPassword}
    const links={Github:event.target.Github ,Linkedin:event.target.Linkedin ,PhoneNumber:event.target.PhoneNumber}
    
    this.setState({infos,auth,links});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.FamilyName);
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = 
                {infos:{FamilyName:"" ,FirstName:"", Domaine:""},
                auth:{Email:"" ,Password:"", CofirmedPassword:""},
                links:{Github:"" ,Linkedin:"" ,PhoneNumber:""}
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNext1=function(){
     var  Form1= document.getElementById("Form1");
     var  Form2= document.getElementById("Form2");
     var progress= document.getElementById("progress");
     
     Form1.style.left="-450px";
     Form2.style.left="40px";
     progress.style.width="240px";
     
  }

  handleBack1=function(){
    var Form1= document.getElementById("Form1");
    var Form2= document.getElementById("Form2");
    var progress= document.getElementById("progress"); 
       
    Form1.style.left="40px";
    Form2.style.left="450px";
    progress.style.width="120px";
  }

  handleNext2=function(){
    var  Form2= document.getElementById("Form2");
    var  Form3= document.getElementById("Form3");
    var progress= document.getElementById("progress");  
      
    Form2.style.left="-450px";
    Form3.style.left="40px";
    progress.style.width="360px";
  }
     

  handleBack2=function(){
    var  Form3= document.getElementById("Form3");
    var  Form2= document.getElementById("Form2");
    var progress= document.getElementById("progress");

    Form2.style.left="40px";
    Form3.style.left="450px";
    progress.style.width="240px";
  }


  
  render() {
    return (
      <div className="containerForm">
       <div className="formContainer">
        
        <form id="Form1">
          <h3>Personal Infos</h3>
          
            <input type="text" value={this.state.infos.FamilyName} placeholder="FamilyName" onChange={this.handleChange} required/>
            <input type="text"  value={this.state.infos.FirstName} placeholder="FirstName" onChange={this.handleChange} required/>
            <input type="date" placeholder="Date Of Birth" required/>
            <input type="text" value={this.state.infos.Domaine} placeholder="Domaine" onChange={this.handleChange} required/>
         
            <div className="btn-box">
              <button type="button" id="Next1" onClick={()=>this.handleNext1()}>Next</button>
            </div>
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
        </form>


        <form id="Form2">
          <h3>Social Links</h3>
            
            <input type="text" value={this.state.auth.Github} placeholder="Github link" onChange={this.handleChange} required/>
            <input type="text" value={this.state.auth.Linkedin} placeholder="Linkedin link" onChange={this.handleChange} required/>
            <input type="text" value={this.state.auth.PhoneNumber} placeholder="PhoneNumber" onChange={this.handleChange} required/>
         
            <div className="btn-box">
              <button type="button" id="Back1" onClick={()=>this.handleBack1()}>Back</button>
              <button type="button" id="Next2" onClick={()=>this.handleNext2()}>Next</button>
            </div>
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
        </form>

        
        <form onSubmit={this.handleSubmit} id="Form3">
          <h3>Create Account</h3>
            
            <input type="email" value={this.state.auth.Email} placeholder="Email" onChange={this.handleChange} required/>
            <input type="password" value={this.state.auth.Password} placeholder="Password" onChange={this.handleChange} required/>
            <input type="password" value={this.state.auth.CofirmedPassword} placeholder="CofirmedPassword" onChange={this.handleChange} required/>
         
            <div className="btn-box">
              <button type="button" id="Back2" onClick={()=>this.handleBack2()}>Back</button>
              <button type="button">Submit</button>
              
            </div>
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
          </form>
        
        <div className="step-row">
          <div id="progress"></div>
            <div className="step-col"><small>Step 1</small></div>
            <div className="step-col"><small>Step 2</small></div>
            <div className="step-col"><small>Step 3</small></div>
        </div>
      
      </div>
    </div>
      
    );
  }
}

export default FormSignup