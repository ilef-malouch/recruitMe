import React ,{useState} from "react";
import FormSignupRecruter from "./FormSignupRecruter";
import FormSuccess from "./FormSuccess"


const Form =()=>{
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  function submitForm(){
    setIsSubmitted(true);
  }

  return(
    <>
        {!isSubmitted ? 
        (<FormSignupRecruter submitForm={submitForm} />):
        (alert("We have received your request !"))
        }
    </>
  )
}

export default Form ;