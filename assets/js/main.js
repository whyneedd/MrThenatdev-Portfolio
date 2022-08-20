
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

function Scroll() {
    window.addEventListener("scroll", () => {
        if (this.scrollY > 100) {
            tl.to(".about", { duraction: .5, x: "0%", stagger: .25, opacity: 1, })
        }
        if (this.scrollY > 200) {
            tl.to(".skills", { duraction: .5, x: "0%", stagger: .25, opacity: 1, })

        }
        if (this.scrollY > 300) {
            tl.to(".work", { duraction: .5, x: "0%", stagger: .25, opacity: 1, })
        }
        if (this.scrollY > 400) {
            tl.to(".contact", { duraction: .5, x: "0%", stagger: .25, opacity: 1, })
        }
    })
}
Scroll();


var navHumbger = document.querySelector(".nav__humbger");
var menu = document.querySelector(".nav__list");

navHumbger.addEventListener("click", () => {
    navHumbger.classList.toggle("active")
})

navHumbger.onclick = () => {
    menu.classList.toggle("active")
}