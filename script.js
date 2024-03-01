/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Arvinder Singh Ghumman
*/

// adding date to footer
window.onload = () => {
  var date = new Date();
  document.getElementById("date").innerText= (date.getMonth() +"/"+ date.getDate() +"/"+ date.getFullYear());
}

var markToGrade = (event) => {
  event.preventDefault();

  try{
    //getting values and elements
    let marks = document.getElementById("marks").value;
    let msg = document.getElementById("validationMessage");
    let output = document.getElementById("output");

    //parsing only if no invalid value entered
    if(!isNaN(marks))
      marks = parseInt(marks);
    
    //checking if dataa entered is withitn range
    if(isNaN(marks)){
      output.innerText="";
      msg.style.display="block";
      msg.innerText = "Enter a valid number";
    }else if(marks<0){
      output.innerText="";
      msg.style.display="block";
      msg.innerText = "Entered Value has to be Positive";
    }else if(marks>=101){
      output.innerText="";
      msg.style.display="block";
      msg.innerText = "Marks have to be less than 101";
    }else{
      // changing stored elements for every different scenario
      if(marks>90){
        msg.innerText="";
        output.innerText = "Grade : A"
      }else if(marks>80){
        msg.innerText="";
        output.innerText = "Grade : B"
      }else if(marks>70){
        msg.innerText="";
        output.innerText = "Grade : C"
      }else if(marks>=50){
        msg.innerText="";
        output.innerText = "Grade : D"
      }else{
        msg.innerText="";
        output.innerText = "Grade : F"
      }
    }
  }catch(err){
    //if theres any error
    console.log(err);
  }
  }