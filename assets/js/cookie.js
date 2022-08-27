var cookieModal = document.querySelector(".cookie")
var cancelCookieBtn = document.querySelector(".btn-cancel")
var acceptCookieBtn = document.querySelector(".btn-accept")

cancelCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active")
});

acceptCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
});

setTimeout(function () {
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted !== "yes") {
        cookieModal.classList.add("active")
    }
}, 2000);