/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-03: Database Relationships and Filters */

const currentPage = location.pathname;
const menuOptions = document.querySelectorAll(".menu-option");

for (let menuOption of menuOptions) {
    if (currentPage.includes(menuOption.getAttribute("href"))) {
        menuOption.classList.add("active");
    }
}
