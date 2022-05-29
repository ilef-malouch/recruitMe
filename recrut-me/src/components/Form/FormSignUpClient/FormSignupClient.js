import React from 'react'
import "./FormSignUpClient.css"
import useForm from './useForm'
import Icons from '../Icons/Icons'
import {handleBack1,handleNext2,handleBack2} from"./progress"
import {handleForm ,handleFormSubmit} from './submitValidation'
import FormInput from './FormInput'

const FormSignupClient = ({submitForm})=> {
  
  const {handleChange,handleSubmit,values}=useForm(submitForm);
  
  const inputs1 =[
    {
      id:"input1",
      type:"text",
      name:"FamilyName",
      placeholder:"FamilyName",
      pattern:"^[A-Z,a-z]+$",
      errorMessage:"FamilyName required and should be characters",
      required:true,
    },
    {
      id:"input2",
      type:"text",
      name:"FirstName",  
      placeholder:"FirstName", 
      pattern:"^[A-Z,a-z]+$",
      errorMessage:"FirstName required and should be characters",
      required:true,
    },
    {
      id:"input3",
      type:"Birthday",
      name:"Birthday",
      placeholder:"Date Of Birth",
      errorMessage:"Birthday is required",
      required:true,
    },
    {
      id:"input4",
      type:"text",
      name:"Domaine",
      placeholder:"Domaine",
      pattern:"^[A-Z,a-z]+$",
      errorMessage:"Domaine is required",
      required:true,
    }];
    
  const inputs2=[
      {
        id:"input5",
        type:"text" ,
        name:"GithubLink",
        placeholder:"Github link" 
      },
  
     {
        id:"input6",
        type:"text",
        name:"LinkedinLink" ,
        placeholder:"Linkedin link" 
     } ,
     {
       id:"input7",
       type:"text", 
       name:"PhoneNumber",
       placeholder:"PhoneNumber" ,
     }
    ];

  const inputs3 =[
    {
      id:"input8",
      type:"email",
      name:"Email",
      placeholder:"Email",
      errorMessage:"Email address is invalid",
      required:true,
    },
    {
      id:"input9",
      type:"password",
      name:"Password",
      placeholder:"Password" ,
      pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      required:true,
    },
    {
      id:"input10",
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
        
         <form  id="Form1"  
                onSubmit={handleSubmit}
                onChange={handleForm} 
          >
          <h3 className="formTitle">Personal Infos</h3>
          {inputs1.map((input)=>(
            <FormInput 
                key={input.id}
                {...input} 
                value={values[input.name]}
                onChange={handleChange}
            />
          ))}
          <div className="btn-box">
            <button type="button"  id="Next1" disabled>Next</button>
          </div>
          <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
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
            <div className="signIn"><a href="/signin">Do you have an account?signIn</a></div>
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

export default FormSignupClient