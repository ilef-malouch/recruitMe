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
        (<FormSuccess/>)
        }
    </>
  )
}

export default Form ;