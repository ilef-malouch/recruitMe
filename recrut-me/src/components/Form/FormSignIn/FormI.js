import React ,{useState} from "react";
import FormSignin from "./FormSignin";
import "./FormSignin.css"
import FormSuccess from "./FormSuccess"


const FormI =()=>{
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  function submitForm(){
    setIsSubmitted(true);
  }

  return(
    <>
        {!isSubmitted ? 
        (<FormSignin submitForm={submitForm} />):
        (<FormSuccess/>)
        }
    </>
  )
}

export default FormI ;