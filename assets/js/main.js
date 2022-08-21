
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

var tl;

tl = gsap.timeline({ defauts: { ease: "power1.out" } });

function Scroll() {
    window.addEventListener("scroll", () => {
        if (this.scrollY > 100) {
            tl.to(".about", { opacity: 1, duration: .5, x: 0, stagger: .25 })
        }
        if (this.scrollY > 200) {
            tl.to(".skills", { opacity: 1, duration: .5, x: 0, stagger: .25 })

        }
        if (this.scrollY > 300) {
            tl.to(".work", { opacity: 1, duration: .5, x: 0, stagger: .25 })
        }
        if (this.scrollY > 400) {
            tl.to(".contact", { opacity: 1, duration: .5, x: 0, stagger: .25 })
        }
    })
}
Scroll();

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
    menu.classList.toggle("active")
}

function SendMail() {
    var link = "mailto:azalee4l@hotmail.com?subject=Nouveaux messages de "
        + document.getElementById("email").value
        + "&body=" + document.getElementById("desc").value;

    window.location.href = link;
}



function loading() {
    var ld;

    window.addEventListener("load", showpage)
    function showpage() {
        ld = setTimeout(showpage2, 12000);
    }

    function showpage2() {
        document.querySelector(".load").style.display = "none";
        document.querySelector(".l-main").style.display = "block";

    }
}
loading();