/*-------------SCRIPT FOR THEME CHANGE ----------*/ 
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

/*-------------SCRIPT FOR TOGGLE MENU ----------*/ 
let hamburg =document.querySelector(".menu-icon");
let ul =document.querySelector("ul");

hamburg.addEventListener("click", ()=>{
    ul.classList.toggle("toggle");
})
/*-------------SCRIPT FOR THEME CHANGE ----------*/ 
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

/*-------------SCRIPT FOR TOGGLE MENU ----------*/ 
let icon =document.querySelector(".menu-icon");
let ul =document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("toggle");
})

/*-------------SCRIPT FOR ACTIVE MENU ----------*/ 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
};

/*-------------Script for text reveal-------------------------------*/

/*----------- TOP -----------*/
const srt = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false     
})

srt.reveal('.info',{delay: 100})

srt.reveal('.greeting',{delay: 100})
srt.reveal('.my-name',{delay: 100})

srt.reveal('.hero-image',{delay: 100})
srt.reveal('.top-header',{})

srt.reveal('.service-box',{interval: 200})
srt.reveal('.portfolio-card',{interval: 200})

/*----------- BOTTOM -----------*/
const srb = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: false     
})

srb.reveal('.btn',{delay: 100})
srb.reveal('.social-icons .icon',{delay: 100, interval: 200})
srb.reveal('.scroll-btn',{delay: 2000})

/* ---------- LEFT --------- */
const srl = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: false
})

srl.reveal('.col',{delay: 100, interval: 100})

/* ---------- SCRIPT FOR CONTACT FORM --------- */
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('message');

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${msg.value}`;

    Email.send({
        SecureToken :"Your Secure Token",
        To : 'Your Email',
        From : "Your Email",
        Subject : "I want to connect.",
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs(){
    const items=document.querySelectorAll(".item");

    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        
        if(items[1].value != ""){
            checkEmail();
        }
        
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");

            }
        });
    }
}

/* ---------- SCRIPT FOR Email Validation --------- */
function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else{
            errorTxtEmail.innerText = "Email Address Can't be blank";
        }

    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !msg.classList.contains("error")){
        sendEmail(); 

        form.reset();
        return false;
    }
})
/*-------------SCRIPT FOR ACTIVE MENU ----------*/ 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
};

/*-------------Script for text reveal-------------------------------*/

/*----------- TOP -----------*/
const srt = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false     
})

srt.reveal('.info',{delay: 100})

srt.reveal('.greeting',{delay: 100})
srt.reveal('.my-name',{delay: 100})
srt.reveal('.heading-txt',{delay: 100})

srt.reveal('.hero-image',{delay: 100})
srt.reveal('.top-header',{})

srt.reveal('.service-box',{interval: 200})
srt.reveal('.portfolio-card',{interval: 200})

/*----------- BOTTOM -----------*/
const srb = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: false     
})

srb.reveal('.btn',{delay: 100})
srb.reveal('.social-icons .icon',{delay: 100, interval: 200})
srb.reveal('.scroll-btn',{delay: 2000})

/* ---------- LEFT --------- */
const srl = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: false
})

srl.reveal('.col',{delay: 100, interval: 100})

/* ---------- SCRIPT FOR CONTACT FORM --------- */
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('message');

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${msg.value}`;

    Email.send({
        SecureToken :"9aba5fee-b153-4d9f-a297-768fe3dda2d5",
        To : 'itsnatique786@gmail.com',
        From : "itsnatique786@gmail.com",
        Subject : "I want to connect.",
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs(){
    const items=document.querySelectorAll(".item");

    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        
        if(items[1].value != ""){
            checkEmail();
        }
        
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");

            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else{
            errorTxtEmail.innerText = "Email Address Can't be blank";
        }

    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !msg.classList.contains("error")){
        sendEmail(); 

        form.reset();
        return false;
    }

})

