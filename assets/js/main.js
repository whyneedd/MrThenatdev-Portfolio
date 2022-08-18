
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

tl = gsap.timeline({ defauts: { ease: "power.out" } });

function aboutSlider() {
    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            tl.to(".about__data", { duraction: .5, x: "0%", stagger: .25, opacity: 1, })
        }
    })
}
aboutSlider();


var navHumbger = document.querySelector(".nav__humbger");
var menu = document.querySelector(".nav__list");

navHumbger.addEventListener("click", () => {
    navHumbger.classList.toggle("active")
})

navHumbger.onclick = () => {
    menu.classList.toggle("active")
}