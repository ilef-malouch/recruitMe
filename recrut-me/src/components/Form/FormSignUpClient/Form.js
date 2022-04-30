import React ,{useState} from "react";
import FormSignupClient from "./FormSignupClient";
import FormSuccess from "./FormSuccess"


const Form =()=>{
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  function submitForm(){
    setIsSubmitted(true);
  }

  return(
    <>
        {!isSubmitted ? 
        (<FormSignupClient submitForm={submitForm} />):
        (alert("We have received your request !"))
        }
    </>
  )
}

export default Form ;