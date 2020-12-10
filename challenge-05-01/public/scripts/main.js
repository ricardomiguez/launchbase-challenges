/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-01: Application Refactoring and Database Configuration */

const currentPage = location.pathname;
const menuOptions = document.querySelectorAll(".menu-option");

for (let menuOption of menuOptions) {
    if (currentPage.includes(menuOption.getAttribute("href"))) {
        menuOption.classList.add("active");
    }
}
