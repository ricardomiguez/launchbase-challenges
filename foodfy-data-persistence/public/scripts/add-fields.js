/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") {
        return false;
    }

    newField.children[0] == "";
    ingredients.appendChild(newField);
}

function addPreparationStep() {
    const preparationSteps = document.querySelector("#preparation-steps");
    const fieldContainer = document.querySelectorAll(".preparation-step");

    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") {
        return false;
    }

    newField.children[0] == "";
    preparationSteps.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);
document.querySelector(".add-preparation-step").addEventListener("click", addPreparationStep);
