import {useState , useEffect} from "react"

const useForm  =(callback)=>{
    const [values ,setValues]=useState({
        FamilyName:"" ,
        FirstName:"",
        date:"",
        Domaine:"",
        Email:"" ,
        Password:"",
        ConfirmedPassword:"",
        Github:"" ,
        Linkedin:"" ,
        PhoneNumber:""
  });
  
  const [isSubmitting,setIsSubmitting]=useState(false);

  const handleChange = e =>{
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit=(event)=> {
    event.preventDefault();
    setIsSubmitting(true);
    callback();
 
  }


    
    return {handleChange,handleSubmit,values};
}

export default useForm ;