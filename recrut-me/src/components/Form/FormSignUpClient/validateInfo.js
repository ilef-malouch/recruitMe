export default function validateInfo(values){
    let errors ={}

    if(!values.Email){
        errors.Email ="Email required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)){
        errors.Email = "Email address is invalid";
    }

    if(!values.Password){
        errors.Password ="Password required";
    }else if (values.Password.length <6){
        errors.Password ="Password needs to be 6 characters or more";
    }

    if(!values.ConfirmedPassword){
        errors.ConfirmedPassword ="Confirmed Password required";
    }else if(values.Password !== values.ConfirmedPassword){
        errors.ConfirmedPassword ="Passwords do not match";
    }

    if(!values.FamilyName){
        errors.FamilyName ="FamilyName required";
    }

    if(!values.FirstName){
        errors.FirstName ="FirstName required";
    }

    if(!values.date){
        errors.date ="date required";
    }

    if(!values.Domaine){
        errors.Domaine ="Domaine required";
    }

    return errors ;   

}