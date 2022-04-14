import React from 'react'
import "./FormSignUp.css"
import Icons from '../Icons/Icons'

class FormSignup extends React.Component {

  handleChangeFamilyName(event) {
    this.setState({FamilyName:event.target.value});
  }
  
  handleChangeFirstName(event) {
    this.setState({FirstName:event.target.value});
  }
  
  handleChangeDomaine(event) {
    this.setState({Domaine:event.target.value});
  }
  
  handleChangeEmail(event) {
    this.setState({Email:event.target.value});
  }
  
  handleChangePassword(event) {
    this.setState({Password:event.target.value});
  }
  
  handleChangeCofirmedPassword(event) {
    this.setState({CofirmedPassword:event.target.value});
  }
  
  handleChangeGithub(event) {
    this.setState({Github:event.target.value});
  }
  
  handleChangeLinkedin(event) {
    this.setState({Linkedin:event.target.value});
  }
  
  handleChangePhoneNumber(event) {
    this.setState({PhoneNumber:event.target.value});
  }

  handleSubmit(event) {
    console.log("hello")
    event.preventDefault();
    
  }

  constructor(props) {
    super(props);
    this.state = 
                {FamilyName:"" ,FirstName:"", Domaine:"",
                Email:"" ,Password:"", CofirmedPassword:"",
                Github:"" ,Linkedin:"" ,PhoneNumber:""
                };

    this.handleChangeFamilyName = this.handleChangeFamilyName.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeDomaine = this.handleChangeDomaine.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeCofirmedPassword = this.handleChangeCofirmedPassword.bind(this);
    this.handleChangeGithub = this.handleChangeGithub.bind(this);
    this.handleChangeLinkedin = this.handleChangeLinkedin.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
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
        
        <form  id="Form1">
          <h3>Personal Infos</h3>
          
            <input type="text" value={this.state.FamilyName} placeholder="FamilyName" onChange={this.handleChangeFamilyName} required/>
            <input type="text"  value={this.state.FirstName} placeholder="FirstName" onChange={this.handleChangeFirstName} required/>
            <input type="date" placeholder="Date Of Birth" required/>
            <input type="text" value={this.state.Domaine} placeholder="Domaine" onChange={this.handleChangeDomaine} required/>
         
            <div className="btn-box">
              <button type="button" id="Next1" onClick={()=>this.handleNext1()}>Next</button>
            </div>
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
        </form>


        <form id="Form2">
          <h3>Social Links</h3>
            
            <input type="text" value={this.state.Github} placeholder="Github link" onChange={this.handleChangeGithub} required/>
            <input type="text" value={this.state.Linkedin} placeholder="Linkedin link" onChange={this.handleChangeLinkedin} required/>
            <input type="text" value={this.state.PhoneNumber} placeholder="PhoneNumber" onChange={this.handleChangePhoneNumber} required/>
         
            <div className="btn-box">
              <button type="button" id="Back1" onClick={()=>this.handleBack1()}>Back</button>
              <button type="button" id="Next2" onClick={()=>this.handleNext2()}>Next</button>
            </div>
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
        </form>

        
        <form onSubmit={this.handleSubmit} id="Form3">
          <h3>Create Account</h3>
            
            <input type="email" value={this.state.Email} placeholder="Email" onChange={this.handleChangeEmail} required/>
            <input type="password" value={this.state.Password} placeholder="Password" onChange={this.handleChangePassword} required/>
            <input type="password" value={this.state.CofirmedPassword} placeholder="CofirmedPassword" onChange={this.handleChangeCofirmedPassword} required/>
         
            <div className="btn-box">
              <button type="button" id="Back2" onClick={()=>this.handleBack2()}>Back</button>
              <button type="submit" value="Envoyer">Submit</button>
              
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