import React ,{useState} from "react";
import FormSignin from "./FormSignin";
import "./FormSignin.css"
import FormSuccess from "./FormSuccess"
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
        (<FormSignin submitForm={submitForm} />):
        (<Navigate to="/" />)
        }
    </>
  )
}

export default Form ;