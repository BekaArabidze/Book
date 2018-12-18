//=== === === === === ===           === === === === === ===//
//=== === === === === === VANILA JS === === === === === ===//
//=== === === === === ===           === === === === === ===//


//=== === === === LOADING SCREEN
let loadingScreen = document.querySelector(".loading_screen");
// let loadingScreen = document.querySelector(".loading_screen");

let loading = window.addEventListener("load", _ => {
    document.body.removeChild(loadingScreen);
});





//=== === === === === LANGUAGE CHANGE ++++++

let buttons = document.querySelectorAll(".translate");
let language = document.querySelectorAll(".lang");



const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let arrLang = JSON.parse(this.responseText);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                let lang = buttons[i].getAttribute('id');
                console.log(lang);

                language.forEach((element) => {
                    element.innerHTML = arrLang[lang][element.getAttribute('key')];
                });
            });
        }
    }
};


xmlhttp.open("GET", "../data/language/translate.txt", true);
xmlhttp.send();






//imports
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from ".././node_modules/gsap/all";



//=== === === === === ===        === === === === === ===//
//=== === === === === === JQUERY === === === === === ===//
//=== === === === === ===        === === === === === ===//

//=== === === HEADER ANIMATION
$('#toggleMenuBtn').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


$(document).ready(function () {

    let scrollLink = $('#scrollLink');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});


//=== === === === === ===            === === === === === ===//
//=== === === === === === SCROOL-OUT === === === === === ===//
//=== === === === === ===            === === === === === ===//

ScrollOut({
    once: true,
    threshold: .8
});




//=== === === === === ===              === === === === === ===//
//=== === === === === === GREENSOCK JS === === === === === ===//
//=== === === === === ===              === === === === === ===//

//greensock
const tlm = new TimelineMax({});
//=== === === MENU BUTTON
//VARS
let toggleMenuBtn = document.querySelector('#toggleMenuBtn');
let toggleMenuBtn_Ln_1 = document.querySelector('#toggleMenuBtn_Ln_1');
let toggleMenuBtn_Ln_2 = document.querySelector('#toggleMenuBtn_Ln_2');
let toggleMenuBtn_Ln_3 = document.querySelector('#toggleMenuBtn_Ln_3');


//== == == ==toogle animation on CLICK
const toggle = new TimelineMax({
    paused: true,
    reversed: true
});

toggle
    .to(toggleMenuBtn_Ln_2, 0.2, {
        scaleX: 0
    }, 0)

    .to(toggleMenuBtn_Ln_1, 0.25, {
        transformOrigin: "50% 50%",
        y: 11
    }, "slice")

    .to(toggleMenuBtn_Ln_3, 0.25, {
        transformOrigin: "50% 50%",
        y: -11
    }, "slice")

    .to(toggleMenuBtn, 0.25, {
        rotation: 360
    }, "cross += .2")
    .to(toggleMenuBtn_Ln_1, 0.25, {
        rotation: 45
    }, "cross += .2")
    .to(toggleMenuBtn_Ln_3, 0.25, {
        rotation: -45
    }, "cross += .2");

toggleMenuBtn.addEventListener('click', _ => {
    toggleMenuBtn.classList.toggle("js-x");
    toggle.reversed() ? toggle.play() : toggle.reverse();
});
//== == == ==toogle animation on CLICK


// == == == ==togle the HOVER animation

const toggleBtnsArray = [toggleMenuBtn_Ln_1,
    toggleMenuBtn_Ln_2,
    toggleMenuBtn_Ln_3
]

toggleMenuBtn.addEventListener('mouseenter', _ => {
    if (toggleMenuBtn.classList.contains("js-x")) {
        return;
    }
    tlm
        .staggerTo(toggleBtnsArray, .10, {
            scaleX: 1.7,
            repeat: 1,
            yoyo: true,
            ease: Power2.easeInOut
        }, 0.125)
});
// == == == ==togle the hover animation




//=== === === HEADER ANIMATION

TweenMax.from('.heading-primary--main', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.3),
    x: -300
});



TweenMax.from('.heading-primary--sub', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.3),
    x: 300
});

/// Pharagraph aniamtion
TweenMax.from('.blogers_section__grid__box__paragraph', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.1),
    y: 100
});




//=== === === BLOGER ANIMATION
TweenMax.from('.blogers-textbox--main', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.3),
    x: -300
});

TweenMax.from('.blogers-textbox--sub', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.3),
    x: 300
});



/// All other Pages Animation
TweenMax.from('.primary-text--main', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.3),
    x: 300
});
TweenMax.from('.primary-text--sub', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.3),
    x: -300
});

TweenMax.from('.search-box__list', 2, {
    opacity: 0,
    ease: Back.easeOut.config(1.3),
    y: 100
});


/// All other Pages Animation




/// === === === === === REGISTRATION JAVASCRIPT

document.getElementById("validationForm").addEventListener("click", MyRegistration);

function MyRegistration() {
    
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    /// === === === === NAME VALIDATION

    if(name == ""){
        console.log(document.getElementById("name").innerHTML = "Please fill the NAME  gap");
        return false;
    }

    if( (name.length <= 2) || (name.length > 15) ){
        console.log(document.getElementById("name").innerHTML = "NAME MUST BE BETWEEN 2 TO 15 CHARACTERS");
        return false;
    }

    if(!isNaN(name) ){
        console.log(document.getElementById("name").innerHTML = "NUMBERS IN NAME ARE NOT ALLOWED");
        return false;
    }

    /// === === === === NAME VALIDATION




    /// === === === === SURNAME VALIDATION
    
    if(surname == ""){
        console.log(document.getElementById("surname").innerHTML = "Please fill the SURNAME gap");
        return false;
    }

    if( (surname.length <=3) || (surname.length >15) ){
        console.log(document.getElementById("surname").innerHTML = "USERNAME MUST BE BETWEEN 3 TO 15 CHARACTERS");
        return false;
    }

    if(!isNaN(surname) ){
        console.log(document.getElementById("surname").innerHTML = "NUMBERS IN SURNAME ARE NOT ALLOWED");
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
