//elements
let nameInp = document.getElementById("name");
let surnameInp = document.getElementById("surname");
let dateInp = document.getElementById("date");
let emailInp = document.getElementById("email");
let passwordInp = document.getElementById("password");

//nametags
let nameTag = document.querySelector('#nameTag');
let surnameTag = document.querySelector('#surnameTag');
let emailTag = document.querySelector('#emailTag');
let passwordTag = document.querySelector('#passwordTag');

// let name = document.getElementById("name").value;
// let surname = document.getElementById("surname").value;
// let date = document.getElementById("date").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;


/// === === === === === REGISTRATION JAVASCRIPT

const validationForm = document.getElementById("validationForm");
validationForm.addEventListener("click", MyRegistration);

function MyRegistration() {
    
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    /// === === === === NAME VALIDATION
    //name emty
    if(name == ""){
        nameInp.placeholder = "Enter Your Name";
        nameTag.innerHTML = "Enter Your Name";
        nameTag.style.color = "#FF6473";

        if(nameInp.focus){ 
            nameInp.style.border = '2px solid #FF6473';
        } 
        return false;
    }else{
        nameTag.innerHTML = "";
        nameInp.style.border = '2px solid #1abc9c';
    }

    //name length
    if( (name.length <= 2) || (name.length > 10) ){
        nameInp.placeholder = "Must be (+2) Symols";
        nameTag.innerHTML = "Must be (+2) Symols";
        nameTag.style.color = "#FF6473";
        nameTag.style.backgroundColor = "#fff";
        nameInp.value = "";
        
        if(nameInp.focus){
            nameInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        nameTag.innerHTML = "";
        nameInp.style.border = '2px solid #1abc9c';
    }

    //no numbers
    if(!isNaN(name) ){
        nameInp.placeholder = "Number Not Allowed";
        nameTag.innerHTML = "Numbers Not Allowed";
        nameTag.style.color = "#FF6473";
        nameTag.style.backgroundColor = "#fff";
        nameInp.value = "";
        
        if(nameInp.focus){
            nameInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        nameTag.innerHTML = "";
        nameInp.style.border = '2px solid #1abc9c';
    }

    /// === === === === NAME VALIDATION

 


    /// === === === === SURNAME VALIDATION
    
    if(surname == ""){
        surnameInp.placeholder = "Enter Your surname";
        surnameTag.innerHTML = "Enter Your surname";
        surnameTag.style.color = "#FF6473";

        if(surnameInp.focus){ 
            surnameInp.style.border = '2px solid #FF6473';
        } 
        return false;
    }else{
        surnameTag.innerHTML = "";
        surnameInp.style.border = '2px solid #1abc9c';
    }

    if( (surname.length <=3) || (surname.length >10) ){
        surnameInp.placeholder = "Must be (+3) Symols";
        surnameTag.innerHTML = "Must be (+3) Symols";
        surnameTag.style.color = "#FF6473";
        surnameTag.style.backgroundColor = "#fff";
        surnameInp.value = "";
        
        if(surnameInp.focus){
            surnameInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        nameTag.innerHTML = "";
        nameInp.style.border = '2px solid #1abc9c';
    }

    if(!isNaN(surname) ){
        surnameInp.placeholder = "Number Not Allowed";
        surnameTag.innerHTML = "Numbers Not Allowed";
        surnameTag.style.color = "#FF6473";
        surnameTag.style.backgroundColor = "#fff";
        surnameInp.value = "";
        
        if(surnameInp.focus){
            surnameInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        surnameTag.innerHTML = "";
        surnameInp.style.border = '2px solid #1abc9c';
    }


    /// === === === === SURNAME VALIDATION



    /// === === === === DATE VALIDATION

    // if(date == ""){
    //     console.log(document.getElementById("date").innerHTML = "Please fill the DATE  gap");
    //     return false;
    // }

    /// === === === === DATE VALIDATION




    /// === === === === EMAIL VALIDATION

    if(email == ""){
        emailInp.placeholder = "Enter Your email";
        emailTag.innerHTML = "Enter Your email";
        emailTag.style.color = "#FF6473";
        emailTag.style.backgroundColor = "#fff";
        emailInp.value = "";
        
        if(emailInp.focus){
            emailInp.style.border = '2px solid #FF6473';
        }
         
    }else{
        emailTag.innerHTML = "";
        emailInp.style.border = '2px solid #1abc9c';
    }         
     

    if(email.indexOf("@") <= -1){
        emailInp.placeholder = "email Must Contain (@)";
        emailTag.innerHTML = "email Must Contain (@)";
        emailTag.style.color = "#FF6473";
        emailTag.style.backgroundColor = "#fff";
        emailInp.value = "";
        
        if(emailInp.focus){
            emailInp.style.border = '2px solid #FF6473';
        }
         
    }else{
        emailTag.innerHTML = "";
        emailInp.style.border = '2px solid #1abc9c';
    }  
     

    /// === === === === EMAIL VALIDATION
    



    /// === === === === PASSWORD VALIDATION

    if(password == ""){
        passwordInp.placeholder = "Enter Your password";
        passwordTag.innerHTML = "Enter Your password";
        passwordTag.style.color = "#FF6473";

        if(passwordInp.focus){ 
            passwordInp.style.border = '2px solid #FF6473';
        } 
        return false;
    }else{
        passwordTag.innerHTML = "";
        passwordInp.style.border = '2px solid #1abc9c';
    }
     

    if( (password.length <= 6) || (password.length > 10) ){
        passwordInp.placeholder = "Must be (+6) Symols";
        passwordTag.innerHTML = "Must be (+6) Symols";
        passwordTag.style.color = "#FF6473";
        passwordTag.style.backgroundColor = "#fff";
        passwordInp.value = "";
        
        if(passwordInp.focus){
            passwordInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        passwordTag.innerHTML = "";
        passwordInp.style.border = '2px solid #1abc9c';
    }

    /// === === === === PASSWORD VALIDATION
    
}

/// === === === === === REGISTRATION JAVASCRIPT

