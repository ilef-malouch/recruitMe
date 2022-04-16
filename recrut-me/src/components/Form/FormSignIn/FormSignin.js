import React from 'react'
import "./FormSignin.css"
import useForm from './useForm'
import Icons from '../Icons/Icons'
import FormInput from './FormInput'

const FormSignin = ({submitForm})=> {

  const {handleChange,handleSubmit,values}=useForm(submitForm);
  
  const inputs1 =[
    {
      id:"inputI1",
      type:"email",
      name:"Email" ,
      placeholder:"Email",
      errorMessage:"Email address is invalid",
      required:true,
    },
    {
      id:"inputI2",
      type:"password",
      name:"Password",
      placeholder:"Password",
      pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      required:true,
    }];
  
  const handleForm =()=>{
    var form = document.querySelector('#FormSignIn'), is_valid = true, fields, button;
    fields = form.querySelectorAll('input');
    button = form.querySelector('button');
    
    for (var i = fields.length - 1; i >= 0; i--) {
      if(!fields[i].checkValidity() )
      {
       is_valid=false
      }
     }
     if (is_valid){
       button.removeAttribute('disabled');
      
 
     }else{
       button.setAttribute('disabled', 'disabled');
     } 
   }
  
    
    
   return (
      <div className="containerForm">
        <div className="formContainerSignIn">
          <form onSubmit={handleSubmit} id="FormSignIn" onChange={handleForm} >
            <h3><span>Sign In</span></h3>
            
            {inputs1.map((input)=>(
              <FormInput 
                  key={input.id}
                  {...input} 
                  value={values[input.name]}
                  onChange={handleChange}
              />
          ))}
           
            
            <div className="btn-box">
              <button type="submit" value="Envoyer" disabled>Submit</button>
            </div>
            
            
            <div className="signup"><a href="/signup">Do you have an account?signUp</a></div>
            <Icons />
          </form>
        </div>
      </div>
      
    );
  
}

export default FormSignin