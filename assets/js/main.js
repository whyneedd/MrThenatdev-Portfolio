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

window.addEventListener("load", loading);

function loading() {
    setTimeout(show, 4700)
}

function show() {
    var ld = document.querySelector(".load")
    ld.classList.add("active")
}

var typed = new Typed(".auto-type", {
    strings: ["Coding", "a Dev", "A Designer", "a Freelancer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var panelVisible = document.getElementsByClassName("faq__contentBox");

for (i = 0; i < panelVisible.length; i++) {
    panelVisible[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}

var btnDarkMode = document.querySelector(".nav__darkmode");
var btnDarkModeIcon = btnDarkMode.querySelector(".bx-moon");

btnDarkMode.addEventListener("click", function () {
    if (btnDarkModeIcon.classList.contains("bx-moon")) {
        btnDarkModeIcon.classList.replace("bx-moon", "bx-sun")
    } else {
        btnDarkModeIcon.classList.replace("bx-sun", "bx-moon")
    }
})

var typed2 = new Typed(".load__typed", {
    strings: ["Hi", "Welcome !"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})