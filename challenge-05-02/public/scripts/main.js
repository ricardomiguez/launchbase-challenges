/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-02: Interacting with the Database */

const currentPage = location.pathname;
const menuOptions = document.querySelectorAll(".menu-option");

for (let menuOption of menuOptions) {
    if (currentPage.includes(menuOption.getAttribute("href"))) {
        menuOption.classList.add("active");
    }
}
