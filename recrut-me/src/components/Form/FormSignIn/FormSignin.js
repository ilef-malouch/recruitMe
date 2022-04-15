import React from 'react'
import "./FormSignin.css"
import Icons from '../Icons/Icons'

class FormSignin extends React.Component { 

  handleChangeEmail(event) {
    
    this.setState({Email:event.target.value});
  }
  
  handleChangePassword(event){
   
    this.setState({Password:event.target.value});
    
  }
  
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    
  }

  constructor(props) {
    super(props);
    this.state = {Email:"" ,Password:""};
    
   
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
    
  render() {
    return (
      <div className="containerForm">
        <div className="formContainerSignIn">
          <form onSubmit={this.handleSubmit} id="Form">
            <h3><span>Sign In</span></h3>
            
            <input type="email" value={this.state.Email} placeholder="Email" onChange={this.handleChangeEmail} required/>
            <input type="password" value={this.state.Password} placeholder="Password" onChange={this.handleChangePassword} required/>
           
            
            <div className="btn-box">
              <button type="submit" value="Envoyer">Submit</button>
            </div>
            
            
            <div className="signup"><a href="/signup">Do you have an account?signUp</a></div>
            <Icons />
          </form>
        </div>
      </div>
      
    );
  }
}

export default FormSignin