var navMenu = document.querySelector(".js-header");

    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            navMenu.classList.add("activeMenu");
        } else {
            navMenu.classList.remove("activeMenu");
        }
    })
