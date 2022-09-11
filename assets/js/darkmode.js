// Function dark mode
var btnDarkMode = document.querySelector(".nav__darkmode");
var btnDarkModeIcon = btnDarkMode.querySelector(".bx-moon");

btnDarkMode.addEventListener("click", function () {
  if (btnDarkModeIcon.classList.contains("bx-moon")) {
    btnDarkModeIcon.classList.replace("bx-moon", "bx-sun");
  } else {
    btnDarkModeIcon.classList.replace("bx-sun", "bx-moon");
  }
});

const activedarkmode = () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem("selected-theme", "dark");
};

const desactivedarkmode = () => {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("selected-theme", null);
};

let selectedtheme = localStorage.getItem("selected-theme");

if (selectedtheme === "dark") {
  activedarkmode();
}

btnDarkMode.addEventListener("click", () => {
  selectedtheme = localStorage.getItem("selected-theme");
  setTimeout(function () {
    if (selectedtheme !== "dark") {
      activedarkmode();
    } else {
      desactivedarkmode();
    }
  }, 200);
});
