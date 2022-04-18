import "./FormSignUpClient.css"
import {useState} from "react"
import React from "react"

const FormInput =(props)=>{
    const [focused,setFocused]=useState(false);
    const { onChange,errorMessage, ...inputProps }=props;

    const handleFocus=(e)=>{
        setFocused(true);
    };
    return(
        <>
            <input 
                className="formInput"  
                {...inputProps}
                 
                onChange={onChange} 
                onBlur={handleFocus}
                onFocus={()=> 
                    inputProps.name ==="ConfirmPassword" && setFocused(true)} 
                focused={focused.toString()} />
            <p id={"p"+inputProps.id} className="error">{errorMessage}</p>
        </>
    )
}

export default FormInput