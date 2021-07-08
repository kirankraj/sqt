// const { red } = require("color-name")

// const form = document.forms["form"]["firstname"]
 var firstname = document.forms["form"]["firstname"]
var lastname = document.forms["form"]["lastname"]
var email = document.forms["form"]["email"]
var number = document.forms["form"]["email"]
var firstname_error= document.getElementById("firstname_error")
var lastname_error = document.getElementById("lastname_error")
var email_error= document.getElementById("email_error")
var numvarber_error = document.getElementById("number_error")

   firstname.addEventListener("blur",firstnameVerify, true);
   lastname.addEventListener("blur" ,lastnameVerify,true);
   email.addEventListener("blur",emailVerify,true)
   number.addEventListener("blur",numberVerify,true)

  function Validate(){
      if(firstname.value == ""){
          firstname.style.border = "1px solid red";
          firstname_error.textContent = "firstname required";
          firstname.focus();
          return false;
      }
      if(lastname.value == ""){
        lastname.style.border = "1px solid red";
        lastname_error.textContent = "lastname required";
        lastname.focus();
        return false;
    }
    if(email.value == ""){
        email.style.border = "1px solid red";
        email_error.textContent = "Email required";
        email.focus();
        return false;
    }
    if(number.value == ""){
        number.style.border = "1px solid red";
        number_error.textContent = "Number required";
        number.focus();
        return false;
    }
  }

  