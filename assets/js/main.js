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
  setTimeout(show, 1500);
}

function show() {
  var ld = document.querySelector(".load");
  ld.classList.add("active");
}

var typed = new Typed(".auto-type", {
  strings: ["a Zetrox", "a Dev", "a Designer", "a Freelancer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

var panelVisible = document.getElementsByClassName("faq__contentBox");

for (i = 0; i < panelVisible.length; i++) {
  panelVisible[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

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
  tl.to(".home__social", { opacity: 1, x: "0%", duration: 0.5, stagger: 0.25 });
  tl.to(".home__img", { opacity: 1, x: "0%", duration: 0.5, stagger: 0.25 });
  tl.to(".home__btn", { opacity: 1, y: "0%", duration: 0.5, stagger: 0.25 });
}, 1600);
