export const handleNext1=function(){
    var  Form1= document.getElementById("Form1");
    var  Form2= document.getElementById("Form2");
    var progress= document.getElementById("progress");
    
    Form1.style.left="-450px";
    Form2.style.left="40px";
    progress.style.width="240px";
    
 }

export const handleBack1=function(){
   var Form1= document.getElementById("Form1");
   var Form2= document.getElementById("Form2");
   var progress= document.getElementById("progress"); 
      
   Form1.style.left="40px";
   Form2.style.left="450px";
   progress.style.width="120px";
 }

 export const handleNext2=function(){
   var  Form2= document.getElementById("Form2");
   var  Form3= document.getElementById("Form3");
   var progress= document.getElementById("progress");  
     
   Form2.style.left="-450px";
   Form3.style.left="40px";
   progress.style.width="360px";
 }
    

export const handleBack2=function(){
   var  Form3= document.getElementById("Form3");
   var  Form2= document.getElementById("Form2");
   var progress= document.getElementById("progress");

   Form2.style.left="40px";
   Form3.style.left="450px";
   progress.style.width="240px";
 }