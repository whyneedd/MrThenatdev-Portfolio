function ScrollToTop() {
    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            document.querySelector(".btnScrollToTop").classList.add("active");
        } else {
            document.querySelector(".btnScrollToTop").classList.remove("active");
        }
    })
}
ScrollToTop();

function btnScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}