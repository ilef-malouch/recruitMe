import React from 'react'
import "./FormSignin.css"
import Icons from './Icons'

class FormSignin extends React.Component {

  handleChange(event) {
    const auth={Email:event.target.Email ,Password:event.target.Password}
    this.setState(auth);
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.FamilyName);
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {auth:{Email:"" ,Password:"", CofirmedPassword:""}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
    
  render() {
    return (
      <div className="containerForm">
        <div className="formContainer">
          <form onSubmit={this.handleSubmit} id="Form">
            <h3><span>Sign In</span></h3>
            
            <input type="email" value={this.state.auth.Email} placeholder="Email" onChange={this.handleChange} required/>
            <input type="password" value={this.state.auth.Password} placeholder="Password" onChange={this.handleChange} required/>
            
         
            <div className="btn-box">
              <button type="button">Submit</button>
            </div>
            <div className="signUp"><a href="/signup">Do you have an account?signUp</a></div>
            <Icons />
          </form>
        </div>
      </div>
      
    );
  }
}

export default FormSignin