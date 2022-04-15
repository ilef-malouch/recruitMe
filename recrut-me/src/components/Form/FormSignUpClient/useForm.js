import {useState , useEffect} from "react"

const useForm  =(callback,validate)=>{
    const [values,setValues]=useState({
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
    
    const [errors ,setErrors] =useState({});
    const [isSubmitting,setIsSubmitting]=useState(false);
    
    const handleChange = e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    
    const handleSubmit=(event)=> {
        event.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)
        console.log(values)
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
      );
    

    
    return {handleChange,handleSubmit,values,errors};
}

export default useForm ;