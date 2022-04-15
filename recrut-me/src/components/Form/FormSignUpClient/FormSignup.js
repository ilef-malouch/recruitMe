import React from 'react'
import "./FormSignUp.css"
import useForm from "./useForm"
import Icons from '../Icons/Icons'
import validate from "./validateInfo"
import {handleNext1,handleBack1,handleNext2,handleBack2} from"./progress"



const FormSignup = ({submitForm})=> {

  const {handleChange,handleSubmit,values,errors}=useForm(submitForm,validate);
  
  return (
      <div className="containerForm">
       <div className="formContainer">
        
         <form  id="Form1"
                onSubmit={handleSubmit}
                noValidate
         >
          
          <h3>Personal Infos</h3>
            
            <input type="text"
                   name="FamilyName"
                   value={values.FamilyName} 
                   placeholder="FamilyName" 
                   onChange={handleChange}
                   pattern="^[A-Z,a-z]+$"
                   required/>
              <p id="1">FamilyName required and should be characters</p>
            <input type="text" 
                   name="FirstName"  
                   value={values.FirstName} 
                   placeholder="FirstName" 
                   onChange={handleChange} 
                   pattern="^[A-Z,a-z]+$"
                   required/>
              <p id="2">FirstName required and should be characters</p>
            <input type="date" 
                   name="date"
                   placeholder="Date Of Birth" 
                   onChange={handleChange}
                   required/>
             <p id="3" >Birthday is required</p>
            <input type="text" 
                   name="Domaine"
                   value={values.Domaine} 
                   placeholder="Domaine" 
                   onChange={handleChange}
                   pattern="^[A-Z,a-z]+$"
                   required/>
             <p id="4">Domaine is required</p>
            <div className="btn-box">
              <button type="button" id="Next1" onClick={handleNext1}>Next</button>
            </div>
            
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
            
            <Icons />
        </form>


        <form id="Form2"
              onSubmit={handleSubmit}>
          
          <h3>Social Links</h3>
            
            <input type="text" 
                   name="Github"
                   value={values.Github} 
                   placeholder="Github link" 
                   onChange={handleChange} 
                   />
            
            <input type="text"
                   name="Linkedin" 
                   value={values.Linkedin} 
                   placeholder="Linkedin link" 
                   onChange={handleChange} 
                   />
            
            <input type="text" 
                   name="PhoneNumber"
                   value={values.PhoneNumber} 
                   placeholder="PhoneNumber" 
                   onChange={handleChange} 
                   />
         
            <div className="btn-box">
              <button type="button" id="Back1" onClick={handleBack1}>Back</button>
              <button type="button" id="Next2" onClick={handleNext2}>Next</button>
            </div>
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
        </form>

        
        <form id="Form3" 
              onSubmit={handleSubmit} >
          <h3>Create Account</h3>
            
            <input type="email" 
                   name="Email"
                   value={values.Email} 
                   placeholder="Email" 
                   onChange={handleChange} 
                   required/>
            <p id="5">Email address is invalid</p>
            <input type="password" 
                   name="Password"
                   value={values.Password} 
                   placeholder="Password" 
                   onChange={handleChange}
                   pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" 
                   required/>
            <p id="6">Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!</p>
            <input type="password"
                   name="ConfirmedPassword" 
                   value={values.CofirmedPassword} 
                   placeholder="ConfirmedPassword" 
                   onChange={handleChange} 
                   pattern={values.Password}
                   required/>
             <p id="7">Passwords do not match</p>
            <div className="btn-box">
              <button type="button" id="Back2" onClick={handleBack2}>Back</button>
              <button type="submit">Submit</button>
              
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

export default FormSignup