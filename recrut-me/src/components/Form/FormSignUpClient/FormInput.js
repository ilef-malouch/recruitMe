import "./FormSignUp.css"
import {useState} from "react"

const FormInput =(props)=>{
    const [focused,setFocused]=useState(false);
    const { onChange,errorMessage, ...inputProps }=props;

    const handleFocus=(e)=>{
        setFocused(true);
    };
    return(
        <>
            <input  
                {...inputProps}
                 
                onChange={onChange} 
                onBlur={handleFocus}
                onFocus={()=> 
                    inputProps.name ==="ConfirmPassword" && setFocused(true)} 
                focused={focused.toString()} />
            <p id={"p"+inputProps.id}>{errorMessage}</p>
        </>
    )
}

export default FormInput