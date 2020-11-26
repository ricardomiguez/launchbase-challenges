/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-07: Structuring Students */

const currentPage = location.pathname;
const menuOptions = document.querySelectorAll(".menu-option");

for (let menuOption of menuOptions) {
    if (currentPage.includes(menuOption.getAttribute("href"))) {
        menuOption.classList.add("active");
    }
}
