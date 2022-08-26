AOS.init();

var navMenu = document.querySelector(".js-header");

function navbar() {
    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            navMenu.classList.add("activeMenu");
        } else {
            navMenu.classList.remove("activeMenu");
        }
    })
}
navbar();

var language = navigator.language || navigator.userLanguage; 

language = language.substring( 0, 2 );

if (language == "fr"){  
window.location.href = "fr/index.html";  // French
}
else {  
window.location.href ="en/index.html";  // everyone else : English
}


var cookieModal = document.querySelector(".cookie")
var cancelCookieBtn = document.querySelector(".btn-cancel")
var acceptCookieBtn = document.querySelector(".btn-accept")

cancelCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function () {
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes") {
        cookieModal.classList.add("active")
    }
}, 2000)

var navHumbger = document.querySelector(".nav__humbger");
var menu = document.querySelector(".nav__list");

navHumbger.addEventListener("click", () => {
    navHumbger.classList.toggle("active")
})

navHumbger.onclick = () => {
    menu.classList.toggle("active");
}

menu.onclick = () => {
    menu.classList.remove("active");
    navHumbger.classList.remove("active")
}

function SendMail() {
    var link = "mailto:azalee4l@hotmail.com?subject=Nouveaux messages de "
        + document.getElementById("email").value
        + "&body=" + document.getElementById("desc").value;

    window.location.href = link;
}

window.addEventListener("load", loading);

function loading() {
    setTimeout(show, 3500)
}

function show() {
    var ld = document.querySelector(".load")
    ld.classList.add("active")
}