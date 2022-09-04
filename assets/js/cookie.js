var cookieModal = document.querySelector(".cookie");
var cancelCookieBtn = document.querySelector(".btn-cancel");
var acceptCookieBtn = document.querySelector(".btn-accept");

acceptCookieBtn.innerHTML = "Accept";
cancelCookieBtn.innerHTML = "Cancel";

cancelCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active");
    localStorage.setItem("selected-cookie", null);
});

acceptCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active");
    localStorage.setItem("selected-cookie", "yes");
});

setTimeout(function () {
    let cookieAccepted = localStorage.getItem("selected-cookie")
    if (cookieAccepted !== "yes") {
        cookieModal.classList.add("active");
    } else {
        cookieModal.classList.remove("active");
    }
}, 2500);


setTimeout(function() {
    cookieModal.classList.add("show");
}, 3500)
