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
        nameTag.innerHTML = "Enter Your Name"
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
        nameInp.placeholder = "Must be +10 Symols";
        nameTag.innerHTML = "Must be +10 Symols"
        nameTag.style.color = "#FF6473";
        nameTag.style.backgroundColor = "#fff";
        nameInp.value = "";
        
        if(nameInp.focus){
            nameInp.style.border = '2px solid #FF6473';
            nameTag.style.transform = "translate(-3%, -84%);";
        }
        return false;
    }else{
        nameTag.innerHTML = "";
        nameInp.style.border = '2px solid #1abc9c';
    }

    //no numbers
    if(!isNaN(name) ){
        nameInp.placeholder = "Number Not Allowed";
        nameTag.innerHTML = "Numbers Not Allowed"
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
        surnameTag.innerHTML = "Enter Surname";
        surnameTag.style.color = "#FF6473";
        surnameTag.style.backgroundColor = "#fff";
        
        if(surnameInp.focus){
            surnameInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        surnameTag.innerHTML = "";
        surnameInp.style.border = '2px solid #1abc9c';
    }

    if( (surname.length <=3) || (surname.length >10) ){
        surnameTag.innerHTML = "Must be +10 Symols";
        surnameTag.style.color = "#FF6473";
        surnameTag.style.backgroundColor = "#fff";
        surnameInp.value = "";
        
        if(surnameInp.focus){
            surnameInp.style.border = '2px solid #FF6473';
        }
        return false;
    }

    if(!isNaN(surname) ){
        surnameTag.innerHTML = "No Numbers";
        surnameTag.style.color = "#FF6473";
        surnameTag.style.backgroundColor = "#fff";
        surnameInp.value = "";
        
        if(surnameInp.focus){
            surnameInp.style.border = '2px solid #FF6473';
        }
        return false;
    }


    /// === === === === SURNAME VALIDATION



    /// === === === === DATE VALIDATION

    if(date == ""){
        console.log(document.getElementById("date").innerHTML = "Please fill the DATE  gap");
        return false;
    }

    /// === === === === DATE VALIDATION




    /// === === === === EMAIL VALIDATION

    if(email == ""){
        console.log(document.getElementById("email").innerHTML = "Please fill the email gap");
        return false;
    }

    if(email.indexOf("@") <= -1){
        console.log(document.getElementById("email").innerHTML = "THERE ARE NO @ IN YOUR EMAIL");
        return false;
    }

    /// === === === === EMAIL VALIDATION
    



    /// === === === === PASSWORD VALIDATION

    if(password == ""){
        console.log(document.getElementById("password").innerHTML = "Please fill the  PASSWORD gap");
        return false;
    }

    if( (password.length <= 3) || (password.length > 15) ){
        console.log(document.getElementById("password").innerHTML = "PASSWORD MUST BE BETWEEN 3 TO 15 CHARACTERS");
        return false;
    }

    /// === === === === PASSWORD VALIDATION
    
}

/// === === === === === REGISTRATION JAVASCRIPT

