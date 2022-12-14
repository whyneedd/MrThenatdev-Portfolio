var navHumbger = document.querySelector(".nav__humbger");
var menu = document.querySelector(".nav__list");

navHumbger.addEventListener("click", () => {
  navHumbger.classList.toggle("active");
});

navHumbger.onclick = () => {
  menu.classList.toggle("active");
};

menu.onclick = () => {
  menu.classList.remove("active");
  navHumbger.classList.remove("active");
};

window.addEventListener("load", loading);

function loading() {
  setTimeout(showpage, 1200);
}

function showpage() {
  var ld = document.querySelector(".load");
  ld.classList.add("active");
}

var typed = new Typed(".auto-type", {
  strings: ["a Wahyne", "a Dev", "a Designer", "a Freelancer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function SendMail() {
  var mailtosend =
    "mailto:jordan2offshel@hotmail.com?subject=New letter from " +
    document.querySelector("#email").value +
    "&body=" +
    document.querySelector("#message").value;

  window.location.href = mailtosend;
}

var tl = gsap.timeline({ ease: { defauts: "power1.out" } });

setTimeout(function () {
  tl.to(".home__data p", { opacity: 1, y: "0%", duration: 0.5, stagger: 0.25 });
  tl.to(".home__img .home__img-data", {
    opacity: 1,
    x: "0%",
    duration: 0.5,
    stagger: 0.25,
  });
  tl.to(".home__btn", { opacity: 1, y: "0%", duration: 0.5, stagger: 0.25 });
}, 1600);
