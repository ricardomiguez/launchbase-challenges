/* Rocketseat: LaunchBase Bootcamp
   Foodfy Administration Challenge */

const recipes = document.querySelectorAll(".recipe");

for (let recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute("id");

        window.location.href = `/recipes/${recipeId}`;
    });
}

const showHideButtons = document.querySelectorAll(".show-hide-button"),
    recipeDetailsHide = document.querySelectorAll(".recipe-details-hide");

for (let i = 0; i < showHideButtons.length; i++) {
    showHideButtons[i].addEventListener("click", function() {
        if (showHideButtons[i].innerText == "MOSTRAR") {
            recipeDetailsHide[i].classList.remove("recipe-details-hide");
            showHideButtons[i].innerText = "ESCONDER";
        } else {
            recipeDetailsHide[i].classList.add("recipe-details-hide");
            showHideButtons[i].innerText = "MOSTRAR";
        }
    });
}
