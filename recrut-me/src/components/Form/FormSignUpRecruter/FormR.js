import React ,{useState} from "react";
import FormSignupRecruter from "./FormSignupRecruter";
import FormSuccess from "./FormSuccess"


const FormR =()=>{
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  function submitForm(){
    setIsSubmitted(true);
  }

  return(
    <>
        {!isSubmitted ? 
        (<FormSignupRecruter submitForm={submitForm} />):
        (<FormSuccess/>)
        }
    </>
  )
}

export default FormR ;