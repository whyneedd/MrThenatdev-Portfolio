
// Function dark mode
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
    if (selectedtheme !== "dark") {
        activedarkmode();
    } else {
        desactivedarkmode();
    }
})