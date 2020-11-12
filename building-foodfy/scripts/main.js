/* Rocketseat: LaunchBase Bootcamp
   Building Foodfy Challenge */

const recipes = document.querySelectorAll(".recipe"),
    modal = document.querySelector(".modal"),
    modalRecipeImage = document.querySelector(".modal-recipe-image img"),
    modalRecipeTitle = document.querySelector(".modal-recipe-title h2"),
    modalRecipeAuthor = document.querySelector(".modal-recipe-author p"),
    modalRecipeClose = document.querySelector(".modal-recipe-close");

for (let recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeImage = recipe.querySelector(".recipe-image img"),
            recipeTitle = recipe.querySelector(".recipe-title h4"),
            recipeAuthor = recipe.querySelector(".recipe-author p");

        const recipeImageSrc = recipeImage.getAttribute("src"),
            recipeImageAlt = recipeImage.getAttribute("alt"),
            recipeTitleText = recipeTitle.innerText,
            recipeAuthorText = recipeAuthor.innerText;

        modalRecipeImage.src = `${recipeImageSrc}`,
        modalRecipeImage.alt = `${recipeImageAlt}`,
        modalRecipeTitle.innerText = `${recipeTitleText}`,
        modalRecipeAuthor.innerText = `${recipeAuthorText}`;

        modal.classList.add("modal-active");
    })
}

modalRecipeClose.addEventListener("click", function() {
    modal.classList.remove("modal-active");
})
