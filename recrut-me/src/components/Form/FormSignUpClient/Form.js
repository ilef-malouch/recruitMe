import React ,{useState} from "react";
import FormSignupClient from "./FormSignupClient"; 
import { Navigate } from "react-router-dom";

const Form =()=>{
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  function submitForm(){
    setIsSubmitted(true);
  }
  function reloadPage(){ 
    window.location.reload(); 
}

  return(
    <>
        {!isSubmitted ? 
        (<FormSignupClient submitForm={submitForm} />):
        (<Navigate to="/" />)
        }
    </>
  )
}

export default Form ;