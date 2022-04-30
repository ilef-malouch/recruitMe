import React from 'react'
import "./FormSignupRecruter.css"
import Icons from '../Icons/Icons'
import useForm from './useForm'
import {handleBack1,handleNext2,handleBack2} from"./progress"
import FormInput from './FormInput'
import {handleForm ,handleFormSubmit} from './submitValidation'

const FormSignupRecruter =({submitForm})=>{

  const {handleChange,handleSubmit,values}=useForm(submitForm);

  const inputs1=[
    {
      id:"inputR1",
      type:"text", 
      name:"CompagnyName",
      placeholder:"CompagnyName",
      pattern:"^[A-Z,a-z]+$",
      errorMessage:"CompagnyName required and should be characters",
      required:true,
    },
    {
      id:"inputR2",
      type:"text",
      name:"IdCompagny", 
      placeholder:"IdCompagny",
      errorMessage:"idCompagny required",
      required:true ,
    },
    {
      id:"inputR3",
      type:"text", 
      name:"Domaine",
      placeholder:"Domaine",
      pattern:"^[A-Z,a-z]+$",
      errorMessage:"Domaine is required",
      required:true,

    }

  ]
  const inputs2=[
    {
      id:"inputR4",
      type:"text",
      name:"FacebookLink",
      placeholder:"Facebook link", 
      required:true,
    },
    {
      id:"inputR5",
      type:"text", 
      name:"Linkedin",
      placeholder:"Linkedin link", 
      required:true,
    },
    {
      id:"inputR6",
      type:"text" ,
      name:"PhoneNumber",
      placeholder:"PhoneNumber", 
      required:true,
    }
    
  ]

  const inputs3=[
    {
      id:"inputR7",
      type:"email", 
      name:"Email",
      placeholder:"Email", 
      errorMessage:"Email address is invalid",
      required:true,
    },
    {
      id:"inputR8",
      type:"password",
      name:"Password", 
      placeholder:"Password",
      pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character", 
      required:true,
    },
    {
      id:"inputR9",
      type:"password", 
      name:"ConfirmPassword", 
      placeholder:"ConfirmPassword",
      pattern:values.Password,
      errorMessage:"Passwords do not match",
      required:true,
    }
  ]
  
  
  

  return (
      <div className="containerForm">
       <div className="formContainer">
        
        <form id="Form1" 
              onSubmit={handleSubmit}
              onChange={handleForm}
        >
          <h3 className="formTitle">Compagny Infos</h3>
          {inputs1.map((input)=>(
            <FormInput 
                key={input.id}
                {...input} 
                value={values[input.name]}
                onChange={handleChange}
            />
          ))}
            <div className="btn-box">
              <button type="button" id="Next1" disabled>Next</button>
            </div>
            <div className="signupR"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
        </form>


        <form id="Form2" 
              onSubmit={handleSubmit}
        >
          <h3 className="formTitle">Social Links</h3>
            {inputs2.map((input)=>(
              <FormInput
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={handleChange}
              />
            ))}
           
            <div className="btn-box">
              <button type="button" id="Back1" onClick={handleBack1}>Back</button>
              <button type="button" id="Next2" onClick={handleNext2}>Next</button>
            </div>
            <div className="signupR"><a href="/signin">Do you have an account?signIn</a></div>
            <Icons />
        </form>

        
        <form id="Form3"
              onSubmit={handleSubmit}
              onChange={handleFormSubmit} 
        >
          <h3 className="formTitle">Create Account</h3>
            {inputs3.map((input)=>(
              <FormInput 
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={handleChange}  
              />
            ))}
         
            <div className="btn-box">
              <button type="button" id="Back2" onClick={handleBack2}>Back</button>
              <button type="submit" id="submit" disabled >Submit</button>
              
            </div>
            <div className="signupR"><a href="/signin">Do you have an account?signIn</a></div>
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
      
    )
}

export default FormSignupRecruter