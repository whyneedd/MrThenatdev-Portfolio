var navitem = document.querySelector(".nav__menu");
var navlink = document.querySelector(".nav__link");


navitem.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {

       navitem.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");
    }
})