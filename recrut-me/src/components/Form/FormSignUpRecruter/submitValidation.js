import {handleNext1} from"./progress"

export function handleForm(){
    var form = document.querySelector("#Form1") ,is_valid = true,fields, button;
    fields = form.querySelectorAll('input');
    button = form.querySelector('button');
    
    for (var i = 0; i <= fields.length-1; i++) {
      if(! fields[i].checkValidity() )
     {
      is_valid=false
     }
    }
    if (is_valid){
      button.removeAttribute('disabled');
      button.addEventListener("click",handleNext1);

    }else{
      button.setAttribute('disabled', 'disabled');
    } 
  }

export function handleFormSubmit(){
    var form = document.querySelector("#Form3") ,is_valid = true,fields, button;
    fields = form.querySelectorAll('input');
    button = form.querySelector('#submit');
    
    for (var i = 0; i <= fields.length-1; i++) {
      if(! fields[i].checkValidity() )
     {
      is_valid=false
     }
    }
    if (is_valid){
      button.removeAttribute('disabled');
      

    }else{
      button.setAttribute('disabled', 'disabled');
    } 
  }
     